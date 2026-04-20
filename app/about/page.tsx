import type { Metadata } from 'next';
import Image from 'next/image';
import { aboutConfig } from '@/data/about';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: aboutConfig.title,
  description: `${aboutConfig.name} — ${aboutConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <section className="w-full flex-1 flex flex-col py-8 md:py-10">
      <Container className="flex-1 flex flex-col">

        {/* Two-column layout — flex-1 fills remaining height */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Portrait */}
          <FadeIn direction="left">
            <div className="relative w-full aspect-3/4 overflow-hidden bg-muted border border-border">
              <Image
                src="/images/aboutme.jpeg"
                alt={aboutConfig.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale"
                priority
              />
            </div>
          </FadeIn>

          {/* Right column: page heading + name + bio */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">

              {/* Page heading — moved here from top */}
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
                  {aboutConfig.slug}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                  {aboutConfig.title}
                </h1>
              </div>

              {/* Name + tagline */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-primary mb-1">
                  {aboutConfig.name}
                </h2>
                <p className="text-sm text-secondary font-light tracking-wide">
                  {aboutConfig.tagline}
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                {aboutConfig.body.split('\n\n').map((p, i) => (
                  <p key={i} className="text-secondary leading-relaxed font-light text-sm">
                    {p.trim()}
                  </p>
                ))}
              </div>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
