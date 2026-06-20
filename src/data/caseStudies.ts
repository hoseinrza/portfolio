export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  projectSlug: string
  challenge: string
  discovery: string
  strategy: string
  execution: string
  results: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'openbridge',
    title: 'OpenBridge',
    subtitle: 'Keeping people connected when the network fails',
    projectSlug: 'openbridge',
    challenge:
      'Chat apps assume a reliable connection to a central server. That assumption fails exactly when communication matters most — during outages, in disaster zones, or in crowded venues with congested networks.',
    discovery:
      'Looking at how existing messaging apps fail under disruption, the common pattern was a hard dependency on server reachability: no server, no messaging, full stop. Local device-to-device transports (WiFi Direct, Bluetooth) are available on almost every phone but go unused by mainstream chat apps.',
    strategy:
      'Build a peer-to-peer transport as the foundation rather than an add-on — design the app to treat "no server" as a normal operating mode, not an error state, and let devices discover and talk to each other directly.',
    execution:
      'Implemented peer discovery and direct message/file exchange over local WiFi/Bluetooth, with a UI that surfaces real connection state (connecting / connected / local-only) instead of hiding it behind a generic spinner.',
    results:
      'A working, publicly deployed app (open-bridge-plum.vercel.app) and an open-source repo under Apache-2.0, demonstrating that resilient, server-optional messaging is practical to build as a focused side project.',
  },
  {
    slug: 'persian-pedigree',
    title: 'Persian Pedigree',
    subtitle: 'Bringing standardized genetics notation to the browser',
    projectSlug: 'persian-pedigree',
    challenge:
      'Genetic counselors, teachers, and researchers draw pedigree charts using a standardized medical notation — but the available tools are either desktop-only, expensive, or generic family-tree apps that don’t support the actual genetics symbols.',
    discovery:
      'Reviewing how pedigree charts are taught and used in genetics contexts surfaced a clear gap: nothing lightweight existed that ran directly in a browser with zero install, while staying faithful to medical-genetics conventions (affected/unaffected, consanguinity, sex, generation lines).',
    strategy:
      'Treat the chart as a structured data model first — family relationships and clinical attributes — then render that model using correct pedigree symbols, so the tool is accurate enough for clinical/teaching use, not just visually similar.',
    execution:
      'Built a client-side rendering engine for pedigree symbols and generation lines driven by an editable family-tree data model, deployed as a static, no-install web app.',
    results:
      'A live, freely usable tool (hoseinrza-github-io.vercel.app) that lets anyone build a clinically-notated pedigree chart in the browser — directly bridging the chemistry/life-sciences background with frontend engineering.',
  },
]
