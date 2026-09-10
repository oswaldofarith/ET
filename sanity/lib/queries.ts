import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ── Image URL builder ─────────────────────────────────────────────────────────
const builder = client ? imageUrlBuilder(client) : null
type ImageUrlResult = ReturnType<NonNullable<typeof builder>['image']>

// Chainable stub so HeroSection's urlFor(...).width().height().url() never throws
// when Sanity is not configured. url() returns '' which is falsy → photo placeholder shows.
const noopChain: Record<string, unknown> = {}
const noopProxy: unknown = new Proxy(noopChain, {
  get: (_t, prop) => prop === 'url' ? () => '' : () => noopProxy,
})

export function urlFor(source: SanityImageSource): ImageUrlResult {
  if (!builder) return noopProxy as unknown as ImageUrlResult
  return builder.image(source)
}

// ── TypeScript types ──────────────────────────────────────────────────────────
export interface Profile {
  name: string
  heroLabel: string
  tagline: string
  bio: string
  quote?: string
  photo?: SanityImageSource
  location?: string
  availability?: string
  email?: string
  linkedinUrl?: string
  ctaPrimaryText: string
  ctaSecondaryText: string
  specializationSectionLabel: string
  specializationSectionTitle: string
  trainingLabel: string
  trainingTitle: string
  trainingDescription?: string
}

export interface Specialization {
  _id: string
  title: string
  description: string
  icon?: string
  order: number
}

export interface Certification {
  _id: string
  title: string
  description?: string
  hours?: number
  category?: string
  order: number
}

// ── GROQ queries ──────────────────────────────────────────────────────────────
const PROFILE_QUERY = `*[_type == "profile" && _id == "profile"][0]{
  name, heroLabel, tagline, bio, quote,
  photo,
  location, availability, email, linkedinUrl,
  ctaPrimaryText, ctaSecondaryText,
  specializationSectionLabel, specializationSectionTitle,
  trainingLabel, trainingTitle, trainingDescription
}`

const SPECIALIZATIONS_QUERY = `*[_type == "specialization"] | order(order asc){
  _id, title, description, icon, order
}`

const CERTIFICATIONS_QUERY = `*[_type == "certification"] | order(order asc){
  _id, title, description, hours, category, order
}`

// ── Fetch functions ───────────────────────────────────────────────────────────
export async function getProfile(): Promise<Profile | null> {
  if (!client) return null
  return client.fetch(PROFILE_QUERY)
}

export async function getSpecializations(): Promise<Specialization[]> {
  if (!client) return []
  return client.fetch(SPECIALIZATIONS_QUERY)
}

export async function getCertifications(): Promise<Certification[]> {
  if (!client) return []
  return client.fetch(CERTIFICATIONS_QUERY)
}

export async function getPageData() {
  if (!client) {
    return { profile: null, specializations: [] as Specialization[], certifications: [] as Certification[] }
  }
  const [profile, specializations, certifications] = await Promise.all([
    getProfile(),
    getSpecializations(),
    getCertifications(),
  ])
  return { profile, specializations, certifications }
}
