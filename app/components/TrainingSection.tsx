import type { Profile, Certification } from '@/sanity/lib/queries'

interface Props {
  profile: Profile
  certifications: Certification[]
}

export default function TrainingSection({ profile, certifications }: Props) {
  return (
    <section id="formacion" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: section intro ────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">
              {profile.trainingLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {profile.trainingTitle}
            </h2>
            <div className="w-12 h-1 bg-orange rounded-full mb-6" />
            {profile.trainingDescription && (
              <p className="text-slate-500 leading-relaxed text-base">
                {profile.trainingDescription}
              </p>
            )}
          </div>

          {/* ── Right: certifications list ─────────────────────────────────── */}
          <div id="certificaciones">
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <li key={cert._id} className="flex items-start gap-4 group">
                  {/* Orange bullet */}
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <p className="text-slate-900 font-semibold text-sm leading-snug">
                      {cert.title}
                    </p>
                    {(cert.description || cert.hours) && (
                      <p className="text-slate-500 text-xs mt-1">
                        {cert.description}
                        {cert.description && cert.hours ? ' · ' : ''}
                        {cert.hours ? `${cert.hours}h` : ''}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
