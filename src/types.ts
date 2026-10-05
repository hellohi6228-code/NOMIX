import type { WeeklyHours } from './utils/hours';

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
  // Chinese copy for the 中文 site; anything missing falls back to English
  zh?: Partial<Pick<BrandData, 'subtitle' | 'description' | 'highlights' | 'locationCount' | 'status'>>;
}

export interface RestaurantLocation {
  id: string;
  brandId: BrandId;
  brandName: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip?: string;
  phone?: string;
  hours?: WeeklyHours;
  website?: string;
  lat?: number;
  lng?: number;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  brand: string;
  type: string;
  vibe: string;
  zh?: Partial<Pick<JobOpening, 'title' | 'department' | 'location' | 'type' | 'vibe'>>;
}
