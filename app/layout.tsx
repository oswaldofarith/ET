import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Edwin Triviño | Gestión de Operaciones e Instalaciones',
  description:
    'Profesional con más de 25 años de experiencia en gestión de operaciones, construcción, mantenimiento e instalaciones técnicas. Disponible en España.',
  openGraph: {
    title: 'Edwin Triviño | Gestión de Operaciones',
    description:
      'Especialista en gestión de equipos, obras, mantenimiento y facilities management.',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-surface text-slate-800">{children}</body>
    </html>
  )
}
