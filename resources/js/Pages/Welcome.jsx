import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { LanguageProvider } from '@/Context/LanguageContext';
import HeaderNav from '@/Components/Omya/HeaderNav';
import HeroSection from '@/Components/Omya/HeroSection';
import ActivitiesSection from '@/Components/Omya/ActivitiesSection';
import WhyChooseUsSection from '@/Components/Omya/WhyChooseUsSection';
import MarketsSection from '@/Components/Omya/MarketsSection';
import ProductsSection from '@/Components/Omya/ProductsSection';
import NewsSimulatorPartnersSection from '@/Components/Omya/NewsSimulatorPartnersSection';
import TestimonialsAndFooterSection from '@/Components/Omya/TestimonialsAndFooterSection';
import AuthModal from '@/Components/Omya/AuthModal';
import LiveTradingOverlay from '@/Components/Omya/LiveTradingOverlay';

export default function Welcome({ auth }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');
  const [authModalMode, setAuthModalMode] = useState('client');

  const handleOpenAuth = (tab = 'login', mode = 'client') => {
    setAuthModalTab(tab);
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <LanguageProvider>
      <Head title="OMYA INVEST - Bourse & Gestion de Patrimoine" />

      {/* Global 4K Fixed Trading Floor Background Layer */}
      <div className="global-trading-bg" />
      <div className="global-bg-overlay" />

      {/* Live Continuous Trading Floor Overlay */}
      <LiveTradingOverlay />

      <div className="relative z-10 min-h-screen text-sky-100 selection:bg-[#0284C7] selection:text-white font-sans antialiased">
        {/* 1. Unified Main Navigation Header — Disabled as requested */}
        {/* <HeaderNav onOpenAuth={handleOpenAuth} /> */}

        {/* 2. Hero Section */}
        <HeroSection />

        {/* Auth Modal for Client / Member Spaces */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialTab={authModalTab}
          titleMode={authModalMode}
        />
      </div>
    </LanguageProvider>
  );
}
