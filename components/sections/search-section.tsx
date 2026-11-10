'use client'

import { useMemo, useState } from 'react'
import { Search, MapPin, Boxes, CalendarClock, Loader2, SearchX } from 'lucide-react'
import { SpaceCard } from '@/components/sections/space-card'
import { Reveal } from '@/components/ui/reveal'
import { SPACES, DISTRICTS, STORAGE_TYPES, DURATIONS, type StorageType } from '@/lib/data'
import { cn } from '@/lib/utils'

const selectClass =
  'h-12 w-full appearance-none rounded-xl border border-brand-gray bg-white px-3 text-sm font-medium text-brand-blue outline-none transition-colors focus-visible:border-brand-green focus-visible:ring-4 focus-visible:ring-brand-green/20'

export function SearchSection() {
  const [district, setDistrict] = useState('')
  const [type, setType] = useState('')
  const [duration, setDuration] = useState('')
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const results = useMemo(() => {
    return SPACES.filter((s) => {
      if (district && s.district !== district) return false
      if (type && s.type !== (type as StorageType)) return false
      return true
    })
  }, [district, type])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSearched(false)
    // Prototipo: simula una búsqueda contra datos locales.
    setTimeout(() => {
      setLoading(false)
      setSearched(true)
    }, 900)
  }

  return (
    <section id="buscador" className="relative -mt-10 pb-4">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <form
            onSubmit={handleSearch}
            className="rounded-3xl border border-brand-gray bg-white p-5 shadow-xl shadow-brand-blue/5 sm:p-6"
          >
            <div className="mb-4 text-center sm:text-left">
              <h2 className="text-xl font-bold text-brand-blue sm:text-2xl">
                Encuentra el espacio ideal cerca de ti
              </h2>
              <p className="mt-1 text-sm text-brand-muted">
                Filtra por distrito, tipo de espacio y duración. Sin compromisos.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Field icon={MapPin} label="Distrito">
                <select
                  aria-label="Distrito"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Todos los distritos</option>
                  {DISTRICTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </Field>

              <Field icon={Boxes} label="Tipo de espacio">
                <select
                  aria-label="Tipo de espacio"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Cualquier tipo</option>
                  {STORAGE_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field icon={CalendarClock} label="Duración">
                <select
                  aria-label="Duración"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Flexible</option>
                  {DURATIONS.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="flex flex-col">
                <span className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-transparent select-none">
                  Buscar
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition-all hover:bg-brand-green-600 focus-visible:ring-4 focus-visible:ring-brand-green/30 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Buscando
                    </>
                  ) : (
                    <>
                      <Search className="size-4" />
                      Buscar espacios
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </Reveal>

        {searched && !loading && (
          <div className="mt-8">
            {results.length > 0 ? (
              <>
                <p className="mb-4 text-sm font-medium text-brand-muted" role="status">
                  {results.length}{' '}
                  {results.length === 1 ? 'espacio disponible' : 'espacios disponibles'}
                  {district && ` en ${district}`}
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((space) => (
                    <SpaceCard key={space.id} space={space} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-brand-gray bg-white/60 px-6 py-14 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-gray/70 text-brand-muted">
                  <SearchX className="size-6" />
                </span>
                <p className="text-base font-semibold text-brand-blue">
                  No encontramos espacios con esos filtros
                </p>
                <p className="max-w-sm text-sm text-brand-muted">
                  Prueba con otro distrito o tipo de espacio. Cada día se suman nuevos
                  espacios a la comunidad.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col">
      <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-muted">
        <Icon className={cn('size-3.5 text-brand-green')} />
        {label}
      </span>
      {children}
    </label>
  )
}
