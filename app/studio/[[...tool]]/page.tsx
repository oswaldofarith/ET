'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity/sanity.config'

// Prevent Next.js from attempting static rendering — Studio needs browser APIs
export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
