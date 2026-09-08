import { getPageData } from '@/sanity/lib/queries'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import SpecializationsSection from './components/SpecializationsSection'
import TrainingSection from './components/TrainingSection'
import ContactFooter from './components/ContactFooter'

// ISR: regenerate at most once per hour
export const revalidate = 3600

export default async function HomePage() {
  const { profile, specializations, certifications } = await getPageData()

  if (!profile) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-navy">
        <p className="text-slate-300 text-lg">Sitio en configuración inicial.</p>
        <a
          href="/studio"
          className="px-5 py-2.5 bg-orange text-white font-semibold rounded-md hover:bg-orange-hover transition-colors"
        >
          Abrir Studio → Agregar Perfil
        </a>
      </main>
    )
  }

  return (
    <>
      <Nav profile={profile} />
      <main>
        <HeroSection profile={profile} />
        <SpecializationsSection
          specializations={specializations}
          sectionLabel={profile.specializationSectionLabel}
          sectionTitle={profile.specializationSectionTitle}
        />
        <TrainingSection profile={profile} certifications={certifications} />
      </main>
      <ContactFooter profile={profile} />
    </>
  )
}
