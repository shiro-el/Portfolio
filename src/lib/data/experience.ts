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
    id: 'snu-aiis-researcher',
    title: 'Research Fellow',
    company: 'Seoul National University',
    location: 'Seoul, South Korea',
    type: 'full-time',
    startDate: new Date('2025-05-01'),
    description: 'Research Fellow at Seoul National University AI Institute (AIIS) and Graduate School of Public Health.',
    responsibilities: [
      'Conducting AI research in healthcare and public health domains',
      'Developing machine learning models for medical data analysis',
      'Collaborating with interdisciplinary research teams',
      'Publishing research findings in academic journals',
      'Mentoring graduate students and junior researchers'
    ],
    technologies: ['Python', 'PyTorch', 'R', 'SQL', 'Vision Transformer'],
    achievements: [
      'Leading cutting-edge AI research in healthcare applications',
      'Contributing to public health policy through data-driven insights'
    ]
  },
  {
    id: 'someple-developer',
    title: 'Software Engineer',
    company: 'Someple',
    location: 'Daejeon, South Korea',
    type: 'part-time',
    startDate: new Date('2024-06-01'),
    description: 'Software engineer working on innovative web applications and mobile solutions.',
    responsibilities: [
      'Developed scalable web applications using modern frameworks',
      'Built responsive user interfaces and optimized user experience',
      'Implemented backend services and database management systems',
      'Collaborated with cross-functional teams in agile development',
      'Maintained and updated existing applications for performance'
    ],
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker' ],
    achievements: [
      'Delivered multiple high-quality software solutions',
      'Improved application performance and user satisfaction',
      'Contributed to team growth and knowledge sharing'
    ]
  },
  {
    id: 'ourhomedoc-cto',
    title: 'Chief Technology Officer',
    company: 'Our Home Doctor',
    location: 'Seoul, South Korea',
    type: 'full-time',
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-09-30'),
    description: 'Led technical strategy and development for healthcare technology platform.',
    responsibilities: [
      'Defined technical architecture and development roadmap',
      'Led development team and managed technical resources',
      'Oversaw product development and quality assurance',
      'Collaborated with stakeholders to align technology with business goals',
      'Implemented best practices for software development and deployment'
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    achievements: [
      'Successfully launched healthcare platform features',
      'Established robust development processes and standards',
      'Led team through critical product development phases'
    ]
  },
  {
    id: 'sparcs-developer',
    title: 'Developer',
    company: 'SPARCS',
    location: 'Seoul, South Korea',
    type: 'part-time',
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-08-31'),
    description: 'Software developer contributing to various projects and learning cutting-edge technologies.',
    responsibilities: [
      'Developed web applications and software solutions',
      'Participated in code reviews and collaborative development',
      'Learned and applied new technologies and frameworks',
      'Contributed to open-source projects and community initiatives',
      'Mentored junior developers and shared knowledge'
    ],
    technologies: ['Next.js', 'TypeScript', 'Python', 'React', 'Node.js', 'Git', 'Linux', 'Docker'],
    achievements: [
      'Gained valuable experience in software development practices',
      'Contributed to multiple successful project deliveries',
      'Enhanced technical skills through hands-on experience'
    ]
  }
];

export const education = [
  {
    id: 'kaist-industrial-engineering',
    degree: 'Bachelor of Science in Industrial Engineering',
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    location: 'Daejeon, South Korea',
    startDate: new Date('2024-02-01'),
    description: 'Pursuing degree in Industrial Engineering with focus on optimization, data analysis, and systems engineering.',
    relevantCourses: [
      'Operations Research',
      'Data Analysis and Statistics',
      'Systems Engineering',
      'Optimization Theory',
      'Supply Chain Management'
    ]
  },
  {
    id: 'kaist-gifted-school',
    degree: 'High School Diploma in Computational Mathematics',
    institution: 'Korea Science Academy of KAIST',
    location: 'Busan, South Korea',
    startDate: new Date('2021-02-01'),
    endDate: new Date('2024-02-28'),
    description: 'Specialized high school program focusing on computational mathematics and advanced science education.',
    relevantCourses: [
      'Advanced Mathematics',
      'Computer Science',
      'Physics',
      'Chemistry',
      'Research Methodology'
    ]
  }
];

export const awards = [
  {
    id: 'piethon-3-hackathon-grand-prize',
    title: 'PIEthon 3.0 Hackathon Grand Prize',
    issuer: 'MD WINNERS, Economics and Business Administration Society, Seoul National University College of Medicine',
    date: new Date('2025-07-01'),
    description: 'Won the grand prize in the PIEthon 3.0 Hackathon organized by Seoul National University College of Medicine.'
  },
  {
    id: 'lotte-hki-scholarship',
    title: 'Lotte-HKI Scholarship',
    issuer: 'Lotte Scholarship Foundation',
    date: new Date('2025-05-01'),
    description: 'Received scholarship from Lotte Scholarship Foundation for academic excellence and potential.'
  },
  {
    id: 'e5-kaist-runner-up',
    title: 'E*5 KAIST Competition Runner-up',
    issuer: 'Startup KAIST',
    date: new Date('2024-11-01'),
    description: 'Achieved runner-up position in E*5 KAIST student startup support program competition with Someple.'
  },
  {
    id: 'hoejae-rising-star-scholarship',
    title: 'Hoejae Rising Star 2024 Scholarship',
    issuer: 'Hoejae I Eonjeok Memorial Foundation',
    date: new Date('2024-07-01'),
    description: 'Received Rising Star scholarship from Hoejae I Eonjeok Memorial Foundation for outstanding academic performance.'
  }
];
