import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { caseStudies } from '../data/caseStudies'
import { projects } from '../data/projects'
import NotFound from './NotFound'

const sections: { key: 'challenge' | 'discovery' | 'strategy' | 'execution' | 'results'; label: string }[] = [
  { key: 'challenge', label: 'Challenge' },
  { key: 'discovery', label: 'Discovery' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'execution', label: 'Execution' },
  { key: 'results', label: 'Results' },
]

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((c) => c.slug === slug)
  if (!study) return <NotFound />
  const project = projects.find((p) => p.slug === study.projectSlug)

  return (
    <article className="pt-36 pb-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <Link to="/case-studies" className="text-sm font-medium text-[var(--accent)] hover:underline">
            ← All case studies
          </Link>
          <h1 className="mb-3 mt-6 font-display text-h1 font-bold tracking-tight">{study.title}</h1>
          <p className="mb-10 max-w-2xl text-lg text-[var(--text-secondary)]">{study.subtitle}</p>
        </Reveal>

        <div className="flex flex-col gap-8">
          {sections.map((s, i) => (
            <Reveal key={s.key} delay={i * 50}>
              <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
                <h2 className="font-display text-lg font-bold text-[var(--accent)]">{s.label}</h2>
                <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">{study[s.key]}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {project && (
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-3 border-t border-[var(--border)] pt-8">
              <Button href={`/projects/${project.slug}`} variant="outline">
                Project Details
              </Button>
              <Button href={project.github} target="_blank" rel="noreferrer" variant="ghost">
                GitHub
              </Button>
              {project.demo && (
                <Button href={project.demo} target="_blank" rel="noreferrer" variant="primary">
                  Live Demo
                </Button>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </article>
  )
}
