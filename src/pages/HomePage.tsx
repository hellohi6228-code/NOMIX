import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { BrandVisualArt } from '../components/BrandVisualArt';
import { BrandId } from '../types';

interface HomePageProps {
  onNavigate?: (view: string, brandId?: BrandId) => void;
  onOpenBrand: (brandId: BrandId) => void;
}

interface CarouselSlide {
  image: string;
  brand: string;
  brandId: BrandId;
  subtitle: string;
  tag: string;
}

const HERO_SLIDES: CarouselSlide[] = [
  {
    image: 'assets/food/restaurant_vibe.jpg',
    brand: 'Umiya',
    brandId: 'umiya',
    subtitle: 'Sushi · Seafood · Robata Grill',
    tag: '20+ Locations'
  },
  {
    image: 'assets/food/seafood_boil.jpg',
    brand: 'Surfing Crab',
    brandId: 'surfing-crab',
    subtitle: 'Southern Cajun Seafood Boil',
    tag: '10 Locations'
  },
  {
    image: 'assets/food/hibachi_flame.jpg',
    brand: 'Hibachi Grill & Supreme Buffet',
    brandId: 'hibachi-buffet',
    subtitle: 'Asian Supreme Buffet & Teppanyaki',
    tag: '7 Locations'
  },
  {
    image: 'assets/food/matcha_drink.jpg',
    brand: 'Matcha Zen',
    brandId: 'matcha-zen',
    subtitle: 'Organic Matcha & Artisanal Gelato',
    tag: 'Houston Oct 2026'
  },
  {
    image: 'assets/food/chilin_ramen.jpg',
    brand: 'Chilin',
    brandId: 'chilin',
    subtitle: 'Hand-Pulled Ramen & Izakaya',
    tag: 'Houston Oct 2026'
  },
  {
    image: 'assets/food/tropical_drink.jpg',
    brand: 'Viva Refresh',
    brandId: 'viva-refresh',
    subtitle: 'Real Fruit Coolers & Craft Teas',
    tag: 'Houston Flagship'
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate: _onNavigate, onOpenBrand }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedBrandCategory, setSelectedBrandCategory] = useState<'all' | 'dine-in' | 'coming-soon'>('all');

  // Auto rotate carousel every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  const filteredBrands = BRANDS.filter((brand) => {
    if (selectedBrandCategory === 'coming-soon') {
      return brand.id === 'matcha-zen' || brand.id === 'chilin';
    }
    if (selectedBrandCategory === 'dine-in') {
      return brand.id === 'umiya' || brand.id === 'surfing-crab' || brand.id === 'hibachi-buffet';
    }
    return true;
  });

  return (
    <div className="space-y-28 sm:space-y-40 lg:space-y-48 pb-36 overflow-hidden">
      {/* 1. HERO SECTION WITH INTERACTIVE FOOD CAROUSEL - Soft fade & slide up reveal */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative pt-10 sm:pt-16 lg:pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8 text-left"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.05]">
                From Texas to the World
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl">
                Fresh sliced sushi, steaming cajun crab boils, roaring hibachi flame, hand whisked ceremonial matcha, slow simmered ramen broths
              </p>
            </motion.div>

            {/* Right: INTERACTIVE FOOD CAROUSEL */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1C1917] border border-[#E7E3DC]">
                {/* Carousel Image with Smooth Transition */}
                <div
                  className="relative h-80 sm:h-[430px] w-full overflow-hidden cursor-pointer group"
                  onClick={() => onOpenBrand(slide.brandId)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={slide.image}
                      alt={slide.brand}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </AnimatePresence>

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#1C1917] shadow-sm">
                      {slide.brand}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-amber-300 backdrop-blur-xs">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Brand Detail</span>
                  </div>

                  {/* Bottom Brand Title & Tap to view */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-end justify-between">
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-wide text-white drop-shadow-sm">
                        {slide.brand}
                      </h3>
                      <p className="text-xs text-amber-200/90 font-serif italic mt-0.5">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carousel Controls Bar */}
                <div className="px-5 py-3.5 bg-[#141211] border-t border-neutral-800 flex items-center justify-between text-xs text-white">
                  {/* Left / Right Buttons */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                      aria-label="Previous brand"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                      aria-label="Next brand"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Slide Indicator Dots */}
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-neutral-600 hover:bg-neutral-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Slide Counter */}
                  <span className="font-mono text-[11px] text-neutral-400 tabular-nums">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Spread Out & Centered Stats Row - NO Lines */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-16 sm:pt-24 lg:pt-28 max-w-4xl mx-auto px-4"
          >
            <div className="grid grid-cols-3 gap-6 sm:gap-12 lg:gap-16 text-center items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] tabular-nums tracking-tight">
                  40+
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#78716C] mt-2 sm:mt-3">
                  Restaurants
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] tabular-nums tracking-tight">
                  10
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#78716C] mt-2 sm:mt-3">
                  States
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#B45309] tabular-nums tracking-tight">
                  6
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#78716C] mt-2 sm:mt-3">
                  Culinary Brands
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. SIX BRANDS SHOWCASE - Soft fade & slide up reveal */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              The NOMIX Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1C1917]">
              Our Brands
            </h2>
            <p className="text-sm text-[#57534E]">
              Tap any brand to explore concept and details
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EAE6DF] rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setSelectedBrandCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedBrandCategory === 'all'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              All 6
            </button>
            <button
              onClick={() => setSelectedBrandCategory('dine-in')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedBrandCategory === 'dine-in'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Open Now
            </button>
            <button
              onClick={() => setSelectedBrandCategory('coming-soon')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedBrandCategory === 'coming-soon'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Houston Oct 2026
            </button>
          </div>
        </motion.div>

        {/* Brands Grid: Distinct Brand Color & Logo Art */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredBrands.map((brand, idx) => (
              <motion.div
                key={brand.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => onOpenBrand(brand.id)}
              >
                <BrandVisualArt
                  brandId={brand.id}
                  className="h-full min-h-[360px]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </div>
  );
};
