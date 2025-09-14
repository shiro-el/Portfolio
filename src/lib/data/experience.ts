export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  startDate: Date;
  endDate?: Date;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'senior-developer',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Seoul, South Korea',
    type: 'full-time',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2024-12-31'),
    description: 'Led development of enterprise-level web applications and mentored junior developers.',
    responsibilities: [
      'Architected and developed scalable web applications using React, Next.js, and Node.js',
      'Led a team of 5 developers in delivering high-quality software solutions',
      'Implemented CI/CD pipelines and automated testing strategies',
      'Collaborated with product managers and designers to define technical requirements',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    achievements: [
      'Improved application performance by 40% through optimization',
      'Reduced deployment time by 60% with automated CI/CD',
      'Successfully delivered 15+ projects on time and within budget'
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    company: 'Digital Innovations Inc.',
    location: 'Seoul, South Korea',
    type: 'full-time',
    startDate: new Date('2020-06-01'),
    endDate: new Date('2022-02-28'),
    description: 'Developed full-stack web applications and contributed to various client projects.',
    responsibilities: [
      'Built responsive web applications using modern JavaScript frameworks',
      'Developed RESTful APIs and integrated third-party services',
      'Collaborated with cross-functional teams to deliver client projects',
      'Participated in agile development processes and sprint planning',
      'Maintained and updated existing applications'
    ],
    technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'MySQL', 'Git', 'Jest'],
    achievements: [
      'Delivered 20+ client projects with 95% satisfaction rate',
      'Contributed to open-source projects with 500+ GitHub stars',
      'Received "Employee of the Year" award in 2021'
    ]
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    company: 'WebStudio Creative',
    location: 'Seoul, South Korea',
    type: 'full-time',
    startDate: new Date('2019-01-01'),
    endDate: new Date('2020-05-31'),
    description: 'Focused on creating beautiful and functional user interfaces for web applications.',
    responsibilities: [
      'Developed responsive user interfaces using HTML, CSS, and JavaScript',
      'Collaborated with designers to implement pixel-perfect designs',
      'Optimized web applications for performance and accessibility',
      'Worked with various CMS platforms and e-commerce solutions',
      'Participated in client meetings and requirement gathering'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress', 'Shopify'],
    achievements: [
      'Improved website loading speed by 50%',
      'Successfully launched 30+ websites for clients',
      'Achieved 100% accessibility compliance on all projects'
    ]
  },
  {
    id: 'freelance-developer',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    type: 'freelance',
    startDate: new Date('2018-06-01'),
    endDate: new Date('2018-12-31'),
    description: 'Provided web development services to small businesses and startups.',
    responsibilities: [
      'Developed custom websites and web applications for clients',
      'Provided technical consultation and project planning',
      'Managed client relationships and project timelines',
      'Delivered training and documentation for client systems'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
    achievements: [
      'Completed 15+ freelance projects',
      'Maintained 100% client satisfaction rate',
      'Built long-term relationships with 10+ clients'
    ]
  }
];

export const education = [
  {
    id: 'computer-science',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Seoul National University',
    location: 'Seoul, South Korea',
    startDate: new Date('2014-03-01'),
    endDate: new Date('2018-02-28'),
    description: 'Focused on software engineering, algorithms, and data structures.',
    relevantCourses: [
      'Data Structures and Algorithms',
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Web Development'
    ]
  }
];

export const certifications = [
  {
    id: 'aws-certified',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: new Date('2023-06-15'),
    credentialId: 'AWS-CSA-123456',
    description: 'Validates expertise in designing distributed systems on AWS.'
  },
  {
    id: 'react-certified',
    title: 'React Developer Certification',
    issuer: 'Meta (Facebook)',
    date: new Date('2022-09-20'),
    credentialId: 'META-REACT-789012',
    description: 'Certified in React development and modern JavaScript practices.'
  },
  {
    id: 'typescript-certified',
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    date: new Date('2022-03-10'),
    credentialId: 'MS-TS-345678',
    description: 'Comprehensive understanding of TypeScript development.'
  }
];
