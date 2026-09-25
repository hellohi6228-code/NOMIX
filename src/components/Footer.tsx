import React from 'react';
import { BRANDS } from '../data/brands';
import { BrandId } from '../types';

interface FooterProps {
  onNavigate: (view: string, brandId?: BrandId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#070605] text-[#E7E5E4] border-t border-[#CBB48B]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#CBB48B]/15/80">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-display text-2xl font-bold tracking-[0.2em] text-white uppercase block">
              NOMIX
            </span>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-6 text-xs">
            <div>
              <span className="font-bold uppercase tracking-wider text-neutral-200 block mb-3">
                Our Brands
              </span>
              <ul className="space-y-2 text-neutral-400">
                {BRANDS.map((brand) => (
                  <li key={brand.id}>
                    <button
                      onClick={() => {
                        onNavigate('brands', brand.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {brand.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-neutral-200 block mb-3">
                Explore
              </span>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <button
                    onClick={() => {
                      onNavigate('story');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('locations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    Locations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('careers');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} NOMIX Hospitality Group</p>
          <div className="flex items-center gap-4">
            <span>Texas Roots</span>
            <span>/</span>
            <span>Real Food</span>
            <span>/</span>
            <span>Warm Tables</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
