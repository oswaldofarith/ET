import Image from 'next/image'
import type { Profile } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/queries'

export default function HeroSection({ profile }: { profile: Profile }) {
  const photoUrl = profile.photo
    ? urlFor(profile.photo).width(1920).height(1080).fit('crop').auto('format').quality(80).url()
    : null

  return (
    <section id="hero" className="relative bg-navy min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Full-bleed background photo */}
      {photoUrl && (
        <>
          <Image
            src={photoUrl}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Darkens the left side where the text sits, lets the photo read on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/10" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl flex flex-col">
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
            <blockquote className="border-l-4 border-orange pl-5 mb-10 bg-navy/40 backdrop-blur-sm py-3 pr-4 rounded-r-md">
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
      </div>
    </section>
  )
}
