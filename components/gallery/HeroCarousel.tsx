'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from "next-image-export-optimizer";
import signatureImage from '../../public/images/sohamghoshsignature.png';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { carouselSlides as SLIDES } from '@/data/carousel';

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
    <div className="w-full h-full flex flex-col">
      {/* Image container */}
      <section
        className="relative w-full flex-1 md:h-screen md:min-h-screen overflow-hidden bg-black"
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
            <Link href="/work" className="block w-full h-full cursor-pointer">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay - only on desktop */}
        <div className="hidden md:block absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-black/75 z-10" />

        {/* Desktop controls overlay */}
        <div className="hidden md:flex absolute inset-0 z-20 flex-col text-white">
          {/* Signature + ART — centered (desktop only) */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5 px-4 pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <Image
                src={signatureImage}
                alt="Soham Ghosh"
                width={600}
                height={200}
                priority
                className="w-[min(780px,88vw)] h-auto object-contain invert mix-blend-screen
                           drop-shadow-[0_2px_40px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </div>
          
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
                          ? 'w-6 h-0.75 bg-white'
                          : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/65'
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
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 origin-left z-30"
          />
        )}
      </section>

      {/* Mobile controls below image */}
      <div className="md:hidden bg-white text-black py-6 px-4">
        <div className="flex flex-col gap-4">
          {/* Slide info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-mobile-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-1"
            >
              <Link
                href={`/work/${slide.slug}`}
                className="block font-serif text-lg font-bold leading-tight
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
          <div className="flex items-center justify-between">
            {/* Prev / Next arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
                className="w-9 h-9 border border-black flex items-center justify-center
                           text-black text-sm active:bg-black active:text-white
                           transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
                className="w-9 h-9 border border-black flex items-center justify-center
                           text-black text-sm active:bg-black active:text-white
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
                      ? 'w-6 h-0.75 bg-black'
                      : 'w-1.5 h-1.5 bg-black/35 active:bg-black/65'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
