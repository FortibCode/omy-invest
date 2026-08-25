import React, { useState } from 'react';
import SplashScreen from '@/Components/Omya/SplashScreen';
import { Head } from '@inertiajs/react';
import { LanguageProvider, useLanguage } from '@/Context/LanguageContext';
import HeaderNav from '@/Components/Omya/HeaderNav';
import HeroSection from '@/Components/Omya/HeroSection';
import SectionPageHeader from '@/Components/Omya/SectionPageHeader';
import CrossLinkSection from '@/Components/Omya/CrossLinkSection';
import AboutSection from '@/Components/Omya/AboutSection';
import InvestorPathwaySection from '@/Components/Omya/InvestorPathwaySection';
import IssuerPathwaySection from '@/Components/Omya/IssuerPathwaySection';
import SolutionsSection from '@/Components/Omya/SolutionsSection';
import TargetsSection from '@/Components/Omya/TargetsSection';
import MissionVisionValuesSection from '@/Components/Omya/MissionVisionValuesSection';
import FinancialMarketSection from '@/Components/Omya/FinancialMarketSection';
import TeamAndPartnersSection from '@/Components/Omya/TeamAndPartnersSection';
import NewsSection from '@/Components/Omya/NewsSection';
import DocumentsSection from '@/Components/Omya/DocumentsSection';
import ContactSection from '@/Components/Omya/ContactSection';
import FooterSection from '@/Components/Omya/FooterSection';
import AuthModal from '@/Components/Omya/AuthModal';
import { Home, Info, Briefcase, TrendingUp, Landmark, BookOpen, FileText, Mail, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Icônes des onglets, dans le même ordre que t.viewTabs (contenu traduit dans LanguageContext).
const VIEW_TAB_ICONS = [Home, Info, Briefcase, TrendingUp, Landmark, Users, BookOpen, FileText, Mail];

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

    // Laisse le temps à l'onglet précédent de sortir (AnimatePresence) et au nouveau de se monter
    // avant de tenter de défiler vers une sous-section précise (ex: #mission dans "À propos").
    window.setTimeout(() => {
      const target = anchorId ? document.getElementById(anchorId) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 400);
  };

  const viewTabs = t.viewTabs.map((tab, idx) => ({ ...tab, icon: VIEW_TAB_ICONS[idx] }));
  const sh = t.sectionHeaders;
  const cl = t.crossLinks;

  return (
    <>
      {/* ── SPLASH SCREEN ── */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Head>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
      </Head>

      <div className="relative min-h-screen bg-[#F4F6FA] text-slate-800 font-sans antialiased selection:bg-[#002E5B] selection:text-white">

        {/* 1. Header Navbar Sticky */}
        <HeaderNav onOpenAuth={handleOpenAuth} onSelectView={handleSelectView} />

        {/* ── SUB-NAVBAR QUICK TAB BAR ── */}
        <div className="sticky top-[108px] z-40 bg-[#001D3D] border-b border-[#FFFFFF]/30 shadow-md py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto font-nav text-xs uppercase tracking-wider">
            <span className="text-[10px] font-bold text-[#FFFFFF] hidden sm:block shrink-0 mr-2">
              {t.categoryRubric} :
            </span>
            <div className="flex items-center gap-1 overflow-x-auto py-0.5">
              {viewTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeView === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectView(tab.id)}
                    className={`px-3.5 py-1.5 rounded-sm font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#FFFFFF] text-[#001D3D] shadow-md scale-105'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#001D3D]' : 'text-[#FFFFFF]'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <main className="relative z-10">

          {/* DYNAMIC CONTENT SWITCHER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
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
                  <TeamAndPartnersSection onSelectView={handleSelectView} />
                  <ContactSection />
                </>
              )}

              {/* ══════ 2. RUBRIQUE À PROPOS ══════ */}
              {activeView === 'a-propos' && (
                <>
                  <SectionPageHeader
                    icon={Info}
                    title={sh['a-propos'].title}
                    breadcrumbLabel={sh['a-propos'].breadcrumbLabel}
                    description={sh['a-propos'].description}
                    onSelectView={handleSelectView}
                  />
                  <AboutSection onSelectView={handleSelectView} />
                  <MissionVisionValuesSection />
                  <TargetsSection />
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
                    dark
                    icon={Briefcase}
                    title={cl.financerToSolutions.title}
                    description={cl.financerToSolutions.description}
                    ctas={[{ label: cl.financerToSolutions.cta, targetView: 'nos-solutions', href: '#nos-solutions' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 6. RUBRIQUE PARTENAIRES ══════ */}
              {activeView === 'partenaires' && (
                <>
                  <SectionPageHeader
                    icon={Users}
                    title={sh['partenaires'].title}
                    breadcrumbLabel={sh['partenaires'].breadcrumbLabel}
                    description={sh['partenaires'].description}
                    onSelectView={handleSelectView}
                  />
                  <TeamAndPartnersSection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    dark
                    icon={Info}
                    title={cl.partenairesToAbout.title}
                    description={cl.partenairesToAbout.description}
                    ctas={[{ label: cl.partenairesToAbout.cta, targetView: 'a-propos', href: '#presentation' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 7. RUBRIQUE MARCHÉ FINANCIER ══════ */}
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

              {/* ══════ 8. RUBRIQUE PRESSE & DOCUMENTS ══════ */}
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

              {/* ══════ 9. RUBRIQUE CONTACT ══════ */}
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
                  <CrossLinkSection
                    icon={Users}
                    title={cl.contactToPartners.title}
                    description={cl.contactToPartners.description}
                    ctas={[{ label: cl.contactToPartners.cta, targetView: 'partenaires', href: '#partenaires' }]}
                    onSelectView={handleSelectView}
                  />
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
