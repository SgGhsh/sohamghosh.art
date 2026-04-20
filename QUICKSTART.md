# Quick Start Guide

## 🚀 View the Site Now

```bash
# Start the development server
npm run dev
```

The site will be available at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.0.199:3000 (accessible from other devices on your network)

## 📱 Test on Different Devices

### Desktop
Open http://localhost:3000 in your browser

### Mobile/Tablet
1. Find your computer's IP address (shown when you run `npm run dev`)
2. Open that URL on your phone/tablet browser
3. Example: http://192.168.0.199:3000

## 🧭 Navigation Guide

### Pages to Visit

1. **Homepage** - `/`
   - Hero section with "Soham Ghosh" title
   - Featured work section with 4 projects
   - "View All Work" CTA button

2. **Gallery** - `/work`
   - All 12 projects in responsive grid
   - Click any project to view details

3. **Project Detail** - `/work/[slug]`
   - Example: `/work/urban-fragments`
   - Large image display
   - Full metadata
   - Previous/Next navigation

4. **About** - `/about`
   - Artist bio
   - Contact information

5. **Contact** - `/contact`
   - Contact form
   - Email display

## 📱 Test Responsive Design

### Desktop (Chrome DevTools)
1. Open Chrome DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Test these sizes:
   - iPhone SE (375px) - Mobile
   - iPad (768px) - Tablet
   - Desktop (1024px, 1920px)

### Test Mobile Menu
1. Resize browser to < 768px width
2. Click hamburger icon (☰) in top right
3. Menu should slide in from right
4. Click X to close

## ✅ Features to Test

### Homepage
- [ ] Hero section displays correctly
- [ ] Featured work section shows 4 projects
- [ ] "View All →" link works
- [ ] "View All Work" button works

### Gallery
- [ ] All 12 projects display in grid
- [ ] Grid is 3 columns on desktop
- [ ] Grid is 2 columns on tablet
- [ ] Grid is 1 column on mobile
- [ ] Hover effects work on cards
- [ ] Clicking a card navigates to detail page

### Project Detail
- [ ] Large image loads
- [ ] Metadata displays correctly
- [ ] Status badge shows correct color
- [ ] "Back to Gallery" link works
- [ ] Previous/Next navigation works
- [ ] "Inquire About This Piece" button shows for available items

### Navigation
- [ ] Header stays at top when scrolling
- [ ] Desktop menu shows Work, About, Contact
- [ ] Mobile menu (< 768px) shows hamburger icon
- [ ] Mobile menu slides in smoothly
- [ ] Mobile menu closes when clicking backdrop
- [ ] All navigation links work

### Footer
- [ ] Copyright shows current year
- [ ] Instagram link works
- [ ] Footer displays at bottom of page

## 🎨 Visual Checks

### Colors
- [ ] Text is black (#000000)
- [ ] Navigation links are red (#DC2626)
- [ ] Hover states change color
- [ ] Status badges have correct colors:
  - Available: Green
  - Sold: Gray
  - Private: Gray

### Typography
- [ ] Large headings are bold
- [ ] Body text is readable
- [ ] Line height is comfortable

### Spacing
- [ ] Consistent padding and margins
- [ ] Content doesn't touch edges
- [ ] Gallery has even spacing

### Images
- [ ] All images load
- [ ] Images don't distort
- [ ] Hover effects work smoothly

## 🔧 Troubleshooting

### Port 3000 is in use
If you see "Port 3000 is in use", the server will automatically use port 3001.
Just visit http://localhost:3001 instead.

### Images don't load
Some Unsplash placeholder images might return 404. This is expected - they'll be replaced with real images later.

### Build errors
If you see build errors, try:
```bash
rm -rf .next
npm run build
```

## 📊 Performance Testing

### Run Lighthouse Audit
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Click "Analyze page load"
5. Check scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 90+
   - SEO: 90+

## 🚀 Ready to Deploy?

Once you're happy with the site:

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

Then follow the deployment instructions in README.md.

---

Enjoy exploring the site! 🎨
