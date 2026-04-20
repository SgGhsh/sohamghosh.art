import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import Container from '@/components/ui/Container';
import ProjectGrid from '@/components/gallery/ProjectGrid';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Complete collection of works by Soham Ghosh',
};

export default function WorkPage() {
  return (
    <section className="w-full py-16 md:py-24">
      <Container>
        {/* Header */}
        <FadeIn className="mb-14 border-b border-border pb-8">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-3">
            Complete Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary tracking-tight">
            All Work
          </h1>
          <p className="mt-3 text-sm text-secondary font-light">
            {projects.length} pieces across various mediums and styles
          </p>
        </FadeIn>

        {/* Grid */}
        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
