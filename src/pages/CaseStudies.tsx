import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Case Studies
          </span>
          <h1 className="mb-4 font-display text-h1 font-bold tracking-tight">From Problem to Product</h1>
          <p className="mb-14 max-w-xl text-lg text-[var(--text-secondary)]">
            A closer look at how two real projects went from an identified gap to a deployed, working tool.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                to={`/case-studies/${c.slug}`}
                className="glass glass-card block rounded-2xl p-8 transition-all duration-250 hover:-translate-y-1 hover:shadow-elev3"
              >
                <h2 className="mb-2 font-display text-2xl font-bold">{c.title}</h2>
                <p className="mb-4 text-[var(--text-secondary)]">{c.subtitle}</p>
                <span className="text-sm font-semibold text-[var(--accent)]">Read case study →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
