/**
 * DATOS SIMULADOS (MOCK) para el prototipo de FlexiLogs.
 *
 * Todo el contenido de este archivo es ficticio y sirve únicamente para
 * demostrar el diseño y la propuesta de valor. Al conectar una base de datos
 * real, reemplaza estos arreglos por consultas (por ejemplo, Server Components
 * que lean de Neon/Supabase/etc.) manteniendo las mismas formas de tipo.
 */

export type StorageType = 'cajas' | 'estantes' | 'm2' | 'pallets'

export interface StorageSpace {
  id: string
  district: string
  title: string
  type: StorageType
  typeLabel: string
  capacity: string
  /** Precio mensual "desde", en soles (PEN) */
  priceFrom: number
  rating: number
  reviews: number
  verified: boolean
  amenities: string[]
  image: string
  imageAlt: string
}

export const DISTRICTS = [
  'Miraflores',
  'Surco',
  'San Miguel',
  'La Victoria',
  'Ate',
  'San Juan de Lurigancho',
] as const

export const STORAGE_TYPES: { value: StorageType; label: string }[] = [
  { value: 'cajas', label: 'Cajas' },
  { value: 'estantes', label: 'Estantes' },
  { value: 'm2', label: 'Metros cuadrados (m²)' },
  { value: 'pallets', label: 'Pallets' },
]

export const DURATIONS = [
  { value: 'dias', label: 'Días' },
  { value: 'semanas', label: 'Semanas' },
  { value: 'meses', label: 'Meses' },
] as const

// NOTA: datos simulados de espacios en Lima para el prototipo.
export const SPACES: StorageSpace[] = [
  {
    id: 'flx-miraflores-01',
    district: 'Miraflores',
    title: 'Depósito seguro cerca del parque Kennedy',
    type: 'm2',
    typeLabel: 'Metros cuadrados',
    capacity: 'Hasta 12 m² disponibles',
    priceFrom: 180,
    rating: 4.9,
    reviews: 42,
    verified: true,
    amenities: ['Seguridad 24/7', 'Cámaras', 'Ambiente seco', 'Acceso coordinado'],
    image: '/images/spaces/miraflores.png',
    imageAlt: 'Espacio de almacenamiento limpio y organizado en Miraflores',
  },
  {
    id: 'flx-surco-02',
    district: 'Surco',
    title: 'Estantería en almacén compartido',
    type: 'estantes',
    typeLabel: 'Estantes',
    capacity: '8 estantes disponibles',
    priceFrom: 120,
    rating: 4.8,
    reviews: 31,
    verified: true,
    amenities: ['Cámaras', 'Ambiente seco', 'Recojo y entrega opcional'],
    image: '/images/spaces/surco.png',
    imageAlt: 'Estantería metálica ordenada con cajas etiquetadas en Surco',
  },
  {
    id: 'flx-sanmiguel-03',
    district: 'San Miguel',
    title: 'Cuarto acondicionado para inventario',
    type: 'cajas',
    typeLabel: 'Cajas',
    capacity: 'Hasta 40 cajas medianas',
    priceFrom: 90,
    rating: 4.7,
    reviews: 18,
    verified: true,
    amenities: ['Acceso coordinado', 'Ambiente seco', 'Seguridad 24/7'],
    image: '/images/spaces/sanmiguel.png',
    imageAlt: 'Cuarto acondicionado con cajas organizadas en San Miguel',
  },
  {
    id: 'flx-lavictoria-04',
    district: 'La Victoria',
    title: 'Zona de pallets en almacén logístico',
    type: 'pallets',
    typeLabel: 'Pallets',
    capacity: '6 posiciones de pallet',
    priceFrom: 210,
    rating: 4.6,
    reviews: 27,
    verified: true,
    amenities: ['Montacargas', 'Seguridad 24/7', 'Cámaras', 'Recojo y entrega opcional'],
    image: '/images/spaces/lavictoria.png',
    imageAlt: 'Pallets con mercadería en un almacén logístico de La Victoria',
  },
  {
    id: 'flx-ate-05',
    district: 'Ate',
    title: 'Depósito amplio para temporadas altas',
    type: 'm2',
    typeLabel: 'Metros cuadrados',
    capacity: 'Hasta 25 m² disponibles',
    priceFrom: 150,
    rating: 4.5,
    reviews: 12,
    verified: true,
    amenities: ['Ambiente seco', 'Acceso coordinado', 'Cámaras'],
    image: '/images/spaces/ate.png',
    imageAlt: 'Depósito amplio y despejado para almacenar inventario en Ate',
  },
  {
    id: 'flx-sjl-06',
    district: 'San Juan de Lurigancho',
    title: 'Espacio flexible para pequeños negocios',
    type: 'cajas',
    typeLabel: 'Cajas',
    capacity: 'Hasta 60 cajas + estantes',
    priceFrom: 80,
    rating: 4.7,
    reviews: 22,
    verified: true,
    amenities: ['Seguridad 24/7', 'Ambiente seco', 'Recojo y entrega opcional'],
    image: '/images/spaces/sjl.png',
    imageAlt: 'Espacio flexible con cajas y estantes en San Juan de Lurigancho',
  },
]

