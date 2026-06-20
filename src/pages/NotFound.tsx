import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <h1 className="font-display text-h2 font-bold">404 — Page not found</h1>
      <p className="mt-3 text-[var(--text-secondary)]">That page doesn't exist.</p>
      <Link to="/" className="mt-6 font-semibold text-[var(--accent)] hover:underline">
        ← Back home
      </Link>
    </section>
  )
}
