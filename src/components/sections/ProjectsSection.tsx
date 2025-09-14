'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/lib/data/projects';
import { Project } from '@/types/project';

export function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const categories = ['all', 'web', 'mobile', 'desktop', 'other'];
  const statuses = ['all', 'completed', 'in-progress', 'planned'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Tag className="text-primary" size={24} />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured />
            ))}
          </div>
        </section>
      )}

      {/* Regular Projects */}
      {regularProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search size={48} className="mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedStatus('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
    }).format(date);
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getStatusColor(project.status)}>
                  {project.status.replace('-', ' ')}
                </Badge>
                {featured && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            <span>
              {formatDate(project.startDate)}
              {project.endDate && ` - ${formatDate(project.endDate)}`}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          {project.links.map((link) => (
            <Button
              key={link.href}
              variant={link.label === 'Live Demo' ? 'default' : 'outline'}
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2"
              >
                {link.label === 'GitHub' ? (
                  <Github size={16} />
                ) : (
                  <ExternalLink size={16} />
                )}
                {link.label}
              </a>
            </Button>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
