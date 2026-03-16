'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 transition-all duration-300 ${scrolled
          ? 'bg-[rgba(8,10,15,0.85)] backdrop-blur-xl border-b border-white/[0.07]'
          : ''
        }`}
    >
      <a
        href="#"
        className="font-mono text-[13px] text-[var(--color-accent)] tracking-[2px] uppercase no-underline"
      >
        AZEYE ROMEO BERTHO.DEV
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="text-[13px] font-medium tracking-[0.5px] text-[var(--color-muted2)] uppercase bg-transparent border-none cursor-none transition-colors duration-200 hover:text-[var(--color-white)] relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('#contact')}
        className="text-[12px] font-semibold tracking-[1.5px] uppercase text-[var(--color-black)] bg-[var(--color-accent)] border-none px-5 py-2.5 rounded-sm cursor-none transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
      >
        Me contacter
      </button>
    </nav>
  )
}