export const STATS = [
  { value: '120+', label: 'Espacios disponibles' },
  { value: '15', label: 'Distritos con presencia' },
  { value: '98%', label: 'Reservas completadas' },
  { value: '300+', label: 'Negocios interesados' },
]

// Testimonios ficticios — contenido de DEMOSTRACIÓN, no son clientes reales.
export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Valeria Ramos',
    role: 'Emprendedora de moda',
    initials: 'VR',
    quote:
      'Guardo mis colecciones entre campañas sin pagar un alquiler completo. Encuentro espacio cerca y solo por los meses que lo necesito.',
  },
  {
    id: 't2',
    name: 'Diego Salazar',
    role: 'Vendedor de e-commerce',
    initials: 'DS',
    quote:
      'En temporada alta amplío mi capacidad en días y luego la reduzco. FlexiLogs me ayudó a responder al Cyber sin comprometerme a largo plazo.',
  },
  {
    id: 't3',
    name: 'Carmen Ríos',
    role: 'Propietaria de un pequeño almacén',
    initials: 'CR',
    quote:
      'Tenía un depósito subutilizado. Ahora genera ingresos adicionales cada mes y recibo clientes verificados.',
  },
]

export const FAQS = [
  {
    question: '¿Qué tipo de productos puedo almacenar?',
    answer:
      'Puedes almacenar inventario, cajas, mercadería y productos de e-commerce. Los productos peligrosos, perecibles o ilegales no están permitidos. Las condiciones finales dependen del proveedor y del contrato acordado.',
  },
  {
    question: '¿Cómo se verifican los espacios?',
    answer:
      'Revisamos información del anfitrión, fotos y características del espacio antes de publicarlo. La etiqueta "Verificado" indica que el espacio pasó por este proceso, aunque cada reserva se coordina directamente con el proveedor.',
  },
  {
    question: '¿Puedo alquilar espacio solo por algunas semanas?',
    answer:
      'Sí. FlexiLogs está pensado para el almacenamiento flexible: puedes reservar por días, semanas o meses, sin contratos de largo plazo. La disponibilidad mínima depende de cada espacio.',
  },
  {
    question: '¿Cómo se calcula el precio?',
    answer:
      'El precio se basa en la capacidad (cajas, estantes, m² o pallets), la duración y los servicios seleccionados. Cada espacio muestra un precio "desde" como referencia; el monto final lo confirma el proveedor.',
  },
  {
    question: '¿Puedo retirar mi inventario cuando lo necesite?',
    answer:
      'El acceso se coordina con el anfitrión según las condiciones del espacio. Muchos ofrecen acceso coordinado e incluso recojo y entrega opcional, sujeto a los servicios contratados.',
  },
  {
    question: '¿FlexiLogs ofrece transporte?',
    answer:
      'Algunos espacios ofrecen recojo y entrega opcional. Esta disponibilidad varía según el proveedor y se muestra dentro de los servicios de cada espacio.',
  },
  {
    question: '¿Cómo publico un espacio disponible?',
    answer:
      'Desde "Publicar mi espacio" podrás registrar tu cuarto, depósito o zona de almacén, indicar disponibilidad y precios, y empezar a recibir solicitudes de clientes verificados.',
  },
  {
    question: '¿Qué sucede si mi inventario sufre algún daño?',
    answer:
      'Las condiciones de responsabilidad y cobertura dependen del proveedor, el contrato y los servicios seleccionados. Te recomendamos revisar los términos de cada espacio antes de reservar.',
  },
]
