import React from 'react';
import { BrandId } from '../types';

interface BrandVisualArtProps {
  brandId: BrandId;
  className?: string;
  variant?: 'hero' | 'card' | 'badge';
}

export const BrandVisualArt: React.FC<BrandVisualArtProps> = ({ brandId, className = '', variant: _variant = 'card' }) => {
  if (brandId === 'umiya') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-[#090A0F] text-white flex flex-col justify-between ${className}`}>
        {/* Decorative background grid and deep crimson glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Visual content */}
        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-red-400 font-medium">Japanese AYCE</span>
            <span className="text-[10px] tracking-wider uppercase text-neutral-400 border border-neutral-800 rounded px-2 py-0.5">20+ Locations</span>
          </div>

          <div className="my-6 flex flex-col items-center justify-center text-center">
            {/* Whale tail emblem SVG inspired by brand deck */}
            <svg viewBox="0 0 120 70" className="w-20 h-12 text-white mb-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 60 62 C 60 40 45 25 15 20 C 28 32 36 48 38 60 C 48 55 55 52 60 52 C 65 52 72 55 82 60 C 84 48 92 32 105 20 C 75 25 60 40 60 62 Z" fill="rgba(220, 38, 38, 0.2)" stroke="#FAFAF9" />
              <path d="M 60 52 L 60 28" stroke="#DC2626" strokeWidth="2" />
              <circle cx="60" cy="20" r="3" fill="#DC2626" />
            </svg>
            <h3 className="font-display text-2xl tracking-[0.2em] font-bold text-white uppercase">UMIYA</h3>
            <p className="text-xs text-neutral-400 mt-1 font-medium tracking-wide uppercase">
              Fresh · Vibrant · Authentic
            </p>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-300">
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Raw Bar</span>
                <span className="font-medium text-white">Fresh Sashimi</span>
              </div>
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Experience</span>
                <span className="font-medium text-red-400">Live Fire Shows</span>
              </div>
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Dining</span>
                <span className="font-medium text-white">Elevated AYCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (brandId === 'surfing-crab') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#075985] text-white flex flex-col justify-between ${className}`}>
        {/* Sunny golden wave accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/25 rounded-bl-full blur-2xl" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:14px_14px]" />

        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">Southern Cajun Boil</span>
            <span className="text-[10px] tracking-wider uppercase text-sky-100 bg-sky-900/60 border border-sky-400/30 rounded px-2 py-0.5">10 Locations</span>
          </div>

          <div className="my-6 flex flex-col items-center justify-center text-center">
            {/* Friendly smiling crab vector emblem */}
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-sky-950/40 mb-3 text-sky-950">
              <svg viewBox="0 0 48 48" className="w-10 h-10 text-red-600" fill="currentColor">
                <path d="M24 16C15 16 11 22 11 28C11 34 16 38 24 38C32 38 37 34 37 28C37 22 33 16 24 16Z" fill="#DC2626" />
                <path d="M14 20C9 17 6 12 7 8C11 8 15 13 16 17Z" fill="#EF4444" />
                <path d="M34 20C39 17 42 12 41 8C37 8 33 13 32 17Z" fill="#EF4444" />
                <circle cx="20" cy="18" r="3" fill="#FFFFFF" />
                <circle cx="20" cy="18" r="1.5" fill="#1E293B" />
                <circle cx="28" cy="18" r="3" fill="#FFFFFF" />
                <circle cx="28" cy="18" r="1.5" fill="#1E293B" />
                <path d="M19 28 Q 24 33 29 28" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl tracking-wider font-extrabold uppercase text-white drop-shadow-sm">SURFING CRAB</h3>
            <p className="text-xs text-sky-100 mt-1 font-medium">
              Southern Seafood Boil & Coastal Bar
            </p>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-sky-400/30 text-[11px] text-sky-100">
              <div>
                <span className="block text-[10px] text-sky-300 uppercase tracking-wider">Method</span>
                <span className="font-semibold text-white">3-Step Custom</span>
              </div>
              <div>
                <span className="block text-[10px] text-sky-300 uppercase tracking-wider">Flavor</span>
                <span className="font-semibold text-amber-300">Garlic Butter</span>
              </div>
              <div>
                <span className="block text-[10px] text-sky-300 uppercase tracking-wider">Vibe</span>
                <span className="font-semibold text-white">Communal Feast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (brandId === 'hibachi-buffet') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1C1917] via-[#2A1810] to-[#120B08] text-white flex flex-col justify-between ${className}`}>
        {/* Roaring fire and Asian cloud motif styling */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">Buffet · Hibachi · Sushi</span>
            <span className="text-[10px] tracking-wider uppercase text-neutral-400 border border-neutral-700 rounded px-2 py-0.5">7 Locations</span>
          </div>

          <div className="my-6 flex flex-col items-center justify-center text-center">
            {/* Hibachi flame & lucky cloud vector */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-bold text-3xl font-serif">燒</span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-t from-orange-600 to-amber-400 flex items-center justify-center text-white shadow-md shadow-orange-950">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M12 2C9.5 5 7 8 7 12C7 15.3 9.7 18 13 18C12 16.5 12 14.5 13 13C13.5 15 15.5 16 16.5 16C17.5 16 18 15 18 14C18 9 14 6 12 2Z" />
                </svg>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold tracking-wider text-amber-200 uppercase">
              HIBACHI GRILL
            </h3>
            <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-300 uppercase">
              & SUPREME BUFFET
            </span>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-800 text-[11px] text-neutral-300">
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Stations</span>
                <span className="font-medium text-white">300+ Offerings</span>
              </div>
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Format</span>
                <span className="font-medium text-amber-400">Supreme Buffet</span>
              </div>
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Style</span>
                <span className="font-medium text-white">Live Flame Teppan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (brandId === 'matcha-zen') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1C2818] via-[#22331D] to-[#121A0F] text-white flex flex-col justify-between ${className}`}>
        {/* Soft morning green mist & wabi sabi lines */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-lime-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-lime-400 font-medium">The Ritual of Cha</span>
            <span className="text-[10px] tracking-wider uppercase text-lime-200/90 border border-lime-800/60 rounded px-2 py-0.5">3 Locations</span>
          </div>

          <div className="my-6 flex flex-col items-center justify-center text-center">
            {/* The iconic Matcha Zen Green Triangle from brand deck */}
            <div className="mb-3">
              <svg viewBox="0 0 60 52" className="w-12 h-10 drop-shadow-md">
                <polygon points="30,4 56,48 4,48" fill="#65A30D" />
                <polygon points="30,12 50,44 10,44" fill="#4D7C0F" />
              </svg>
            </div>
            <h3 className="font-sans text-2xl tracking-[0.2em] font-extrabold text-white uppercase">
              MATCHA ZEN
            </h3>
            <span className="text-[10px] font-sans tracking-[0.25em] text-lime-300 uppercase mt-0.5">
              Drinks · Gelato · Bakery
            </span>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-lime-900/60 text-[11px] text-neutral-300">
              <div>
                <span className="block text-[10px] text-lime-500 uppercase tracking-wider">Quality</span>
                <span className="font-medium text-white">100% Uji Organic</span>
              </div>
              <div>
                <span className="block text-[10px] text-lime-500 uppercase tracking-wider">Craft</span>
                <span className="font-medium text-lime-300">7-Grade Gelato</span>
              </div>
              <div>
                <span className="block text-[10px] text-lime-500 uppercase tracking-wider">Space</span>
                <span className="font-medium text-white">Wabi-Sabi Calm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (brandId === 'chilin') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F1C18] via-[#26221D] to-[#141210] text-[#FAEB73] flex flex-col justify-between ${className}`}>
        {/* Soft amber izakaya lantern glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:18px_18px] opacity-10" />

        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">Asian Kitchen & Bar</span>
            <span className="text-[10px] tracking-wider uppercase text-amber-200/80 border border-amber-900/60 rounded px-2 py-0.5">1 Location</span>
          </div>

          <div className="my-6 flex flex-col items-center justify-center text-center">
            {/* Chilin mythical beast silhouette emblem from brand deck */}
            <div className="w-14 h-14 mb-2 flex items-center justify-center text-[#D4AF37]">
              <svg viewBox="0 0 48 48" className="w-12 h-12 fill-current">
                <path d="M12 28 C10 24 12 18 18 16 C22 14 26 10 28 6 C32 8 36 12 34 16 C38 18 42 22 40 28 C36 28 34 26 32 26 C30 32 28 38 24 42 C20 40 18 36 18 32 C14 34 12 32 12 28 Z" opacity="0.9" />
                <path d="M26 18 C28 20 30 22 34 22 C32 26 28 28 26 26 Z" fill="#FFF" opacity="0.3" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-[0.25em] text-[#FAEB73] uppercase">
              CHILIN
            </h3>
            <span className="text-[10px] font-sans tracking-[0.3em] text-neutral-300 uppercase mt-0.5">
              Taste The Harmony
            </span>
          </div>

          <div className="space-y-3.5">
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-amber-900/50 text-[11px] text-neutral-300">
              <div>
                <span className="block text-[10px] text-[#D4AF37] uppercase tracking-wider">Kitchen</span>
                <span className="font-medium text-white">16-Hr Broths</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#D4AF37] uppercase tracking-wider">Dinner</span>
                <span className="font-medium text-[#FAEB73]">Izakaya Plates</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#D4AF37] uppercase tracking-wider">Vibe</span>
                <span className="font-medium text-white">Day-to-Night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Viva Refresh
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#0369A1] text-white flex flex-col justify-between ${className}`}>
      <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/25 rounded-bl-full blur-2xl" />
      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-sky-200 font-medium">Hype Drinks & Fruit Coolers</span>
          <span className="text-[10px] tracking-wider uppercase text-sky-100 border border-sky-400/40 rounded px-2 py-0.5">1 Location</span>
        </div>

        <div className="my-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-3">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
          </div>
          <h3 className="font-sans text-2xl font-black tracking-wider uppercase text-white">
            VIVA REFRESH
          </h3>
        </div>

        <div className="space-y-3.5">
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-sky-400/30 text-[11px] text-sky-100">
            <div>
              <span className="block text-[10px] text-sky-200 uppercase tracking-wider">Base</span>
              <span className="font-semibold text-white">Fresh Fruits</span>
            </div>
            <div>
              <span className="block text-[10px] text-sky-200 uppercase tracking-wider">Style</span>
              <span className="font-semibold text-pink-200">Zero High-Fructose</span>
            </div>
            <div>
              <span className="block text-[10px] text-sky-200 uppercase tracking-wider">Pace</span>
              <span className="font-semibold text-white">Grab & Go</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
