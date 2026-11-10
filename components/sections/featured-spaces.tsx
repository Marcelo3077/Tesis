'use client'

import { useMemo, useState } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { SpaceCard } from '@/components/sections/space-card'
import { SPACES, STORAGE_TYPES } from '@/lib/data'
import { cn } from '@/lib/utils'

const FILTERS = [{ value: 'all', label: 'Todos' }, ...STORAGE_TYPES]

export function FeaturedSpaces() {
  const [filter, setFilter] = useState('all')

  const spaces = useMemo(
    () => (filter === 'all' ? SPACES : SPACES.filter((s) => s.type === filter)),
    [filter],
  )

  return (
    <section id="espacios" className="bg-brand-green-light/20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Espacios destacados"
          title="Espacio sin límites, entre personas"
          description="Explora algunos de los espacios disponibles en la comunidad. Verificados, flexibles y listos para tu inventario."
        />

        <Reveal className="mt-10">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filtrar espacios por tipo"
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                  filter === f.value
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-brand-blue/70 ring-1 ring-brand-gray hover:text-brand-blue',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space, i) => (
            <Reveal key={space.id} delay={(i % 3) * 90}>
              <SpaceCard space={space} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
