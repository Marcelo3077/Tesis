'use client'

import { useState } from 'react'
import { CheckCircle2, ExternalLink, Loader2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

export type PilotFormKind = 'client' | 'owner'

export function openPilotForm(kind: PilotFormKind) {
  const target = document.getElementById(kind === 'client' ? 'form-solicitud' : 'form-espacio')
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const firstField = target?.querySelector<HTMLElement>('input, select, textarea')
  firstField?.focus({ preventScroll: true })
}

export function FormTrigger({ kind, children, className }: { kind: PilotFormKind; children: React.ReactNode; className?: string }) {
  return <button type="button" onClick={() => openPilotForm(kind)} className={className}>{children}</button>
}

const input = 'h-12 w-full rounded-xl border border-brand-gray bg-white px-3 text-sm text-brand-blue outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15'
const area = `${input} min-h-24 resize-y py-3`

function Field({ label, name, type = 'text', required = true, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="grid gap-1.5 text-sm font-semibold text-brand-blue"><span>{label}{required ? ' *' : ''}</span><input name={name} type={type} required={required} placeholder={placeholder} className={input} /></label>
}

function Textarea({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return <label className="grid gap-1.5 text-sm font-semibold text-brand-blue"><span>{label}{required ? ' *' : ''}</span><textarea name={name} required={required} className={area} /></label>
}

function Consent({ name, children }: { name: string; children: React.ReactNode }) {
  return <label className="flex items-start gap-2 text-xs leading-relaxed text-brand-muted"><input name={name} value="yes" type="checkbox" required className="mt-0.5 size-4 accent-brand-green" />{children}</label>
}

function Success() {
  return <div className="flex flex-col items-center gap-4 py-12 text-center"><CheckCircle2 className="size-14 text-brand-green" /><h3 className="text-2xl font-bold text-brand-blue">¡Solicitud registrada!</h3><p className="max-w-md text-brand-muted">Recibimos tus datos. Revisaremos la información y nos comunicaremos contigo para confirmar los siguientes pasos.</p></div>
}

function SubmitButton({ loading, children }: { loading: boolean; children: React.ReactNode }) {
  return <button type="submit" disabled={loading} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-green px-6 text-sm font-bold text-white shadow-lg shadow-brand-green/20 transition hover:bg-brand-green-600 disabled:cursor-not-allowed disabled:opacity-60">{loading && <Loader2 className="size-4 animate-spin" />}{loading ? 'Enviando…' : children}</button>
}

export function PilotForms() {
  const [sent, setSent] = useState<PilotFormKind | null>(null)
  const [loading, setLoading] = useState<PilotFormKind | null>(null)
  const [error, setError] = useState<PilotFormKind | null>(null)

  async function submit(event: React.FormEvent<HTMLFormElement>, kind: PilotFormKind, endpoint: string) {
    event.preventDefault()
    setError(null)
    setLoading(kind)
    const form = event.currentTarget
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Form submission failed')
      form.reset()
      setSent(kind)
    } catch {
      setError(kind)
    } finally {
      setLoading(null)
    }
  }

  return <section id="solicitar" className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Piloto FlexiLogs" title="Conecta tu necesidad con un espacio disponible" description="Completa el formulario que corresponde a tu operación. Te contactaremos para revisar disponibilidad y condiciones." /><div className="mt-12 grid gap-8 lg:grid-cols-2">
    <Reveal><div id="form-solicitud" className="scroll-mt-24 rounded-3xl border border-brand-gray bg-white p-6 shadow-sm md:p-8"><h3 className="text-2xl font-bold text-brand-blue">Necesito espacio</h3><p className="mt-2 text-sm text-brand-muted">Para marcas de moda y textiles que necesitan almacenamiento temporal.</p>{sent === 'client' ? <Success /> : <form onSubmit={(e) => submit(e, 'client', 'https://formspree.io/f/xbgorjrv')} className="mt-7 grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Nombre y apellidos" name="nombre_apellidos" /><Field label="Marca o empresa" name="marca_empresa" /><Field label="RUC" name="ruc" required={false} /><Field label="Correo" name="correo" type="email" /><Field label="Teléfono o WhatsApp" name="telefono_whatsapp" /><Field label="Distrito o zona preferida" name="distrito_zona" /></div><Field label="Tipo de productos" name="tipo_productos" /><Textarea label="Descripción de la mercadería" name="descripcion_mercaderia" required /><div className="grid gap-4 sm:grid-cols-2"><Field label="Volumen requerido en m³" name="volumen_m3" type="number" /><Field label="Fecha estimada de ingreso" name="fecha_ingreso" type="date" /><Field label="Días requeridos" name="dias_requeridos" type="number" /><Field label="Horarios o frecuencia de acceso" name="horarios_acceso" /></div><Field label="Valor aproximado de la mercadería" name="valor_mercaderia" required={false} /><Textarea label="Comentarios adicionales" name="comentarios" /><Consent name="mercaderia_veraz">Declaro que la información sobre la mercadería es verdadera y acepto que el contenido será revisado.</Consent>{error === 'client' && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">No pudimos registrar la solicitud. Revisa tu conexión e inténtalo nuevamente.</p>}<SubmitButton loading={loading === 'client'}>Solicitar almacenamiento</SubmitButton></form>}</div></Reveal>
    <OwnerForm sent={sent === 'owner'} loading={loading === 'owner'} error={error === 'owner'} onSubmit={(e) => submit(e, 'owner', 'https://formspree.io/f/xjywbvvb')} />
  </div></div></section>
}

function OwnerForm({ sent, loading, error, onSubmit }: { sent: boolean; loading: boolean; error: boolean; onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
  const [building, setBuilding] = useState('')
  if (sent) return <Reveal><div id="form-espacio" className="scroll-mt-24 rounded-3xl border border-brand-gray bg-white p-6 shadow-sm md:p-8"><Success /></div></Reveal>
  return <Reveal><div id="form-espacio" className="scroll-mt-24 rounded-3xl border border-brand-gray bg-white p-6 shadow-sm md:p-8"><h3 className="text-2xl font-bold text-brand-blue">Ofrece tu espacio</h3><p className="mt-2 text-sm text-brand-muted">Para personas o negocios con un espacio subutilizado.</p><form onSubmit={onSubmit} className="mt-7 grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Nombre y apellidos" name="nombre_apellidos" /><Field label="Correo" name="correo" type="email" /><Field label="Teléfono o WhatsApp" name="telefono_whatsapp" /><Field label="Distrito" name="distrito" /><Field label="Dirección o referencia aproximada" name="direccion_referencia" /><Field label="Tipo de espacio" name="tipo_espacio" /><Field label="Dimensiones aproximadas" name="dimensiones" /><Field label="Capacidad estimada en m³" name="capacidad_m3" type="number" /></div><Field label="Disponibilidad" name="disponibilidad" /><Textarea label="Descripción del espacio" name="descripcion_espacio" required /><Textarea label="Horarios y forma de acceso" name="horarios_acceso" required /><Textarea label="Condiciones de orden, ventilación y seguridad" name="condiciones_espacio" required /><div className="grid gap-4 sm:grid-cols-3"><Field label="¿Cámaras de seguridad?" name="camaras_seguridad" /><Field label="¿Portero o vigilancia?" name="portero_vigilancia" /><label className="grid gap-1.5 text-sm font-semibold text-brand-blue">¿Está en un edificio? *<select name="en_edificio" required value={building} onChange={(e) => setBuilding(e.target.value)} className={input}><option value="">Selecciona</option><option>Sí</option><option>No</option></select></label></div>{building === 'Sí' && <Field label="¿Cuenta con ascensor?" name="cuenta_ascensor" />}<Field label="Precio esperado por m³/día" name="precio_m3_dia" required={false} /><Field label="Link de Google Drive con fotos de la entrada" name="fotos_entrada_drive" type="url" placeholder="https://drive.google.com/..." /><Field label="Link de Google Drive con fotos del espacio" name="fotos_espacio_drive" type="url" placeholder="https://drive.google.com/..." /><Field label="Link de Google Drive con fotos de cámaras (si existen)" name="fotos_camaras_drive" type="url" required={false} placeholder="https://drive.google.com/..." /><Consent name="autorizacion_contacto">Autorizo a FlexiLogs a contactarme para verificar el espacio y evaluar su publicación.</Consent><Consent name="condiciones_publicacion">Acepto que la publicación queda sujeta a verificación, disponibilidad y condiciones del piloto.</Consent>{error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">No pudimos registrar el espacio. Revisa tu conexión e inténtalo nuevamente.</p>}<SubmitButton loading={loading}>Ofrecer mi espacio</SubmitButton></form></div></Reveal>
}
