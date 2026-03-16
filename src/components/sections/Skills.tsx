'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { skills } from '@/lib/data'
import type { Skill } from '@/types'

const variantStyles: Record<Skill['variant'], { card: string; icon: string; bar: string; tag: string }> = {
  green: {
    card: 'hover:border-[var(--color-accent)]/30 group/green',
    icon: 'bg-[rgba(91,255,200,0.1)] text-[var(--color-accent)]',
    bar: 'bg-[var(--color-accent)]',
    tag: 'group-hover/green:text-[var(--color-white)] group-hover/green:border-white/20',
  },
  red: {
    card: 'hover:border-[var(--color-accent2)]/30 group/red',
    icon: 'bg-[rgba(255,107,107,0.1)] text-[var(--color-accent2)]',
    bar: 'bg-[var(--color-accent2)]',
    tag: 'group-hover/red:text-[var(--color-white)] group-hover/red:border-white/20',
  },
  yellow: {
    card: 'hover:border-[var(--color-accent3)]/30 group/yellow',
    icon: 'bg-[rgba(255,209,102,0.1)] text-[var(--color-accent3)]',
    bar: 'bg-[var(--color-accent3)]',
    tag: 'group-hover/yellow:text-[var(--color-white)] group-hover/yellow:border-white/20',
  },
  blue: {
    card: 'hover:border-[#5b8fff]/30 group/blue',
    icon: 'bg-[rgba(91,143,255,0.1)] text-[#5b8fff]',
    bar: 'bg-[#5b8fff]',
    tag: 'group-hover/blue:text-[var(--color-white)] group-hover/blue:border-white/20',
  },
}

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="bg-[var(--color-surface)] px-12 py-28">
      <SectionLabel num="02" label="Compétences" />

      <h2
        className="font-display leading-[0.95] tracking-tight mb-16"
        style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
      >
        Ce que je maîtrise.
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.07] rounded-2xl overflow-hidden gap-px bg-white/[0.07]"
      >
        {skills.map((skill) => {
          const s = variantStyles[skill.variant]
          return (
            <div
              key={skill.name}
              className={`reveal bg-[var(--color-card)] p-10 relative overflow-hidden transition-colors duration-200 hover:bg-[#151924] group ${s.card}`}
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${s.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-xl ${s.icon}`}>
                {skill.icon}
              </div>

              <h3 className="text-[17px] font-semibold mb-2.5">{skill.name}</h3>
              <p className="text-[13px] text-[var(--color-muted2)] leading-relaxed mb-5">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded border border-white/10 text-[var(--color-muted2)] transition-all duration-200 ${s.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
