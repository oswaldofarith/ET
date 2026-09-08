import { defineType, defineField } from 'sanity'

export const profileSchema = defineType({
  name: 'profile',
  title: 'Perfil',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroLabel',
      title: 'Etiqueta Hero (texto naranja pequeño)',
      type: 'string',
      description: 'Ej: GESTIÓN DE OPERACIONES',
      initialValue: 'GESTIÓN DE OPERACIONES',
    }),
    defineField({
      name: 'tagline',
      title: 'Subtítulo / Tagline',
      type: 'string',
      description: 'Ej: Liderazgo estratégico en Construcción, Mantenimiento e Instalaciones',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografía corta',
      type: 'text',
      rows: 4,
      description: 'Texto descriptivo bajo el subtítulo en el Hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Cita destacada',
      type: 'text',
      rows: 2,
      description: 'Aparece con borde naranja en el Hero. Ej: "No solo ejecuto trabajos técnicos..."',
    }),
    defineField({
      name: 'photo',
      title: 'Foto profesional',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      description: 'Ej: Barcelona, España',
    }),
    defineField({
      name: 'availability',
      title: 'Disponibilidad (texto del badge)',
      type: 'string',
      description: 'Ej: Disponibilidad Nacional',
      initialValue: 'Disponibilidad Nacional',
    }),
    defineField({
      name: 'email',
      title: 'Email de contacto',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'URL de LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'ctaPrimaryText',
      title: 'Botón CTA primario',
      type: 'string',
      initialValue: 'Solicitar Consulta',
    }),
    defineField({
      name: 'ctaSecondaryText',
      title: 'Botón CTA secundario',
      type: 'string',
      initialValue: 'Ver Especialidades',
    }),
    defineField({
      name: 'specializationSectionLabel',
      title: 'Label sección Especialización',
      type: 'string',
      initialValue: 'ÁREAS DE ESPECIALIZACIÓN',
    }),
    defineField({
      name: 'specializationSectionTitle',
      title: 'Título sección Especialización',
      type: 'string',
      initialValue: 'Competencias Core',
    }),
    defineField({
      name: 'trainingLabel',
      title: 'Label sección Formación',
      type: 'string',
      initialValue: 'VALIDACIÓN TÉCNICA',
    }),
    defineField({
      name: 'trainingTitle',
      title: 'Título sección Formación',
      type: 'string',
      initialValue: 'Formación y Certificaciones',
    }),
    defineField({
      name: 'trainingDescription',
      title: 'Descripción sección Formación',
      type: 'text',
      rows: 3,
      initialValue: 'Credenciales técnicas y regulatorias que respaldan una gestión operativa segura, eficiente y conforme a la normativa industrial vigente.',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'photo' },
  },
})
