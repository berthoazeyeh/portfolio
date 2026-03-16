import { stats } from '@/lib/data'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-12 pt-20 pb-20 relative overflow-hidden">
      {/* Background lines */}
      <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-60 w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      {/* Side number */}
      <p
        className="absolute font-mono text-[11px] text-[var(--color-muted)] tracking-[2px]"
        style={{ top: '48%', right: '48px', writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
      >
        0 1 / 0 4
      </p>

      {/* Tag */}
      <div className="hero-tag-anim flex items-center gap-2 font-mono text-[12px] text-[var(--color-accent)] tracking-[2px] uppercase mb-6">
        <span className="w-6 h-px bg-[var(--color-accent)]" />
        Disponible pour freelance
      </div>

      {/* Title */}
      <h1
        className="hero-title-anim font-display leading-[0.92] tracking-tight mb-0"
        style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}
      >
        <span className="text-[var(--color-white)]">MOBILE</span>
        <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)' }}
        >
          &amp; WEB
        </span>
        <br />
        <span className="text-[var(--color-accent)]">DEV.</span>
      </h1>

      {/* Bottom row */}
      <div className="hero-bottom-anim flex flex-col md:flex-row items-start md:items-end justify-between mt-12 gap-8">
        <p className="max-w-sm text-[15px] text-[var(--color-muted2)] leading-relaxed">
          Développeur{' '}
          <span className="text-[var(--color-white)] font-medium">Flutter &amp; Web</span>{' '}
          avec 3+ ans d&apos;expérience en entreprise. Je construis des produits numériques
          rapides, accessibles et mémorables — de l&apos;idée au déploiement.
        </p>

        <div className="flex gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-right">
              <p
                className="font-display text-[var(--color-white)] leading-none"
                style={{ fontSize: '52px' }}
              >
                {s.num}
              </p>
              <p className="text-[11px] text-[var(--color-muted)] uppercase tracking-[1.5px] mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-anim absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-[var(--color-muted)] tracking-[2px] uppercase scroll-line">
        Scroll
      </div>
    </section>
  )
}