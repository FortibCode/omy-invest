import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { LanguageProvider } from '@/Context/LanguageContext';
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

export default function Welcome({ auth }) {
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

  const viewTabs = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'a-propos', label: 'À propos', icon: Info },
    { id: 'nos-solutions', label: 'Nos Solutions', icon: Briefcase },
    { id: 'investir', label: 'Investir', icon: TrendingUp },
    { id: 'financer', label: 'Financer', icon: Landmark },
    { id: 'partenaires', label: 'Partenaires', icon: Users },
    { id: 'marche-financier', label: 'Marché CEMAC', icon: BookOpen },
    { id: 'actualites-documents', label: 'Presse & Doc', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <LanguageProvider>
      <Head>
        <title>OMYA INVEST — Société de Bourse Agréée COSUMAF-SDB-01/2025 | Groupe YAO CORP</title>
        <meta name="description" content="OMYA INVEST, filiale du Groupe YAO CORP, est une société de bourse agréée par la COSUMAF (COSUMAF-SDB-01/2025). Nous connectons investisseurs et émetteurs sur toute la zone CEMAC." />
        <meta name="keywords" content="OMYA INVEST, COSUMAF, société de bourse, CEMAC, investissement, financement, BVMAC, YAO CORP, Brazzaville, Congo, obligations, actions, gestion de portefeuille" />
      </Head>

      <div className="relative min-h-screen bg-[#F4F6FA] text-slate-800 font-sans antialiased selection:bg-[#002E5B] selection:text-white">
        
        {/* 1. Header Navbar Sticky */}
        <HeaderNav onOpenAuth={handleOpenAuth} onSelectView={handleSelectView} />

        {/* ── SUB-NAVBAR QUICK TAB BAR ── */}
        <div className="sticky top-[108px] z-40 bg-[#001D3D] border-b border-[#FFFFFF]/30 shadow-md py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto font-nav text-xs uppercase tracking-wider">
            <span className="text-[10px] font-bold text-[#FFFFFF] hidden sm:block shrink-0 mr-2">
              Rubrique :
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
                    title="À propos d'OMYA INVEST"
                    breadcrumbLabel="À propos"
                    description="Société de bourse agréée COSUMAF-SDB-01/2025, filiale du Groupe YAO CORP."
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
                    title="Nos Solutions & Services Financiers"
                    breadcrumbLabel="Nos Solutions"
                    description="7 expertises au service des investisseurs et des émetteurs de la zone CEMAC."
                    onSelectView={handleSelectView}
                  />
                  <SolutionsSection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    icon={TrendingUp}
                    title="Vous êtes investisseur ou vous recherchez un financement ?"
                    description="Découvrez le parcours qui vous correspond : investir votre capital ou structurer une opération de financement."
                    ctas={[
                      { label: 'Parcours Investisseur', targetView: 'investir', href: '#investir' },
                      { label: 'Parcours Émetteur', targetView: 'financer', href: '#financer' },
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
                    title="Vous souhaitez investir ?"
                    breadcrumbLabel="Investir"
                    description="Faites fructifier votre capital sur le marché financier régional CEMAC."
                    onSelectView={handleSelectView}
                  />
                  <InvestorPathwaySection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    icon={Briefcase}
                    title="Explorez l'ensemble de nos solutions"
                    description="Placements financiers, gestion de portefeuille, exécution d'ordres... découvrez nos 7 expertises complètes."
                    ctas={[{ label: 'Voir nos solutions', targetView: 'nos-solutions', href: '#nos-solutions' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 5. RUBRIQUE FINANCER ══════ */}
              {activeView === 'financer' && (
                <>
                  <SectionPageHeader
                    icon={Landmark}
                    title="Vous recherchez un financement ?"
                    breadcrumbLabel="Financer"
                    description="Structuration d'emprunts obligataires, ouverture du capital et financement structuré."
                    onSelectView={handleSelectView}
                  />
                  <IssuerPathwaySection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    dark
                    icon={Briefcase}
                    title="Découvrez toutes nos expertises de structuration"
                    description="Structuration financière, conseil, développement d'affaires... explorez nos 7 solutions complètes."
                    ctas={[{ label: 'Voir nos solutions', targetView: 'nos-solutions', href: '#nos-solutions' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 6. RUBRIQUE PARTENAIRES ══════ */}
              {activeView === 'partenaires' && (
                <>
                  <SectionPageHeader
                    icon={Users}
                    title="Notre Réseau de Partenaires"
                    breadcrumbLabel="Partenaires"
                    description="Une équipe d'experts certifiés et des partenariats institutionnels de confiance."
                    onSelectView={handleSelectView}
                  />
                  <TeamAndPartnersSection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    dark
                    icon={Info}
                    title="En savoir plus sur OMYA INVEST"
                    description="Agrément COSUMAF, filiation au Groupe YAO CORP, mission et valeurs : découvrez notre identité institutionnelle."
                    ctas={[{ label: 'Découvrir OMYA INVEST', targetView: 'a-propos', href: '#presentation' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 7. RUBRIQUE MARCHÉ FINANCIER ══════ */}
              {activeView === 'marche-financier' && (
                <>
                  <SectionPageHeader
                    icon={BookOpen}
                    title="Comprendre le Marché Financier CEMAC"
                    breadcrumbLabel="Marché CEMAC"
                    description="Actions, obligations et éducation financière sur la zone CEMAC."
                    onSelectView={handleSelectView}
                  />
                  <FinancialMarketSection onSelectView={handleSelectView} />
                  <CrossLinkSection
                    dark
                    icon={Info}
                    title="Qui est OMYA INVEST ?"
                    description="Société de bourse agréée COSUMAF-SDB-01/2025, filiale du Groupe YAO CORP, au service de toute la zone CEMAC."
                    ctas={[{ label: 'Découvrir OMYA INVEST', targetView: 'a-propos', href: '#presentation' }]}
                    onSelectView={handleSelectView}
                  />
                </>
              )}

              {/* ══════ 8. RUBRIQUE PRESSE & DOCUMENTS ══════ */}
              {activeView === 'actualites-documents' && (
                <>
                  <SectionPageHeader
                    icon={FileText}
                    title="Actualités & Documentation"
                    breadcrumbLabel="Presse & Doc"
                    description="Publications, communiqués et documents officiels d'OMYA INVEST."
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
                    title="Parlons de Votre Projet"
                    breadcrumbLabel="Contact"
                    description="Notre équipe vous accompagne dans vos projets d'investissement ou de financement."
                    onSelectView={handleSelectView}
                  />
                  <ContactSection />
                  <CrossLinkSection
                    icon={Users}
                    title="Découvrez notre réseau de partenaires"
                    description="Une équipe d'experts certifiés et des partenariats institutionnels de confiance partout dans la zone CEMAC."
                    ctas={[{ label: 'Voir nos partenaires', targetView: 'partenaires', href: '#partenaires' }]}
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
    </LanguageProvider>
  );
}
