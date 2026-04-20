'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import { formatDimensions, getStatusLabel } from '@/lib/utils';

interface ProjectModalProps {
  project: Project;
  currentImageIndex: number;
  onClose: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
}

export default function ProjectModal({
  project,
  currentImageIndex,
  onClose,
  onPrevImage,
  onNextImage,
}: ProjectModalProps) {
  const currentImage = project.images[currentImageIndex];
  const hasMultipleImages = project.images.length > 1;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultipleImages) onPrevImage();
      if (e.key === 'ArrowRight' && hasMultipleImages) onNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevImage, onNextImage, hasMultipleImages]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-accent transition-colors z-10"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        {/* Previous Button */}
        {hasMultipleImages && (
          <button
            onClick={onPrevImage}
            className="absolute left-4 p-2 text-white hover:text-accent transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
        )}

        {/* Next Button */}
        {hasMultipleImages && (
          <button
            onClick={onNextImage}
            className="absolute right-4 p-2 text-white hover:text-accent transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        )}

        {/* Content Container */}
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-8">
          {/* Image */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full lg:w-2/3 h-[60vh] lg:h-[80vh]"
          >
            <Image
              src={currentImage.full}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Metadata Panel */}
          <div className="w-full lg:w-1/3 text-white space-y-4 max-w-md">
            <h2 className="text-3xl font-bold">{project.title}</h2>

            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="font-semibold">Medium:</span> {project.medium}
              </p>
              <p>
                <span className="font-semibold">Dimensions:</span>{' '}
                {formatDimensions(project.dimensions)}
              </p>
              <p>
                <span className="font-semibold">Year:</span> {project.year}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {getStatusLabel(project.status)}
              </p>
            </div>

            {project.description && (
              <p className="text-gray-300 leading-relaxed pt-4">{project.description}</p>
            )}

            {hasMultipleImages && (
              <p className="text-sm text-gray-400 pt-4">
                Image {currentImageIndex + 1} of {project.images.length}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
