import { Metadata } from 'next';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';

export const metadata: Metadata = {
  title: 'About | Jae Lee',
  description: 'Learn more about Jae Lee, a passionate full-stack developer with expertise in modern web technologies and user-centered design.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get to know more about my journey, skills, and passion for creating 
          exceptional digital experiences.
        </p>
      </div>
      
      <div className="space-y-20">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
      </div>
    </div>
  );
}
