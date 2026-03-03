import type { CSSProperties, PropsWithChildren } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export type RevealVariant = 'up' | 'left' | 'scale'

interface ScrollRevealProps extends PropsWithChildren {
  /** Transition delay in milliseconds */
  delay?: number
  variant?: RevealVariant
  className?: string
  style?: CSSProperties
}

/**
 * Wraps children in a div that fades/slides into view once it enters
 * the viewport. Fires once and disconnects the observer.
 */
export function ScrollReveal({
  children,
  delay,
  variant = 'up',
  className,
  style,
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  const revealClass = variant === 'up' ? 'reveal' : `reveal-${variant}`
  const classes = [revealClass, className].filter(Boolean).join(' ')

  const combinedStyle: CSSProperties = {
    ...style,
    ...(delay != null ? { transitionDelay: `${delay}ms` } : {}),
  }

  return (
    <div ref={ref} className={classes} style={combinedStyle}>
      {children}
    </div>
  )
}
