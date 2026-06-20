import Reveal from '../components/Reveal'
import { site } from '../data/site'

const categories = ['Programming', 'Web Development', 'Chemistry', 'Technology', 'Machine Learning']

export default function Blog() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Blog
          </span>
          <h1 className="mb-4 font-display text-h1 font-bold tracking-tight">Writing, Soon</h1>
          <p className="mb-10 max-w-xl text-lg text-[var(--text-secondary)]">
            No articles published yet — this section is reserved for write-ups on programming, web development,
            chemistry, and machine learning as I publish them.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)]"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-2xl border border-dashed border-[var(--border)] p-10 text-center text-[var(--text-muted)]">
            First article in progress. In the meantime,{' '}
            <a href={site.github} target="_blank" rel="noreferrer" className="font-medium text-[var(--accent)] hover:underline">
              check out the code on GitHub
            </a>
            .
          </div>
        </Reveal>
      </div>
    </section>
  )
}
