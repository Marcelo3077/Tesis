import { Users, Home, Leaf, HandCoins } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const VALUES = [
  {
    icon: Users,
    title: 'Comunidad de confianza',
    description: 'Personas y negocios verificados que colaboran de forma segura.',
  },
  {
    icon: Home,
    title: 'Espacios aprovechados',
    description: 'Cuartos y depósitos que dejan de estar vacíos y empiezan a servir.',
  },
  {
    icon: Leaf,
    title: 'Consumo más sostenible',
    description: 'Compartir espacio reduce la necesidad de construir más almacenes.',
  },
  {
    icon: HandCoins,
    title: 'Ingresos adicionales',
    description: 'Tu espacio disponible se convierte en una fuente de ingresos.',
  },
]

export function Values() {
  return (
    <section id="valores" className="border-y border-brand-gray bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="flex flex-col items-center text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-green-light/50 text-brand-blue ring-1 ring-brand-green/20">
                  <Icon className="size-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-blue">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
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
