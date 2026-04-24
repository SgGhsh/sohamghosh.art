'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface JigsawGridProps {
  children: ReactNode;
  className?: string;
  columns?: string;
}

export default function JigsawGrid({ children, className, columns }: JigsawGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
      }}
      className={cn(
        'w-full px-[8.33%]',
        columns ?? 'columns-1 sm:columns-2 lg:columns-3 gap-x-4',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
