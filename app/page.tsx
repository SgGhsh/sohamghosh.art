import Link from 'next/link';
import Image from "next-image-export-optimizer";
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ProjectGrid from '@/components/gallery/ProjectGrid';
import { FadeIn } from '@/components/ui/FadeIn';
import HeroCarousel from '@/components/gallery/HeroCarousel';
import signatureImage from '@/public/images/sohamghoshsignature.png';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ─── Desktop: Full-screen Carousel ───────────────────────────────── */}
      <div className="hidden md:block">
        <HeroCarousel />
      </div>

      {/* ─── Mobile: Layout with spacing ───────────────────────────────── */}
      <div className="md:hidden flex flex-col">
        {/* Header Spacer */}
        <div className="h-20 flex-shrink-0" />

        {/* Carousel with padding and taller aspect ratio */}
        <div className="w-full px-4 flex-shrink-0">
          <div className="w-full aspect-[16/16]">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* ─── Signature + CTA Section (full height, scrollable) ───────────────────────────────── */}
      <div className=" bg-white flex flex-col items-center justify-center px-6 py-12 md:py-16 gap-24">
        {/* Signature */}
        <div className="w-full max-w-120 pl-12 md:max-w-xs">
          <Image
            src={signatureImage}
            alt="Soham Ghosh"
            width={240}
            height={80}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center gap-2 md:gap-4">
          <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-secondary">
            Inquiries
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary">
            Interested in a piece?
          </h3>
          <p className="text-secondary text-sm font-light max-w-md leading-relaxed">
            Commission work and purchase inquiries are welcome.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-1 font-light tracking-widest text-xs uppercase"
          >
            <Link href="/acquire">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* ─── Featured Work (Commented Out) ───────────────────────────────── */}
      {/* <section className="w-full py-20 md:py-28 bg-muted/30">
        <Container>
          <FadeIn className="mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full border-b border-border pb-6">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
                  Selected Works
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                  Featured
                </h2>
              </div>
              <Link
                href="/work"
                className="text-sm text-secondary hover:text-primary font-medium tracking-wide transition-colors self-start sm:self-end"
              >
                View all works →
              </Link>
            </div>
          </FadeIn>

          <ProjectGrid projects={featured} />
        </Container>
      </section> */}
    </>
  );
}
