'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next-image-export-optimizer';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;

export default function ZoomableImage({ src, alt, width, height }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragOrigin = useRef<{ mx: number; my: number; px: number; py: number } | null>(null);
  const lastPinchDist = useRef<number | null>(null);
  const hasDragged = useRef(false);

  const close = () => {
    setOpen(false);
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const clampScale = (s: number) => Math.max(MIN_SCALE, Math.min(MAX_SCALE, s));

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    setScale(prev => {
      const next = clampScale(prev + delta);
      if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    isDragging.current = true;
    hasDragged.current = false;
    dragOrigin.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !dragOrigin.current) return;
    hasDragged.current = true;
    setPos({
      x: dragOrigin.current.px + (e.clientX - dragOrigin.current.mx),
      y: dragOrigin.current.py + (e.clientY - dragOrigin.current.my),
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    dragOrigin.current = null;
  };

  const pinchDist = (touches: React.TouchList) =>
    Math.hypot(touches[1].clientX - touches[0].clientX, touches[1].clientY - touches[0].clientY);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      lastPinchDist.current = pinchDist(e.touches);
    } else if (e.touches.length === 1 && scale > 1) {
      dragOrigin.current = {
        mx: e.touches[0].clientX, my: e.touches[0].clientY,
        px: pos.x, py: pos.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastPinchDist.current !== null) {
      e.preventDefault();
      const dist = pinchDist(e.touches);
      const delta = (dist - lastPinchDist.current) * 0.012;
      lastPinchDist.current = dist;
      setScale(prev => {
        const next = clampScale(prev + delta);
        if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
        return next;
      });
    } else if (e.touches.length === 1 && dragOrigin.current) {
      setPos({
        x: dragOrigin.current.px + (e.touches[0].clientX - dragOrigin.current.mx),
        y: dragOrigin.current.py + (e.touches[0].clientY - dragOrigin.current.my),
      });
    }
  };

  const handleTouchEnd = () => {
    lastPinchDist.current = null;
    dragOrigin.current = null;
  };

  const overlayCursor = scale > 1 ? (isDragging.current ? 'grabbing' : 'grab') : 'zoom-out';

  return (
    <>
      <div
        className="w-full bg-muted border border-border cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto" priority />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center overflow-hidden select-none"
            style={{ cursor: overlayCursor }}
            onClick={() => { if (!hasDragged.current) close(); }}
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Hint */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-[9px] uppercase tracking-widest pointer-events-none">
              {scale > 1 ? 'Drag to pan  ·  Scroll to zoom' : 'Scroll or pinch to zoom'}
            </p>

            {/* Zoomable image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                transition: isDragging.current ? 'none' : 'transform 0.12s ease-out',
                maxWidth: '90vw',
                maxHeight: '90vh',
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain pointer-events-none"
                             />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
