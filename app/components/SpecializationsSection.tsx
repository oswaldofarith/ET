import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import type { Specialization } from '@/sanity/lib/queries'

type IconComponent = React.ComponentType<LucideProps>

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const icons = LucideIcons as unknown as Record<string, IconComponent>
  const Icon = icons[name]
  if (!Icon) {
    const Fallback = icons['Star'] as IconComponent
    return <Fallback className={className} />
  }
  return <Icon className={className} />
}

interface Props {
  specializations: Specialization[]
  sectionLabel: string
  sectionTitle: string
}

export default function SpecializationsSection({
  specializations,
  sectionLabel,
  sectionTitle,
}: Props) {
  return (
    <section id="especializacion" className="bg-surface py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-14">
          <span className="inline-block text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">
            {sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {sectionTitle}
          </h2>
          <div className="mt-3 w-12 h-1 bg-orange rounded-full" />
        </div>

        {/* 3×2 grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec) => (
            <article
              key={spec._id}
              className="bg-card rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Icon */}
              {spec.icon && (
                <div className="w-11 h-11 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <DynamicIcon name={spec.icon} className="w-5 h-5 text-orange" />
                </div>
              )}

              <h3 className="text-slate-900 font-semibold text-lg leading-snug mb-2">
                {spec.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {spec.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
