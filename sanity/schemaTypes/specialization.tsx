import { defineType, defineField } from 'sanity'
import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { IconPicker } from '../components/IconPicker'

type IconComponent = React.ComponentType<LucideProps>

function IconPreviewMedia({ icon }: { icon?: string }) {
  if (!icon) return null
  const icons = LucideIcons as unknown as Record<string, IconComponent>
  const Icon = icons[icon]
  return Icon ? <Icon size={18} /> : null
}

export const specializationSchema = defineType({
  name: 'specialization',
  title: 'Especialización',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícono',
      type: 'string',
      description: 'Selecciona el ícono que representa esta especialización',
      components: {
        input: IconPicker,
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
      title: 'Orden de aparición',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'icon', icon: 'icon' },
    prepare({ title, subtitle, icon }) {
      return {
        title,
        subtitle,
        media: () => <IconPreviewMedia icon={icon} />,
      }
    },
  },
})
