import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FlexiLogs — Espacio cuando lo necesitas',
  description:
    'FlexiLogs es el marketplace de almacenamiento flexible en Perú. Encuentra espacios seguros y cercanos para almacenar tu inventario por días, semanas o meses, sin contratos de largo plazo.',
  generator: 'v0.app',
  keywords: [
    'almacenamiento flexible',
    'storage Perú',
    'espacio de almacenamiento',
    'marketplace almacenamiento',
    'FlexiLogs',
    'e-commerce Perú',
  ],
  openGraph: {
    title: 'FlexiLogs — Espacio cuando lo necesitas',
    description:
      'Encuentra espacio seguro y cercano para almacenar lo que necesites, durante el tiempo que necesites y sin contratos de largo plazo.',
    type: 'website',
    locale: 'es_PE',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2545',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
