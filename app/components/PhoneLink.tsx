'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

// The phone number arrives base64-encoded from the server and is decoded
// only after this component mounts in the browser. This means the plain
// number never appears as text in the server-rendered HTML — simple
// scrapers that fetch and regex-scan static markup find nothing to match.
export default function PhoneLink({ encoded }: { encoded: string }) {
  const [phone, setPhone] = useState<string | null>(null)

  useEffect(() => {
    try {
      setPhone(atob(encoded))
    } catch {
      setPhone(null)
    }
  }, [encoded])

  if (!phone) return null

  return (
    <a
      href={`tel:${phone.replace(/\s+/g, '')}`}
      className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm group"
    >
      <Phone className="w-4 h-4 group-hover:text-orange transition-colors" />
      {phone}
    </a>
  )
}
