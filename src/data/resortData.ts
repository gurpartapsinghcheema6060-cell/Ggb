import { VenueSpace, EventType, GalleryItem, WhyChooseItem } from '../types';

export const RESORT_DETAILS = {
  name: "Khazana Resort",
  subtitle: "Resort • Wedding & Event Venue",
  address: "Amritsar–Jalandhar Bypass Road, Buddhe Di Khuhi, Batala, Punjab 143505, India",
  landmark: "Near Eye Hospital / Thathari Gate, Batala",
  phone: "+91 94636 50488",
  phoneClean: "+919463650488",
  email: "info@khazanaresortbatala.com", // demo contact
  whatsappLink: "https://wa.me/919463650488?text=Hello%20Khazana%20Resort,%20I%20am%20interested%20in%20booking%20an%20event.",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Amritsar-Jalandhar+Bypass+Road+Batala+Punjab+143505",
  coordinates: {
    lat: 31.8186,
    lng: 75.2028,
  },
};

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: "khazana-banquet",
    name: "Khazana Banquet",
    tagline: "Grand air-conditioned indoor luxury ballroom with royal crystal chandeliers",
    seatedCapacity: 700,
    floatingCapacity: 1050,
    area: "Approx. 18,000 sq. ft.",
    description: "An opulent indoor sanctuary adorned with gold leaf accents, majestic high ceilings, sophisticated acoustic insulation, and state-of-the-art stage lighting. Perfectly temperature-controlled for year-round grand weddings, sangeet nights, and regal receptions.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Centrally Air-Conditioned Hall",
      "Expansive Royal Stage & LED Backdrop Provision",
      "Two Dedicated VIP / Bridal Dressing Suites",
      "High-End Acoustic & Surround Sound System",
      "Dedicated Indoor Buffet & Live Food Station Zones",
      "100% Uninterrupted Generator Power Backup"
    ],
    idealFor: ["Royal Weddings", "Grand Receptions", "Sangeet Ceremonies", "Corporate Galas"],
    indicativeNotice: "Demo / indicative information. Capacities and layout details are approximations for presentation purposes."
  },
  {
    id: "khazana-lawn",
    name: "Khazana Lawn",
    tagline: "Sprawling manicured lush open-air lawn under the starry Punjab skies",
    seatedCapacity: 1500,
    floatingCapacity: 2250,
    area: "Approx. 45,000 sq. ft.",
    description: "A breathtaking landscaped outdoor expanse enveloped in evergreen palm foliage and festive ambient illumination. Crafted to accommodate the grandest Punjabi wedding gatherings with vast walking promenades, custom floral mandaps, and sprawling food courts.",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Expansive Landscaped Green Lawns",
      "Open-Air Floral Mandap & Stage Platforms",
      "Grand Guest Welcome Walkway & Archways",
      "Spacious Live Counter & Tandoor Pavilion",
      "Weather Canopy Provisions on Request",
      "Direct Drive-In Access for Baraat & Vintage Cars"
    ],
    idealFor: ["Mega Weddings", "Open-Air Receptions", "Baraat Welcomes", "Grand Musical Nights"],
    indicativeNotice: "Demo / indicative information. Capacities and layout details are approximations for presentation purposes."
  }
];

