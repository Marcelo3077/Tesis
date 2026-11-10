'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FlexilogsLogo } from '@/components/brand/flexilogs-logo'
import { FormTrigger } from '@/components/sections/pilot-forms'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Publicar mi espacio', href: '#solicitar' },
  { label: 'Preguntas', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-brand-gray/70 bg-white/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-green">
          <FlexilogsLogo />
          <span className="sr-only">Ir al inicio de FlexiLogs</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.label === 'Publicar mi espacio' ? (
                <FormTrigger kind="owner" className="text-sm font-medium text-brand-blue/80 transition-colors hover:text-brand-green">
                  {link.label}
                </FormTrigger>
              ) : (
                <a href={link.href} className="text-sm font-medium text-brand-blue/80 transition-colors hover:text-brand-green">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#publica"
            className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green"
          >
            Iniciar sesión
          </a>
          <FormTrigger kind="client" className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-semibold text-white transition hover:bg-brand-green-600">
            Encontrar espacio
          </FormTrigger>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-blue transition-colors hover:bg-brand-gray/60 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-gray/70 bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-brand-blue transition-colors hover:bg-brand-gray/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="grid gap-2 pt-3">
              <FormTrigger kind="client" onClick={() => setOpen(false)} className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-semibold text-white transition hover:bg-brand-green-600">
                Encontrar espacio
              </FormTrigger>
              <FormTrigger kind="owner" onClick={() => setOpen(false)} className="inline-flex h-11 items-center justify-center rounded-full border-2 border-brand-blue/20 px-5 text-sm font-semibold text-brand-blue transition hover:border-brand-blue">
                Publicar mi espacio
              </FormTrigger>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
