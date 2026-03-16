import type { Project, Skill, Experience, SocialLink } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    num: '01 — Featured',
    title: 'LewooTrack',
    description:
      'Plateforme de suivi et gestion de flotte de véhicules en temps réel — dashboard web, tracking GPS, géofencing, alertes et rapports analytiques. Deux applications mobiles Flutter associées.',
    stack: ['React.js', 'Flutter', 'Google Maps API', 'WebSocket', 'PostgreSQL'],
    featured: true,
    href: '#',
  },
  {
    id: 2,
    num: '02',
    title: 'Soft Education',
    description:
      'Plateforme complète de digitalisation scolaire — applications mobiles (Parents, Enseignants, Administration, Badging NFC), desktop Flutter, mode offline SQLite et notifications push.',
    stack: ['React Native', 'Flutter', 'Firebase', 'SQLite', 'NFC'],
    href: '#',
  },
  {
    id: 3,
    num: '03',
    title: "Metua'a",
    description:
      "Application mobile de mise en relation entre chauffeurs et passagers — fonctionnalités temps réel, notifications push Firebase, intégration API REST.",
    stack: ['React Native', 'Firebase', 'REST API', 'PostgreSQL'],
    href: '#',
  },
]

export const skills: Skill[] = [
  {
    name: 'Mobile — Flutter & React Native',
    description:
      'Applications cross-platform iOS & Android. Développement, publication sur Google Play et App Store, intégrations natives (GPS, NFC, notifications push).',
    tags: ['Flutter', 'Dart', 'React Native', 'JavaScript', 'Firebase', 'GraphQL', 'SQLite'],
    variant: 'green',
    icon: '◈',
  },
  {
    name: 'Desktop — Flutter',
    description:
      'Applications desktop Flutter pour établissements scolaires et entreprises. Architecture propre, animations fluides, intégrations natives.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    variant: 'yellow',
    icon: '◆',
  },
  {
    name: 'Frontend Web',
    description:
      'Interfaces réactives et performantes. Dashboards analytiques, intégration cartographique et communication temps réel.',
    tags: ['React.js', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3', 'WebSocket'],
    variant: 'red',
    icon: '◉',
  },
  {
    name: 'Backend & APIs',
    description:
      'APIs REST & GraphQL avec Node.js, Laravel, Spring Boot et .NET. Bases de données relationnelles et NoSQL, authentification, déploiement Docker.',
    tags: ['Node.js', 'Laravel', 'Spring Boot', '.NET', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker'],
    variant: 'yellow',
    icon: '◆',
  },
  {
    name: 'Data & Intelligence Artificielle',
    description:
      'Analyse de données, visualisation et modèles ML. Du traitement des données brutes aux insights actionnables.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL', 'Power BI'],
    variant: 'green',
    icon: '◑',
  },
]

export const experiences: Experience[] = [
  {
    period: 'Sept. 2024 — Présent',
    role: 'Développeur Mobile Flutter',
    company: 'Bantubeat',
    location: 'Remote (Freelance)',
    description:
      "Développement et maintenance d'applications mobiles sociales incluant des plateformes de rencontre. Intégration API GraphQL/REST, publication sur Google Play & App Store, maintenance de la plateforme d'administration Next.js.",
    tags: ['Flutter', 'Dart', 'Next.js', 'GraphQL', 'REST API', 'Jira'],
  },
  {
    period: 'Sept. 2023 — Présent',
    role: 'Développeur Web & Mobile',
    company: 'Africa Systems - Lewoo Sal',
    location: 'Cameroun',
    description:
      "Développement de plusieurs solutions logicielles d'entreprise : plateforme de tracking GPS LewooTrack (React.js + Flutter), plateforme de digitalisation scolaire Soft Education (React Native + Flutter) et application taxi Metua'a (React Native).",
    tags: ['React.js', 'Flutter', 'React Native', 'Google Maps API', 'WebSocket', 'Firebase', 'PostgreSQL'],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/berthoazeyeh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rom%C3%A9o-bertho-azeye-a790a1248/' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01957c338a8648eeaa' },
]

export const marqueeItems = [
  'Flutter', 'Dart', 'React', 'Next.js',
  'React Native', 'GraphQL', 'JavaScript',
  'Firebase', 'PostgreSQL', 'TailwindCSS',
  'Google Maps API', 'WebSocket', 'Docker',
]

export const stats = [
  { num: '2+', label: "Années d'exp." },
  { num: '4+', label: 'Projets livrés' },
  { num: '3', label: 'Stacks maîtrisées' },
]