import type { Metadata } from 'next'
import { Bebas_Neue, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AZ.DEV — Développeur Flutter & Web',
  description:
    'Développeur Flutter & Web avec 3+ ans d\'expérience. Disponible pour missions freelance.',
  keywords: ['Flutter', 'React', 'Next.js', 'Développeur mobile', 'Freelance', 'Cameroun'],
  authors: [{ name: 'Mohamed Karim' }],
  openGraph: {
    title: 'AZ.DEV — Développeur Flutter & Web',
    description: 'Développeur Flutter & Web disponible pour missions freelance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}