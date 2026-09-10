import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

// null when NEXT_PUBLIC_SANITY_PROJECT_ID is not set (build without env vars)
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null

// Server-only client — use only in Server Actions / Route Handlers
export const serverClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: false, token: process.env.SANITY_API_TOKEN })
  : null
