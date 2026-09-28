'use client'

import { useState } from 'react'
import { submitClientExperiment, submitOwnerExperiment } from '@/app/actions/experiments'
import { toast } from 'sonner'

const fieldClass = 'w-full rounded-xl border border-brand-gray bg-white px-4 py-3 text-sm text-brand-blue outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15'

function Field({ label, name, type = 'text', required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-medium text-brand-blue"><span>{label}{required ? ' *' : ''}</span><input className={fieldClass} name={name} type={type} required={required} /></label>
}

export function ClientExperimentForm() {
  const [pending, setPending] = useState(false)
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPending(true)
    const data = Object.fromEntries(new FormData(event.currentTarget))
    try { await submitClientExperiment(data); event.currentTarget.reset(); toast.success('Solicitud recibida. Te contactaremos pronto.') } catch { toast.error('Revisa los datos e inténtalo nuevamente.') } finally { setPending(false) }
  }
  return <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-brand-gray bg-white p-6 shadow-sm md:p-8"><div className="grid gap-5 md:grid-cols-2"><Field label="Nombre completo" name="name" /><Field label="Correo electrónico" name="email" type="email" /><Field label="Teléfono" name="phone" type="tel" /><Field label="Distrito" name="district" /></div><div className="grid gap-5 md:grid-cols-2"><Field label="¿Qué necesitas guardar?" name="storageType" /><Field label="¿Por cuánto tiempo?" name="duration" /></div><label className="grid gap-2 text-sm font-medium text-brand-blue"><span>Cuéntanos más</span><textarea className={`${fieldClass} min-h-28 resize-y`} name="notes" /></label><button disabled={pending} className="rounded-full bg-brand-green px-6 py-3 font-semibold text-brand-blue transition hover:bg-brand-green-600 disabled:cursor-wait disabled:opacity-60">{pending ? 'Enviando…' : 'Quiero encontrar mi espacio'}</button></form>
}

export function OwnerExperimentForm() {
  const [pending, setPending] = useState(false)
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPending(true)
    const data = Object.fromEntries(new FormData(event.currentTarget))
    try { await submitOwnerExperiment(data); event.currentTarget.reset(); toast.success('Gracias. Revisaremos tu espacio y te contactaremos.') } catch { toast.error('Revisa los datos e inténtalo nuevamente.') } finally { setPending(false) }
  }
  return <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-brand-gray bg-white p-6 shadow-sm md:p-8"><div className="grid gap-5 md:grid-cols-2"><Field label="Nombre completo" name="name" /><Field label="Correo electrónico" name="email" type="email" /><Field label="Teléfono" name="phone" type="tel" /><Field label="Distrito" name="district" /></div><div className="grid gap-5 md:grid-cols-3"><Field label="Tipo de espacio" name="spaceType" /><Field label="Área aproximada" name="area" /><Field label="Disponibilidad" name="availability" /></div><label className="grid gap-2 text-sm font-medium text-brand-blue"><span>Cuéntanos sobre tu espacio</span><textarea className={`${fieldClass} min-h-28 resize-y`} name="notes" /></label><button disabled={pending} className="rounded-full bg-brand-green px-6 py-3 font-semibold text-brand-blue transition hover:bg-brand-green-600 disabled:cursor-wait disabled:opacity-60">{pending ? 'Enviando…' : 'Quiero publicar mi espacio'}</button></form>
}
