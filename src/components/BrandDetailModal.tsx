import React from 'react';
import { X, ExternalLink, MapPin } from 'lucide-react';
import { BrandData } from '../types';
import { BrandVisualArt } from './BrandVisualArt';
import { RESTAURANT_LOCATIONS } from '../data/locations';

interface BrandDetailModalProps {
  brand: BrandData | null;
  onClose: () => void;
  onViewLocations?: (brandId: string) => void;
}

export const BrandDetailModal: React.FC<BrandDetailModalProps> = ({
  brand,
  onClose,
  onViewLocations
}) => {
  if (!brand) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0A0908] rounded-3xl shadow-2xl overflow-hidden border border-[#2A251F] my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A251F] bg-[#13110F] sticky top-0 z-20">
          <span className="font-display font-bold text-xl uppercase tracking-wider text-[#F3EBDD]">
            {brand.name}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Picture on the Left, Details on the Right */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* LEFT COLUMN: BRAND PICTURE */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-sm border border-[#2A251F] min-h-[320px] flex">
              <BrandVisualArt brandId={brand.id} className="w-full h-full min-h-[320px]" />
            </div>

            {/* RIGHT COLUMN: BRAND DETAILS */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-[#F3EBDD]">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-[#CBB48B] font-bold uppercase tracking-wider mt-1">
                    {brand.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#D3C8B8] leading-relaxed">
                  {brand.description}
                </p>

                {brand.highlights && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {brand.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#100E0C] text-[#B5AB9C]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2 text-xs text-[#8E8578] space-y-1">
                  <div>
                    <span className="font-semibold text-[#F3EBDD]">Locations: </span>
                    <span>{brand.states.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#2A251F] flex flex-wrap items-center gap-3">
                {onViewLocations && RESTAURANT_LOCATIONS.some((l) => l.brandId === brand.id) && (
                  <button
                    onClick={() => {
                      onViewLocations(brand.id);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CBB48B] hover:bg-[#E2C99C] text-[#0A0908] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#CBB48B]" />
                    View Locations
                  </button>
                )}

                {brand.websiteUrl && (
                  <button
                    onClick={() => window.open(brand.websiteUrl, '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#13110F] hover:bg-white/5 text-[#F3EBDD] border border-[#2A251F] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Official Website
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Auto-scrolling photo strip (list is doubled so the loop is seamless) */}
          {brand.foodImages && brand.foodImages.length > 0 && (
            <div className="pt-6 border-t border-[#2A251F] overflow-hidden">
              <div
                className="nomix-marquee flex gap-3 w-max"
                style={{ animationDuration: `${brand.foodImages.length * 4}s` }}
              >
                {[...brand.foodImages, ...brand.foodImages].map((fImg, idx) => (
                  <div
                    key={idx}
                    className="h-32 sm:h-40 w-48 sm:w-60 shrink-0 rounded-xl overflow-hidden shadow-xs border border-[#2A251F] bg-neutral-900"
                  >
                    <img src={fImg} alt={brand.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
