import { marqueeItems } from '@/lib/data'

const row1 = marqueeItems
const row2 = [...marqueeItems].reverse()

const iconMap: Record<string, string> = {
  Flutter: '◈',
  Dart: '◆',
  React: '◉',
  'Next.js': '▣',
  'Node.js': '◎',
  GraphQL: '◇',
  TypeScript: '▸',
  Firebase: '◑',
  PostgreSQL: '◐',
  TailwindCSS: '▹',
}

interface MarqueeRowProps {
  items: string[]
  reverse?: boolean
  dim?: boolean
}

function MarqueeRow({ items, reverse = false, dim = false }: MarqueeRowProps) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${reverse ? 'marqueeRev' : 'marquee'} ${reverse ? '28s' : '22s'} linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`
              inline-flex items-center gap-3 px-6 py-0
              font-display text-[18px] tracking-[1.5px]
              transition-colors duration-200
              ${dim
                ? 'text-[var(--color-muted)]'
                : 'text-[rgba(240,242,247,0.35)] hover:text-[var(--color-white)]'
              }
            `}
          >
            <span
              className="text-[9px]"
              style={{ color: dim ? 'rgba(91,255,200,0.3)' : 'rgba(91,255,200,0.5)' }}
            >
              {iconMap[item] ?? '◈'}
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <>
      <style>{`
        @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes marqueeRev { from{transform:translateX(-50%)} to{transform:translateX(0)} }
      `}</style>

      <div className="relative border-t border-b border-white/[0.07] bg-[var(--color-surface)] py-4 overflow-hidden select-none">

        {/* Fade masks left & right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, var(--color-surface), transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, var(--color-surface), transparent)' }} />

        <MarqueeRow items={row1} />

      </div>
    </>
  )
}