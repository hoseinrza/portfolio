import { motion } from 'framer-motion'

export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass glass-card rounded-2xl p-6 shadow-elev1 hover:shadow-elev2"
    >
      <span className="block text-3xl font-bold tracking-tight text-[var(--accent)]">{value}</span>
      <span className="mt-1 block text-sm font-medium text-[var(--text-muted)]">{label}</span>
    </motion.div>
  )
}
