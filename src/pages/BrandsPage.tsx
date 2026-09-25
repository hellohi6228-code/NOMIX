import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { BrandVisualArt } from '../components/BrandVisualArt';
import { BrandId } from '../types';

interface BrandsPageProps {
  onOpenBrand: (brandId: BrandId) => void;
  onViewLocations: (brandId: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onOpenBrand, onViewLocations: _onViewLocations }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <section className="pt-10 md:pt-16 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-3">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3EBDD]">
            Our Brands
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-[#D3C8B8] italic">
            Six distinct culinary concepts, real kitchens, real food
          </p>
        </div>
      </section>

      {/* Brand cards with brand colors and logos */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
              onClick={() => onOpenBrand(brand.id)}
            >
              <BrandVisualArt brandId={brand.id} className="h-full min-h-[380px]" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
