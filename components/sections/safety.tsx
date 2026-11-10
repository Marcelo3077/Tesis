import { BadgeCheck, Camera, ClipboardCheck, FileCheck2, LockKeyhole, PackageCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

const ITEMS = [
  [BadgeCheck, 'Usuarios verificados', 'Validación de identidad y datos básicos de marcas y propietarios.'],
  [PackageCheck, 'Mercadería declarada', 'Antes del ingreso, la marca informa qué productos almacenará.'],
  [Camera, 'Revisión al ingreso', 'Ambas partes revisan la mercadería y registran su estado mediante fotografías.'],
  [LockKeyhole, 'Productos prohibidos', 'No aceptamos artículos ilegales, peligrosos, inflamables, perecibles ni productos distintos de los declarados.'],
  [ClipboardCheck, 'Registro de entrega y devolución', 'Documentamos fecha, volumen, condiciones y conformidad de ambas partes.'],
  [FileCheck2, 'Acuerdo entre las partes', 'Cada operación establece responsabilidades, condiciones de acceso y tratamiento de incidentes.'],
] as const

export function Safety() {
  return <section id="seguridad" className="bg-brand-green-light/25 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Seguridad y confianza" title="Tu mercadería y tu espacio, protegidos en cada etapa" description="Reglas claras y registros simples para que cada operación empiece y termine con confianza." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{ITEMS.map(([Icon, title, description], i) => <Reveal key={title} delay={i * 60}><article className="h-full rounded-3xl border border-white/80 bg-white p-6 shadow-sm"><span className="flex size-12 items-center justify-center rounded-2xl bg-brand-blue text-brand-green-light"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-brand-blue">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p></article></Reveal>)}</div></div></section>
}
