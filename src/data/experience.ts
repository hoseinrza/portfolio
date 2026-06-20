export type ExperienceItem = {
  year: string
  role: string
  context: string
  points: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    year: '2026',
    role: 'Frontend Developer + WordPress Developer',
    context: 'Tamland',
    points: [
      'Developing and maintaining WordPress-based educational systems',
      'Building frontend UI components for dynamic content platforms',
      'Implementing widget-based filtering systems (category → subcategory → content)',
      'Optimizing performance for large datasets and high-traffic pages',
      'Collaborating on UI/UX improvements and system architecture',
    ],
    tech: ['WordPress', 'PHP', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'WooCommerce'],
  },
  {
    year: '2025',
    role: 'Professional Development & Production Systems',
    context: 'Independent / freelance work',
    points: [
      'Worked on large-scale educational and web systems',
      'Developed plugin-based architectures for WordPress/WooCommerce',
      'Improved system performance and modular design',
      'Focused on scalable frontend architecture and UX optimization',
    ],
    tech: ['React', 'Next.js', 'Django', 'WordPress Advanced', 'System Design'],
  },
  {
    year: '2024',
    role: 'Educational Systems & Full-Stack Transition',
    context: 'Independent projects',
    points: [
      'Built educational platforms and exam/archive systems',
      'Designed filtering systems and structured data architectures',
      'Started backend integration with Django',
      'Focused on scalable UI/UX systems',
    ],
    tech: ['Django', 'Python', 'REST APIs', 'System Design', 'UI Architecture'],
  },
  {
    year: '2023',
    role: 'Advanced Frontend & WordPress Development',
    context: 'Independent projects',
    points: [
      'Started building production-ready websites',
      'Developed WordPress-based solutions and custom functionality',
      'Built UI components and reusable layouts',
      'Improved performance and code organization',
    ],
    tech: ['WordPress', 'PHP basics', 'UI Components', 'JavaScript (Advanced)'],
  },
  {
    year: '2022',
    role: 'Frontend Development Foundation',
    context: 'Self-taught',
    points: [
      'Built multiple frontend projects with responsive design',
      'Started working with JavaScript in real projects',
      'Learned DOM manipulation and API integration basics',
      'Developed first interactive web applications',
    ],
    tech: ['JavaScript', 'Responsive UI', 'Basic APIs'],
  },
  {
    year: '2021',
    role: 'Start of Web Development Journey',
    context: 'Self-taught',
    points: [
      'Started learning programming fundamentals (HTML, CSS, JavaScript)',
      'Built first static websites and UI experiments',
      'Focused on understanding web structure and responsive design',
      'Learned basic problem solving in programming',
    ],
    tech: ['HTML', 'CSS', 'JavaScript Basics'],
  },
]
