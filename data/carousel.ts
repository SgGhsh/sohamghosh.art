export interface CarouselSlide {
  src: string;
  alt: string;
  title: string;
  meta: string;   // e.g. "Oil on Canvas · 120 × 90 cm · 2024"
  slug: string;   // links to /work/[slug] — leave empty string to disable the link
}

export const carouselSlides: CarouselSlide[] = [
  {
    src: '/images/hero/carousel_0.jpeg',
    alt: '',
    title: 'Durga Eye',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
  {
    src: '/images/hero/carousel_1.jpeg',
    alt: '',
    title: 'Sleeping Buddha',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
  {
    src: '/images/hero/carousel_2.jpeg',
    alt: '',
    title: 'Ethereal',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
  {
    src: '/images/hero/carousel_3.jpeg',
    alt: '',
    title: 'Marriage',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
];
