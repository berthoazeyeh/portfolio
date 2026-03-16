'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { socialLinks } from '@/lib/data'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="px-12 py-36 text-center">
      <div ref={ref}>
        <p className="reveal font-mono text-[12px] text-[var(--color-muted)] tracking-[3px] uppercase mb-8">
          Prêt à collaborer
        </p>

        <h2
          className="reveal font-display leading-[0.9] tracking-tight mb-12"
          style={{ fontSize: 'clamp(64px, 10vw, 140px)' }}
        >
          Travaillons
          <br />
          <span className="text-[var(--color-accent)]">ensemble.</span>
        </h2>

        {/* CTA buttons */}
        <div className="reveal flex justify-center gap-4 flex-wrap mb-20">
          <a
            href="mailto:berthoazeye21@gmail.com"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-wider uppercase no-underline px-7 py-3.5 rounded-sm bg-[var(--color-accent)] text-[var(--color-black)] cursor-none transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
          >
            ✉ M&apos;envoyer un email
          </a>
          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-wider uppercase no-underline px-7 py-3.5 rounded-sm bg-transparent text-[var(--color-white)] border border-white/20 cursor-none transition-all duration-200 hover:border-white/60 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            ↗ Profil Upwork
          </a>
        </div>

        {/* Social links */}
        <div className="reveal flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-[var(--color-muted)] tracking-[1.5px] uppercase no-underline cursor-none transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
