export const weddingData = {
  // Couple Information
  brideName: 'Kajal Bansal',
  groomName: 'Ashish Varshney',

  // Wedding Details
  weddingDate: '2026-11-26',
  destination: 'The Mountain Front Resort & Spa',
  venue: 'The Mountain Front Resort & Spa',
  venueAddress: 'The Mountain Front Resort & Spa',
  venuePhone: '+91 8445973574',
  mapsUrl: 'https://maps.app.goo.gl/4adDLMfRR6QQwZe5A',

  // Invitation Message
  invitationMessage: 'With the divine blessings of our ancestors and families, we warmly invite you to celebrate the joyous union of our hearts as we begin our forever amidst the serene mountains and festive splendor.',
  closingMessage: 'Your presence, blessings, and warm smiles will make our celebrations truly unforgettable.',

  // Wedding Events (Haldi, DJ & Sangeet Night, Sagai Rasm, Wedding Ceremony)
  events: [
    {
      id: 'haldi',
      name: 'Haldi Ceremony',
      date: 'November 25, 2026',
      time: '1:00 PM onwards (Noon)',
      venue: 'The Mountain Front Resort & Spa',
      dressCode: 'Sunny Yellow & Traditional Festive Wear',
      description: 'A joyful afternoon ceremony filled with fragrant turmeric, golden marigold petals, music, and blessings.',
      image: '/images/event-haldi.jpg',
      colors: { primary: '#F9A825', secondary: '#E87524' }, // Marigold Yellow & Festive Orange
    },
    {
      id: 'sangeet',
      name: 'DJ & Sangeet Night',
      date: 'November 25, 2026',
      time: '6:00 PM onwards',
      venue: 'The Mountain Front Resort & Spa',
      dressCode: 'Glamorous Evening Festive Attire',
      description: 'An electrifying musical night filled with rhythmic dhol beats, vibrant dance performances, DJ, and celebratory dinner under the stars.',
      image: '/images/event-sangeet.jpg',
      colors: { primary: '#7B3F98', secondary: '#D81B60' }, // Royal Purple & Rani Pink
    },
    {
      id: 'sagai',
      name: 'Sagai Rasm (Ring Ceremony)',
      date: 'November 26, 2026',
      time: '11:00 AM (Morning)',
      venue: 'The Mountain Front Resort & Spa',
      dressCode: 'Elegant Traditional & Indo-Western Attire',
      description: 'The auspicious ring ceremony exchanging traditional vows, blessings, and joyful moments between our families.',
      image: '/images/event-mehendi.jpg',
      colors: { primary: '#26734D', secondary: '#FDD835' }, // Emerald Green & Haldi Yellow
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony (Shubh Vivah)',
      date: 'November 26, 2026',
      time: '6:00 PM onwards (Night)',
      venue: 'The Mountain Front Resort & Spa',
      dressCode: 'Regal Traditional Indian Wedding Attire',
      description: 'The sacred Seven Vows (Saat Phere) around the holy fire, uniting two souls with family blessings and eternal love.',
      image: '/images/event-wedding.jpg',
      colors: { primary: '#B71C1C', secondary: '#F9A825' }, // Sindoor Red & Marigold Yellow / Gold
    },
  ],

  // Travel Information (Optional)
  travel: {
    airport: {
      name: 'Nearest Airport',
      fullName: 'Airport Transit',
      distance: 'Convenient drive to resort',
      drivingTime: 'Taxi & transfer services available',
      facilities: 'Private vehicle and luxury cab services available',
    },
    railway: {
      name: 'Nearest Railway Station',
      distance: 'Short drive to resort',
      drivingTime: 'Scenic mountain drive',
      facilities: 'Station pickup and car services available',
    },
    hotels: [
      {
        name: 'The Mountain Front Resort & Spa',
        rating: '5-Star Luxury Resort',
        description: 'Exquisite luxury resort nestled amidst serene mountain ranges with panoramic views.',
        type: 'Primary Wedding Sanctuary',
      },
    ],
  },

  // Gallery Images - Realistic Professional Wedding Photography
  gallery: [
    {
      id: 1,
      title: 'The Sacred Wedding Mandap',
      category: 'wedding',
      image: '/images/hero-mandap.jpg',
    },
    {
      id: 2,
      title: 'Luxury Stationery & Marigolds',
      category: 'decor',
      image: '/images/invitation-stationery.jpg',
    },
    {
      id: 3,
      title: 'Sagai & Celebration Setting',
      category: 'sagai',
      image: '/images/event-mehendi.jpg',
    },
    {
      id: 4,
      title: 'Haldi Marigold Blooms',
      category: 'haldi',
      image: '/images/event-haldi.jpg',
    },
    {
      id: 5,
      title: 'The Mountain Front Resort & Spa',
      category: 'venue',
      image: '/images/destination-palace.jpg',
    },
    {
      id: 6,
      title: 'Kajal & Ashish',
      category: 'couple',
      image: '/images/couple-moment.jpg',
    },
    {
      id: 7,
      title: 'DJ & Sangeet Night',
      category: 'sangeet',
      image: '/images/event-sangeet.jpg',
    },
    {
      id: 8,
      title: 'Candlelit Celebration Banquet',
      category: 'reception',
      image: '/images/event-reception.jpg',
    },
  ],

  // Traditional Indian Wedding Theme Colors
  colors: {
    raniPink: '#D81B60',
    sindoorRed: '#B71C1C',
    marigoldYellow: '#F9A825',
    haldiYellow: '#FDD835',
    coralPink: '#F08080',
    orange: '#E87524',
    peacockBlue: '#176B87',
    emeraldGreen: '#26734D',
    purple: '#7B3F98',
    rosePink: '#F4B6C2',
    warmCream: '#FFF4E5',
    floralGreen: '#6B8E23',
  },
};
