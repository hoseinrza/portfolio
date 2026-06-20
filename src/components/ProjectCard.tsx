import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="glass glass-card group flex flex-col rounded-2xl p-7 shadow-elev1 hover:shadow-elev3"
    >
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[var(--border)]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          {project.category}
        </span>
        <span className="text-xs font-medium text-[var(--text-muted)]">{project.stack.slice(0, 3).join(' · ')}</span>
      </div>

      <h3 className="mb-2 font-display text-xl font-bold tracking-tight">
        <Link to={`/projects/${project.slug}`} className="hover:text-[var(--accent)]">
          {project.title}
        </Link>
      </h3>

      <p className="mb-5 flex-1 text-[15px] leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="rounded-full border border-[var(--border)] bg-[var(--accent)]/[0.08] px-3 py-0.5 text-[11px] font-medium text-[var(--accent)]"
          >
            {h}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 border-t border-[var(--border)] pt-4 text-sm font-medium">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">
            Live Demo
          </a>
        )}
        <Link to={`/projects/${project.slug}`} className="ml-auto text-[var(--text-muted)] hover:text-[var(--text-primary)]">
          Details →
        </Link>
      </div>
    </motion.div>
  )
}