export const EVENT_TYPES: EventType[] = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Regal Punjabi Anand Karaj & Royal Vows",
    description: "From a majestic Baraat entrance to a divine Anand Karaj and lavish reception, Khazana Resort provides an unforgettable royal backdrop for your sacred beginning.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
    capacityGuide: "Accommodates 300 to 2,250+ guests",
    highlights: ["Grand Baraat Procession Space", "Custom Floral Mandap / Stage", "Bridal Dressing Suite", "Lavish Buffet Setups"]
  },
  {
    id: "receptions",
    title: "Receptions",
    subtitle: "Sophisticated Evenings of Elegance & Joy",
    description: "Celebrate your joyous union with dazzling stage decor, banquet dining, professional audio-visuals, and seamless hospitality for your distinguished guests.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    capacityGuide: "Indoor AC Banquet & Outdoor Lawn Options",
    highlights: ["Designer Stage & Photo Booths", "Multi-Cuisine Buffet Layouts", "Ambient Mood Lighting", "Dance Floor & DJ Setup"]
  },
  {
    id: "engagements",
    title: "Engagements & Roka",
    subtitle: "Intimate to Grand Family Ceremonies",
    description: "Mark your milestone commitment surrounded by warm Punjabi hospitality, elegant seating, curated floral arrangements, and personalized service.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    capacityGuide: "Perfect for 150 to 800+ attendees",
    highlights: ["Custom Ring Exchange Platform", "Deluxe High-Tea & Snacks Setup", "Family Photo Backdrops", "Valet Parking Assistance"]
  },
  {
    id: "birthday-celebrations",
    title: "Birthday Celebrations",
    subtitle: "Milestone Birthdays & Silver Jubilees",
    description: "Make milestone 1st, 21st, 50th, or golden jubilee birthdays truly magical with themed decorations, entertainment stages, live food stations, and joyous vibes.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
    capacityGuide: "Flexible areas for 100 to 500+ guests",
    highlights: ["Theme Decor & Balloon Sculptures", "Live Barbeque & Mocktail Counters", "Cake Cutting Spotlight Area", "Music & Sound System"]
  },
  {
    id: "family-functions",
    title: "Family Functions",
    subtitle: "Mehndi, Sangeet, Jaggo & Anniversaries",
    description: "Punjab’s rich cultural spirit comes alive at Khazana Resort. Host unforgettable Jaggo nights, vibrant Sangeet dances, and intimate anniversary dinners in style.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
    capacityGuide: "Lawn or AC Banquet options",
    highlights: ["Dhol & Jaggo Procession Routes", "Vibrant Traditional Canopy Decor", "Cushioned Baithak Lounges", "Dedicated Chaat & Sweets Counters"]
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    subtitle: "Conferences, Seminars & Annual Dinners",
    description: "Impress your business partners and employees with modern audio-visual technology, high-speed connectivity, professional catering, and ample secured parking.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    capacityGuide: "Seating from 100 up to 1,000 delegates",
    highlights: ["High-Definition Projector & AV Tech", "Podium & Stage Configuration", "Buffet Lunch & Executive Hi-Tea", "Seamless Highway Access"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-exterior-1",
    title: "Grand Illuminated Exterior",
    category: "exterior",
    categoryLabel: "Exterior",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description: "Impressive night facade lighting welcoming guests along the Amritsar–Jalandhar bypass."
  },
  {
    id: "g-banquet-1",
    title: "Khazana Banquet Hall",
    category: "banquet",
    categoryLabel: "Banquet Hall",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious air-conditioned royal banquet with crystal chandeliers and round-table guest seating."
  },
  {
    id: "g-wedding-1",
    title: "Royal Stage & Mandap Setup",
    category: "wedding",
    categoryLabel: "Wedding Setup",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    description: "Traditional Indian floral stage with golden arches and velvet upholstery."
  },
  {
    id: "g-dining-1",
    title: "Lavish Royal Dining Area",
    category: "dining",
    categoryLabel: "Dining Area",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    description: "Elegantly arranged banquet table settings with fine chinaware and warm candelabra lighting."
  },
  {
    id: "g-lawn-1",
    title: "Lush Green Open Lawn",
    category: "lawn",
    categoryLabel: "Lawn",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80",
    description: "Expansive green grounds illuminated for grand evening celebrations with fairy light canopies."
  },
  {
    id: "g-decor-1",
    title: "Floral Entrance Archway",
    category: "decor",
    categoryLabel: "Event Decorations",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    description: "Artisan marigold, rose, and jasmine floral arrangements creating a magical welcome pathway."
  },
  {
    id: "g-banquet-2",
    title: "Indoor Stage & Dance Floor",
    category: "banquet",
    categoryLabel: "Banquet Hall",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    description: "High-energy dance floor equipped with intelligent moving heads and laser spotlights."
  },
  {
    id: "g-dining-2",
    title: "Live Catering & Buffet Counters",
    category: "dining",
    categoryLabel: "Dining Area",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious live buffet station designed for smooth guest flow during large gatherings."
  },
  {
    id: "g-decor-2",
    title: "Festive Night Illumination",
    category: "decor",
    categoryLabel: "Event Decorations",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    description: "Glimmering warm bulb canopies transforming the outdoor grounds into a fairy-tale setting."
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "spacious-areas",
    title: "Spacious Event Areas",
    description: "Sprawling indoor banquet hall and open-air lawn offering ample space to comfortably host up to 2,250 guests without overcrowding.",
    iconName: "Maximize2"
  },
  {
    id: "convenient-location",
    title: "Convenient Batala Location",
    description: "Prime accessibility situated on the main Amritsar–Jalandhar Bypass Road, near Eye Hospital and Thathari Gate, hassle-free for outstation guests.",
    iconName: "MapPin"
  },
  {
    id: "large-parking",
    title: "Large Parking Area",
    description: "Expansive on-premise secured parking area accommodating hundreds of cars and buses with dedicated valet and traffic marshals.",
    iconName: "Car"
  },
  {
    id: "large-gatherings",
    title: "Suitable for Large Gatherings",
    description: "Specially designed infrastructure, heavy-duty electrical loads, multiple exits, and spacious buffet layouts built to seamlessly manage massive crowds.",
    iconName: "Users"
  },
  {
    id: "elegant-environment",
    title: "Elegant Event Environment",
    description: "Royal Punjabi aesthetic with refined architectural finishes, crystal chandeliers, lush landscaping, and immaculate venue maintenance.",
    iconName: "Sparkles"
  },
  {
    id: "celebration-focus",
    title: "Wedding & Celebration Focus",
    description: "Dedicated to life's grandest milestones with comprehensive amenities including bridal suites, generator backup, and hospitable on-ground staff.",
    iconName: "HeartHandshake"
  }
];

