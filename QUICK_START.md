# Quick Start Guide

## 🚀 Getting Started

### Running the Website

**Development Mode:**
```bash
cd /home/claude/wedding-invitation
npm run dev
```
Open `http://localhost:3000` in your browser.

**Production Build:**
```bash
npm run build
npm run start
```

## 🎯 Immediate Customizations

### 1. Update Couple Names (5 minutes)

Edit `src/config/weddingData.ts`:
```typescript
export const weddingData = {
  brideName: 'Aanya Sharma',      // Change this
  groomName: 'Aarav Singh',        // Change this
  weddingDate: '2027-02-15',       // Change this
  destination: 'Udaipur, Rajasthan', // Change this
  // ... rest of data
};
```

### 2. Update Colors (5 minutes)

Edit `app/globals.css`:
```css
:root {
  --color-rani-pink: #D94F8A;      /* Change these colors */
  --color-marigold: #F4B942;
  --color-coral: #F17C72;
  /* ... rest of colors */
}
```

### 3. Add Wedding Photos (10 minutes)

In `src/config/weddingData.ts`, update the gallery:
```typescript
gallery: [
  {
    id: 1,
    title: 'Your Photo',
    image: 'https://your-image-url.jpg',  // Add your image URL
  },
  // ... more photos
];
```

### 4. Update Wedding Events (10 minutes)

In `src/config/weddingData.ts`, modify the events array:
```typescript
events: [
  {
    id: 'mehendi',
    name: 'Mehendi',
    date: '2027-02-12',
    time: '5:00 PM - 11:00 PM',
    venue: 'Your Venue Name',
    dressCode: 'Green, Pink, Floral',
    description: 'Your description here',
    colors: { primary: '#D94F8A', secondary: '#F4B942' },
  },
  // ... more events
];
```

### 5. Update Travel Information (10 minutes)

Update airport, railway, and hotel information in `src/config/weddingData.ts`:
```typescript
travel: {
  airport: {
    name: 'Your Airport Code',
    fullName: 'Full Airport Name',
    distance: 'XX km',
    drivingTime: 'XX minutes',
    facilities: 'Description of facilities',
  },
  // ... etc
};
```

## 📱 Testing the Website

### Mobile Testing
```bash
# The dev server provides a network URL
http://192.0.2.2:3000
```
Use this URL on your phone to test mobile responsiveness.

### All Sections
1. **Open Invitation** - Click "Open Invitation" button to proceed
2. **Main Invitation** - See couple names and wedding details
3. **Countdown** - Live countdown to wedding day
4. **Love Story** - Timeline of important moments
5. **Events** - Click event cards to see details
6. **Destination** - View venue info and maps
7. **Dress Code** - Color suggestions for each event
8. **Gallery** - Click images to open lightbox
9. **RSVP** - Fill form and submit (demo mode)
10. **Closing** - Final celebration message

## 🎨 Color Customization Ideas

### Option 1: Traditional Gold
```css
--color-rani-pink: #C0A660;    /* Gold */
--color-marigold: #D4AF37;     /* Light gold */
--color-coral: #B8860B;        /* Dark gold */
```

### Option 2: Modern Jewel Tones
```css
--color-rani-pink: #6F4E9B;    /* Purple */
--color-marigold: #2E7D32;     /* Green */
--color-coral: #1565C0;        /* Blue */
```

### Option 3: Elegant Pastels
```css
--color-rani-pink: #D8B2D8;    /* Light purple */
--color-marigold: #F5DEB3;     /* Wheat */
--color-coral: #FFB6C1;        /* Light pink */
```

## 📝 Content Customization

### Invitation Message
In `src/config/weddingData.ts`:
```typescript
invitationMessage: 'With the blessings of our families, we invite you to join us as we begin our forever, surrounded by love, laughter, and beautiful memories.',
```

### Event Descriptions
```typescript
events: [
  {
    description: 'An evening of traditional celebrations with henna, music, and dance.',
    // ...
  },
];
```

### Dress Code Notes
```typescript
dressCode: [
  {
    event: 'Mehendi',
    colors: ['Bright Pink', 'Green', 'Yellow', 'Orange'],
    attire: 'Kurta, Saree, Lehenga',
    notes: 'Bright and colorful traditional outfits. Comfortable footwear recommended.',
  },
];
```

## 🌟 Features to Explore

### 1. Animations
- Envelope opening animation
- Scroll-triggered reveals
- Countdown timer
- Floating elements

### 2. Interactions
- Expandable event cards
- Photo gallery lightbox
- Form validation
- Smooth scrolling

### 3. Responsive Design
- Mobile-optimized layout
- Touch-friendly buttons
- Adaptive typography
- Flexible images

## 🔗 Important Files

| File | Purpose | Edit For |
|------|---------|----------|
| `src/config/weddingData.ts` | All wedding info | Couple names, dates, events |
| `app/globals.css` | Colors & fonts | Color scheme, typography |
| `app/page.tsx` | Main component | Page structure |
| `src/components/sections/*.tsx` | Page sections | Layout changes |
| `app/layout.tsx` | HTML head | Title, metadata |

## ⚠️ Important Notes

1. **RSVP Form**: Currently shows success but doesn't save data. To add backend:
   - Connect to a database (Supabase, Firebase, etc.)
   - Update form handler in `src/components/sections/RSVP.tsx`

2. **Images**: Replace placeholder Unsplash images with your wedding photos

3. **Google Maps**: Venue address opens Google Maps automatically

4. **Mobile-First**: Test on mobile first, then desktop

5. **Performance**: Build is optimized for fast loading

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Self-Hosted
```bash
npm run build
npm run start
```

### Docker
```bash
docker build -t wedding-invitation .
docker run -p 3000:3000 wedding-invitation
```

## 💡 Tips

1. **Use high-quality images** - Photos make the biggest impact
2. **Test on mobile** - Most guests will view on phones
3. **Keep text concise** - Long paragraphs are hard to read on mobile
4. **Update countdown** - Double-check your wedding date
5. **Test RSVP form** - Verify all fields work before sharing

## ❓ Common Issues

**Q: Images not showing?**  
A: Check URL is correct and publicly accessible

**Q: Fonts look different?**  
A: Using system fonts as fallback. For Google Fonts, ensure internet connection

**Q: RSVP not saving?**  
A: Demo mode doesn't save. Connect a backend to store responses

**Q: Mobile layout broken?**  
A: Clear cache and rebuild: `npm run build`

## 📞 Support

For issues or questions:
1. Check PROJECT_SUMMARY.md for detailed documentation
2. Review the component files in `src/components/`
3. Check Next.js documentation: https://nextjs.org/docs

---

**Happy Wedding Planning! 💕**
