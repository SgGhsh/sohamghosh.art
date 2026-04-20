'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '@/components/ui/Container';

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=2000&h=1333&fit=crop',
    srcMobile: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1200&fit=crop',
    alt: 'Urban Fragments — Abstract urban landscape',
    title: 'Urban Fragments',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: 'urban-fragments',
  },
  {
    src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=2000&h=1333&fit=crop',
    srcMobile: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=1200&fit=crop',
    alt: 'Chromatic Dreams — Mixed media canvas',
    title: 'Chromatic Dreams',
    meta: 'Mixed Media · 150 × 100 cm · 2023',
    slug: 'chromatic-dreams',
  },
  {
    src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=2000&h=1333&fit=crop',
    srcMobile: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1200&fit=crop',
    alt: 'Ethereal Landscapes — Watercolor abstract',
    title: 'Ethereal Landscapes',
    meta: 'Watercolor on Paper · 76 × 56 cm · 2023',
    slug: 'ethereal-landscapes',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000&h=1333&fit=crop',
    srcMobile: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=1200&fit=crop',
    alt: 'Sunset Impressions — Oil on canvas',
    title: 'Sunset Impressions',
    meta: 'Oil on Canvas · 130 × 95 cm · 2023',
    slug: 'sunset-impressions',
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative w-full h-screen min-h-150 overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — cross-fade */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            sizes="100vw"
            className="hidden sm:block object-cover object-center"
          />
          <Image
            src={slide.srcMobile}
            alt={slide.alt}
            fill
            priority
            sizes="100vw"
            className="block sm:hidden object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-black/75 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col text-white">

        {/* Signature + ART — centered */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5 px-4 pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/images/sohamghoshsignature.png"
              alt="Soham Ghosh"
              width={600}
              height={200}
              priority
              className="w-[min(780px,88vw)] h-auto object-contain invert mix-blend-screen
                         drop-shadow-[0_2px_40px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </div>

        {/* Bottom bar */}
        <Container>
          <div className="pb-10 md:pb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">

            {/* Slide info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-1"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.35em] opacity-55">
                  Featured Work
                </p>
                <Link
                  href={`/work/${slide.slug}`}
                  className="block font-serif text-xl md:text-2xl font-bold leading-tight
                             hover:opacity-75 transition-opacity duration-200"
                >
                  {slide.title}
                </Link>
                <p className="font-sans text-[11px] tracking-wide opacity-55">
                  {slide.meta}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-5 self-end">

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous slide"
                  className="w-9 h-9 border border-white/40 flex items-center justify-center
                             text-white text-sm hover:bg-white hover:text-black
                             transition-all duration-200"
                >
                  ←
                </button>
                <button
                  onClick={() => goTo(index + 1)}
                  aria-label="Next slide"
                  className="w-9 h-9 border border-white/40 flex items-center justify-center
                             text-white text-sm hover:bg-white hover:text-black
                             transition-all duration-200"
                >
                  →
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === index
                        ? 'w-6 h-[3px] bg-white'
                        : 'w-[6px] h-[6px] bg-white/35 hover:bg-white/65'
                    }`}
                  />
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/work"
                className="hidden sm:inline-flex items-center justify-center
                           border border-white/50
                           text-[11px] font-sans font-medium uppercase tracking-[0.3em]
                           px-7 py-3
                           bg-white/10 backdrop-blur-sm
                           hover:bg-white hover:text-black
                           transition-all duration-300"
              >
                View Collection
              </Link>

            </div>
          </div>
        </Container>
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${index}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/40 origin-left z-30"
        />
      )}
    </section>
  );
}
