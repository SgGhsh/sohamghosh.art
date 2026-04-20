export interface Project {
  id: string;
  slug: string;
  title: string;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: 'cm' | 'in';
  };
  year: number;
  status: 'available' | 'sold' | 'private' | 'not-for-sale';
  images: {
    thumbnail: string;
    full: string;
    alt: string;
  }[];
  description?: string;
  featured?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}
