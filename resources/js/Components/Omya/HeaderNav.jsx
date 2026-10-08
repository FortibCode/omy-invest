import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, User, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import StockTickerBar from '@/Components/Omya/StockTickerBar';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';
import { FacebookIcon, LinkedInIcon } from '@/Components/Omya/SocialIcons';


export default function HeaderNav({ onOpenAuth, onSelectView, activeView }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef(null);
  const { t, currentLang, changeLanguage, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le sélecteur de langue au clic extérieur
  useEffect(() => {
    if (!langMenuOpen) return;
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [langMenuOpen]);

  // Menu ouvert : on bloque le défilement de la page et Échap le referme
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  // En haut de l'accueil et de « À propos », la barre est transparente et se pose sur l'écran d'ouverture plein écran.
  const transparent = (activeView === 'accueil' || activeView === 'a-propos') && !scrolled;

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) {
      onSelectView(viewId, anchorId);
    }
    setMenuOpen(false);
  };

  // Sous-liens de chaque rubrique : « Nos solutions » regroupe les deux colonnes de services.
  const solutions = [...t.headerNav.solutionsCol1, ...t.headerNav.solutionsCol2].map((s) => ({
    label: s.title,
    desc: s.desc,
    href: s.href,
  }));
  const navMenuItems = t.headerNav.items.map((item) => ({
    ...item,
    subItems: item.id === 'nos-solutions' ? solutions : item.dropdownItems,
  }));

  return (
    // Le fond est porté par l'en-tête entier (bandeau + navigation) : un seul bloc bleu nuit, sans démarcation.
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent ? 'bg-transparent' : 'bg-black/60 backdrop-blur-md shadow-sm'
    }`}>

      {/* TICKER BARRE DE COTATION */}
      <StockTickerBar transparent />

      {/* NAVBAR : LOGO À GAUCHE, LANGUE + MENU À DROITE */}
      <div className="relative z-10 border-b border-transparent">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-[76px]">

            {/* Logo */}
            <a href="#" onClick={(e) => handleNavClick(e, '#accueil')} className="flex items-center shrink-0">
              <OmyaLogo light className="h-10 sm:h-11 w-auto" />
            </a>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Language Switcher */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="h-11 px-3 text-white hover:bg-white/10 transition-colors text-sm font-semibold rounded flex items-center gap-1.5"
                  aria-label={t.languageSelect}
                  aria-expanded={langMenuOpen}
                >
                  <span>{currentLang}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-44 bg-white border border-slate-200 border-t-2 border-t-[#002E5B] shadow-2xl z-50 rounded-b-md overflow-hidden"
                    >
                      {languages.map((lng) => (
                        <button
                          key={lng.code}
                          onClick={() => { changeLanguage(lng.code); setLangMenuOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition flex items-center justify-between ${
                            currentLang === lng.code ? 'bg-[#F4F6FA] text-[#002E5B]' : 'text-[#001D3D] hover:bg-[#F4F6FA]'
                          }`}
                        >
                          <span>{lng.label}</span>
                          {currentLang === lng.code
                            ? <Check className="w-3.5 h-3.5 text-[#002E5B]" />
                            : <span className="text-xs text-slate-400">{lng.short}</span>}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bouton Menu (hamburger) */}
              <button
                onClick={() => setMenuOpen(true)}
                className="h-11 px-3 text-white hover:bg-white/10 transition-colors text-sm font-semibold rounded flex items-center justify-center"
                aria-label={t.headerNav.menu}
                aria-expanded={menuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* PANNEAU DE NAVIGATION (tiroir latéral) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-[#001D3D]/60 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[380px] bg-[#262B3B] text-white shadow-2xl flex flex-col justify-between p-6 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={t.headerNav.menuTitle}
            >
              {/* Bouton fermeture X en haut à droite */}
              <div className="flex justify-end shrink-0">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 text-white/80 hover:text-white transition flex items-center justify-center"
                  aria-label={t.headerNav.closeMenu}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Rubriques épurées */}
              <nav className="flex-1 overflow-y-auto py-6 my-2">
                <ul className="space-y-3">
                  {navMenuItems.map((item, idx) => {
                    const isExpanded = activeAccordion === item.id;
                    const hasSub = item.subItems && item.subItems.length > 0;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + idx * 0.025, duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between py-1">
                          <a
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-[17px] sm:text-[18px] text-white/90 hover:text-white font-normal transition-colors"
                          >
                            <span>{item.label}</span>
                          </a>
                          {hasSub && (
                            <button
                              onClick={() => setActiveAccordion(isExpanded ? null : item.id)}
                              className="p-1 text-white/60 hover:text-white transition"
                              aria-expanded={isExpanded}
                              aria-label={item.label}
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {hasSub && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 my-2 border-l border-white/20 space-y-2">
                                {item.subItems.map((sub, sIdx) => (
                                  <a
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={(e) => handleNavClick(e, sub.href)}
                                    className="block text-sm text-white/70 hover:text-white transition"
                                  >
                                    <span>{sub.label}</span>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bas du panneau : Réseaux sociaux + Bouton Espace Client */}
              <div className="shrink-0 space-y-5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white text-[#262B3B] flex items-center justify-center hover:bg-white/80 transition"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white text-[#262B3B] flex items-center justify-center hover:bg-white/80 transition"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4.5 h-4.5" />
                  </a>
                </div>

                <button
                  onClick={() => { onOpenAuth && onOpenAuth('login', 'client'); setMenuOpen(false); }}
                  className="w-full py-3 bg-white/10 border border-white/20 hover:bg-white hover:text-[#262B3B] transition text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  <span>{t.headerNav.espaceClient}</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
