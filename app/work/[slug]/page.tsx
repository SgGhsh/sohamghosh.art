import type { Metadata } from 'next';
import Image from "next-image-export-optimizer";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { getProjectBySlug, formatDimensions, getStatusLabel, getStatusColor, cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: project.title,
    description: project.description ?? `${project.title} — ${project.medium}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const idx  = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <section className="w-full py-12 md:py-20">
      <Container>

        {/* Back */}
        <FadeIn className="mb-10">
          <Button asChild variant="ghost" size="sm" className="-ml-2 text-secondary hover:text-primary">
            <Link href="/work">
              <ChevronLeft className="mr-1 h-4 w-4" />
              All Work
            </Link>
          </Button>
        </FadeIn>

        {/* Main: image + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Image column */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="w-full bg-muted border border-border">
              <Image
                src={project.images[0].full}
                alt={project.images[0].alt}
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn direction="right" delay={0.12} className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="space-y-8">

              {/* Title */}
              <div className="border-b border-border pb-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-3">
                  {project.year}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Details table */}
              <div className="space-y-3">
                {[
                  ['Medium',     project.medium],
                  ['Dimensions', formatDimensions(project.dimensions)],
                  ['Year',       String(project.year)],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start gap-4 text-sm">
                    <span className="text-secondary font-light shrink-0">{label}</span>
                    <span className="text-primary font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>

              {/* Status */}
              <span
                className={cn(
                  'inline-block text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 border rounded-sm',
                  getStatusColor(project.status)
                )}
              >
                {getStatusLabel(project.status)}
              </span>

              {/* Description */}
              {project.description && (
                <div className="border-t border-border pt-6 prose prose-sm max-w-none text-justify
                  prose-p:text-secondary prose-p:font-light prose-p:leading-relaxed prose-p:mt-0 prose-p:mb-3
                  last:prose-p:mb-0">
                  {project.description.split('\n').filter(Boolean).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* Inquire CTA */}
              {project.status === 'available' && (
                <Button asChild size="lg" className="w-full font-light tracking-widest text-xs uppercase mt-2">
                  <Link href="/contact">Inquire About This Piece</Link>
                </Button>
              )}

            </div>
          </FadeIn>

        </div>

        {/* Prev / Next navigation */}
        <FadeIn className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm font-light">{prev.title}</span>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <span className="text-sm font-light">{next.title}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
