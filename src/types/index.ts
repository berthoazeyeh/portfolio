export interface Project {
    id: number
    num: string
    title: string
    description: string
    stack: string[]
    featured?: boolean
    href?: string
  }
  
  export interface Skill {
    name: string
    description: string
    tags: string[]
    variant: 'green' | 'red' | 'yellow' | 'blue'
    icon: string
  }
  
  export interface Experience {
    period: string
    role: string
    company: string
    location: string
    description: string
    tags: string[]
  }
  
  export interface SocialLink {
    label: string
    href: string
  }