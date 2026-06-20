import clsx from 'clsx'

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full border border-[var(--border)] bg-[var(--accent)]/[0.08] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
