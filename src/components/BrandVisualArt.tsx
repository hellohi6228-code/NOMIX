import React from 'react';
import { BrandId } from '../types';
import { BRANDS, localizeBrand } from '../data/brands';
import { useLang } from '../i18n';

interface BrandVisualArtProps {
  brandId: BrandId;
  className?: string;
}

// Cover art is the first page of each brand deck (Viva Refresh's logo comes from the NOMIX deck).
// Cuisine labels match the NOMIX deck's "Our Ventures" page.
const BRAND_COVERS: Record<BrandId, { image: string; cuisine: string; cuisineZh: string; fit: 'cover' | 'contain'; accent: string }> = {
  umiya: { image: 'assets/logos/umiya-cover.jpg', cuisine: 'AYCE Sushi', cuisineZh: '寿司自助', fit: 'cover', accent: 'text-rose-300' },
  'surfing-crab': { image: 'assets/logos/surfing-crab-cover.jpg', cuisine: 'Southern Cajun', cuisineZh: '美式南方卡津海鲜', fit: 'cover', accent: 'text-[#E2C99C]' },
  'hibachi-buffet': { image: 'assets/logos/hibachi-buffet-cover.jpg', cuisine: 'Asian Fusion Buffet', cuisineZh: '亚洲融合自助餐', fit: 'cover', accent: 'text-red-400' },
  'matcha-zen': { image: 'assets/logos/matcha-zen-cover.jpg', cuisine: 'Matcha, Gelato, Cafe', cuisineZh: '抹茶 · 意式冰淇淋 · 咖啡馆', fit: 'cover', accent: 'text-lime-300' },
  chilin: { image: 'assets/logos/chilin-cover.jpg', cuisine: 'Asian Fusion Fast Casual', cuisineZh: '亚洲融合快休闲', fit: 'cover', accent: 'text-amber-200' },
  'viva-refresh': { image: 'assets/logos/viva-refresh-cover.jpg', cuisine: 'Hype Drinks', cuisineZh: '潮流饮品', fit: 'contain', accent: 'text-amber-200' },
};

export const BrandVisualArt: React.FC<BrandVisualArtProps> = ({ brandId, className = '' }) => {
  const cover = BRAND_COVERS[brandId];
  const { lang } = useLang();
  const brand = localizeBrand(BRANDS.find((b) => b.id === brandId)!, lang);

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
      <div className="px-5 py-4 flex items-center justify-between gap-3 bg-[#070605] border-t border-white/5">
        <span className={`text-[11px] font-bold uppercase tracking-widest ${cover.accent}`}>{lang === 'zh' ? cover.cuisineZh : cover.cuisine}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 border border-neutral-700 rounded px-2 py-0.5 shrink-0">
          {brand.locationCount}
        </span>
      </div>
    </div>
  );
};
