import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge tone="green" className={cn(align === 'center' && 'mx-auto')}>
            <span className="text-[11px] font-bold uppercase tracking-wider">{eyebrow}</span>
          </Badge>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={cn('mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl', light ? 'text-white' : 'text-brand-blue')}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className={cn('mt-4 text-pretty text-lg leading-relaxed', light ? 'text-white/75' : 'text-brand-muted')}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
