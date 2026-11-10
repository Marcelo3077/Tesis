'use client'

import { useState } from 'react'
import { Bell, Inbox } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { SpaceCard } from '@/components/sections/space-card'
import { FormTrigger } from '@/components/sections/pilot-forms'
import type { StorageSpace } from '@/lib/data'

const spaces: StorageSpace[] = []

export function FeaturedSpaces() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function notify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <section id="espacios" className="bg-brand-green-light/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Espacios destacados" title="Espacio sin límites, entre personas" description="Explora algunos de los espacios disponibles en la comunidad. Verificados, flexibles y listos para tu inventario." />{spaces.length === 0 ? <Reveal className="mt-10"><div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-dashed border-brand-gray bg-white px-6 py-14 text-center shadow-sm"><span className="flex size-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"><Inbox className="size-7" /></span><h3 className="mt-5 text-2xl font-bold text-brand-blue">Estamos sumando los primeros espacios</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-muted">Muy pronto encontrarás opciones verificadas para almacenar tu inventario de forma flexible y segura.</p><div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"><FormTrigger kind="owner" className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-semibold text-white transition hover:bg-brand-green-600">Publicar mi espacio</FormTrigger><form onSubmit={notify} className="flex flex-col gap-2 sm:flex-row"><label className="sr-only" htmlFor="spaces-notify-email">Correo para avisarme</label><input id="spaces-notify-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Tu correo" className="h-11 min-w-0 rounded-full border border-brand-gray px-4 text-sm text-brand-blue outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/15" /> <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-brand-blue/20 px-5 text-sm font-semibold text-brand-blue transition hover:border-brand-blue">{submitted ? 'Listo, te avisaremos' : <><Bell className="size-4" />Avísame cuando haya espacios</>}</button></form></div></div></Reveal> : <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{spaces.map((space, index) => <Reveal key={space.id} delay={(index % 3) * 90}><SpaceCard space={space} className="h-full" /></Reveal>)}</div>}</div></section>
}
