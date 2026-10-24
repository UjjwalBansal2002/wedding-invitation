# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  Wedding Invitation Website                  │
│                     (Next.js + React)                        │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
        ┌───────▼─────┐  ┌───▼────────┐ ┌─▼──────────────┐
        │   Frontend   │  │  Styling   │ │   Animations  │
        │   (React)    │  │ (Tailwind  │ │ (Framer       │
        │              │  │   CSS)     │ │  Motion)      │
        └──────────────┘  └────────────┘ └───────────────┘
                │
        ┌───────▼──────────────────┐
        │   Page Components        │
        ├─────────────────────────┤
        │ • OpeningInvitation     │
        │ • MainInvitation        │
        │ • Countdown             │
        │ • LoveStory             │
        │ • WeddingEvents         │
        │ • DestinationExperience │
        │ • DressCode             │
        │ • PhotoGallery          │
        │ • RSVP                  │
        │ • ClosingSection        │
        └─────────────────────────┘
                │
        ┌───────▼──────────────────┐
        │   Reusable Components    │
        ├─────────────────────────┤
        │ • FloralCorner          │
        │ • FloralDivider         │
        │ • FloralBorder          │
        │ • FloralPetals          │
        └─────────────────────────┘
                │
        ┌───────▼──────────────────┐
        │   Configuration & Utils  │
        ├─────────────────────────┤
        │ • weddingData.ts        │
        │ • useCountdown hook     │
        │ • countdown utilities   │
        └─────────────────────────┘
```

## Component Hierarchy

```
Home (app/page.tsx)
├── [showInvitation ? null : OpeningInvitation]
├── MainInvitation
├── Countdown
├── LoveStory
├── WeddingEvents
│   └── WeddingEventCard (× 5)
│       └── ExpandableDetails
├── DestinationExperience
├── DressCode
│   └── DressCodeCard (× 5)
├── PhotoGallery
│   ├── FilterButtons
│   ├── MasonryGrid
│   │   └── ImageCard (× N)
│   └── Lightbox
├── RSVP
│   ├── Form Fields
│   ├── ValidationLogic
│   └── SuccessMessage
├── ClosingSection
└── ScrollToTopButton
```

## Data Flow

```
weddingData.ts (Single Source of Truth)
       │
       ├─────────────────────────────────────┐
       │                                     │
       ▼                                     ▼
Page Props                          useCountdown Hook
       │                                     │
       ├─────────────────────────────────────┤
       │                                     │
       ▼                                     ▼
Component Props                    Countdown State
       │                                     │
       └─────────────────────────────────────┘
                     │
                     ▼
             Rendered Components
```

## Feature Implementation Details

### 1. Opening Invitation Animation
```
Button Click
    ↓
setIsOpened = true
    ↓
Envelope Animation (rotateX: 180)
    ↓
Couple Names Fade In
    ↓
onOpen() callback
    ↓
setShowInvitation = true
    ↓
Rest of Site Renders
```

### 2. Countdown System
```
useCountdown Hook (useEffect)
    ↓
calculateCountdown(weddingDate)
    ↓
Every 1 second: Update countdown
    ↓
Render: days, hours, minutes, seconds
    ↓
If isPassed: Show celebration message
```

### 3. Event Card Expansion
```
User Clicks Card
    ↓
setExpandedEvent(eventId)
    ↓
AnimatePresence checks
    ↓
Height: 0 → auto animation
    ↓
Show Event Details
```

### 4. Photo Gallery
```
Images Array
    ↓
Filter by category
    ↓
Render Masonry Grid
    ↓
User Clicks Image
    ↓
setSelectedImage
    ↓
Show Lightbox Modal
```

### 5. Form Validation
```
User Input
    ↓
handleChange updates formData
    ↓
validateForm() on submit
    ↓
Set errors if invalid
    ↓
Show error messages
    ↓
Valid: setIsSubmitted = true
    ↓
Show success for 3 seconds
    ↓
Reset form
```

## Styling System

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-rani-pink: #D94F8A;
  --color-marigold: #F4B942;
  /* ... more colors */
  
  /* Fonts (system fallback) */
  --font-playfair: 'Georgia', serif;
  --font-inter: 'Segoe UI', sans-serif;
}

/* Component Classes */
.text-elegant     → Playfair + Bold + Letter Spacing
.text-romantic    → Playfair + Italic
.gradient-wedding → Pink to Coral gradient
.gradient-soft    → Peach to Rose gradient
```

### Responsive Breakpoints
- Mobile: 360px - 430px
- Tablet: 768px
- Desktop: 1024px+

Tailwind's responsive prefixes used:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)

## Animation System

### Framer Motion Patterns
```
1. Initial State
   initial={{ opacity: 0, y: 20 }}

2. Animation Trigger
   whileInView={{ opacity: 1, y: 0 }}

3. Transition
   transition={{ delay: 0.2, duration: 0.6 }}

4. Interactive
   whileHover={{ scale: 1.05 }}
   whileTap={{ scale: 0.95 }}
```

### Global Animations (CSS)
- `@keyframes float` - Floating effect
- `@keyframes fadeInUp` - Fade in up
- `@keyframes pulse-slow` - Slow pulse
- `@keyframes fall` - Petal falling

## Performance Optimizations

### Build Time
- Static generation (SSG)
- Turbopack bundler
- Code splitting automatic

### Runtime
- Image optimization with Next.js Image
- CSS custom properties (no runtime overhead)
- Framer Motion GPU acceleration
- Lazy loading of components

### File Sizes
- HTML: Optimized
- CSS: ~30KB (with Tailwind)
- JavaScript: Split chunks
- Images: Responsive

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile | Modern | ✅ Full |

## Accessibility Features

1. **Semantic HTML**
   - Proper heading hierarchy
   - Form labels
   - Image alt text

2. **Keyboard Navigation**
   - Tab-through buttons
   - Form submission with Enter
   - Scroll to top button

3. **Motion Preferences**
   - Respects `prefers-reduced-motion`
   - Animations can be disabled

4. **Color Contrast**
   - Text over backgrounds
   - Button contrast
   - Link visibility

## Scalability

### Horizontal Scaling
- Stateless components
- No server state
- Can be deployed anywhere

### Vertical Scaling
- Component reusability
- Clean separation of concerns
- Easy to extend

### Adding Features
1. Create new section component
2. Add data to weddingData.ts
3. Import and use in page.tsx

## Environment Variables

Not required for this frontend application.

For backend integration, add:
```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_FORM_ENDPOINT=your-endpoint
```

## Deployment Checklist

- [ ] Update couple names
- [ ] Update wedding date
- [ ] Update colors (optional)
- [ ] Add wedding photos
- [ ] Update events
- [ ] Update destination info
- [ ] Update dress code
- [ ] Test on mobile
- [ ] Test countdown
- [ ] Test RSVP form
- [ ] Connect backend (if needed)
- [ ] Test on production
- [ ] Set up domain
- [ ] Share with guests

---

**Technical Stack**
- **Framework**: Next.js 16.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack

**Code Quality**
- ✅ Type-safe (TypeScript)
- ✅ Component-based
- ✅ Responsive design
- ✅ Accessibility compliant
- ✅ Performance optimized
