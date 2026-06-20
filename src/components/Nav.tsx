import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useTheme } from '../lib/useTheme'
import { site } from '../data/site'

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className="glass-strong fixed top-0 left-0 right-0 z-50 shadow-[0_1px_0_rgba(255,255,255,0.4)]">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          Amirhossein<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            {links.map((l) => (
              <li key={l.href} className="group relative">
                <a href={l.href} className="transition-colors hover:text-[var(--text-primary)]">
                  {l.label}
                </a>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-250 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold transition-all duration-250 hover:-translate-y-0.5 hover:border-[var(--accent)] sm:inline-flex"
          >
            Let's Talk
          </a>
          <motion.button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={theme === 'dark'}
            role="switch"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--border)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={clsx(
          'glass overflow-hidden border-t border-[var(--border)] transition-all duration-300 md:hidden',
          open ? 'max-h-96 py-4' : 'max-h-0 py-0',
        )}
      >
        <ul className="flex flex-col gap-3 px-6 text-sm font-medium text-[var(--text-secondary)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
