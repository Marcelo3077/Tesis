import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { TESTIMONIALS } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comunidad"
          title="Personas que confían. Espacios que conectan."
          description="Historias de quienes ya hacen del espacio una oportunidad. Testimonios ilustrativos de la comunidad FlexiLogs."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-3xl border border-brand-gray bg-white p-7 shadow-sm">
                <Quote className="size-8 text-brand-green-light" />
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-brand-blue/90">
                  {t.quote}
                </blockquote>
                <div
                  className="mt-5 flex gap-0.5 text-brand-green"
                  aria-label="Calificación de 5 de 5 estrellas"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-brand-gray pt-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-brand-blue">{t.name}</span>
                    <span className="block text-sm text-brand-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
