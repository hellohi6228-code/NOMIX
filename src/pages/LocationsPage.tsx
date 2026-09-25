import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_LOCATIONS } from '../data/locations';
import { BRANDS } from '../data/brands';
import { BrandId } from '../types';

interface LocationsPageProps {
  initialBrandFilter?: string;
  onOpenBrand: (brandId: BrandId) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({
  initialBrandFilter = 'all',
  onOpenBrand,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrandFilter);
  const [selectedState, setSelectedState] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const availableStates = useMemo(() => {
    const set = new Set<string>();
    RESTAURANT_LOCATIONS.forEach((l) => set.add(l.state));
    return Array.from(set).sort();
  }, []);

  const filteredLocations = useMemo(() => {
    return RESTAURANT_LOCATIONS.filter((loc) => {
      if (selectedBrand !== 'all' && loc.brandId !== selectedBrand) return false;
      if (selectedState !== 'all' && loc.state !== selectedState) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          loc.name.toLowerCase().includes(q) ||
          loc.city.toLowerCase().includes(q) ||
          loc.state.toLowerCase().includes(q) ||
          loc.zip.toLowerCase().includes(q) ||
          loc.brandName.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [selectedBrand, selectedState, searchQuery]);

  return (
    <div className="space-y-12 pb-24">
      {/* Header */}
      <section className="pt-10 md:pt-16 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
            Find a Restaurant
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917]">
            Locations
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-[#44403C] italic">
            40+ restaurants across Texas and beyond
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 p-6 rounded-3xl bg-white border border-[#E7E3DC] shadow-xs space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, state, zip, or brand"
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#E7E3DC] rounded-xl text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B45309]/30"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E7E3DC] rounded-xl text-sm text-[#1C1917] focus:outline-none cursor-pointer"
              >
                <option value="all">All States ({availableStates.length})</option>
                {availableStates.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Brand Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                selectedBrand === 'all'
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#57534E] hover:bg-[#EAE6DF]'
              }`}
            >
              All Brands
            </button>
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  selectedBrand === brand.id
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#57534E] hover:bg-[#EAE6DF]'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLocations.map((loc) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${loc.name} ${loc.address} ${loc.city} ${loc.state} ${loc.zip}`
            )}`;

            return (
              <div
                key={loc.id}
                className="bg-white rounded-3xl p-6 border border-[#E7E3DC] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#B45309]">
                        {loc.brandName}
                      </span>
                      <h3 className="font-display font-bold text-lg text-[#1C1917]">
                        {loc.name}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        loc.status === 'Open'
                          ? 'bg-emerald-50 text-emerald-800'
                          : 'bg-amber-50 text-amber-900'
                      }`}
                    >
                      {loc.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-[#57534E]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#78716C] mt-0.5 shrink-0" />
                      <span>{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
                      <a href={`tel:${loc.phone}`} className="font-mono text-[#1C1917]">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-[#78716C]">
                      <Clock className="w-3.5 h-3.5 text-[#78716C] mt-0.5 shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2EFE9] flex items-center justify-between text-xs">
                  <button
                    onClick={() => onOpenBrand(loc.brandId)}
                    className="font-bold text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                  >
                    Detail
                  </button>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#B45309] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
