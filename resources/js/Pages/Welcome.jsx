import React, { useState } from 'react';
import SplashScreen from '@/Components/Omya/SplashScreen';
import { Head } from '@inertiajs/react';
import { LanguageProvider, useLanguage } from '@/Context/LanguageContext';
import HeaderNav from '@/Components/Omya/HeaderNav';
import HeroSection from '@/Components/Omya/HeroSection';
import SectionPageHeader from '@/Components/Omya/SectionPageHeader';
import CrossLinkSection from '@/Components/Omya/CrossLinkSection';
import AboutSection from '@/Components/Omya/AboutSection';
import AboutHeroSection from '@/Components/Omya/AboutHeroSection';
import InvestorPathwaySection from '@/Components/Omya/InvestorPathwaySection';
import IssuerPathwaySection from '@/Components/Omya/IssuerPathwaySection';
import SolutionsSection from '@/Components/Omya/SolutionsSection';
import TargetsSection from '@/Components/Omya/TargetsSection';
import MissionVisionValuesSection from '@/Components/Omya/MissionVisionValuesSection';
import FinancialMarketSection from '@/Components/Omya/FinancialMarketSection';

import NewsSection from '@/Components/Omya/NewsSection';
import DocumentsSection from '@/Components/Omya/DocumentsSection';
import ContactSection from '@/Components/Omya/ContactSection';
import FooterSection from '@/Components/Omya/FooterSection';
import AuthModal from '@/Components/Omya/AuthModal';
import CustomCursor from '@/Components/Omya/CustomCursor';
import { Info, Briefcase, TrendingUp, Landmark, BookOpen, FileText, Mail, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Welcome({ auth }) {
  return (
    <LanguageProvider>
      <WelcomeContent auth={auth} />
    </LanguageProvider>
  );
}

function WelcomeContent({ auth }) {
  const { t } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');
  const [authModalMode, setAuthModalMode] = useState('client');
  const [activeView, setActiveView] = useState('accueil');

  const handleOpenAuth = (tab = 'login', mode = 'client') => {
    setAuthModalTab(tab);
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleSelectView = (viewId, anchorId) => {
    setActiveView(viewId);

    // Attend que le nouvel onglet soit monté (AnimatePresence fait d'abord sortir l'ancien), puis défile
    // vers la sous-section demandée (ex : #mission dans « À propos »). La recherche se fait uniquement
    // dans le nouvel onglet : l'ancien peut contenir une section de même id pendant sa sortie.
    let attempts = 0;
    const scrollToTarget = () => {
      const view = document.querySelector(`[data-view="${viewId}"]`);
      if (!view && attempts++ < 15) {
        window.setTimeout(scrollToTarget, 100);
        return;
      }
      const target = view && anchorId ? view.querySelector(`#${CSS.escape(anchorId)}`) : null;
      // Section d'ouverture de l'onglet (déjà tout en haut) : on remonte simplement en haut de page.
      if (target && target !== view.firstElementChild) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.setTimeout(scrollToTarget, 350);
  };

  const sh = t.sectionHeaders;
  const cl = t.crossLinks;

  return (
    <>
      {/* ── CUSTOM CURSOR PREMIUM ── */}
      <CustomCursor />

      {/* ── SPLASH SCREEN ── */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Head>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
      </Head>

      <div className="relative min-h-screen bg-[#F4F6FA] text-slate-800 font-sans antialiased selection:bg-[#002E5B] selection:text-white">

        {/* 1. Header Navbar Sticky */}
        <HeaderNav onOpenAuth={handleOpenAuth} onSelectView={handleSelectView} activeView={activeView} />

        <main className="relative z-10">

          {/* DYNAMIC CONTENT SWITCHER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              data-view={activeView}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >

              {/* ══════ 1. ACCUEIL (SECTIONS ESSENTIELLES) ══════ */}
              {/* Les parcours détaillés Investisseur/Émetteur restent sur leurs onglets dédiés (Investir / Financer) */}
              {(activeView === 'accueil' || activeView === 'all') && (
                <>
                  <HeroSection onSelectView={handleSelectView} />
                  <AboutSection onSelectView={handleSelectView} />
                  <SolutionsSection onSelectView={handleSelectView} />

                </>
              )}

              {/* ══════ 2. RUBRIQUE À PROPOS ══════ */}
              {activeView === 'a-propos' && (
                <>
                  <AboutHeroSection />
                  {/* Fond commun aux 4 blocs (mission, vision, valeurs, cibles) : photo fixée à l'écran
                      pendant le défilement (élément sticky : fonctionne aussi sur mobile), sous un voile bleu nuit */}
                  <div className="relative">
                    <div className="absolute inset-0" aria-hidden="true">
                      <div
                        className="sticky top-0 h-[100svh] bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/bg-equipe-reunion.jpg')" }}
                      >
                        <div className="absolute inset-0 bg-[#05080F]/80" />
                      </div>
                    </div>
                    <MissionVisionValuesSection />
                    <TargetsSection />
                  </div>
                </>
              )}

              {/* ══════ 3. RUBRIQUE NOS SOLUTIONS ══════ */}
              {activeView === 'nos-solutions' && (
                <>
                  <SectionPageHeader
                    icon={Briefcase}
                    title={sh['nos-solutions'].title}
                    breadcrumbLabel={sh['nos-solutions'].breadcrumbLabel}
                    description={sh['nos-solutions'].description}
                    onSelectView={handleSelectView}
                  />
                  <SolutionsSection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    icon={TrendingUp}
                    title={cl.solutionsToPaths.title}
                    description={cl.solutionsToPaths.description}
                    ctas={[
                      { label: cl.solutionsToPaths.cta1, targetView: 'investir', href: '#investir' },
                      { label: cl.solutionsToPaths.cta2, targetView: 'financer', href: '#financer' },
                    ]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 4. RUBRIQUE INVESTIR ══════ */}
              {activeView === 'investir' && (
                <>
                  <SectionPageHeader
                    icon={TrendingUp}
                    title={sh['investir'].title}
                    breadcrumbLabel={sh['investir'].breadcrumbLabel}
                    description={sh['investir'].description}
                    onSelectView={handleSelectView}
                  />
                  <InvestorPathwaySection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    icon={Briefcase}
                    title={cl.investirToSolutions.title}
                    description={cl.investirToSolutions.description}
                    ctas={[{ label: cl.investirToSolutions.cta, targetView: 'nos-solutions', href: '#nos-solutions' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 5. RUBRIQUE FINANCER ══════ */}
              {activeView === 'financer' && (
                <>
                  <SectionPageHeader
                    icon={Landmark}
                    title={sh['financer'].title}
                    breadcrumbLabel={sh['financer'].breadcrumbLabel}
                    description={sh['financer'].description}
                    onSelectView={handleSelectView}
                  />
                  <IssuerPathwaySection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    icon={Briefcase}
                    title={cl.financerToSolutions.title}
                    description={cl.financerToSolutions.description}
                    ctas={[{ label: cl.financerToSolutions.cta, targetView: 'nos-solutions', href: '#nos-solutions' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 6. RUBRIQUE MARCHÉ FINANCIER ══════ */}
              {activeView === 'marche-financier' && (
                <>
                  <SectionPageHeader
                    icon={BookOpen}
                    title={sh['marche-financier'].title}
                    breadcrumbLabel={sh['marche-financier'].breadcrumbLabel}
                    description={sh['marche-financier'].description}
                    onSelectView={handleSelectView}
                  />
                  <FinancialMarketSection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    dark
                    icon={Info}
                    title={cl.marcheToAbout.title}
                    description={cl.marcheToAbout.description}
                    ctas={[{ label: cl.marcheToAbout.cta, targetView: 'a-propos', href: '#presentation' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 7. RUBRIQUE PRESSE & DOCUMENTS ══════ */}
              {activeView === 'actualites-documents' && (
                <>
                  <SectionPageHeader
                    icon={FileText}
                    title={sh['actualites-documents'].title}
                    breadcrumbLabel={sh['actualites-documents'].breadcrumbLabel}
                    description={sh['actualites-documents'].description}
                    onSelectView={handleSelectView}
                  />
                  <NewsSection onSelectView={handleSelectView} />
                  <DocumentsSection onSelectView={handleSelectView} />
                </>
              )}

              {/* ══════ 8. RUBRIQUE CONTACT ══════ */}
              {activeView === 'contact' && (
                <>
                  <SectionPageHeader
                    icon={Mail}
                    title={sh['contact'].title}
                    breadcrumbLabel={sh['contact'].breadcrumbLabel}
                    description={sh['contact'].description}
                    onSelectView={handleSelectView}
                  />
                  <ContactSection />
                </>
              )}

            </motion.div>
          </AnimatePresence>

        </main>

        {/* Footer */}
        <FooterSection onSelectView={handleSelectView} />

        {/* Modal Auth */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialTab={authModalTab}
          titleMode={authModalMode}
        />

      </div>
    </>
  );
}
