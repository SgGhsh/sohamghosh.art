import type { Metadata } from 'next';
import Image from "next-image-export-optimizer";
import aboutmeImage from '../../public/images/aboutme.jpeg';
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
                src={aboutmeImage}
                alt={aboutConfig.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>
          </FadeIn>

          {/* Right column: page heading + name + bio */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">

              {/* Page heading — moved here from top */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                  The Artist&apos;s Profile
                </h1>
              </div>

              

              {/* Bio */}
              <div className="prose prose-sm max-w-none text-justify">
                {aboutConfig.body.split('\n\n').map((p, i) => (
                  <p key={i}>
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
