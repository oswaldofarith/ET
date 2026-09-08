import Image from 'next/image'
import type { Profile } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/queries'

export default function HeroSection({ profile }: { profile: Profile }) {
  const photoUrl = profile.photo
    ? urlFor(profile.photo).width(640).height(800).fit('crop').auto('format').url()
    : null

  return (
    <section id="hero" className="bg-navy min-h-screen pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

        {/* ── Left: text content ─────────────────────────────────────────── */}
        <div className="order-2 lg:order-1 flex flex-col">
          {/* Orange label */}
          <span className="inline-block text-orange text-xs font-bold tracking-[0.2em] uppercase mb-5">
            {profile.heroLabel}
          </span>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
            {profile.name}
          </h1>

          {/* Tagline */}
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-5">
            {profile.tagline}
          </p>

          {/* Bio */}
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            {profile.bio}
          </p>

          {/* Quote with orange left border */}
          {profile.quote && (
            <blockquote className="border-l-4 border-orange pl-5 mb-10 bg-white/5 py-3 pr-4 rounded-r-md">
              <p className="text-slate-300 italic text-base leading-relaxed">
                "{profile.quote}"
              </p>
            </blockquote>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-6 py-3 bg-orange hover:bg-orange-hover text-white font-semibold rounded-md transition-colors shadow-lg shadow-orange/20"
            >
              {profile.ctaPrimaryText}
            </a>
            <a
              href="#especializacion"
              className="px-6 py-3 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold rounded-md transition-colors"
            >
              {profile.ctaSecondaryText}
            </a>
          </div>
        </div>

        {/* ── Right: professional photo ──────────────────────────────────── */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          {photoUrl ? (
            <div className="relative w-72 h-[380px] md:w-80 md:h-[440px] lg:w-[380px] lg:h-[500px]">
              {/* Decorative orange glow behind photo */}
              <div className="absolute -inset-2 bg-orange/10 rounded-2xl blur-xl" />
              <Image
                src={photoUrl}
                alt={`Foto profesional de ${profile.name}`}
                fill
                className="relative object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 380px"
              />
            </div>
          ) : (
            <div className="w-72 h-[380px] bg-navy-light rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-3xl text-slate-500">ET</span>
              </div>
              <span className="text-slate-500 text-sm">Agregar foto en /studio</span>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
