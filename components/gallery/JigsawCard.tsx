'use client';

import Image from 'next-image-export-optimizer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  },
};

export default function JigsawCard({ project }: { project: Project }) {
  const img = project.images[0];
  const { width, height } = project.dimensions;

  return (
    <motion.div variants={itemVariant} className="break-inside-avoid mb-4">
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden">
          <Image
            src={img.thumbnail}
            alt={img.alt}
            width={Math.round(width * 20)}
            height={Math.round(height * 20)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3">
            <span className="text-white text-[9px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View ↗
            </span>
          </div>
          <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border border-white/50 bg-black/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-white/90 group-hover:bg-black/40">
            <span className="text-white/70 text-[9px] font-medium leading-none group-hover:text-white select-none">i</span>
          </div>
        </div>

      </Link>
    </motion.div>
  );
}
