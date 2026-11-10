'use client'

import { useMemo, useState } from 'react'
import { Calculator, Check } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

export function Pricing() {
  const [cubicMeters, setCubicMeters] = useState(1)
  const [days, setDays] = useState(1)
  const total = useMemo(() => cubicMeters * days * 20, [cubicMeters, days])

  return (
    <section id="precio" className="bg-brand-blue py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading eyebrow="Precio claro" title="Paga solo por el espacio y los días que necesitas" description="Almacena desde 1 m³ por S/20 al día. El precio total se calcula según el volumen y el número de días contratados, sin mensualidades ni contratos de largo plazo." light />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Desde 1 m³', 'S/20 por m³ al día', 'Sin mensualidades', 'Sin contratos largos'].map((item) => <div key={item} className="flex items-center gap-2 text-sm text-white/80"><Check className="size-4 text-brand-green-light" />{item}</div>)}
          </div>
        </div>
        <Reveal>
          <div className="rounded-3xl bg-white p-6 text-brand-blue shadow-2xl sm:p-8">
            <div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-600"><Calculator className="size-5" /></span><div><h3 className="text-xl font-bold">Calcula tu estimado</h3><p className="text-sm text-brand-muted">m³ × días × S/20</p></div></div>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2 text-sm font-semibold">Cantidad de m³<input aria-label="Cantidad de metros cúbicos" type="number" min="1" step="0.1" value={cubicMeters} onChange={(e) => setCubicMeters(Math.max(1, Number(e.target.value) || 1))} className="h-12 w-full min-w-0 rounded-xl border border-brand-gray px-3 text-lg font-bold outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/15" /></label>
              <label className="grid min-w-0 gap-2 text-sm font-semibold">Número de días<input aria-label="Número de días" type="number" min="1" step="1" value={days} onChange={(e) => setDays(Math.max(1, Number(e.target.value) || 1))} className="h-12 w-full min-w-0 rounded-xl border border-brand-gray px-3 text-lg font-bold outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/15" /></label>
            </div>
            <div className="mt-7 rounded-2xl bg-brand-green-light/35 p-5"><p className="text-sm font-semibold text-brand-blue/70">Precio total estimado</p><p className="mt-1 text-4xl font-extrabold text-brand-blue">S/{total.toLocaleString('es-PE')}</p></div>
            <p className="mt-4 text-xs leading-relaxed text-brand-muted">El precio final se confirma después de verificar la disponibilidad y condiciones del espacio.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
