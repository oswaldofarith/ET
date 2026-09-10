import { NextResponse } from 'next/server'
import { getProfile } from '@/sanity/lib/queries'

// Diagnostic endpoint — never cached, always executes fresh on the server.
// TEMPORARY: remove once the Sanity connectivity issue is confirmed fixed.
export const dynamic = 'force-dynamic'

export async function GET() {
  const hasProjectId = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const hasDataset = !!process.env.NEXT_PUBLIC_SANITY_DATASET
  const hasToken = !!process.env.SANITY_API_TOKEN

  let profileFound = false
  let errorMessage: string | null = null

  try {
    const profile = await getProfile()
    profileFound = !!profile
  } catch (err) {
    errorMessage = err instanceof Error ? err.message : String(err)
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    env: {
      hasProjectId,
      hasDataset,
      hasToken,
      projectIdValue: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || null,
      datasetValue: process.env.NEXT_PUBLIC_SANITY_DATASET || null,
    },
    query: {
      profileFound,
      errorMessage,
    },
  })
}
