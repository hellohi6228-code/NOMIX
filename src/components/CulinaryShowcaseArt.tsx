import React from 'react';
import { BrandId } from '../types';

interface CulinaryShowcaseArtProps {
  brandId: BrandId;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CulinaryShowcaseArt: React.FC<CulinaryShowcaseArtProps> = ({
  brandId,
  className = '',
  size = 'md',
}) => {
  if (brandId === 'umiya') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#18181B] via-[#27272A] to-[#09090B] text-white p-6 flex flex-col justify-between border border-neutral-800 shadow-xl ${className}`}>
        {/* Ambient warm amber & vermilion glow */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar with authentic Umiya Whale Tail & tag */}
        <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 50 30" className="w-8 h-5 text-red-500 fill-none stroke-current" strokeWidth="2.5">
              <path d="M 25 28 C 25 18 18 10 5 8 C 12 14 16 22 17 28 C 21 25 24 24 25 24 C 26 24 29 25 33 28 C 34 22 38 14 45 8 C 32 10 25 18 25 28 Z" fill="rgba(220, 38, 38, 0.3)" />
            </svg>
            <div>
              <span className="font-display font-bold tracking-[0.2em] text-white text-sm uppercase block">
                UMIYA
              </span>
              <span className="text-[10px] text-neutral-400 font-serif italic">Sushi · Seafood · Teppan Grill</span>
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-red-300 bg-red-950/60 border border-red-800/50 px-2.5 py-0.5 rounded-full">
            All-You-Can-Eat
          </span>
        </div>

        {/* Appetizing Food Visual: Nigiri boat & Wagyu tataki with micro-garnishes */}
        <div className="relative z-10 my-4 py-2 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] h-32 bg-gradient-to-b from-[#2A2421] to-[#191514] rounded-2xl border border-amber-900/30 p-3 shadow-inner flex items-center justify-around">
            {/* Salmon Nigiri */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-8 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-orange-400 shadow-md transform -rotate-6 flex items-center justify-center relative overflow-hidden border-b-2 border-orange-600">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] opacity-40" />
                <span className="w-1 h-3 bg-emerald-400/80 rounded-full rotate-45 absolute -top-0.5" />
              </div>
              <div className="w-14 h-4 bg-[#FAF7F2] rounded-full mt-[-6px] shadow-xs border border-neutral-300" />
              <span className="text-[10px] font-medium text-neutral-300 mt-1.5">Atlantic Salmon</span>
            </div>

            {/* A5 Wagyu Tataki */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-8 rounded-full bg-gradient-to-r from-rose-900 via-red-700 to-amber-900 shadow-md transform rotate-3 flex items-center justify-center relative overflow-hidden border-b-2 border-red-950">
                <div className="absolute inset-0 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:6px_6px] opacity-25" />
                <span className="text-[8px] text-amber-300 font-bold uppercase tracking-wider">A5 Wagyu</span>
              </div>
              <div className="w-14 h-4 bg-[#FAF7F2] rounded-full mt-[-6px] shadow-xs border border-neutral-300" />
              <span className="text-[10px] font-medium text-amber-300 mt-1.5">Flame-Torched</span>
            </div>

            {/* Tuna Sashimi */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-9 rounded-t-lg bg-gradient-to-b from-rose-600 to-red-800 shadow-md transform rotate-12 flex items-center justify-center border-t border-rose-400">
                <div className="w-8 h-0.5 bg-rose-300/40 rounded" />
              </div>
              <span className="text-[10px] font-medium text-neutral-300 mt-1.5">Bluefin</span>
            </div>
          </div>
        </div>

        {/* Dish highlight footer */}
        <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
          <span className="text-neutral-400 font-medium uppercase tracking-wider text-[10px]">Made To Order AYCE</span>
          <span className="text-red-400 font-semibold text-[11px] uppercase tracking-wider">20+ Locations</span>
        </div>
      </div>
    );
  }

  if (brandId === 'surfing-crab') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0369A1] via-[#0284C7] to-[#075985] text-white p-6 flex flex-col justify-between border border-sky-400/40 shadow-xl ${className}`}>
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-sky-400/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦀</span>
            <div>
              <span className="font-sans font-black tracking-wider text-white text-sm uppercase block">
                SURFING CRAB
              </span>
              <span className="text-[10px] text-sky-200">Cajun Seafood Boil · Coastal Bar</span>
            </div>
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-sky-950 bg-amber-300 px-2.5 py-0.5 rounded-full shadow-xs">
            Backyard Boil
          </span>
        </div>

        {/* Food Visual: Steaming Boil Spread with Crawfish, Crab Legs, Sweet Corn & Garlic Butter */}
        <div className="relative z-10 my-4 py-2 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] h-32 bg-gradient-to-b from-[#FFFBEB] to-[#FEF3C7] rounded-2xl border-2 border-dashed border-amber-300/80 p-3 shadow-inner text-amber-950 flex items-center justify-around overflow-hidden">
            {/* Red King Crab Cluster */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 shadow-md flex items-center justify-center text-white relative">
                <span className="text-xl">🦞</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border border-white" />
              </div>
              <span className="text-[10px] font-bold text-red-700 mt-1">King Crab</span>
            </div>

            {/* Sweet Corn Cob & Red Potato */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-yellow-300 to-amber-500 shadow-md flex items-center justify-center text-amber-950 border border-yellow-200 font-bold text-xs">
                🌽
              </div>
              <span className="text-[10px] font-semibold text-amber-900 mt-1">Sweet Corn</span>
            </div>

            {/* Garlic Butter Seasoning Dish */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-amber-200 border-2 border-amber-400 shadow-inner flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 animate-pulse" />
              </div>
              <span className="text-[10px] font-bold text-orange-800 mt-1">Surfing Sauce</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-3 border-t border-sky-400/30 flex items-center justify-between text-xs">
          <span className="text-sky-100 font-medium">Mild · Medium · Spicy · Fire</span>
          <span className="text-amber-300 font-bold text-[11px] uppercase tracking-wider">10 Locations</span>
        </div>
      </div>
    );
  }

  if (brandId === 'hibachi-buffet') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1917] via-[#2B170E] to-[#120B08] text-white p-6 flex flex-col justify-between border border-amber-900/40 shadow-xl ${className}`}>
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-orange-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold text-xl font-serif">燒</span>
            <div>
              <span className="font-display font-bold tracking-wider text-amber-200 text-sm uppercase block">
                HIBACHI GRILL
              </span>
              <span className="text-[10px] text-neutral-400">& Supreme Buffet</span>
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-amber-300 bg-amber-950/60 border border-amber-700/50 px-2.5 py-0.5 rounded-full">
            300+ Offerings
          </span>
        </div>

        {/* Food visual: Sizzling Wok Teppanyaki & Steak Fried Rice */}
        <div className="relative z-10 my-4 py-2 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] h-32 bg-[#1A1614] rounded-2xl border border-orange-950/80 p-3 shadow-inner flex items-center justify-around overflow-hidden">
            {/* Roaring Teppan Griddle */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neutral-800 to-stone-900 border border-neutral-700 flex items-center justify-center relative shadow-md">
                <span className="text-xl">🥩</span>
                <span className="absolute -bottom-1 w-8 h-1 bg-orange-500 blur-xs rounded-full" />
              </div>
              <span className="text-[10px] font-bold text-amber-300 mt-1">Hibachi Steak</span>
            </div>

            {/* Wok-charred Fried Rice & Lo Mein */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 flex items-center justify-center text-white font-bold shadow-md border border-amber-500/50">
                <span className="text-xl">🥢</span>
              </div>
              <span className="text-[10px] font-bold text-orange-200 mt-1">Wok Lo Mein</span>
            </div>

            {/* Cold Seafood on Ice */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-sky-950/80 border border-sky-600/40 flex items-center justify-center shadow-inner">
                <span className="text-lg">🦪</span>
              </div>
              <span className="text-[10px] font-medium text-sky-200 mt-1">Oyster Bar</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
          <span className="text-neutral-400 font-serif italic">"Endless Plates. Countless Memories."</span>
          <span className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider">$7M–$8M GMV · 4.33 ★</span>
        </div>
      </div>
    );
  }

  if (brandId === 'matcha-zen') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C2818] via-[#273822] to-[#121B10] text-white p-6 flex flex-col justify-between border border-lime-800/40 shadow-xl ${className}`}>
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-lime-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-lime-900/50 pb-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 34" className="w-6 h-5">
              <polygon points="20,2 38,32 2,32" fill="#65A30D" />
            </svg>
            <div>
              <span className="font-sans font-bold tracking-[0.2em] text-white text-sm uppercase block">
                MATCHA ZEN
              </span>
              <span className="text-[10px] text-lime-300">The Ritual of Cha · Drinks & Gelato</span>
            </div>
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-lime-100 bg-lime-900/80 border border-lime-600/60 px-2.5 py-0.5 rounded-full">
            Houston Oct 2026
          </span>
        </div>

        {/* Visual: Layered Einspanner, Churn Gelato scoop & Bamboo whisk */}
        <div className="relative z-10 my-4 py-2 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] h-32 bg-[#172214] rounded-2xl border border-lime-900/60 p-3 shadow-inner flex items-center justify-around">
            {/* Layered Iced Matcha Einspanner */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-16 rounded-t-lg rounded-b-md bg-gradient-to-b from-[#FEFCE8] via-[#84CC16] to-[#365314] shadow-md relative overflow-hidden border border-lime-300/40 flex flex-col justify-between p-1">
                <div className="w-full h-3 bg-white/90 rounded-sm" />
                <div className="w-1.5 h-12 bg-lime-200/50 rounded-full absolute right-2 top-2" />
              </div>
              <span className="text-[10px] font-bold text-lime-300 mt-1">Einspanner</span>
            </div>

            {/* Artisanal Matcha Gelato Scoop */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 via-green-600 to-lime-700 shadow-md border-2 border-lime-400/60 flex items-center justify-center text-white">
                <span className="text-xs font-bold font-serif">7°</span>
              </div>
              <span className="text-[10px] font-bold text-white mt-1">7-Tier Gelato</span>
            </div>

            {/* Bamboo Chasen Whisk */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 shadow-sm flex items-center justify-center text-amber-900">
                🍵
              </div>
              <span className="text-[10px] font-medium text-lime-200 mt-1">Hand-Whisked</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-3 border-t border-lime-900/50 flex items-center justify-between text-xs">
          <span className="text-lime-200/80 font-serif italic">"100% Organic Uji & Kagoshima Matcha"</span>
          <span className="text-lime-400 font-semibold text-[11px] uppercase tracking-wider">3 Slated Locations</span>
        </div>
      </div>
    );
  }

  if (brandId === 'chilin') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#24201B] via-[#2C2721] to-[#151310] text-[#FAEB73] p-6 flex flex-col justify-between border border-amber-900/40 shadow-xl ${className}`}>
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg text-[#D4AF37]">🐉</span>
            <div>
              <span className="font-serif font-bold tracking-[0.2em] text-[#FAEB73] text-sm uppercase block">
                CHILIN
              </span>
              <span className="text-[10px] text-neutral-300">Asian Kitchen & Bar · Social Izakaya</span>
            </div>
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-amber-100 bg-amber-950/80 border border-amber-700/60 px-2.5 py-0.5 rounded-full">
            Houston Oct 2026
          </span>
        </div>

        {/* Visual: Steaming Tonkotsu Ramen bowl with ajitsuke egg, pork chashu & Filet Mignon rice */}
        <div className="relative z-10 my-4 py-2 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] h-32 bg-[#1A1714] rounded-2xl border border-amber-950 p-3 shadow-inner flex items-center justify-around">
            {/* Steaming Tonkotsu Bowl */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-12 rounded-b-full bg-gradient-to-b from-[#FFF5EB] to-[#FCE7D0] border-2 border-amber-700/60 shadow-md flex items-center justify-center relative overflow-hidden">
                <div className="w-4 h-4 rounded-full bg-amber-500 border border-amber-600 absolute top-1 left-2" />
                <div className="w-6 h-3 rounded bg-amber-900/80 absolute top-2 right-1 rotate-12" />
                <span className="text-xs">🍜</span>
              </div>
              <span className="text-[10px] font-bold text-[#FAEB73] mt-1">16-Hr Tonkotsu</span>
            </div>

            {/* Wok Filet Mignon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-800 to-stone-900 border border-amber-600/50 shadow-md flex items-center justify-center text-white">
                <span className="text-lg">🥩</span>
              </div>
              <span className="text-[10px] font-bold text-amber-200 mt-1">Prime Tenderloin</span>
            </div>

            {/* Xiao Long Bao Dumpling */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-amber-300/80 shadow-md flex items-center justify-center text-amber-900">
                🥟
              </div>
              <span className="text-[10px] font-medium text-neutral-300 mt-1">Kurobuta Bao</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
          <span className="text-neutral-300 font-serif italic">"Taste the Harmony."</span>
          <span className="text-[#D4AF37] font-semibold text-[11px] uppercase tracking-wider">Day-to-Night Social</span>
        </div>
      </div>
    );
  }

  // Viva Refresh
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#0369A1] text-white p-6 flex flex-col justify-between border border-sky-300/40 shadow-xl ${className}`}>
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-pink-500/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-sky-400/30 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍹</span>
          <div>
            <span className="font-sans font-black tracking-wider text-white text-sm uppercase block">
              VIVA REFRESH
            </span>
            <span className="text-[10px] text-sky-100">Hype Drinks & Fruit Coolers</span>
          </div>
        </div>
        <span className="text-[10px] font-bold tracking-wider uppercase text-sky-950 bg-white px-2.5 py-0.5 rounded-full shadow-xs">
          Zero High-Fructose
        </span>
      </div>

      <div className="relative z-10 my-4 py-2 flex flex-col items-center">
        <div className="relative w-full max-w-[280px] h-32 bg-sky-950/60 rounded-2xl border border-sky-300/30 p-3 shadow-inner flex items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="w-10 h-16 rounded-b-lg bg-gradient-to-t from-pink-600 via-rose-400 to-amber-200 shadow-md border border-white/40 flex items-center justify-center">
              <span className="text-xs font-bold text-white">✨</span>
            </div>
            <span className="text-[10px] font-bold text-pink-200 mt-1">Dragonfruit</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-16 rounded-b-lg bg-gradient-to-t from-emerald-600 via-lime-400 to-yellow-200 shadow-md border border-white/40 flex items-center justify-center">
              <span className="text-xs font-bold text-white">🌿</span>
            </div>
            <span className="text-[10px] font-bold text-lime-200 mt-1">Citrus Mint</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-3 border-t border-sky-400/30 flex items-center justify-between text-xs">
        <span className="text-sky-100 font-medium">"Pure Energy. Real Flavor."</span>
        <span className="text-pink-200 font-bold text-[11px] uppercase tracking-wider">Fast Casual Drinks</span>
      </div>
    </div>
  );
};
