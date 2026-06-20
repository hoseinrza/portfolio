import { type ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  href?: string
  to?: string
  variant?: 'primary' | 'outline' | 'ghost'
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  target,
  rel,
}: Props) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants: Record<string, string> = {
    primary:
      'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-elev2',
    outline:
      'border border-[var(--border)] text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-elev1',
    ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
  }
  const cls = clsx(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} target={target} rel={rel}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
