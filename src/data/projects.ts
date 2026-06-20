export type Project = {
  slug: string
  title: string
  category: string
  description: string
  stack: string[]
  highlights: string[]
  github: string
  demo?: string
  stars: number
  detail: {
    overview: string
    problem: string
    architecture: string
    challenges: string
    results: string
  }
}

export const projects: Project[] = [
  {
    slug: 'openbridge',
    title: 'OpenBridge',
    category: 'Resilient Networking',
    description:
      'A peer-to-peer messaging app designed to stay connected during network disruptions — local communication over WiFi/Bluetooth and secure file sharing.',
    stack: ['JavaScript', 'WebRTC', 'P2P', 'Vercel'],
    highlights: ['Offline-first', 'P2P transport', 'Secure file sharing'],
    github: 'https://github.com/hoseinrza/OpenBridge',
    demo: 'https://open-bridge-plum.vercel.app',
    stars: 1,
    detail: {
      overview:
        'OpenBridge explores how people can keep talking to each other when the internet doesn’t cooperate — outages, censorship, crowded venues, disaster zones. Instead of routing every message through a central server, devices discover each other directly over local WiFi/Bluetooth and exchange messages and files peer-to-peer.',
      problem:
        'Most chat apps assume a reliable always-on connection to a central server. That assumption breaks exactly when communication matters most: during network disruptions or in places with poor connectivity. The goal was a client that degrades gracefully to local-only communication instead of failing outright.',
      architecture:
        'A peer-to-peer transport layer handles discovery and message/file exchange directly between nearby devices, with the UI layer built to stay responsive whether a peer connection is live, reconnecting, or local-only.',
      challenges:
        'Peer discovery and connection state across an unreliable transport is inherently messier than a normal client-server request/response cycle — the UI has to honestly represent "connecting," "connected," and "lost" states instead of pretending the network is always there.',
      results:
        'Shipped as a working app with a live demo and public repo on GitHub, licensed Apache-2.0 for others to build on.',
    },
  },
  {
    slug: 'persian-pedigree',
    title: 'Persian Pedigree',
    category: 'Scientific Tooling',
    description:
      'A browser-based pedigree (family tree) application that visualizes family trees using medical genetics notation — useful for genetic counseling, teaching, or research.',
    stack: ['JavaScript', 'SVG/Canvas', 'Vercel'],
    highlights: ['Genetics notation', 'In-browser, no install', 'Teaching & research use'],
    github: 'https://github.com/hoseinrza/Persian-Pedigree',
    demo: 'https://hoseinrza-github-io.vercel.app',
    stars: 2,
    detail: {
      overview:
        'A direct intersection of the chemistry/life-sciences side and the engineering side: a tool for drawing and reading family trees using the standardized symbols geneticists and genetic counselors actually use, running entirely in the browser.',
      problem:
        'Standard genetics pedigree notation (affected/unaffected status, consanguinity, sex, generation lines) is normally drawn by hand or in heavyweight desktop software. There was no lightweight, accessible, browser-based way to build and share these diagrams quickly.',
      architecture:
        'A client-side rendering engine draws pedigree symbols and connecting lines per medical-genetics convention, driven by a structured family-tree data model that can be edited interactively.',
      challenges:
        'Faithfully encoding genetics notation (not just generic family-tree boxes) while keeping the editing interaction simple enough for teaching contexts, not just specialists.',
      results:
        'Live, publicly usable app with no install step — directly useful for genetic counseling, teaching, or research scenarios that need a quick pedigree diagram.',
    },
  },
  {
    slug: 'shoptelgram',
    title: 'ShopTelgram',
    category: 'Serverless Commerce',
    description:
      'A complete, production-ready Telegram shop bot on Cloudflare Workers + KV — serverless, no extra database, near-zero cost on the free tier. Full Persian UI.',
    stack: ['Cloudflare Workers', 'TypeScript', 'Telegram Bot API', 'Cloudflare KV'],
    highlights: ['Serverless', 'No database needed', 'Full admin panel', 'MIT licensed'],
    github: 'https://github.com/hoseinrza/shoptelgram',
    stars: 2,
    detail: {
      overview:
        'A full e-commerce experience built entirely inside a Telegram bot: product browsing by category, cart, order placement and tracking, customer support, and a complete admin panel for managing products, orders, sales stats, and broadcasts — all in Persian.',
      problem:
        'Small Persian-speaking merchants often want to sell through Telegram (where their customers already are) without paying for servers or managing a database. The goal was a shop that runs essentially for free and requires no backend infrastructure to maintain.',
      architecture:
        'Built on Cloudflare Workers as the compute layer and Cloudflare KV as the only persistence layer — no separate database. The bot logic, cart/order state, and admin panel all read and write through KV, keeping the whole system serverless and near-zero cost on Cloudflare’s free tier.',
      challenges:
        'Modeling a shopping cart, order lifecycle, and an admin panel’s worth of CRUD operations on top of a key-value store instead of a relational database forces careful data modeling to keep lookups fast and consistent.',
      results:
        'A working, MIT-licensed, production-ready bot covering the full merchant + customer flow, deployable by anyone on Cloudflare’s free tier.',
    },
  },
  {
    slug: 'examhub',
    title: 'ExamHub',
    category: 'EdTech',
    description:
      'A lightweight online examination system — question banks, exam management, and timed MCQ tests with automatic scoring and instant results, with WordPress/PHP integration.',
    stack: ['PHP', 'MySQL', 'WordPress', 'JavaScript'],
    highlights: ['Question banks', 'Auto-scoring', 'WordPress integration'],
    github: 'https://github.com/hoseinrza/examhub',
    stars: 2,
    detail: {
      overview:
        'An online examination system aimed at admins who need to build question banks, assemble exams from them, and assign those exams to students — who then take timed multiple-choice tests with scoring handled automatically.',
      problem:
        'Many small schools and tutoring setups already run on WordPress and don’t want a separate exam platform to manage. ExamHub integrates exam-taking directly into that existing WordPress/PHP/MySQL environment via custom tables and shortcodes.',
      architecture:
        'Question banks and exam assignments are modeled in custom database tables, with shortcodes exposing the exam-taking flow inside WordPress pages — letting an exam live alongside ordinary site content instead of a separate app.',
      challenges:
        'Timed scoring and exam-state integrity (preventing re-takes, handling interrupted sessions) needed to be reliable even though the platform is general-purpose WordPress rather than a purpose-built exam server.',
      results:
        'A reusable exam-taking and grading flow that plugs into WordPress sites without standing up separate infrastructure.',
    },
  },
]
