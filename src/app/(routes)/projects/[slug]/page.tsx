import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/lib/data/projects';
import { Project } from '@/types/project';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Jae Lee`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.featuredImage ? [project.featuredImage.src] : [],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
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
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className={getStatusColor(project.status)}>
                {project.status.replace('-', ' ')}
              </Badge>
              {project.featured && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Images */}
          {project.images.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden border">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width || 600}
                      height={image.height || 400}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status */}
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium">Status:</span>
                <Badge className={getStatusColor(project.status)}>
                  {project.status.replace('-', ' ')}
                </Badge>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium">Category:</span>
                <span className="text-sm text-muted-foreground capitalize">
                  {project.category}
                </span>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium">Timeline:</span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(project.startDate)}
                  {project.endDate && ` - ${formatDate(project.endDate)}`}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Links Card */}
          <Card>
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.links.map((link) => (
                <Button
                  key={link.href}
                  variant={link.label === 'Live Demo' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  asChild
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
            </CardContent>
          </Card>

          {/* Related Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Related Projects</CardTitle>
              <CardDescription>
                Other projects you might be interested in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.id !== project.id && p.category === project.category)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/projects/${relatedProject.slug}`}
                      className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <h4 className="font-medium text-sm">{relatedProject.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
