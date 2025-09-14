import { BaseEntity, Image, Link } from './common';

export interface Project extends BaseEntity {
  slug: string;
  featured: boolean;
  images: Image[];
  technologies: string[];
  links: Link[];
  status: 'completed' | 'in-progress' | 'planned';
  startDate: Date;
  endDate?: Date;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  featuredImage?: Image;
}
