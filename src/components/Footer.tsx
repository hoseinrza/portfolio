import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 text-center text-sm text-[var(--text-muted)] sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-[var(--accent)]">{site.name}</span> —{' '}
          {site.role}
        </p>
        <div className="flex gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">
            GitHub
          </a>
          <a href={site.telegram} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">
            Telegram
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-[var(--text-primary)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
