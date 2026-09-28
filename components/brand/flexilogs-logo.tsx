import { cn } from '@/lib/utils'

type LogoVariant = 'color' | 'white'

interface LogoMarkProps {
  variant?: LogoVariant
  className?: string
}

/**
 * Isotype (cube mark) only. Recreated from the official FlexiLogs brand mark:
 * an isometric cube built from the deep-blue, main-green and light-green
 * palette. Colors and proportions must not be altered.
 */
export function FlexilogsMark({ variant = 'color', className }: LogoMarkProps) {
  const top = variant === 'white' ? '#FFFFFF' : '#A7F3D0'
  const left = variant === 'white' ? 'rgba(255,255,255,0.55)' : '#0B2545'
  const right = variant === 'white' ? 'rgba(255,255,255,0.82)' : '#00C389'

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-9 w-9', className)}
      role="img"
      aria-label="Isotipo de FlexiLogs"
    >
      <path d="M24 5 L41 15 L24 25 L7 15 Z" fill={top} />
      <path d="M7 15 L24 25 L24 43 L7 33 Z" fill={left} />
      <path d="M41 15 L24 25 L24 43 L41 33 Z" fill={right} />
    </svg>
  )
}

interface LogoProps {
  variant?: LogoVariant
  showTagline?: boolean
  className?: string
  markClassName?: string
}

/**
 * Full FlexiLogs logo: cube mark + "Flexilogs" wordmark (Poppins).
 * "Flexi" uses deep blue and "logs" uses main green in the color variant.
 */
export function FlexilogsLogo({
  variant = 'color',
  showTagline = false,
  className,
  markClassName,
}: LogoProps) {
  const flexiColor = variant === 'white' ? 'text-white' : 'text-brand-blue'
  const logsColor = variant === 'white' ? 'text-brand-green-light' : 'text-brand-green'
  const taglineColor = variant === 'white' ? 'text-white/70' : 'text-brand-muted'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <FlexilogsMark variant={variant} className={markClassName} />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight md:text-2xl">
          <span className={flexiColor}>Flexi</span>
          <span className={logsColor}>logs</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              'mt-1 text-[8px] font-semibold uppercase tracking-[0.22em]',
              taglineColor,
            )}
          >
            Espacio cuando lo necesitas
          </span>
        )}
      </span>
    </span>
  )
}
