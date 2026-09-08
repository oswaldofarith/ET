import { defineType, defineField } from 'sanity'

export const certificationSchema = defineType({
  name: 'certification',
  title: 'Certificación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del certificado / curso',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción o entidad emisora',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Horas (opcional)',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Seguridad y Prevención', value: 'safety' },
          { title: 'Instalaciones Técnicas', value: 'technical' },
          { title: 'Gestión y Liderazgo', value: 'management' },
          { title: 'Energía y Medio Ambiente', value: 'energy' },
          { title: 'Otros', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
