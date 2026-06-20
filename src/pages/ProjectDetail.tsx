import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { projects } from '../data/projects'
import NotFound from './NotFound'

const sections: { key: keyof (typeof projects)[number]['detail']; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'problem', label: 'Problem' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'challenges', label: 'Challenges & Solutions' },
  { key: 'results', label: 'Results' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <NotFound />

  return (
    <article className="pt-36 pb-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <Link to="/#projects" className="text-sm font-medium text-[var(--accent)] hover:underline">
            ← All projects
          </Link>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            {project.category}
          </span>
          <h1 className="mb-4 mt-2 font-display text-h1 font-bold tracking-tight">{project.title}</h1>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>
          <div className="mb-12 flex flex-wrap gap-3">
            <Button href={project.github} target="_blank" rel="noreferrer" variant="outline">
              View on GitHub
            </Button>
            {project.demo && (
              <Button href={project.demo} target="_blank" rel="noreferrer" variant="primary">
                Live Demo
              </Button>
            )}
          </div>
        </Reveal>

        <div className="mb-12 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm font-medium text-[var(--text-secondary)]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.key} delay={i * 50} className={s.key === 'overview' ? 'md:col-span-2' : ''}>
              <div className="glass glass-card rounded-2xl p-7">
                <h2 className="mb-3 font-display text-xl font-bold">{s.label}</h2>
                <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">{project.detail[s.key]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  )
}
