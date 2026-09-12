export interface VenueSpace {
  id: string;
  name: string;
  tagline: string;
  seatedCapacity: number;
  floatingCapacity: number;
  area: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string[];
  indicativeNotice: string;
}

export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  capacityGuide: string;
  highlights: string[];
}

export type GalleryCategory = 'all' | 'exterior' | 'banquet' | 'wedding' | 'dining' | 'lawn' | 'decor';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EnquiryFormState {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
