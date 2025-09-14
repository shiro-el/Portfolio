import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.',
    featured: true,
    status: 'completed',
    category: 'web',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-02-15'),
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    images: [
      {
        src: '/projects/portfolio-1.jpg',
        alt: 'Portfolio homepage',
        width: 1200,
        height: 800,
      },
      {
        src: '/projects/portfolio-2.jpg',
        alt: 'Portfolio projects section',
        width: 1200,
        height: 800,
      },
    ],
    links: [
      {
        href: 'https://github.com/jae0406whan/portfolio',
        label: 'GitHub',
        external: true,
      },
      {
        href: 'https://jae0406whan.github.io/portfolio',
        label: 'Live Demo',
        external: true,
      },
    ],
    featuredImage: {
      src: '/projects/portfolio-featured.jpg',
      alt: 'Portfolio website featured image',
      width: 800,
      height: 600,
    },
  },
  {
    id: 'ecommerce-app',
    slug: 'ecommerce-app',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Built with modern web technologies.',
    featured: true,
    status: 'completed',
    category: 'web',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2023-12-15'),
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    images: [
      {
        src: '/projects/ecommerce-1.jpg',
        alt: 'E-commerce homepage',
        width: 1200,
        height: 800,
      },
      {
        src: '/projects/ecommerce-2.jpg',
        alt: 'Product detail page',
        width: 1200,
        height: 800,
      },
    ],
    links: [
      {
        href: 'https://github.com/jae0406whan/ecommerce',
        label: 'GitHub',
        external: true,
      },
    ],
    featuredImage: {
      src: '/projects/ecommerce-featured.jpg',
      alt: 'E-commerce platform featured image',
      width: 800,
      height: 600,
    },
  },
  {
    id: 'task-manager',
    slug: 'task-manager',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    featured: false,
    status: 'in-progress',
    category: 'web',
    startDate: new Date('2024-02-01'),
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    images: [
      {
        src: '/projects/taskmanager-1.jpg',
        alt: 'Task manager dashboard',
        width: 1200,
        height: 800,
      },
    ],
    links: [
      {
        href: 'https://github.com/jae0406whan/task-manager',
        label: 'GitHub',
        external: true,
      },
    ],
    featuredImage: {
      src: '/projects/taskmanager-featured.jpg',
      alt: 'Task manager app featured image',
      width: 800,
      height: 600,
    },
  },
];
