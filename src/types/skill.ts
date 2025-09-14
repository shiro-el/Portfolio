import { BaseEntity } from './common';

export interface Skill extends BaseEntity {
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  color?: string;
}
