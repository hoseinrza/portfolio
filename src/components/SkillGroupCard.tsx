import { motion } from 'framer-motion'
import type { SkillGroup } from '../data/skills'

export default function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass glass-card rounded-2xl p-6 shadow-elev1 hover:shadow-elev2"
    >
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        {group.category}
      </h4>
      <div className="mb-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-[13px] font-medium text-[var(--text-secondary)] dark:bg-white/5"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-[var(--text-muted)]">
        <span className="font-semibold text-[var(--text-secondary)]">Evidence: </span>
        {group.evidence}
      </p>
    </motion.div>
  )
}
