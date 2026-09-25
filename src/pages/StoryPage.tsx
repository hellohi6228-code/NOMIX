import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STORY_HIGHLIGHTS } from '../data/story';

interface StoryPageProps {
  onNavigate: (view: string) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <section className="pt-10 md:pt-16 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#CBB48B]">
            The NOMIX Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3EBDD]">
            Rooted in Texas
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-[#D3C8B8] italic">
            From one family table to six beloved hospitality brands
          </p>
        </motion.div>
      </section>

      {/* Visual Kitchen & Dining Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="rounded-3xl overflow-hidden shadow-md h-80 relative group"
          >
            <img
              src="assets/food/hibachi_flame.jpg"
              alt="Hibachi fire"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold text-[#E2C99C]">Live Flame</span>
              <h3 className="font-display font-bold text-xl">Theatrical Teppanyaki</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl overflow-hidden shadow-md h-80 relative group"
          >
            <img
              src="assets/food/crawfish_crab.jpg"
              alt="Cajun boil"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold text-[#E2C99C]">Coastal Flavors</span>
              <h3 className="font-display font-bold text-xl">Southern Cajun Boil</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl overflow-hidden shadow-md h-80 relative group"
          >
            <img
              src="assets/food/matcha_drink.jpg"
              alt="Organic matcha"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold text-lime-300">Daily Ritual</span>
              <h3 className="font-display font-bold text-xl">100% Organic Matcha</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights / Network Milestones */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORY_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-[#13110F] border border-[#2A251F] shadow-xs space-y-2.5"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#CBB48B] bg-amber-50 px-2.5 py-1 rounded-md">
                {item.badge}
              </span>
              <h3 className="font-display font-bold text-xl text-[#F3EBDD] pt-1">
                {item.headline}
              </h3>
              <p className="text-xs text-[#B5AB9C] leading-relaxed">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('brands')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A0908] bg-[#CBB48B] hover:bg-[#E2C99C] rounded-xl transition-all shadow-sm cursor-pointer"
          >
            Explore Our Brands
            <ArrowRight className="w-4 h-4 text-[#CBB48B]" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};
