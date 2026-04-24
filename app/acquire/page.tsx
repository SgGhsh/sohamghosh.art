'use client';

import { useState, useEffect } from 'react';
import Image from 'next-image-export-optimizer';
import { siteConfig } from '@/data/projects';
import { works } from '@/data/works';
import { Project } from '@/types/project';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const availableWorks = works.filter((w) => w.status === 'available');

function InquiryModal({ work, onClose }: { work: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const subject = encodeURIComponent(`Inquiry for Purchase - ${work.title}`);
  const mailtoHref = `mailto:${siteConfig.email}?subject=${subject}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-white border border-border w-full max-w-md p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full bg-card">
          <Image
            src={work.images[0].thumbnail}
            alt={work.images[0].alt}
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-1">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary">
            {work.medium} · {work.year}
          </p>
          <h2 className="font-serif text-2xl font-semibold text-primary tracking-tight">
            {work.title}
          </h2>
          <p className="text-xs text-secondary font-light">
            {work.dimensions.width} × {work.dimensions.height} {work.dimensions.unit}
          </p>
        </div>

        <p className="text-sm text-secondary font-light leading-relaxed">
          Interested in acquiring this work? Click below to open an email inquiry — it will pre-fill the subject line for you.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={mailtoHref}
            className="flex-1 text-center py-3 px-6 bg-primary text-white text-xs uppercase tracking-widest font-medium hover:opacity-80 transition-opacity"
          >
            Inquire via Email
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 border border-border text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AcquirePage() {
  const [form, setForm]         = useState({ name: '', email: '', artwork: '', message: '' });
  const [status, setStatus]     = useState<'idle' | 'sending' | 'sent'>('idle');
  const [selected, setSelected] = useState<Project | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', artwork: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <>
      {selected && <InquiryModal work={selected} onClose={() => setSelected(null)} />}

      <section className="w-full flex-1 flex flex-col py-8 md:py-10 gap-16">

        {/* ── Header ──────────────────────────────── */}
        <Container size="md">
          <FadeIn>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
              Acquire
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
              Acquire
            </h1>
          </FadeIn>
        </Container>

        {/* ── Works grid — full width, 12 columns ─── */}
        <FadeIn className="w-full px-2 sm:px-3">
          <div className="px-2 sm:px-3 mb-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary">
              Available works — click to inquire
            </p>
          </div>
          <div className="grid grid-cols-12 gap-1.5">
            {availableWorks.map((work) => (
              <button
                key={work.id}
                onClick={() => setSelected(work)}
                className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 group relative overflow-hidden bg-card cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={work.images[0].thumbnail}
                    alt={work.images[0].alt}
                    width={400}
                    height={600}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-2 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-[9px] uppercase tracking-widest font-medium">
                      Inquire ↗
                    </span>
                  </div>
                </div>
                <div className="p-2 space-y-0.5">
                  <p className="font-serif text-xs text-primary leading-tight truncate">
                    {work.title}
                  </p>
                  <p className="font-sans text-[9px] text-secondary truncate">
                    {work.year}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

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

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                    Email
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full border-b border-border bg-transparent py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="artwork" className="block text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                    Artwork <span className="normal-case tracking-normal text-secondary/60">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="artwork" name="artwork"
                      value={form.artwork}
                      onChange={(e) => setForm({ ...form, artwork: e.target.value })}
                      className="w-full border-b border-border bg-transparent py-3 text-primary focus:outline-none focus:border-accent transition-colors font-light appearance-none pr-6 cursor-pointer"
                    >
                      <option value="">Select a work…</option>
                      {availableWorks.map((w) => (
                        <option key={w.id} value={w.title}>{w.title}</option>
                      ))}
                      <option value="other">Other / Not listed</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-secondary/50 text-xs">▾</span>
                  </div>
                </div>

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

                <div className="flex items-center gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={status !== 'idle'}
                    size="lg"
                    className="font-light tracking-widest text-xs uppercase disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
                  </Button>
                  {status === 'sent' && (
                    <p className="text-sm text-accent font-light">
                      Thank you — I&apos;ll be in touch soon.
                    </p>
                  )}
                </div>
              </form>
            </FadeIn>

          </div>
        </Container>

      </section>
    </>
  );
}
