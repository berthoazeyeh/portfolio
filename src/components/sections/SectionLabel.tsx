interface SectionLabelProps {
  num: string
  label: string
}

export default function SectionLabel({ num, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-accent)] tracking-[3px] uppercase mb-16">
      <span className="text-[10px] text-[var(--color-muted)]">{num}</span>
      {label}
      <span className="flex-1 max-w-[60px] h-px bg-white/10" />
    </div>
  )
}
