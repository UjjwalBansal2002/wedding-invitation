# Premium Interactive Indian Destination Wedding Invitation Website

## Project Overview

A complete, beautiful, and premium interactive destination wedding invitation website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The website captures the essence of an Indian wedding celebration with vibrant colors, elegant design, and smooth animations.

## ✨ Features Implemented

### 1. **Cinematic Opening Invitation**
- Full-screen animated envelope that opens on click
- Beautiful floral-decorated envelope design
- Smooth animation transitions
- Premium Indian wedding stationery aesthetic
- Music toggle button (placeholder)

### 2. **Main Wedding Invitation**
- Large, elegant couple names (visual focus)
- Wedding date and destination
- Romantic invitation message
- Decorative wedding monogram (A & A)
- Floral border decorations
- Beautiful gradient backgrounds

### 3. **Live Wedding Countdown**
- Real-time countdown to wedding date
- Days, Hours, Minutes, Seconds display
- Colorful animated cards
- Celebration message if wedding date has passed
- Responsive grid layout

### 4. **Our Love Story**
- Timeline of couple milestones
- First Meeting → First Date → Proposal → Forever Begins
- Animated timeline with visual indicators
- Beautiful editorial layout
- Mobile-friendly design

### 5. **Wedding Events Section**
- 5 major events: Mehendi, Haldi, Sangeet, Wedding, Reception
- Expandable event cards with full details
- Color-coded events (each has unique color scheme)
- Event details: Date, Time, Venue, Dress Code, Description
- Smooth expand/collapse animations

### 6. **Destination Wedding Experience**
- Venue information with Google Maps integration
- Airport and railway station details
- Hotel recommendations (4 luxury properties)
- Travel guide style layout
- Contact information

### 7. **Dress Code Inspiration**
- Event-specific dress code suggestions
- Color swatches for each event
- Attire recommendations
- Fashion-forward design
- 5 events with unique color palettes

### 8. **Photo Gallery**
- Responsive masonry grid layout
- Image filtering by category
- Lightbox for full-size image viewing
- Smooth animations and transitions
- Placeholder images from Unsplash

### 9. **Interactive RSVP Form**
- Guest information collection
- Attendance confirmation (Yes/No/Maybe)
- Number of guests selection
- Event attendance checkboxes
- Dietary preferences input
- Personal message for couple
- Form validation
- Success message display
- **DEMO MODE** - No backend required

### 10. **Closing Celebration Section**
- Final thank you message
- Couple names and wedding details
- Romantic closing message
- Animated decorative elements
- Buttons to navigate to RSVP or Back to Top

## 🎨 Color Palette

**Primary Colors:**
- Rani Pink: `#D94F8A`
- Marigold Yellow: `#F4B942`
- Coral: `#F17C72`
- Floral Red: `#B9384E`
- Peacock Teal: `#287C78`
- Royal Purple: `#7651A6`
- Leaf Green: `#668B54`

**Supporting Colors:**
- Warm Ivory: `#FFF8ED`
- Soft Peach: `#FCE0D2`
- Rose Pink: `#F5C6D8`
- Pale Mint: `#DCEBDD`

## 🏗️ Project Structure

```
wedding-invitation/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Main page component
│   ├── globals.css             # Global styles and animations
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── sections/           # Full-page sections
│   │   │   ├── OpeningInvitation.tsx
│   │   │   ├── MainInvitation.tsx
│   │   │   ├── Countdown.tsx
│   │   │   ├── LoveStory.tsx
│   │   │   ├── WeddingEvents.tsx
│   │   │   ├── DestinationExperience.tsx
│   │   │   ├── DressCode.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   ├── RSVP.tsx
│   │   │   └── ClosingSection.tsx
│   │   └── ui/
│   │       └── FloralDecorations.tsx  # Reusable floral components
│   ├── config/
│   │   └── weddingData.ts      # Configurable wedding data
│   ├── hooks/
│   │   └── useCountdown.ts     # Countdown hook
│   └── lib/
│       └── countdown.ts        # Countdown utilities
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🎯 Key Technical Features

### Animations
- Framer Motion for smooth transitions
- Staggered animations on scroll
- Interactive envelope opening animation
- Floating and pulsing elements
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Tested on 360px, 390px, 430px, tablets, and desktop
- Flexible layouts
- Touch-friendly interactions
- Optimized images

### Customizable Data
All wedding information is centralized in `src/config/weddingData.ts`:
- Couple names
- Wedding date
- Destination
- Events
- Gallery
- Travel information
- Dress code
- Colors
- Messages

Simply edit the config file to update all wedding details site-wide.

### Performance
- Static build optimized
- Next.js Turbopack for fast builds
- Optimized images with Next.js Image component
- CSS custom properties for theming
- No external API dependencies

## 🚀 Running the Project

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

## 📦 Dependencies

- **Next.js**: React framework with SSR
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons

## 🎭 Customization Guide

### 1. Update Wedding Information
Edit `src/config/weddingData.ts`:
```typescript
export const weddingData = {
  brideName: 'Your Bride Name',
  groomName: 'Your Groom Name',
  weddingDate: 'YYYY-MM-DD',
  // ... more fields
};
```

### 2. Change Colors
Update the color variables in `app/globals.css`:
```css
:root {
  --color-rani-pink: #D94F8A;
  --color-marigold: #F4B942;
  /* ... etc */
}
```

### 3. Add Photos
Replace image URLs in `weddingData.ts`:
```typescript
gallery: [
  {
    id: 1,
    title: 'Your Photo',
    image: 'your-image-url',
  },
];
```

### 4. Customize Copy
All text is centralized and easily editable:
- Invitation message
- Closing message
- Event descriptions
- Dress code suggestions

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Notes

- **RSVP Form**: Currently in demo mode. To connect a backend, update the form submission handler in `src/components/sections/RSVP.tsx`
- **Images**: Uses placeholder Unsplash images. Replace with actual wedding photos
- **Fonts**: Uses system fonts (Georgia, Segoe UI) as fallback. For Google Fonts, ensure internet connectivity
- **Google Maps**: Maps button opens Google Maps for the venue address
- **Accessibility**: Respects `prefers-reduced-motion` CSS media query

## 🎨 Visual Quality

The website features:
- Large, elegant typography
- Premium spacing and layout
- Colorful floral compositions
- Carefully designed section transitions
- Smooth hover effects
- Beautiful shadows and depth
- Professional photo gallery
- Consistent brand colors

## 📱 Mobile Optimizations

- Touch-friendly buttons (min 44px)
- Readable text sizes
- Optimal spacing for small screens
- Responsive images
- Fast animations
- Simplified navigation

## 🔧 Future Enhancements

- Backend integration for RSVP
- Email notifications
- Guest list management
- Admin dashboard
- Multi-language support
- Accessibility improvements
- SEO optimization
- Analytics integration

---

**Status**: ✅ Complete and production-ready
**Last Updated**: October 24, 2026
**Version**: 1.0.0