export const CAPACITY_METRICS = [
  {
    value: "1,500+",
    label: "Seated Guests",
    subtext: "Up to 1,500 seated guests across lawn & banquet arrangements",
    icon: "Armchair"
  },
  {
    value: "2,250+",
    label: "Floating Guests",
    subtext: "Up to 2,250 floating capacity for grand Punjabi gatherings",
    icon: "Users2"
  },
  {
    value: "63,000+",
    label: "Sq. Ft. Event Spaces",
    subtext: "Combined indoor banquet hall and manicured outdoor green lawn",
    icon: "Compass"
  },
  {
    value: "Batala, PB",
    label: "Prime Punjab Hub",
    subtext: "Easy bypass connectivity for Amritsar, Gurdaspur & Jalandhar",
    icon: "Navigation"
  }
];

export const ABOUT_HIGHLIGHT_CARDS = [
  {
    title: "Spacious Venue",
    description: "Grand indoor and open-air spaces thoughtfully planned to give every celebration room to breathe and shine.",
    icon: "Building2"
  },
  {
    title: "Large Gathering Capacity",
    description: "Engineered specifically for royal Punjabi weddings and milestone events with capacities up to 2,250 attendees.",
    icon: "Users"
  },
  {
    title: "Convenient Location",
    description: "Ideally located on the Amritsar–Jalandhar Bypass Road, near Eye Hospital and Thathari Gate in Batala.",
    icon: "Compass"
  },
  {
    title: "Generous Parking",
    description: "Hassle-free parking lots with ample turning radiuses, guarded entrances, and valet staging areas.",
    icon: "Car"
  },
  {
    title: "Event & Wedding Facilities",
    description: "Includes bridal green rooms, 100% power generator backup, heavy-duty air conditioning, and vendor staging docks.",
    icon: "Sparkles"
  }
];
