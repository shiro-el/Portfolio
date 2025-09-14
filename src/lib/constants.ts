export const SITE_CONFIG = {
  name: 'Jae Lee',
  title: 'Portfolio',
  description: 'Full-stack Developer Portfolio',
  url: 'https://shiroel.com',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/shiro-el',
    linkedin: 'https://linkedin.com/in/jae-w-lee',
    twitter: 'https://twitter.com/jae0406whan',
    email: 'mailto:me@shiroel.com',
  },
} as const;

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;
