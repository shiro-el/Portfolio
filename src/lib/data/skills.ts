import { Skill } from '@/types/skill';

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    title: 'React',
    description: 'Modern React with hooks and functional components',
    category: 'frontend',
    level: 'expert',
    icon: 'react',
    color: '#61DAFB',
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    description: 'Full-stack React framework',
    category: 'frontend',
    level: 'advanced',
    icon: 'nextjs',
    color: '#000000',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Type-safe JavaScript development',
    category: 'frontend',
    level: 'advanced',
    icon: 'typescript',
    color: '#3178C6',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    category: 'frontend',
    level: 'expert',
    icon: 'tailwind',
    color: '#06B6D4',
  },
  
  // Backend
  {
    id: 'nodejs',
    title: 'Node.js',
    description: 'Server-side JavaScript runtime',
    category: 'backend',
    level: 'advanced',
    icon: 'nodejs',
    color: '#339933',
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Versatile programming language',
    category: 'backend',
    level: 'intermediate',
    icon: 'python',
    color: '#3776AB',
  },
  
  // Database
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    description: 'Advanced open source database',
    category: 'database',
    level: 'intermediate',
    icon: 'postgresql',
    color: '#336791',
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    description: 'NoSQL document database',
    category: 'database',
    level: 'intermediate',
    icon: 'mongodb',
    color: '#47A248',
  },
  
  // Tools
  {
    id: 'git',
    title: 'Git',
    description: 'Version control system',
    category: 'tools',
    level: 'advanced',
    icon: 'git',
    color: '#F05032',
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Containerization platform',
    category: 'tools',
    level: 'intermediate',
    icon: 'docker',
    color: '#2496ED',
  },
];
