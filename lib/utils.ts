import { Project } from '@/types/project';
import { projects } from '@/data/projects';

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function formatDimensions(dimensions: {
  width: number;
  height: number;
  unit: 'cm' | 'in';
}): string {
  return `${dimensions.width} × ${dimensions.height} ${dimensions.unit}`;
}

export function getStatusLabel(status: Project['status']): string {
  const labels = {
    available: 'Available',
    sold: 'Sold',
    private: 'Private Collection',
    'not-for-sale': 'Not for Sale',
  };
  return labels[status];
}

export function getStatusColor(status: Project['status']): string {
  const colors = {
    available: 'text-green-600 border-green-600',
    sold: 'text-secondary border-secondary',
    private: 'text-secondary border-secondary',
    'not-for-sale': 'text-secondary border-secondary',
  };
  return colors[status];
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
