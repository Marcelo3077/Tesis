import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { CTALink } from '@/components/ui/cta'
import { Reveal } from '@/components/ui/reveal'

const BENEFITS = [
  'Amplía tu almacenamiento sin abrir otro local',
  'Guarda stock de temporada solo cuando lo necesitas',
  'Espacios cerca de tus clientes para entregas más rápidas',
  'Paga por lo que usas, sin contratos de largo plazo',
]

export function Business() {
  return (
    <section className="bg-brand-blue py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/business.png"
              alt="Inventario de un pequeño negocio de e-commerce ordenado en cajas y estantes listos para envío"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Badge tone="dark">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Para emprendedores y e-commerce
              </span>
            </Badge>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Tu inventario crece,{' '}
              <span className="text-brand-green-light">tu espacio también.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/70">
              Deja de amontonar el stock en casa o de pagar un almacén completo que
              apenas usas. Con FlexiLogs escalas tu almacenamiento al ritmo de tus
              ventas.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit} delay={200 + i * 70}>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Check className="size-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-white/90">{benefit}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={520}>
            <div className="mt-9">
              <CTALink href="#buscador" variant="green">
                Encontrar espacio para mi negocio
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </CTALink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
