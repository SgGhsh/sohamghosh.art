import type { Metadata } from 'next';
import { works } from '@/data/works';
import Container from '@/components/ui/Container';
import JigsawGrid from '@/components/gallery/JigsawGrid';
import JigsawCard from '@/components/gallery/JigsawCard';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Complete collection of works by Soham Ghosh',
};

export default function WorkPage() {
  return (
    <section className="w-full flex-1 flex flex-col py-4 md:py-6 gap-8">

      <Container>
        <FadeIn>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-2">
            Catalogue
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Complete Collection
          </h1>
          <p className="mt-2 text-sm text-secondary font-light">
            {works.length} pieces
          </p>
        </FadeIn>
      </Container>

      <JigsawGrid>
        {works.map((project) => (
          <JigsawCard key={project.id} project={project} />
        ))}
      </JigsawGrid>

    </section>
  );
}
