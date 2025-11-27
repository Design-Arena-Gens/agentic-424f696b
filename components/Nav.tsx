"use client"

import { motion } from 'framer-motion'
import { Camera, Clapperboard } from 'lucide-react'

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/30 border-b border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard className="w-5 h-5 text-accentGlow" />
          <span className="font-mono text-sm tracking-tight text-textSecondary">Video Editor</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-textSecondary">
          <a href="#work" className="hover:text-textPrimary transition-colors">Work</a>
          <a href="#about" className="hover:text-textPrimary transition-colors">About</a>
          <a href="#contact" className="hover:text-textPrimary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-textSecondary" />
        </div>
      </div>
    </motion.header>
  )
}
