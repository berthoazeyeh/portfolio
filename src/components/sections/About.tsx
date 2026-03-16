'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from './SectionLabel'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="px-12 py-28">
      <SectionLabel num="01" label="À propos de moi" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Title */}
        <div>
          <h2
            className="reveal font-display leading-[0.95] tracking-tight mb-10"
            style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
          >
            Construire des choses qui{' '}
            <span className="text-[var(--color-accent)]">comptent.</span>
          </h2>

          <div className="reveal space-y-5">
            <p className="text-[16px] text-[var(--color-muted2)] leading-relaxed">
              Développeur basé au{' '}
              <span className="text-[var(--color-white)] font-medium">Cameroun</span>,
              spécialisé dans le développement{' '}
              <span className="text-[var(--color-white)] font-medium">mobile Flutter</span> et
              les applications web modernes. 3 ans d&apos;expérience en entreprise sur des
              projets à fort trafic.
            </p>
            <p className="text-[16px] text-[var(--color-muted2)] leading-relaxed">
              Mon approche :{' '}
              <span className="text-[var(--color-white)] font-medium">
                code propre, maintenable et performant
              </span>
              . Pas d&apos;over-engineering, pas de raccourcis. Juste du travail bien fait,
              livré dans les délais.
            </p>
            <p className="text-[16px] text-[var(--color-muted2)] leading-relaxed">
              Actuellement disponible pour des{' '}
              <span className="text-[var(--color-white)] font-medium">missions freelance</span>{' '}
              sur Upwork — apps mobiles, APIs, dashboards, et intégrations complexes.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--color-accent)] tracking-[1.5px] uppercase bg-[rgba(91,255,200,0.08)] border border-[rgba(91,255,200,0.2)] px-4 py-2 rounded-full mt-4">
              <span className="pulse-dot" />
              Disponible — mars 2026
            </div>
          </div>
        </div>

        {/* Code block */}
        <div className="reveal">
          <div className="bg-[var(--color-card)] border border-white/[0.07] rounded-xl p-8 font-mono text-[13px] leading-relaxed relative overflow-hidden">
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-white/[0.03] border-b border-white/[0.07]" />
            <div className="absolute top-3 left-4 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>

            <div className="mt-5 space-y-0.5">
              <p><span className="code-kw">const</span> <span className="code-fn">developer</span> <span className="code-op">=</span> {'{'}</p>
              <p>&nbsp;&nbsp;<span className="code-str">name</span><span className="code-op">:</span> <span className="code-str">&quot;AZEYE ROMEO BERTHO&quot;</span><span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;<span className="code-str">location</span><span className="code-op">:</span> <span className="code-str">&quot;Ouest, Cameroun 🇨🇲&quot;</span><span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;<span className="code-str">Contact</span><span className="code-op">:</span> <span className="code-nm">+237676804024 / +237693895845</span><span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;<span className="code-str">experience</span><span className="code-op">:</span> <span className="code-nm">3</span><span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;<span className="code-str">stacks</span><span className="code-op">:</span> [</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">&quot;Flutter&quot;</span><span className="code-op">,</span> <span className="code-str">&quot;Dart&quot;</span><span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">&quot;React&quot;</span><span className="code-op">,</span> <span className="code-str">&quot;Node.js&quot;</span></p>
              <p>&nbsp;&nbsp;]<span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;<span className="code-str">available</span><span className="code-op">:</span> <span className="code-kw">true</span><span className="code-op">,</span></p>
              <p>&nbsp;&nbsp;<span className="code-str">coffee</span><span className="code-op">:</span> <span className="code-str">&quot;required ☕&quot;</span></p>
              <p>{'}'}<span className="code-op">;</span></p>
              <br />
              <p><span className="code-cm">// Always shipping clean code.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
