import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Badge from '../components/Badge'
import MolecularBackground from '../components/MolecularBackground'
import ProjectCard from '../components/ProjectCard'
import StatCard from '../components/StatCard'
import SkillGroupCard from '../components/SkillGroupCard'
import TimelineItem from '../components/TimelineItem'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { experience } from '../data/experience'

const journeyYears = new Date().getFullYear() - site.journeyStartYear

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>Frontend &amp; Full Stack Developer</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {site.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-xl font-medium text-[var(--text-secondary)]"
          >
            Frontend Engineer &amp; Full Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            {site.bio} Building scalable, performant, user-focused digital products — with a Chemistry
            background that shapes how I break down problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href={site.github} target="_blank" rel="noreferrer" variant="outline">
              GitHub Profile
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              [`${projects.length}`, 'Featured Projects'],
              [`${journeyYears}+`, 'Years Building'],
              ['Frontend', 'Specialist'],
              ['Chemistry', 'Student'],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-[var(--accent)]">{v}</div>
                <div className="text-xs font-medium text-[var(--text-muted)]">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <MolecularBackground className="absolute -z-10 h-[420px] w-[420px] opacity-60" />
          <CodeCard />
        </div>
      </div>
    </section>
  )
}

function CodeCard() {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="glass glass-card w-full max-w-md rounded-2xl p-7 font-mono text-[13px] leading-7 shadow-elev3"
    >
      <pre className="overflow-x-auto">
        <code>
          <span className="text-[var(--accent)]">const</span> developer = {'{'}
          {'\n'}  name: <span className="text-emerald-500">'Amirhossein'</span>,{'\n'}  background:{' '}
          <span className="text-emerald-500">'Chemistry'</span>,{'\n'}  focus:{' '}
          <span className="text-emerald-500">'Frontend · Full Stack'</span>,{'\n'}  stack: [
          <span className="text-emerald-500">'React'</span>, <span className="text-emerald-500">'Django'</span>,{' '}
          <span className="text-emerald-500">'WordPress'</span>],{'\n'}  <span className="italic text-[var(--text-muted)]">
            // science meets software
          </span>
          {'\n'}
          {'}'};
        </code>
      </pre>
    </motion.figure>
  )
}

function SocialProof() {
  const items = [
    [`${projects.length}`, 'Real Projects Shipped'],
    ['8+', 'Technologies Used'],
    [`${journeyYears}+`, 'Years of Development'],
    ['MIT/Apache', 'Open Source Licensed'],
  ]
  return (
    <section className="glass border-y border-[var(--border)] py-10">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-6 sm:grid-cols-4">
        {items.map(([v, l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-2xl font-bold">{v}</div>
            <div className="text-xs font-medium text-[var(--text-muted)]">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Projects
          </span>
          <h2 className="mb-4 font-display text-h2 font-bold">Real, Shipped Work</h2>
          <p className="mb-12 max-w-xl text-lg text-[var(--text-secondary)]">
            Public, working projects pulled straight from GitHub — serverless commerce, resilient networking,
            scientific tooling, and EdTech.
          </p>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--border)] py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Skills
          </span>
          <h2 className="mb-4 font-display text-h2 font-bold">Engineering Toolkit</h2>
          <p className="mb-12 max-w-xl text-lg text-[var(--text-secondary)]">
            Proficiency shown through shipped projects, not progress bars.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.category} delay={i * 60}>
              <SkillGroupCard group={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--border)] py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Experience
          </span>
          <h2 className="mb-4 font-display text-h2 font-bold">Developer Journey</h2>
          <p className="mb-12 max-w-xl text-lg text-[var(--text-secondary)]">
            From first HTML pages in {site.journeyStartYear} to production WordPress, React, and Django systems
            today.
          </p>
        </Reveal>
        <div className="flex max-w-3xl flex-col gap-5">
          {experience.map((item, i) => (
            <Reveal key={item.year} delay={i * 50}>
              <TimelineItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="border-t border-[var(--border)] py-24">
      <div className="mx-auto grid max-w-content gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            About
          </span>
          <h2 className="mb-5 font-display text-h2 font-bold">{site.tagline}</h2>
          <div className="space-y-4 text-[17px] leading-relaxed text-[var(--text-secondary)]">
            <p>
              I'm a Chemistry student and self-taught developer based in {site.location}. My path into software
              started in {site.journeyStartYear} with plain HTML and CSS, and has grown into building full
              production systems — frontend, backend, and CMS — for real users.
            </p>
            <p>
              I currently work as a <strong>Frontend &amp; WordPress Developer at Tamland</strong>, building
              dynamic content platforms and filtering systems for educational products. Outside of work, I build
              independent projects spanning serverless commerce, resilient peer-to-peer networking, and tools that
              connect my science background to software — like a browser-based genetics pedigree visualizer.
            </p>
            <p>
              A Chemistry background means I approach engineering problems the way I'd approach an experiment:
              break the problem down, form a hypothesis, test it, and iterate based on what the data shows.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-4">
            <StatCard value={`${projects.length}`} label="Public Projects Shipped" />
            <StatCard value={`${journeyYears}+`} label="Years Developing" />
            <StatCard value="2" label="Major Stacks (JS/React + Django/Python)" />
            <StatCard value="3" label="CMS / Serverless Platforms" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  function validate() {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please include a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}${form.company ? ` (${form.company})` : ''}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-[var(--border)] py-24">
      <div className="mx-auto grid max-w-content gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Contact
          </span>
          <h2 className="mb-5 font-display text-h2 font-bold">Let's Build Together</h2>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 text-sm font-medium text-[var(--success)]">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]" /> Open to roles &amp; freelance work
          </p>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-[var(--text-secondary)]">
            Open to frontend/full-stack roles, freelance projects, and technical collaborations. If you're
            building something ambitious, let's talk.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={site.github} target="_blank" rel="noreferrer" variant="outline">
              GitHub
            </Button>
            <Button href={site.telegram} target="_blank" rel="noreferrer" variant="outline">
              Telegram {site.telegramHandle}
            </Button>
            <Button href={`mailto:${site.email}`} variant="outline">
              Email
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4" aria-label="Contact form">
            {(['name', 'email', 'company', 'message'] as const).map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="mb-1.5 text-sm font-medium text-[var(--text-secondary)] capitalize">
                  {field === 'company' ? 'Company (optional)' : field}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    rows={5}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="glass rounded-xl px-4 py-3 text-[15px] outline-none transition-shadow focus:shadow-glow"
                  />
                ) : (
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="glass rounded-xl px-4 py-3 text-[15px] outline-none transition-shadow focus:shadow-glow"
                  />
                )}
                {errors[field] && <span className="mt-1 text-xs text-red-500">{errors[field]}</span>}
              </div>
            ))}
            <Button type="submit" variant="primary" className="self-start">
              Send Message
            </Button>
            <div role="status" aria-live="polite" className="text-sm text-[var(--success)]">
              {sent && 'Opening your email client…'}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
