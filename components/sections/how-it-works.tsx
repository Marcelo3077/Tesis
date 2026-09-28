import { Search, ShieldCheck, PackageOpen } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Encuentra espacios cerca de ti',
    description:
      'Busca por distrito, tipo de espacio y duración. Compara capacidad, precio y servicios en segundos.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Reserva con confianza',
    description:
      'Elige un espacio verificado, coordina el acceso con el anfitrión y confirma solo por el tiempo que necesitas.',
  },
  {
    icon: PackageOpen,
    step: '03',
    title: 'Almacena y da mejor uso al espacio',
    description:
      'Guarda tu inventario de forma segura y flexible. Amplía o reduce cuando tu negocio lo pida.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Espacio cuando lo necesitas, en tres pasos"
          description="Sin contratos de largo plazo ni trámites complicados. Así de simple es almacenar con FlexiLogs."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent md:block"
          />
          {STEPS.map(({ icon: Icon, step, title, description }, i) => (
            <Reveal key={step} delay={i * 120}>
              <div className="relative flex h-full flex-col rounded-3xl border border-brand-gray bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg shadow-brand-blue/20">
                    <Icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <span className="text-4xl font-extrabold text-brand-green-light">
                    {step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-blue">{title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-brand-muted">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
