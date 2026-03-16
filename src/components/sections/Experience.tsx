'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { experiences } from '@/lib/data'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="bg-[var(--color-surface)] px-12 py-28">
      <SectionLabel num="04" label="Expérience" />

      <h2
        className="font-display leading-[0.95] tracking-tight mb-16"
        style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
      >
        Parcours professionnel.
      </h2>

      <div ref={ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal pl-12 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-black)] border-2 border-white/20 transition-colors duration-200 group-hover:border-[var(--color-accent)]" />

              <p className="font-mono text-[11px] text-[var(--color-accent)] tracking-[1.5px] uppercase mb-2.5">
                {exp.period}
              </p>
              <h3 className="text-[20px] font-semibold mb-1">{exp.role}</h3>
              <p className="text-[14px] text-[var(--color-muted2)] mb-4">
                {exp.company} · {exp.location}
              </p>
              <p className="text-[14px] text-[var(--color-muted2)] leading-relaxed max-w-xl">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded border border-white/10 text-[var(--color-muted2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
