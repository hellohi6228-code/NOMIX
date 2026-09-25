export type BrandId = 'umiya' | 'surfing-crab' | 'hibachi-buffet' | 'matcha-zen' | 'chilin' | 'viva-refresh';

export interface BrandData {
  id: BrandId;
  name: string;
  subtitle: string;
  cuisine: string;
  locationCount: string;
  states: string[];
  status?: string;
  image: string;
  foodImages?: string[];
  highlights?: string[];
  websiteUrl?: string;
  description: string;
}

export interface RestaurantLocation {
  id: string;
  brandId: BrandId;
  brandName: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  status: 'Open' | 'Opening Soon';
  openingDate?: string;
  features: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  brand: string;
  type: string;
  vibe: string;
}
