'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { projects } from '@/lib/data'

function MockUI() {
  return (
    <div className="w-[90%] h-[90%]">
      <div className="h-7 bg-white/[0.04] rounded-t-lg border-b border-white/[0.07] flex items-center px-3 gap-1.5">
        <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
        <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
        <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="h-2 rounded bg-[rgba(91,255,200,0.15)] w-3/5" />
        <div className="h-2 rounded bg-white/[0.06] w-3/4" />
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          <div className="h-12 rounded bg-[rgba(91,255,200,0.08)]" />
          <div className="h-12 rounded bg-white/[0.04]" />
          <div className="h-12 rounded bg-white/[0.04]" />
          <div className="h-12 rounded bg-[rgba(255,107,107,0.08)]" />
        </div>
        <div className="h-2 rounded bg-white/[0.04] w-2/5 mt-1" />
        <div className="h-2 rounded bg-white/[0.06] w-3/4" />
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="px-12 py-28">
      <SectionLabel num="03" label="Projets" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <h2
          className="font-display leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          Travaux récents.
        </h2>
        <p className="text-[14px] text-[var(--color-muted2)] max-w-[260px] md:text-right">
          Une sélection de projets mobiles et web livrés en production.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href ?? '#'}
            className={`reveal bg-[var(--color-card)] border border-white/[0.07] rounded-2xl p-10 relative overflow-hidden transition-all duration-250 cursor-none no-underline text-inherit hover:border-white/[0.12] hover:-translate-y-1 group ${
              project.featured ? 'md:col-span-2 grid md:grid-cols-2 md:gap-12 items-center' : ''
            }`}
          >
            {/* Arrow */}
            <span className="absolute top-6 right-6 text-[18px] text-[var(--color-muted)] transition-all duration-200 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>

            {/* Info */}
            <div>
              <p className="font-mono text-[11px] text-[var(--color-muted)] tracking-[2px] mb-5">
                {project.num}
              </p>
              <h3
                className="font-display leading-none mb-3.5"
                style={{ fontSize: '38px' }}
              >
                {project.title}
              </h3>
              <p className="text-[14px] text-[var(--color-muted2)] leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-white/[0.05] text-[var(--color-muted2)] border border-white/[0.07]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual — only for featured */}
            {project.featured && (
              <div className="hidden md:flex aspect-[16/10] rounded-xl bg-[var(--color-surface)] border border-white/[0.07] items-center justify-center overflow-hidden">
                <MockUI />
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
