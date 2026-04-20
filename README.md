# Soham Ghosh Portfolio Website

A minimalist, gallery-focused portfolio website for contemporary artist Soham Ghosh. Built with Next.js 14+, TypeScript, and Tailwind CSS v4.

## ✨ Features

- **Responsive Design**: Mobile-first approach with breakpoints for mobile, tablet, and desktop
- **Gallery System**: 3-column responsive grid gallery (3 → 2 → 1 columns)
- **Project Detail Pages**: Individual pages for each artwork with full metadata
- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **SEO Optimized**: Metadata, Open Graph tags, and static generation
- **Accessible**: ARIA labels, keyboard navigation, focus indicators
- **Mobile Menu**: Slide-out drawer navigation with backdrop

## 🚀 Getting Started

### Prerequisites

- Node.js 20.18+
- npm 11+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
sohamghoshwebsite/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage (hero + featured work)
│   ├── work/                # Gallery pages
│   │   ├── page.tsx         # All projects grid
│   │   └── [slug]/page.tsx  # Individual project details
│   ├── about/page.tsx       # Artist bio
│   ├── contact/page.tsx     # Contact form
│   └── globals.css          # Global styles + Tailwind
├── components/
│   ├── layout/              # Header, Footer, MobileMenu
│   ├── gallery/             # ProjectGrid, ProjectCard, ProjectModal
│   └── ui/                  # Reusable UI components
├── data/
│   └── projects.ts          # Portfolio data + site config
├── types/
│   └── project.ts           # TypeScript interfaces
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Project images
```

## 🎨 Design System

### Colors (Tailwind v4 CSS Variables)

```css
--primary: #000000     /* Black text */
--secondary: #666666   /* Gray secondary text */
--accent: #DC2626      /* Red navigation/CTAs */
--background: #FFFFFF  /* White background */
--muted: #F5F5F5      /* Light gray hover */
--border: #E5E5E5     /* Border color */
```

### Responsive Breakpoints

- Mobile: < 640px (1 column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: 1024px+ (3 columns)

## 📝 Content Management

### Adding Real Artwork

Replace placeholder content in `data/projects.ts`:

```typescript
{
  id: '1',
  slug: 'urban-fragments',           // URL slug
  title: 'Urban Fragments',          // Artwork title
  medium: 'Oil on Canvas',           // Medium
  dimensions: {
    width: 120,
    height: 90,
    unit: 'cm'
  },
  year: 2024,                        // Year created
  status: 'available',               // available | sold | private | not-for-sale
  images: [{
    thumbnail: '/images/projects/urban-fragments-thumb.jpg',
    full: '/images/projects/urban-fragments-full.jpg',
    alt: 'Description for accessibility',
  }],
  description: 'Artwork description...',
  featured: true,                    // Show on homepage
}
```

### Updating Site Info

Edit `siteConfig` in `data/projects.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Soham Ghosh',
  tagline: 'Contemporary Artist',
  bio: 'Your biography...',
  email: 'hello@sohamghosh.art',
  social: {
    instagram: 'https://instagram.com/username',
  },
};
```

### Adding Images

1. Place high-res images (2000-3000px wide) in `public/images/projects/`
2. Use descriptive filenames: `project-slug-name.jpg`
3. Update image paths in `data/projects.ts`
4. Next.js will automatically optimize images

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.38
- **Icons**: Lucide React 1.8
- **Image Optimization**: Sharp 0.34

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repo to [Vercel](https://vercel.com)
3. Configure build settings (auto-detected)
4. Deploy

### Environment Variables

No environment variables required for basic deployment.

## 📊 Performance

- Lighthouse scores target: Performance 90+, Accessibility 95+
- Static generation for all pages
- Optimized images (WebP/AVIF)
- Tree-shaken CSS
- Minimal JavaScript bundle

## 🔧 Customization

### Change Color Scheme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --accent: #your-color;  /* Change accent color */
}
```

### Modify Grid Layout

Edit `ProjectGrid.tsx`:

```jsx
// Change from 3 columns to 4
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
```

### Add More Pages

1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Update navigation in `components/layout/Header.tsx`

## 📄 License

This project is built for Soham Ghosh. All artwork and content rights reserved.

## 🤝 Support

For issues or questions, contact: hello@sohamghosh.art

---

Built with ❤️ using Next.js and Tailwind CSS
