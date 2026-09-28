import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const ctaVariants = cva(
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-brand-green/40 disabled:pointer-events-none disabled:opacity-60 active:translate-y-px [&_svg]:size-[1.15em] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        green:
          'bg-brand-green text-white shadow-lg shadow-brand-green/25 hover:bg-brand-green-600 hover:shadow-xl hover:shadow-brand-green/30',
        'outline-blue':
          'border-2 border-brand-blue/20 bg-white text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white',
        white:
          'bg-white text-brand-blue shadow-lg hover:bg-brand-green-light hover:text-brand-blue',
        'outline-white':
          'border-2 border-white/40 text-white hover:bg-white hover:text-brand-blue focus-visible:ring-white/40',
      },
      size: {
        md: 'h-11 px-5 text-sm',
        lg: 'h-13 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'green', size: 'lg' },
  },
)

type CTAVariantProps = VariantProps<typeof ctaVariants>

interface CTAButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CTAVariantProps {
  children: ReactNode
}

export function CTAButton({
  variant,
  size,
  className,
  children,
  ...props
}: CTAButtonProps) {
  return (
    <button className={cn(ctaVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  )
}

interface CTALinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    CTAVariantProps {
  children: ReactNode
}

export function CTALink({
  variant,
  size,
  className,
  children,
  ...props
}: CTALinkProps) {
  return (
    <a className={cn(ctaVariants({ variant, size, className }))} {...props}>
      {children}
    </a>
  )
}
