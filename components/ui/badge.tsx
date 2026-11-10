import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeTone = 'green' | 'blue' | 'light' | 'outline' | 'dark'

const toneStyles: Record<BadgeTone, string> = {
  green: 'bg-brand-green/12 text-brand-green-600',
  blue: 'bg-brand-blue/10 text-brand-blue',
  light: 'bg-brand-green-light/40 text-brand-blue',
  outline: 'border border-brand-gray bg-white text-brand-muted',
  dark: 'bg-white/10 text-brand-green-light ring-1 ring-white/15',
}

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

export function Badge({ children, tone = 'green', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
