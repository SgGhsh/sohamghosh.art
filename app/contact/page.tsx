'use client';

import { useState, FormEvent } from 'react';
import { siteConfig } from '@/data/projects';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section className="w-full py-16 md:py-24">
      <Container size="md">

        {/* Header */}
        <FadeIn className="mb-14 border-b border-border pb-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
            Inquiries
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary tracking-tight">
            Contact
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Info panel */}
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
                  @sohamghosh.art ↗
                </a>
              </div>
            )}

            <div className="h-px w-full bg-border" />

            <p className="text-secondary font-light leading-relaxed text-sm">
              For purchase inquiries, commissions, or exhibition opportunities, please reach out using the form or directly via email.
            </p>
          </FadeIn>

          {/* Form */}
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

              {/* Email */}
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
                    Thank you — I'll be in touch soon.
                  </p>
                )}
              </div>
            </form>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
