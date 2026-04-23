import { Project } from '@/types/project';

/**
 * Add images in one of two ways:
 *
 *   Local file  →  place the file in public/images/work/
 *                  then set thumbnail/full to '/images/work/your-file.jpg'
 *
 *   Remote URL  →  use the full https:// URL
 *                  (the domain must be listed in next.config.ts → remotePatterns)
 */

export const works: Project[] = [
  {
    id: '1',
    slug: 'The Sleeping Buddha',
    title: 'The Sleeping Buddha',
    medium: 'Oil on Canvas',
    dimensions: { width: 33.5, height: 22, unit: 'in' },
    year: 2025,
    status: 'available',
    images: [
      {
        thumbnail: '/images/work/The Sleeping Buddha.jpg',
        full:      '/images/work/The Sleeping Buddha.jpg',
        alt: "The Sleeping Buddha",
      },
    ],
    description: `There are journeys that begin as plans and end as something else entirely; something quieter, deeper, almost impossible to explain. This one started with a group of young friends, just out of school, stepping into the first days of college life. We had little money, but an abundance of intent. Sandakphu was not just a destination; it was a promise we made to ourselves. Seven days of walking, laughing, aching, and moving forward. By the time we reached, the mountains did not greet us loudly. They revealed themselves slowly; like a thought you don’t notice forming.
And then there was that night.
The cold was sharp, almost unforgiving. Snow fell lightly, unfamiliar and magical at once. My hands trembled, not just from the weather but from the urgency to capture what lay before me. The camera I carried, simple, limited; refused to see what my eyes could. The darkness swallowed detail, and the moment slipped through every photograph I tried to take. So I stood still. The mountains rested in the distance, forming the shape of the Sleeping Buddha; vast, silent, and complete. In that stillness, I felt as if I wasn’t alone. It was as though my father stood beside me, sharing the same view, the same quiet understanding that some things are meant to be felt, not captured.
This painting came later, shaped by memory rather than sight. Each stroke was an attempt to return; to the cold air, the dim light, the hush of that night. I worked through uncertainty, through the frustration of not quite getting it right, layering color and silence together.
It is not perfect. It was never meant to be.
It carries the struggle of remembering, the weight of feeling, and the quiet persistence of trying to hold onto something that was never meant to stay.
`,
    featured: true,
  },
  {
    id: '2',
    slug: 'Namaste',
    title: 'Namaste',
    medium: 'Charcoal, Pencil and Pen on White Board',
    dimensions: { width: 100, height: 80, unit: 'cm' },
    year: 2017,
    status: 'sold',
    images: [
      {
        thumbnail: '/images/work/Namaste.jpg',
        full:      '/images/work/Namaste.jpg',
        alt: 'Namaste',
      },
    ],
    description: `This is a simple sketch. A small gesture. Almost self-explanatory.
Namaste.
But the meaning did not come from tradition this time. It came from a child.
A few days ago, I met a young girl from my building. I had seen her before, always cheerful in her own quiet way. At first, she would just smile, sometimes wave, sometimes make those little expressions only children can get away with.
That day was different. She looked at me and asked, “Kemon acho?” (How are you?). Not out of habit, but with a full, honest smile. I answered, and before I could think further, she reached for my hand. Gently, without hesitation, she held it and kissed my fingers with the innocence of someone who has not yet learned doubt.
It stayed with me.
She did not know who I was. She did not need to. There was no judgment, no calculation. Just a simple act of acknowledging another human being.
This sketch comes from that moment. It is not about perfection or detail. It is about remembering something we slowly forget. The ease of greeting, the warmth of connection, the absence of hesitation. Somewhere along the way, we learn to hold back.
Children remind us that we never really had to.
`,
    featured: true,
  },
  {
    id: '3',
    slug: 'The Witness',
    title: 'The Witness',
    medium: 'Oil on Canvas',
    dimensions: { width: 15, height: 19, unit: 'in' },
    year: 2025,
    status: 'available',
    images: [
      {
        thumbnail: '/images/work/The Witness.jpg',
        full:      '/images/work/The Witness.jpg',
        alt: 'The Witness',
      },
    ],
    description: `We grew up reading about war.It lived in textbooks, in chapters we could close, in stories that belonged to another time. Numbers, dates, victories, losses. It all felt distant, almost unreal.
But in 2025 and beyond, distance disappeared. War entered our daily lives through screens. Not as history, but as repetition. Cities burning. Skies breaking. Names of places turning into headlines we could not ignore. Iran, Israel, Palestine, Ukraine, Russia. Closer to home, tensions that no longer felt like just news. And somewhere within all of this, there are people who do not make the headlines.
This painting is not of one woman. It is of many.
She stands not as a victim alone, but as a witness. To noise, to loss, to the slow normalization of violence. Her eyes hold what words often fail to carry. Not just fear, but understanding. The kind that comes from seeing too much, too often. Behind her, the world burns. The birds circle, not as symbols, but as reminders. Life continues, even in destruction. Or perhaps it simply adapts. Her silence is not empty. It is heavy. It questions without asking.
Is this necessary?
Not directed at one nation, one leader, or one moment. But at all of us. At the idea that violence must always find a place in human history. Because in the end, whether we speak or stay silent, we are all witnessing something.
And that, in itself, changes us.
`,
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
        full:      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1549887534-1541e9326642?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000&h=1500&fit=crop',
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
        full:      'https://images.unsplash.com/photo-1557672199-6951e40f4bb4?w=2000&h=1500&fit=crop',
        alt: 'Digital-inspired abstract art',
      },
    ],
    description: 'Intersecting the digital and physical through layered media.',
  },
];
