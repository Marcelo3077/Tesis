'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { FAQS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-brand-green-light/20 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Todo lo que necesitas saber sobre el almacenamiento flexible en FlexiLogs."
        />

        <Reveal className="mt-12">
          <ul className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <li
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-brand-gray bg-white"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-brand-blue transition-colors hover:bg-brand-green-light/10"
                    >
                      <span className="font-semibold">{faq.question}</span>
                      <Plus
                        className={cn(
                          'size-5 shrink-0 text-brand-green transition-transform duration-300',
                          isOpen && 'rotate-45',
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-pretty leading-relaxed text-brand-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
