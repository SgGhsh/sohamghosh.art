import { StaticImageData } from 'next/image';
import carousel0 from '../public/images/hero/carousel_0.jpeg';
import carousel1 from '../public/images/hero/carousel_1.jpeg';
import carousel2 from '../public/images/hero/carousel_2.jpeg';
import carousel3 from '../public/images/hero/carousel_3.jpeg';

export interface CarouselSlide {
  src: StaticImageData;
  alt: string;
  title: string;
  meta: string;   // e.g. "Oil on Canvas · 120 × 90 cm · 2024"
  slug: string;   // links to /work/[slug] — leave empty string to disable the link
}

export const carouselSlides: CarouselSlide[] = [
  {
    src: carousel0,
    alt: '',
    title: 'Durga Eye',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
  {
    src: carousel1,
    alt: '',
    title: 'Sleeping Buddha',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
  {
    src: carousel2,
    alt: '',
    title: 'Ethereal',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
  {
    src: carousel3,
    alt: '',
    title: 'Marriage',
    meta: 'Oil on Canvas · 120 × 90 cm · 2024',
    slug: '',
  },
];
