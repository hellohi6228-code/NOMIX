import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { BrandVisualArt } from '../components/BrandVisualArt';
import { BrandId } from '../types';

interface HomePageProps {
  onNavigate?: (view: string, brandId?: BrandId) => void;
  onOpenBrand: (brandId: BrandId) => void;
}

// Photos come from each brand's deck (brands.ts foodImages); slides alternate brands so every brand shows up early.
const BRAND_PHOTOS: Record<BrandId, string[]> = Object.fromEntries(
  BRANDS.map((b) => [b.id, b.foodImages ?? []])
) as Record<BrandId, string[]>;

interface CarouselSlide {
  image: string;
  brandId: BrandId;
}

const HERO_SLIDES: CarouselSlide[] = (() => {
  const slides: CarouselSlide[] = [];
  const longest = Math.max(...Object.values(BRAND_PHOTOS).map((l) => l.length));
  for (let i = 0; i < longest; i++) {
    for (const brand of BRANDS) {
      const photo = BRAND_PHOTOS[brand.id][i];
      if (photo) slides.push({ image: photo, brandId: brand.id });
    }
  }
  return slides;
})();

const HERO_STATS = [
  { value: '40+', label: 'Restaurants' },
  { value: '10', label: 'States' },
  { value: '6', label: 'Culinary Brands', accent: true }
];

export const HomePage: React.FC<HomePageProps> = ({ onOpenBrand }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrentSlide((idx + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay; restarts the 4s timer whenever the slide changes (including manual arrows)
  useEffect(() => {
    const timer = setTimeout(() => goTo(currentSlide + 1), 4000);
    return () => clearTimeout(timer);
  }, [currentSlide, goTo]);

  useEffect(() => {
    // Preload the next photo so the transition doesn't flash black
    const img = new Image();
    img.src = HERO_SLIDES[(currentSlide + 1) % HERO_SLIDES.length].image;
  }, [currentSlide]);

  const slide = HERO_SLIDES[currentSlide];
  const slideBrand = BRANDS.find((b) => b.id === slide.brandId)!;

  return (
    <div className="space-y-28 sm:space-y-40 lg:space-y-48 pb-36 overflow-hidden">
      {/* 1. HERO */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative pt-10 sm:pt-16 lg:pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy: headline, stats, description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8 text-left"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.05]">
                From Texas to the World
              </h1>

              <div className="flex items-start gap-8 sm:gap-12">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span
                      className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tabular-nums tracking-tight ${
                        stat.accent ? 'text-[#B45309]' : 'text-[#1C1917]'
                      }`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#78716C] mt-1.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl">
                Fresh sliced sushi, steaming cajun crab boils, roaring hibachi flame, hand whisked ceremonial matcha, slow simmered ramen broths
              </p>
            </motion.div>

            {/* Right: autoplay photo carousel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative h-80 sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#1C1917]">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentSlide}
                    src={slide.image}
                    alt={slideBrand.name}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    onClick={() => onOpenBrand(slide.brandId)}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-amber-300 backdrop-blur-xs">
                    {slideBrand.locationCount}
                  </span>
                </div>

                <button
                  onClick={() => goTo(currentSlide - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/45 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => goTo(currentSlide + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/45 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between text-white pointer-events-none">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-wide drop-shadow-sm">
                      {slideBrand.name}
                    </h3>
                    <p className="text-xs text-amber-200/90 font-serif italic mt-0.5">{slideBrand.subtitle}</p>
                  </div>
                  <span className="font-mono text-[11px] text-white/70 tabular-nums">
                    {String(currentSlide + 1).padStart(2, '0')} / {HERO_SLIDES.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. SIX BRANDS */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-8">
          Our Brands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
              onClick={() => onOpenBrand(brand.id)}
            >
              <BrandVisualArt brandId={brand.id} className="h-full min-h-[360px]" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
