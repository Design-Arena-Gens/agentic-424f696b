import { Hero3D } from '@/components/Hero3D'
import { Nav } from '@/components/Nav'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { Section } from '@/components/Section'

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero3D />
      <Section title="Selected Work" id="work">
        <ProjectsGrid />
      </Section>
      <Section title="About" id="about">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7 space-y-4 text-textSecondary">
            <p className="font-sans leading-relaxed">
              I am Jeshua David, a Video Editor and Visual Storyteller crafting cinematic narratives with editorial precision and immersive 3D depth.
              My approach blends rhythm, typography, and spatial motion to deliver emotionally resonant stories.
            </p>
            <p className="font-sans leading-relaxed">
              Tools include Adobe Premiere Pro, After Effects, Davinci Resolve, and bespoke workflows for finishing, color, and sound.
            </p>
          </div>
          <div className="md:col-span-5 space-y-2 text-sm text-textSecondary/80">
            <div className="flex justify-between border-b border-white/10 py-2"><span>Role</span><span className="font-mono text-textPrimary">Video Editor</span></div>
            <div className="flex justify-between border-b border-white/10 py-2"><span>Focus</span><span className="font-mono text-textPrimary">Narrative | Commercial | Music</span></div>
            <div className="flex justify-between border-b border-white/10 py-2"><span>Location</span><span className="font-mono text-textPrimary">Remote / On-site</span></div>
          </div>
        </div>
      </Section>
      <Section title="Contact" id="contact">
        <div className="max-w-xl text-textSecondary">
          <p className="mb-4">Open to collaborations and new projects. Let?s craft something memorable.</p>
          <div className="flex gap-3">
            <a href="mailto:hello@jeshuadavid.com" className="px-4 py-2 rounded border border-white/10 hover:border-white/20 transition-colors">Email</a>
            <a href="#" className="px-4 py-2 rounded border border-white/10 hover:border-white/20 transition-colors">Instagram</a>
            <a href="#" className="px-4 py-2 rounded border border-white/10 hover:border-white/20 transition-colors">Vimeo</a>
          </div>
        </div>
      </Section>
    </main>
  )
}
