import { useState } from 'react'
import { set, unset, type StringInputProps } from 'sanity'
import { Box, Button, Card, Flex, Grid, Stack, Text, TextInput } from '@sanity/ui'
import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

type IconComponent = React.ComponentType<LucideProps>

// Curated set relevant to construcción, mantenimiento, instalaciones y gestión
const ICON_OPTIONS = [
  'Users', 'UsersRound', 'HardHat', 'Building2', 'Building', 'Factory', 'Warehouse',
  'Wrench', 'Hammer', 'Cog', 'Settings', 'ClipboardCheck', 'ClipboardList', 'ListChecks', 'CheckCircle2',
  'Zap', 'Plug', 'Lightbulb', 'Battery', 'BatteryCharging', 'Sun',
  'Droplet', 'Droplets', 'Thermometer', 'Wind',
  'Shield', 'ShieldCheck', 'ShieldAlert', 'AlertTriangle', 'Camera', 'Wifi', 'Radio',
  'BarChart2', 'TrendingUp', 'PieChart', 'LineChart', 'CircleDollarSign', 'Wallet', 'Receipt',
  'Truck', 'Package', 'Boxes', 'Layers', 'Calendar', 'Clock', 'MapPin', 'Star',
] as const

export function IconPicker(props: StringInputProps) {
  const { value, onChange } = props
  const [filter, setFilter] = useState('')

  const icons = LucideIcons as unknown as Record<string, IconComponent>
  const SelectedIcon = value ? icons[value] : undefined

  const filtered = ICON_OPTIONS.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Stack space={3}>
      {/* Current selection preview */}
      <Card padding={3} radius={2} tone={value ? 'primary' : 'transparent'} border>
        <Flex align="center" justify="space-between" gap={3}>
          <Flex align="center" gap={3}>
            {SelectedIcon ? (
              <SelectedIcon size={20} />
            ) : (
              <Text size={1} muted>Sin ícono seleccionado</Text>
            )}
            {value && <Text size={1} weight="semibold">{value}</Text>}
          </Flex>
          {value && (
            <Button
              mode="ghost"
              tone="critical"
              text="Quitar"
              fontSize={1}
              padding={2}
              onClick={() => onChange(unset())}
            />
          )}
        </Flex>
      </Card>

      {/* Search */}
      <TextInput
        placeholder="Buscar ícono…"
        value={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
      />

      {/* Icon grid */}
      <Card padding={2} radius={2} border style={{ maxHeight: 280, overflowY: 'auto' }}>
        <Grid columns={6} gap={2}>
          {filtered.map((name) => {
            const Icon = icons[name]
            if (!Icon) return null
            const selected = value === name
            return (
              <Card
                key={name}
                as="button"
                type="button"
                padding={3}
                radius={2}
                tone={selected ? 'primary' : 'transparent'}
                shadow={selected ? 1 : 0}
                title={name}
                onClick={() => onChange(set(name))}
                style={{
                  cursor: 'pointer',
                  border: selected ? '1px solid var(--card-focus-ring-color, currentColor)' : '1px solid transparent',
                }}
              >
                <Flex align="center" justify="center">
                  <Icon size={18} />
                </Flex>
              </Card>
            )
          })}
        </Grid>
        {filtered.length === 0 && (
          <Box padding={3}>
            <Text size={1} muted align="center">Sin resultados</Text>
          </Box>
        )}
      </Card>
    </Stack>
  )
}
