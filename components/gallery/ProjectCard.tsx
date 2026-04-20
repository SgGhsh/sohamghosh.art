'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { formatDimensions, getStatusLabel, getStatusColor, cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

/* Variant used by ProjectGrid's stagger container */
export const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const img = project.images[0];

  return (
    <motion.div variants={cardVariant}>
      <Link href={`/work/${project.slug}`} className="group block">
        {/* Card shell */}
        <div className="overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-accent/40">

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <Image
              src={img.thumbnail}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
            />
          </div>

          {/* Meta */}
          <div className="px-5 py-4 space-y-2">
            <h3 className="font-serif text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors line-clamp-2">
              {project.title}
            </h3>

            <div className="text-xs text-secondary font-light space-y-0.5 tracking-wide">
              <p>{project.medium}</p>
              <p>{formatDimensions(project.dimensions)}, {project.year}</p>
            </div>

            {/* Status badge */}
            <span
              className={cn(
                'inline-block mt-1 text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 border rounded-sm',
                getStatusColor(project.status)
              )}
            >
              {getStatusLabel(project.status)}
            </span>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
