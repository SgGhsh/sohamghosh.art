export interface CarouselSlide {
  src: string;
  alt: string;
  title: string;
  meta: string;   // e.g. "Oil on Canvas · 120 × 90 cm · 2024"
  slug: string;   // links to /work/[slug] — leave empty string to disable the link
}

export const carouselSlides: CarouselSlide[] = [
  {
    src: '/images/hero/carousel_0.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
  {
    src: '/images/hero/carousel_1.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
  {
    src: '/images/hero/carousel_2.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
  {
    src: '/images/hero/carousel_3.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
  {
    src: '/images/hero/carousel_4.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
  {
    src: '/images/hero/carousel_5.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
  {
    src: '/images/hero/carousel_6.jpg',
    alt: '',
    title: '',
    meta: '',
    slug: '',
  },
];
