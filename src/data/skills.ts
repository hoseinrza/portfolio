export type SkillGroup = {
  category: string
  items: string[]
  evidence: string
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    evidence: 'OpenBridge, Persian Pedigree, Tamland dynamic content platforms',
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'REST APIs', 'PHP'],
    evidence: 'Educational/exam systems, archive & filtering architectures',
  },
  {
    category: 'Serverless & Infra',
    items: ['Cloudflare Workers', 'Cloudflare KV', 'Vercel'],
    evidence: 'ShopTelgram — full commerce bot with zero dedicated database/server',
  },
  {
    category: 'CMS',
    items: ['WordPress', 'WooCommerce', 'Custom Plugin Development'],
    evidence: 'ExamHub, Tamland educational platforms, plugin-based WooCommerce architectures',
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Key-Value (KV)'],
    evidence: 'Custom table design for exam systems; KV-modeled commerce data',
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Docker'],
    evidence: 'Day-to-day version control, UI design handoff, and environment setup',
  },
]
