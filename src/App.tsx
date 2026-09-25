/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { BrandsPage } from './pages/BrandsPage';
import { LocationsPage } from './pages/LocationsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { BrandDetailModal } from './components/BrandDetailModal';
import { BRANDS } from './data/brands';
import { BrandId } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedBrandModal, setSelectedBrandModal] = useState<BrandId | null>(null);
  const [locationsBrandFilter, setLocationsBrandFilter] = useState<string>('all');

  const handleNavigate = (view: string, brandId?: BrandId) => {
    if (view === 'brands' && brandId) {
      setSelectedBrandModal(brandId);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBrandModal = (brandId: BrandId) => {
    setSelectedBrandModal(brandId);
  };

  const handleViewLocationsForBrand = (brandId: string) => {
    setLocationsBrandFilter(brandId);
    setCurrentView('locations');
    setSelectedBrandModal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentBrandData = selectedBrandModal
    ? BRANDS.find((b) => b.id === selectedBrandModal) || null
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#B45309] selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBrand={handleOpenBrandModal}
          />
        )}

        {currentView === 'brands' && (
          <BrandsPage
            onOpenBrand={handleOpenBrandModal}
            onViewLocations={handleViewLocationsForBrand}
          />
        )}

        {currentView === 'story' && (
          <StoryPage onNavigate={handleNavigate} />
        )}

        {currentView === 'locations' && (
          <LocationsPage
            initialBrandFilter={locationsBrandFilter}
            onOpenBrand={handleOpenBrandModal}
          />
        )}

        {currentView === 'careers' && (
          <CareersPage />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Brand Detailed Modal */}
      <BrandDetailModal
        brand={currentBrandData}
        onClose={() => setSelectedBrandModal(null)}
        onViewLocations={handleViewLocationsForBrand}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
