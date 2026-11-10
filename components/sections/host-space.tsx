'use client'

import { useState } from 'react'
import { HandCoins, Loader2, CheckCircle2, TrendingUp, ShieldCheck, Users } from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import { DISTRICTS, STORAGE_TYPES } from '@/lib/data'

const HOST_BENEFITS = [
  { icon: TrendingUp, text: 'Genera ingresos con el espacio que ya tienes' },
  { icon: ShieldCheck, text: 'Recibe solicitudes de clientes verificados' },
  { icon: Users, text: 'Tú decides disponibilidad, precio y condiciones' },
]

const inputClass =
  'h-12 w-full rounded-xl border border-white/15 bg-white/10 px-3 text-sm font-medium text-white placeholder:text-white/50 outline-none transition-colors focus-visible:border-brand-green focus-visible:ring-4 focus-visible:ring-brand-green/25'

export function HostSpace() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    // Prototipo: simula el registro de un espacio. Conectar a un backend real
    // (Server Action + base de datos) para persistir la solicitud.
    setTimeout(() => {
      setLoading(false)
      setDone(true)
      toast.success('¡Solicitud recibida!', {
        description: 'Te contactaremos para ayudarte a publicar tu espacio.',
      })
    }, 1200)
  }

  return (
    <section id="publica" className="bg-brand-blue py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <Badge tone="dark">
              <HandCoins className="size-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Gana con tu espacio
              </span>
            </Badge>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              ¿Tienes espacio disponible?{' '}
              <span className="text-brand-green-light">Hazlo trabajar por ti.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/70">
              Un cuarto, un depósito o una zona de almacén subutilizada puede
              convertirse en una fuente de ingresos. Publícalo en FlexiLogs y conecta
              con negocios que necesitan espacio cerca.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {HOST_BENEFITS.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} delay={200 + i * 80}>
                <li className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/20 text-brand-green-light">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-white/90">{text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={160}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8">
            {done ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-brand-green/20 text-brand-green-light">
                  <CheckCircle2 className="size-9" />
                </span>
                <h3 className="text-xl font-bold">¡Gracias por tu interés!</h3>
                <p className="max-w-sm text-white/70">
                  Registramos tu solicitud. Pronto te contactaremos para ayudarte a
                  publicar tu espacio y empezar a recibir clientes.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-2 text-sm font-semibold text-brand-green-light underline-offset-4 hover:underline"
                >
                  Registrar otro espacio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold">Publica tu espacio</h3>
                <p className="-mt-2 text-sm text-white/60">
                  Cuéntanos lo básico y te acompañamos en el resto.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-white/70">Nombre</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-white/70">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="tucorreo@email.com"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-white/70">Distrito</span>
                  <select required name="district" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Selecciona un distrito
                    </option>
                    {DISTRICTS.map((d) => (
                      <option key={d} value={d} className="text-brand-blue">
                        {d}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-white/70">
                    Tipo de espacio
                  </span>
                  <select required name="type" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      ¿Qué ofreces?
                    </option>
                    {STORAGE_TYPES.map((t) => (
                      <option key={t.value} value={t.value} className="text-brand-blue">
                        {t.label}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition-all hover:bg-brand-green-600 focus-visible:ring-4 focus-visible:ring-brand-green/30 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando solicitud
                    </>
                  ) : (
                    'Quiero publicar mi espacio'
                  )}
                </button>
                <p className="text-center text-xs text-white/50">
                  Prototipo de demostración. No se envía información real.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
