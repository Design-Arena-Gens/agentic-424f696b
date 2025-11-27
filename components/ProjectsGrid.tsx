"use client"

import { motion } from 'framer-motion'

const projects = [
  { title: 'Motion Edit ? Brand Film', role: 'Lead Editor', year: '2025' },
  { title: 'Cinematic Reel', role: 'Editor', year: '2024' },
  { title: 'Music Visual ? Noir', role: 'Editor & Finishing', year: '2024' },
  { title: 'Commercial Cut ? Pulse', role: 'Editor', year: '2025' },
]

export function ProjectsGrid() {
  return (
    <div className="grid gap-4 md:gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group block rounded-lg border border-white/10 bg-surface/50 hover:border-white/20 hover:shadow-glow transition-all"
        >
          <div className="p-5 md:p-6 flex items-center justify-between">
            <div>
              <h3 className="font-sans text-base md:text-lg text-textPrimary">{p.title}</h3>
              <p className="font-mono text-xs md:text-sm text-textSecondary mt-1">{p.role}</p>
            </div>
            <span className="font-mono text-xs md:text-sm text-textSecondary">{p.year}</span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
