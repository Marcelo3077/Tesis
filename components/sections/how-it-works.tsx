import { ClipboardCheck, FileSearch, Handshake, PackageCheck, RotateCcw } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { CTALink } from '@/components/ui/cta'

const STEPS = [
  [FileSearch, '01', 'Describe lo que necesitas', 'La marca indica qué necesita almacenar, cuántos m³ requiere y durante cuántos días.'],
  [ClipboardCheck, '02', 'Revisamos la solicitud', 'Flexilogs revisa la solicitud y confirma un espacio disponible.'],
  [Handshake, '03', 'Confirma la reserva', 'La marca revisa las condiciones y confirma la reserva.'],
  [PackageCheck, '04', 'Entregan e inspeccionan', 'Ambas partes realizan la entrega, inspección y registro de la mercadería.'],
  [RotateCcw, '05', 'Devuelven y evalúan', 'Al finalizar, se registra la devolución y ambas partes evalúan la experiencia.'],
] as const

export function HowItWorks() {
  return <section id="como-funciona" className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Reserva simple" title="Cinco pasos para almacenar con claridad" description="Un flujo pensado para que marcas y propietarios sepan qué ocurre en cada etapa." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{STEPS.map(([Icon, step, title, description], i) => <Reveal key={step} delay={i * 80}><div className="h-full rounded-3xl border border-brand-gray bg-white p-5 shadow-sm"><span className="flex size-12 items-center justify-center rounded-2xl bg-brand-blue text-brand-green-light"><Icon className="size-5" /></span><p className="mt-5 text-3xl font-extrabold text-brand-green-light">{step}</p><h3 className="mt-2 text-lg font-bold text-brand-blue">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p></div></Reveal>)}</div><div className="mt-10 text-center"><CTALink href="#solicitar" variant="green">Solicitar espacio</CTALink></div></div></section>
}
