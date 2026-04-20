import Link from 'next/link';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ProjectGrid from '@/components/gallery/ProjectGrid';
import { FadeIn } from '@/components/ui/FadeIn';
import HeroCarousel from '@/components/gallery/HeroCarousel';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ─── Hero Carousel ───────────────────────────────── */}
      <HeroCarousel />

      {/* ─── Featured Work ───────────────────────────────── */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
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
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="w-full py-20 md:py-28 bg-background">
        <Container size="sm">
          <FadeIn>
            <div className="flex flex-col items-center text-center gap-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary">
                Inquiries
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-primary">
                Interested in a piece?
              </h3>
              <p className="text-secondary font-light max-w-md leading-relaxed">
                Commission work and purchase inquiries are welcome. Get in touch to discuss availability.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-2 font-light tracking-widest text-xs uppercase"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
