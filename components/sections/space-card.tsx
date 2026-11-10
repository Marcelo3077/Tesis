'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Star, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import type { StorageSpace } from '@/lib/data'
import { cn } from '@/lib/utils'

interface SpaceCardProps {
  space: StorageSpace
  className?: string
}

export function SpaceCard({ space, className }: SpaceCardProps) {
  const [loading, setLoading] = useState(false)

  const handleReserve = () => {
    if (loading) return
    setLoading(true)
    // Prototipo: simulamos una solicitud de reserva. Reemplazar por una
    // llamada real (Server Action / API) al conectar el backend.
    setTimeout(() => {
      setLoading(false)
      toast.success('Solicitud enviada', {
        description: `Te contactaremos para coordinar "${space.title}" en ${space.district}.`,
      })
    }, 1100)
  }

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-3xl border border-brand-gray bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={space.image || '/placeholder.svg'}
          alt={space.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {space.verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-green-600 shadow-sm backdrop-blur">
              <ShieldCheck className="size-3.5" />
              Verificado
            </span>
          )}
        </div>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-brand-blue/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          <MapPin className="size-3.5" />
          {space.district}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge tone="light">{space.typeLabel}</Badge>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand-blue">
            <Star className="size-4 fill-brand-green text-brand-green" />
            {space.rating.toFixed(1)}
            <span className="font-normal text-brand-muted">({space.reviews})</span>
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-brand-blue">
          {space.title}
        </h3>
        <p className="mt-1 text-sm text-brand-muted">{space.capacity}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {space.amenities.slice(0, 3).map((amenity) => (
            <li
              key={amenity}
              className="rounded-full bg-brand-gray/70 px-2.5 py-1 text-xs font-medium text-brand-blue/70"
            >
              {amenity}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-brand-gray pt-4">
          <div>
            <p className="text-xs text-brand-muted">Desde</p>
            <p className="text-xl font-extrabold text-brand-blue">
              S/ {space.priceFrom}
              <span className="text-sm font-medium text-brand-muted"> /mes</span>
            </p>
          </div>
          <button
            type="button"
            onClick={handleReserve}
            disabled={loading}
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-brand-green px-4 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition-all hover:bg-brand-green-600 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Enviando
              </>
            ) : (
              <>
                Reservar
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
