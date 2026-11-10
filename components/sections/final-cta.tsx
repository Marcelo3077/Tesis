import { ArrowRight } from 'lucide-react'
import { FlexilogsMark } from '@/components/brand/flexilogs-logo'
import { FormTrigger } from '@/components/sections/pilot-forms'
import { Reveal } from '@/components/ui/reveal'

export function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-green px-6 py-16 text-center sm:px-12 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 size-60 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 size-72 rounded-full bg-brand-blue/20 blur-3xl"
            />
            <div className="relative">
              <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <FlexilogsMark variant="white" className="size-10" />
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Tu espacio también puede llegar más lejos.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/85">
                Únete a una comunidad que hace del espacio una oportunidad. Un mejor uso
                del espacio, un futuro con más posibilidades.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <FormTrigger kind="client" className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-brand-blue shadow-lg hover:bg-brand-green-light">
                  Solicitar espacio
                  <ArrowRight className="size-[1.15em] transition-transform group-hover:translate-x-1" />
                </FormTrigger>
                <FormTrigger kind="owner" className="inline-flex h-13 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 text-base font-semibold text-white hover:bg-white hover:text-brand-blue">
                  Publicar mi espacio
                </FormTrigger>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
