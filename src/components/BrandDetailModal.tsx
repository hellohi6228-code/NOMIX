import React from 'react';
import { X, ExternalLink, MapPin } from 'lucide-react';
import { BrandData } from '../types';
import { BrandVisualArt } from './BrandVisualArt';

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
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E7E3DC] my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E3DC] bg-white sticky top-0 z-20">
          <span className="font-display font-bold text-xl uppercase tracking-wider text-[#1C1917]">
            {brand.name}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Picture on the Left, Details on the Right */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* LEFT COLUMN: BRAND PICTURE */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-sm border border-[#E7E3DC] min-h-[320px] flex">
              <BrandVisualArt brandId={brand.id} className="w-full h-full min-h-[320px]" />
            </div>

            {/* RIGHT COLUMN: BRAND DETAILS */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-[#B45309] border border-amber-200">
                    {brand.cuisine}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#57534E] border border-[#E7E3DC]">
                    {brand.locationCount}
                  </span>
                  {brand.status && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {brand.status}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-3xl font-extrabold text-[#1C1917]">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-[#B45309] font-bold uppercase tracking-wider mt-1">
                    {brand.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  {brand.description}
                </p>

                {brand.highlights && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {brand.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F5F2EB] text-[#57534E]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2 text-xs text-[#78716C] space-y-1">
                  <div>
                    <span className="font-semibold text-[#1C1917]">Locations: </span>
                    <span>{brand.states.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E7E3DC] flex flex-wrap items-center gap-3">
                {onViewLocations && (
                  <button
                    onClick={() => {
                      onViewLocations(brand.id);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    View Locations
                  </button>
                )}

                {brand.websiteUrl && (
                  <button
                    onClick={() => window.open(brand.websiteUrl, '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-100 text-[#1C1917] border border-[#E7E3DC] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Official Website
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* MORE PICTURES OF FOOD SECTION */}
          {brand.foodImages && brand.foodImages.length > 1 && (
            <div className="pt-6 border-t border-[#E7E3DC] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] block">
                Food Cravings
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {brand.foodImages.slice(0, 4).map((fImg, idx) => (
                  <div
                    key={idx}
                    className="h-28 sm:h-32 rounded-xl overflow-hidden shadow-xs border border-[#E7E3DC] bg-neutral-900 group"
                  >
                    <img
                      src={fImg}
                      alt="Food"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
