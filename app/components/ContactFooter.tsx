import { Mail, Linkedin, MapPin } from 'lucide-react'
import type { Profile } from '@/sanity/lib/queries'

export default function ContactFooter({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-navy pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Main contact block ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {profile.name}
          </h2>
          <p className="text-slate-400 text-lg mb-4">{profile.tagline}</p>

          {/* Location */}
          {profile.location && (
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-5">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{profile.location}</span>
            </div>
          )}

          {/* Availability badge */}
          {profile.availability && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange/15 text-orange text-xs font-bold rounded-full mb-10 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              {profile.availability}
            </span>
          )}

          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:text-orange transition-colors" />
                {profile.email}
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-orange transition-colors" />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <span>© {year} {profile.name}. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <span>Política de Privacidad</span>
            <span>·</span>
            <span>Términos de Servicio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
