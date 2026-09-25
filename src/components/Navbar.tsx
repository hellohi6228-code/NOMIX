import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'brands', label: 'Our Brands' },
    { id: 'story', label: 'Our Story' },
    { id: 'locations', label: 'Locations' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0908]/85 backdrop-blur-md border-b border-[#2A251F] transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.18em] text-[#F3EBDD] group-hover:text-[#E2C99C] transition-colors uppercase">
            NOMIX
          </span>
        </button>

        {/* Zone 2: 4–6 nav links, single-line text links with subtle hover underlines */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#F3EBDD] font-semibold'
                    : 'text-[#B5AB9C] hover:text-[#F3EBDD]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CBB48B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('locations')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A0908] bg-[#CBB48B] hover:bg-[#E2C99C] rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            Find a Restaurant
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F3EBDD] hover:text-[#E2C99C] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0908] border-b border-[#2A251F] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                  currentView === link.id
                    ? 'bg-[#231F1A] text-[#F3EBDD] font-semibold'
                    : 'text-[#D3C8B8] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#2A251F]">
              <button
                onClick={() => handleNav('locations')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#0A0908] bg-[#CBB48B] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                Find a Restaurant
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
