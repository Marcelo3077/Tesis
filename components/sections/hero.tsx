import Image from 'next/image'
import { ArrowRight, ShieldCheck, MapPin, CalendarClock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { FormTrigger } from '@/components/sections/pilot-forms'
import { Reveal } from '@/components/ui/reveal'

const HERO_POINTS = [
  { icon: MapPin, label: 'Espacios cerca de ti' },
  { icon: ShieldCheck, label: 'Anfitriones verificados' },
  { icon: CalendarClock, label: 'Sin contratos largos' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-brand-green-light/30 via-white to-white pt-28 pb-16 md:pt-32 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <Reveal>
            <Badge tone="green">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Almacenamiento flexible entre personas
              </span>
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">
              Personas con espacio. Negocios con posibilidades.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-blue sm:text-5xl lg:text-6xl">
              Tu espacio también puede{' '}
              <span className="text-brand-green">llegar más lejos.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-brand-muted">
              Conecta con personas que tienen espacio disponible y almacena lo que
              necesitas, de forma segura, flexible y a tu medida. Únete a una comunidad
              que hace del espacio una oportunidad.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <FormTrigger kind="client" className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-green-600">
                Empieza ahora
                <ArrowRight className="size-[1.15em] transition-transform group-hover:translate-x-1" />
              </FormTrigger>
              <FormTrigger kind="owner" className="inline-flex h-13 items-center justify-center gap-2 rounded-full border-2 border-brand-blue/20 px-7 text-base font-semibold text-brand-blue transition hover:border-brand-blue">
                Publicar mi espacio
              </FormTrigger>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {HERO_POINTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-brand-blue/80">
                  <Icon className="size-4 text-brand-green" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-blue/10 ring-1 ring-black/5">
            <Image
              src="/images/hero.png"
              alt="Persona organizando cajas etiquetadas en un espacio de almacenamiento seguro y ordenado"
              width={1024}
              height={1024}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur sm:block">
            <p className="text-xs font-medium text-brand-muted">Pequeños espacios,</p>
            <p className="text-base font-bold text-brand-blue">grandes posibilidades.</p>
          </div>

          <div className="absolute -top-5 -right-3 hidden items-center gap-2 rounded-2xl bg-brand-blue p-3.5 pr-5 shadow-xl sm:flex">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-green/20 text-brand-green-light">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-[11px] font-medium text-white/70">Reservas</p>
              <p className="text-sm font-bold text-white">Seguras y verificadas</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
