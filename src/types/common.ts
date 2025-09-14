export interface BaseEntity {
  id: string;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Link {
  href: string;
  label: string;
  external?: boolean;
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type Theme = 'light' | 'dark' | 'system';
