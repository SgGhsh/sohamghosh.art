import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/projects';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name}, ${siteConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <section className="w-full py-16 md:py-24">
      <Container>
        {/* Page label */}
        <FadeIn className="mb-12 border-b border-border pb-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
            Artist
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary tracking-tight">
            About
          </h1>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Portrait */}
          <FadeIn direction="left">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted border border-border">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale"
                priority
              />
            </div>
          </FadeIn>

          {/* Bio + Info */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-1">
                  {siteConfig.name}
                </h2>
                <p className="text-sm text-accent font-light tracking-wide">
                  {siteConfig.tagline}
                </p>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-4">
                {siteConfig.bio.split('\n\n').map((p, i) => (
                  <p key={i} className="text-secondary leading-relaxed font-light">
                    {p.trim()}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-border" />

              {/* Contact info */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary font-medium">
                  Contact
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-primary hover:text-accent transition-colors font-serif text-lg"
                >
                  {siteConfig.email}
                </a>
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-secondary hover:text-primary transition-colors"
                  >
                    Instagram ↗
                  </a>
                )}
              </div>

              <Button asChild size="lg" className="font-light tracking-widest text-xs uppercase mt-4">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
