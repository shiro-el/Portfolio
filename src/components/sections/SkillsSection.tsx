'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data/skills';

export function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code size={20} className="text-blue-500" />;
      case 'backend':
        return <Database size={20} className="text-green-500" />;
      case 'design':
        return <Palette size={20} className="text-purple-500" />;
      case 'tools':
        return <Wrench size={20} className="text-orange-500" />;
      default:
        return <Code size={20} className="text-gray-500" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Frontend Development';
      case 'backend':
        return 'Backend Development';
      case 'database':
        return 'Database';
      case 'design':
        return 'Design & UI/UX';
      case 'tools':
        return 'Tools & Others';
      default:
        return 'Other';
    }
  };

  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'expert':
        return 95;
      case 'advanced':
        return 80;
      case 'intermediate':
        return 60;
      case 'beginner':
        return 30;
      default:
        return 50;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across 
          different areas of development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {getCategoryIcon(category)}
                  {getCategoryName(category)}
                </CardTitle>
                <CardDescription>
                  {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{skill.title}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getLevelColor(skill.level)} text-white border-0`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {getLevelPercentage(skill.level)}%
                      </span>
                    </div>
                    <Progress 
                      value={getLevelPercentage(skill.level)} 
                      className="h-2"
                    />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card>
          <CardHeader>
            <CardTitle>Skills Summary</CardTitle>
            <CardDescription>
              Quick overview of my technical expertise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {categorySkills.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {getCategoryName(category)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
