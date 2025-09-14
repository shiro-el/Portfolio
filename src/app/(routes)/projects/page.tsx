import { Metadata } from 'next';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export const metadata: Metadata = {
  title: 'Projects | Jae Lee',
  description: 'Explore my portfolio of web development projects, including full-stack applications, mobile apps, and design work.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I've worked on, showcasing my skills in web development, 
          design, and problem-solving.
        </p>
      </div>
      
      <ProjectsSection />
    </div>
  );
}
