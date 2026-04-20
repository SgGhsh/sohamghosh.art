import type { Metadata } from 'next';
import { works } from '@/data/works';
import Container from '@/components/ui/Container';
import ProjectGrid from '@/components/gallery/ProjectGrid';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Complete collection of works by Soham Ghosh',
};

export default function WorkPage() {
  return (
    <section className="w-full flex-1 flex flex-col py-4 md:py-6">
      <Container className="flex-1 flex flex-col">

        <FadeIn className="mb-8 pb-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
            Complete Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            All Work
          </h1>
          <p className="mt-2 text-sm text-secondary font-light">
            {works.length} pieces
          </p>
        </FadeIn>

        <ProjectGrid projects={works} />

      </Container>
    </section>
  );
}
