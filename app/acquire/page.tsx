'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next-image-export-optimizer';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/data/projects';
import { works } from '@/data/works';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

function AcquireContent() {
  const searchParams = useSearchParams();
  const [form, setForm]             = useState({ name: '', artworks: [] as string[], message: '' });
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef                   = useRef<HTMLDivElement>(null);

  const isPrint = searchParams.get('type') === 'print';

  useEffect(() => {
    const raw = searchParams.get('piece');
    if (!raw) return;
    const piece = decodeURIComponent(raw);
    const match = works.find((w) => w.title === piece);
    if (match) setForm((prev) => ({ ...prev, artworks: [piece] }));
  }, [searchParams]);

  useEffect(() => {
    if (!pickerOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [pickerOpen]);

  const toggleArtwork = (title: string) => {
    setForm((prev) => ({
      ...prev,
      artworks: prev.artworks.includes(title)
        ? prev.artworks.filter((a) => a !== title)
        : [...prev.artworks, title],
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const origin       = window.location.origin;
    const inquiryType  = isPrint ? 'Fine Art Print Inquiry' : 'Inquiry';
    const artworkLabel = form.artworks.length === 1
      ? form.artworks[0]
      : form.artworks.length > 1 ? 'Multiple Pieces' : '';

    const subject = encodeURIComponent(
      artworkLabel
        ? `${form.name} - ${artworkLabel} ${inquiryType}`
        : `${form.name} - ${inquiryType}`
    );

    const pieceLine = form.artworks.length > 0
      ? `Piece${form.artworks.length > 1 ? 's' : ''}: ${form.artworks.join(', ')}`
      : '';

    const thumbnailLines = form.artworks.map((title) => {
      const work = works.find((w) => w.title === title);
      return work ? `${title}: ${origin}${work.images[0].thumbnail}` : '';
    }).filter(Boolean).join('\n');

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        pieceLine,
        isPrint ? `Type: Fine Art Print` : '',
        thumbnailLines ? `\nThumbnail${form.artworks.length > 1 ? 's' : ''}:\n${thumbnailLines}` : '',
        '',
        `Message:`,
        isPrint ? `Fine Art Print — ${form.message}` : form.message,
      ]
        .filter((line, i, arr) => !(line === '' && arr[i - 1] === ''))
        .join('\n')
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const triggerLabel = form.artworks.length === 0
    ? null
    : form.artworks.length === 1
    ? form.artworks[0]
    : `${form.artworks.length} pieces selected`;

  return (
    <section className="w-full flex-1 flex flex-col py-8 md:py-10 gap-16">

      {/* ── Header ──────────────────────────────── */}
      <Container size="md">
        <FadeIn>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
            Get your one off piece
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Acquire
          </h1>
        </FadeIn>
      </Container>

      {/* ── Contact panel + Form ─────────────────── */}
      <Container size="md">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 border-t border-border pt-12">

          <FadeIn direction="left" className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary font-medium">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-serif text-xl text-primary hover:text-accent transition-colors block"
              >
                {siteConfig.email}
              </a>
            </div>

            {siteConfig.social.instagram && (
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary font-medium">Instagram</p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  @sgghshart ↗
                </a>
              </div>
            )}

            <div className="h-px w-full bg-border" />

            <p className="text-secondary font-light leading-relaxed text-sm">
              For purchase inquiries, commissions, or exhibition opportunities, please reach out directly via email or drop a message on Instagram.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                  Name
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border-b border-border bg-transparent py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors font-light"
                />
              </div>

              {/* Artwork multi-image picker */}
              <div className="space-y-2">
                <p className="block text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                  Piece
                </p>
                <div className="relative" ref={pickerRef}>

                  {/* Trigger */}
                  <button
                    type="button"
                    onClick={() => setPickerOpen((o) => !o)}
                    className="w-full flex items-center justify-between border-b border-border py-3 text-left focus:outline-none focus:border-accent transition-colors font-light"
                  >
                    <span className={triggerLabel ? 'text-primary' : 'text-secondary/50'}>
                      {triggerLabel ?? 'Select a piece…'}
                    </span>
                    <span className="flex items-center gap-2 shrink-0 ml-2">
                      {form.artworks.length > 0 && (
                        <span
                          role="button"
                          aria-label="Clear selection"
                          onClick={(e) => { e.stopPropagation(); setForm({ ...form, artworks: [] }); }}
                          className="text-secondary hover:text-primary transition-colors text-xs leading-none"
                        >
                          ✕
                        </span>
                      )}
                      <span className="text-secondary/50 text-xs">{pickerOpen ? '▴' : '▾'}</span>
                    </span>
                  </button>

                  {/* Dropdown panel */}
                  {pickerOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-background border border-border shadow-sm max-h-[60vh] overflow-y-auto">
                      <div className="px-3 py-2 border-b border-border">
                        <p className="text-[9px] uppercase tracking-widest text-secondary/60">
                          Tap to select
                        </p>
                      </div>
                      {/* 2 cols mobile → 3 cols tablet → 4 cols desktop */}
                      <div className="columns-2 sm:columns-3 md:columns-3 lg:columns-4 gap-x-2 p-3">
                        {works.map((work) => {
                          const { width, height } = work.dimensions;
                          const isSelected = form.artworks.includes(work.title);
                          return (
                            <div key={work.id} className="break-inside-avoid mb-2">
                              <button
                                type="button"
                                onClick={() => toggleArtwork(work.title)}
                                className={`group block w-full text-left cursor-pointer focus:outline-none transition-all ${isSelected ? 'ring-1 ring-primary' : 'ring-0'}`}
                              >
                                <div className="relative overflow-hidden">
                                  <Image
                                    src={work.images[0].thumbnail}
                                    alt={work.images[0].alt}
                                    width={Math.round(width * 20)}
                                    height={Math.round(height * 20)}
                                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                                    className="w-full h-auto block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.02]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                                  {isSelected && (
                                    <div className="absolute inset-0 bg-black/40" />
                                  )}
                                  {/* Checkbox */}
                                  <div className={`absolute bottom-1.5 right-1.5 w-4 h-4 border flex items-center justify-center transition-all duration-200 ${
                                    isSelected
                                      ? 'bg-white border-white'
                                      : 'bg-black/20 border-white/60 group-hover:border-white/90'
                                  }`}>
                                    {isSelected && (
                                      <span className="text-primary text-[8px] font-bold leading-none">✓</span>
                                    )}
                                  </div>
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                  Message
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your inquiry…"
                  className="w-full border-b border-border bg-transparent py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none font-light"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="font-light tracking-widest text-xs uppercase"
                >
                  Send Message
                </Button>
              </div>

            </form>
          </FadeIn>

        </div>
      </Container>

    </section>
  );
}

export default function AcquirePage() {
  return (
    <Suspense>
      <AcquireContent />
    </Suspense>
  );
}
