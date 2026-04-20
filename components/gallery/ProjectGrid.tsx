'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export default function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      className={cn(
        'grid w-full',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-6 md:gap-8',
        className
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
