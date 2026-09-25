import React from 'react';
import { BrandId } from '../types';
import { BRANDS } from '../data/brands';

interface BrandVisualArtProps {
  brandId: BrandId;
  className?: string;
}

// Cover art is the first page of each brand deck (Viva Refresh's logo comes from the NOMIX deck).
// Cuisine labels match the NOMIX deck's "Our Ventures" page.
const BRAND_COVERS: Record<BrandId, { image: string; cuisine: string; fit: 'cover' | 'contain'; accent: string }> = {
  umiya: { image: 'assets/logos/umiya-cover.jpg', cuisine: 'AYCE Sushi', fit: 'cover', accent: 'text-rose-300' },
  'surfing-crab': { image: 'assets/logos/surfing-crab-cover.jpg', cuisine: 'Southern Cajun', fit: 'cover', accent: 'text-amber-300' },
  'hibachi-buffet': { image: 'assets/logos/hibachi-buffet-cover.jpg', cuisine: 'Asian Fusion Buffet', fit: 'cover', accent: 'text-red-400' },
  'matcha-zen': { image: 'assets/logos/matcha-zen-cover.jpg', cuisine: 'Matcha, Gelato, Cafe', fit: 'cover', accent: 'text-lime-300' },
  chilin: { image: 'assets/logos/chilin-cover.jpg', cuisine: 'Asian Fusion Fast Casual', fit: 'cover', accent: 'text-amber-200' },
  'viva-refresh': { image: 'assets/logos/viva-refresh-cover.jpg', cuisine: 'Hype Drinks', fit: 'contain', accent: 'text-amber-200' },
};

export const BrandVisualArt: React.FC<BrandVisualArtProps> = ({ brandId, className = '' }) => {
  const cover = BRAND_COVERS[brandId];
  const brand = BRANDS.find((b) => b.id === brandId)!;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#0B0A09] text-white flex flex-col ${className}`}>
      <div className="relative flex-1 min-h-[240px] overflow-hidden">
        <img
          src={cover.image}
          alt={`${brand.name} logo`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 ${
            cover.fit === 'cover' ? 'object-cover' : 'object-contain p-10'
          }`}
        />
      </div>
      <div className="px-5 py-4 flex items-center justify-between gap-3 bg-[#141211] border-t border-white/5">
        <span className={`text-[11px] font-bold uppercase tracking-widest ${cover.accent}`}>{cover.cuisine}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 border border-neutral-700 rounded px-2 py-0.5 shrink-0">
          {brand.locationCount}
        </span>
      </div>
    </div>
  );
};
