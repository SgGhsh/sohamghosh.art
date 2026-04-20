import { Project, SiteConfig } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'urban-fragments',
    title: 'Urban Fragments',
    medium: 'Oil on Canvas',
    dimensions: { width: 120, height: 90, unit: 'cm' },
    year: 2024,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=2000&h=1500&fit=crop',
        alt: 'Abstract urban landscape painting',
      },
    ],
    description: 'An exploration of urban landscapes through abstract forms and bold color palettes.',
    featured: true,
  },
  {
    id: '2',
    slug: 'midnight-reverie',
    title: 'Midnight Reverie',
    medium: 'Acrylic on Canvas',
    dimensions: { width: 100, height: 80, unit: 'cm' },
    year: 2024,
    status: 'sold',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=2000&h=1500&fit=crop',
        alt: 'Dark abstract painting with blue tones',
      },
    ],
    description: 'A contemplative piece exploring the quiet moments of night.',
    featured: true,
  },
  {
    id: '3',
    slug: 'chromatic-dreams',
    title: 'Chromatic Dreams',
    medium: 'Mixed Media on Canvas',
    dimensions: { width: 150, height: 100, unit: 'cm' },
    year: 2023,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=2000&h=1500&fit=crop',
        alt: 'Colorful abstract mixed media artwork',
      },
    ],
    description: 'Vibrant exploration of color theory and emotional expression.',
    featured: true,
  },
  {
    id: '4',
    slug: 'silent-motion',
    title: 'Silent Motion',
    medium: 'Oil on Canvas',
    dimensions: { width: 90, height: 120, unit: 'cm' },
    year: 2024,
    status: 'private',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=2000&h=1500&fit=crop',
        alt: 'Minimalist abstract painting',
      },
    ],
    description: 'A study in movement captured through stillness.',
  },
  {
    id: '5',
    slug: 'ethereal-landscapes',
    title: 'Ethereal Landscapes',
    medium: 'Watercolor on Paper',
    dimensions: { width: 76, height: 56, unit: 'cm' },
    year: 2023,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=2000&h=1500&fit=crop',
        alt: 'Watercolor abstract landscape',
      },
    ],
    description: 'Dreamlike landscapes rendered in translucent watercolors.',
    featured: true,
  },
  {
    id: '6',
    slug: 'geometric-harmony',
    title: 'Geometric Harmony',
    medium: 'Acrylic on Canvas',
    dimensions: { width: 100, height: 100, unit: 'cm' },
    year: 2024,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=2000&h=1500&fit=crop',
        alt: 'Geometric abstract painting',
      },
    ],
    description: 'Exploring balance through geometric forms and color relationships.',
  },
  {
    id: '7',
    slug: 'textured-memories',
    title: 'Textured Memories',
    medium: 'Mixed Media on Wood',
    dimensions: { width: 80, height: 80, unit: 'cm' },
    year: 2023,
    status: 'sold',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=2000&h=1500&fit=crop',
        alt: 'Textured mixed media artwork',
      },
    ],
    description: 'Layered textures evoking fragmented memories.',
  },
  {
    id: '8',
    slug: 'color-fields',
    title: 'Color Fields',
    medium: 'Oil on Canvas',
    dimensions: { width: 140, height: 90, unit: 'cm' },
    year: 2024,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=2000&h=1500&fit=crop',
        alt: 'Color field painting',
      },
    ],
    description: 'Large-scale exploration of color relationships and spatial depth.',
  },
  {
    id: '9',
    slug: 'organic-rhythms',
    title: 'Organic Rhythms',
    medium: 'Acrylic on Canvas',
    dimensions: { width: 110, height: 85, unit: 'cm' },
    year: 2023,
    status: 'not-for-sale',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=2000&h=1500&fit=crop',
        alt: 'Organic abstract painting',
      },
    ],
    description: 'Fluid forms inspired by natural patterns and rhythms.',
  },
  {
    id: '10',
    slug: 'monochrome-study',
    title: 'Monochrome Study',
    medium: 'Charcoal on Paper',
    dimensions: { width: 70, height: 100, unit: 'cm' },
    year: 2024,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=2000&h=1500&fit=crop',
        alt: 'Monochrome charcoal drawing',
      },
    ],
    description: 'A study in value, texture, and negative space.',
  },
  {
    id: '11',
    slug: 'sunset-impressions',
    title: 'Sunset Impressions',
    medium: 'Oil on Canvas',
    dimensions: { width: 130, height: 95, unit: 'cm' },
    year: 2023,
    status: 'available',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000&h=1500&fit=crop',
        alt: 'Abstract sunset painting',
      },
    ],
    description: 'Capturing the ephemeral beauty of golden hour.',
  },
  {
    id: '12',
    slug: 'digital-fragments',
    title: 'Digital Fragments',
    medium: 'Mixed Media on Canvas',
    dimensions: { width: 100, height: 75, unit: 'cm' },
    year: 2024,
    status: 'private',
    images: [
      {
        thumbnail: 'https://images.unsplash.com/photo-1557672199-6951e40f4bb4?w=800&h=600&fit=crop',
        full: 'https://images.unsplash.com/photo-1557672199-6951e40f4bb4?w=2000&h=1500&fit=crop',
        alt: 'Digital-inspired abstract art',
      },
    ],
    description: 'Intersecting the digital and physical through layered media.',
  },
];

export const siteConfig: SiteConfig = {
  name: 'Soham Ghosh Art',
  tagline: 'Contemporary Art',
  bio: `Soham Ghosh is a contemporary artist working primarily in abstract painting and mixed media.

  His work explores the intersection of color, form, and emotion, drawing inspiration from urban landscapes and natural phenomena. Through bold color palettes and expressive mark-making, he creates pieces that invite viewers into contemplative spaces.

  Based in India, Soham has exhibited his work in various galleries and art spaces. His practice is characterized by a continuous exploration of materials and techniques, always pushing the boundaries of traditional painting methods.`,
  email: 'soham.ghsh97@gmail.com',
  social: {
    instagram: 'https://instagram.com/sgghshart',
  },
};
