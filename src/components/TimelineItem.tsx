import { motion } from 'framer-motion'
import type { ExperienceItem } from '../data/experience'

export default function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="glass glass-card grid grid-cols-1 gap-2 rounded-2xl p-6 shadow-elev1 hover:shadow-elev2 sm:grid-cols-[120px_1fr] sm:gap-8"
    >
      <div className="text-sm font-bold text-[var(--accent)]">{item.year}</div>
      <div>
        <div className="font-display text-lg font-bold">{item.role}</div>
        <div className="mb-3 text-sm font-medium text-[var(--text-secondary)]">{item.context}</div>
        <ul className="mb-4 space-y-1.5">
          {item.points.map((p) => (
            <li key={p} className="relative pl-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              <span className="absolute left-0 text-[var(--accent)]">·</span>
              {p}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--border)]/50 px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
