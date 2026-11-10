import { FlexilogsLogo } from '@/components/brand/flexilogs-logo'

const NAV = [
  {
    heading: 'Plataforma',
    links: [
      { label: 'Buscar espacios', href: '#buscador' },
      { label: 'Espacios destacados', href: '#espacios' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Publicar mi espacio', href: '#publica' },
    ],
  },
  {
    heading: 'Compañía',
    links: [
      { label: 'Sobre FlexiLogs', href: '#valores' },
      { label: 'Comunidad', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contacto', href: '#' },
    ],
  },
  {
    heading: 'Soporte',
    links: [
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Centro de ayuda', href: '#' },
      { label: 'Términos y condiciones', href: '#' },
      { label: 'Privacidad', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <FlexilogsLogo variant="white" showTagline />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-white/70">
              Almacenamiento flexible entre personas. Conecta con espacios seguros y
              cercanos para almacenar lo que necesites, durante el tiempo que necesites.
            </p>
          </div>

          {NAV.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green-light">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} FlexiLogs. Todos los derechos reservados.
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">
            Un mejor uso del espacio, un futuro con más posibilidades.
          </p>
        </div>
      </div>
    </footer>
  )
}
