import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, ArrowRight, ChevronRight, Landmark, Briefcase, TrendingUp, Award, Shield, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import StockTickerBar from '@/Components/Omya/StockTickerBar';

export default function HeaderNav({ onOpenAuth, onSelectView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId, e, href) => {
    if (e) e.preventDefault();
    const anchorId = href && href.startsWith('#') && href.length > 1 ? href.slice(1) : null;
    if (onSelectView) {
      onSelectView(viewId, anchorId);
    }
  };

  const solutionsCol1 = [
    { num: '01', title: 'Structuration financière', desc: 'Montage d\'opérations obligataires et d\'ouverture du capital', viewId: 'nos-solutions', href: '#solutions-structuration', icon: Landmark },
    { num: '02', title: 'Développement d\'affaires', desc: 'Accompagnement des États, entreprises et institutionnels', viewId: 'nos-solutions', href: '#solutions-developpement', icon: Briefcase },
    { num: '03', title: 'Placements financiers', desc: 'Placer les actifs sur le marché des capitaux CEMAC', viewId: 'investir', href: '#solutions-placements', icon: TrendingUp },
    { num: '04', title: 'Conseil en financement', desc: 'Conseil aux émetteurs et aux investisseurs', viewId: 'financer', href: '#solutions-conseil', icon: Award },
  ];

  const solutionsCol2 = [
    { num: '05', title: 'Exécution d\'ordre', desc: 'Ordres d\'achat et de vente des titres', viewId: 'investir', href: '#solutions-execution', icon: ArrowRight },
    { num: '06', title: 'Conservation & compte-titre', desc: 'Agréé par le dépositaire central BEAC (DCU)', viewId: 'nos-solutions', href: '#solutions-conservation', icon: Shield },
    { num: '07', title: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire et conseil en investissement', viewId: 'investir', href: '#solutions-gestion', icon: Layers },
  ];

  const navMenuItems = [
    { id: 'accueil', label: 'Accueil', href: '#accueil', viewId: 'accueil' },
    {
      id: 'a-propos', label: 'À propos', href: '#presentation', viewId: 'a-propos', dropdownType: 'list',
      dropdownItems: [
        { label: 'Présentation', desc: 'Agrément COSUMAF & Groupe YAO CORP', viewId: 'a-propos', href: '#presentation' },
        { label: 'Notre mission', desc: 'Accompagnement personnes morales & physiques', viewId: 'a-propos', href: '#mission' },
        { label: 'Notre vision', desc: '3 axes pour le marché CEMAC', viewId: 'a-propos', href: '#vision' },
        { label: 'Nos valeurs', desc: 'Intégrité, Rigueur & Proximité', viewId: 'a-propos', href: '#valeurs' },
        { label: 'Nos cibles', desc: 'États, Entreprises, PME & Particuliers', viewId: 'a-propos', href: '#cibles' },
      ],
    },
    { id: 'nos-solutions', label: 'Nos solutions', href: '#nos-solutions', viewId: 'nos-solutions', dropdownType: 'megamenu' },
    {
      id: 'investir', label: 'Investir', href: '#investir', viewId: 'investir', dropdownType: 'list',
      dropdownItems: [
        { label: 'Pourquoi investir ?', desc: 'Optimiser et sécuriser votre capital', viewId: 'investir', href: '#pourquoi-investir' },
        { label: 'Placements financiers', desc: 'Titres et opportunités sur la CEMAC', viewId: 'investir', href: '#solutions-placements' },
        { label: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire sur-mesure', viewId: 'investir', href: '#solutions-gestion' },
        { label: 'Exécution d\'ordre', desc: 'Transactions rapides et sécurisées', viewId: 'investir', href: '#solutions-execution' },
        { label: 'Comprendre la bourse', desc: 'Guide pédagogique pour investisseurs', viewId: 'marche-financier', href: '#marche-financier' },
      ],
    },
    {
      id: 'financer', label: 'Financer', href: '#financer', viewId: 'financer', dropdownType: 'list',
      dropdownItems: [
        { label: 'Besoin de financement ?', desc: 'Mobilisation de capitaux structurés', viewId: 'financer', href: '#besoin-financement' },
        { label: 'Structuration financière', desc: 'Montage sur-mesure pour émetteurs', viewId: 'financer', href: '#solutions-structuration' },
        { label: 'Emprunt obligataire', desc: 'Levée de fonds sur le marché obligataire', viewId: 'financer', href: '#emprunt-obligataire' },
        { label: 'Ouverture du capital', desc: 'Introduction en bourse & equity', viewId: 'financer', href: '#ouverture-capital' },
        { label: 'Conseil en financement', desc: 'Accompagnement stratégique des émetteurs', viewId: 'financer', href: '#solutions-conseil' },
      ],
    },
    { id: 'partenaires', label: 'Partenaires', href: '#partenaires', viewId: 'partenaires' },
    {
      id: 'marche-financier', label: 'Marché financier', href: '#marche-financier', viewId: 'marche-financier', dropdownType: 'list',
      dropdownItems: [
        { label: 'Comprendre le marché CEMAC', desc: 'Organisation et cadre COSUMAF', viewId: 'marche-financier', href: '#marche-cemac' },
        { label: 'Actions', desc: 'Titres de propriété cotés sur la BVMAC', viewId: 'marche-financier', href: '#instruments-actions' },
        { label: 'Obligations', desc: 'Titres de créances d\'États et entreprises', viewId: 'marche-financier', href: '#instruments-obligations' },
        { label: 'Éducation financière', desc: 'Pédagogie et guides de marché', viewId: 'marche-financier', href: '#education-financiere' },
      ],
    },
    {
      id: 'actualites-documents', label: 'Presse & Doc', href: '#actualites', viewId: 'actualites-documents', dropdownType: 'list',
      dropdownItems: [
        { label: 'Actualités', desc: 'Dernières nouvelles du marché CEMAC', viewId: 'actualites-documents', href: '#actualites-recents' },
        { label: 'Publications', desc: 'Analyses et rapports d\'experts', viewId: 'actualites-documents', href: '#publications' },
        { label: 'Communiqués', desc: 'Annonces officielles OMYA INVEST', viewId: 'actualites-documents', href: '#communiques' },
        { label: 'Documents', desc: 'Règlements, prospectus & formulaires', viewId: 'actualites-documents', href: '#documents' },
      ],
    },
    { id: 'contact', label: 'Contact', href: '#contact', viewId: 'contact' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-md">

      {/* TICKER BARRE DE COTATION */}
      <StockTickerBar />

      {/* NAVBAR FOND BLANC PURE & BLEU NUIT */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg' : 'bg-white'} border-b border-slate-200`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-[76px]">

            {/* Logo */}
            <a href="#" onClick={(e) => handleNavClick('accueil', e)} className="flex items-center shrink-0 mr-2">
              <OmyaLogo light={false} className="h-10 sm:h-11 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden 2xl:flex items-center gap-1 flex-1 justify-center min-w-0">
              {navMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.viewId, e, item.href)}
                    className={`font-nav inline-flex items-center gap-1 px-3 py-2.5 text-[12.5px] font-bold tracking-wide transition-all uppercase rounded-sm border-b-2 whitespace-nowrap ${
                      activeDropdown === item.id
                        ? 'text-[#002E5B] border-b-[#002E5B] bg-slate-100'
                        : 'text-[#001D3D] hover:text-[#002E5B] hover:border-b-[#002E5B] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.dropdownType && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180 text-[#002E5B]' : 'text-slate-500'}`} />
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdownType === 'list' && activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-0 w-72 bg-white border border-slate-200 border-t-2 border-t-[#002E5B] shadow-2xl z-50 rounded-b-md"
                      >
                        {item.dropdownItems.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            onClick={(e) => handleNavClick(sub.viewId, e, sub.href)}
                            className="block px-4 py-3 hover:bg-[#F4F6FA] border-b border-slate-100 last:border-none transition group"
                          >
                            <div className="text-[12.5px] font-bold font-nav text-[#001D3D] group-hover:text-[#002E5B] transition flex items-center justify-between">
                              <span>{sub.label}</span>
                              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#002E5B] transition-all" />
                            </div>
                            <div className="text-[11px] text-slate-500 leading-snug mt-0.5">{sub.desc}</div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mega Menu Nos Solutions */}
                  <AnimatePresence>
                    {item.dropdownType === 'megamenu' && activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full -left-24 mt-0 w-[720px] bg-white border border-slate-200 border-t-2 border-t-[#002E5B] shadow-2xl z-50 p-6 rounded-b-md"
                      >
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#002E5B] font-nav">Agrément COSUMAF-SDB-01/2025</span>
                            <h4 className="text-sm font-bold text-[#001D3D] mt-0.5 font-nav">Nos 7 Solutions & Services Financiers</h4>
                          </div>
                          <a href="#nos-solutions" onClick={(e) => handleNavClick('nos-solutions', e, '#nos-solutions')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
                            <span>Voir tout</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            {solutionsCol1.map((svc) => {
                              const Icon = svc.icon;
                              return (
                                <a key={svc.num} href={svc.href} onClick={(e) => handleNavClick(svc.viewId, e, svc.href)} className="flex items-start gap-3 p-3 hover:bg-[#F4F6FA] transition group rounded-md">
                                  <div className="shrink-0 w-8 h-8 rounded-sm bg-[#002E5B] text-white flex items-center justify-center">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h5 className="text-[12px] font-bold text-[#001D3D] group-hover:text-[#002E5B] transition font-nav">{svc.title}</h5>
                                    <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">{svc.desc}</p>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                          <div className="space-y-1">
                            {solutionsCol2.map((svc) => {
                              const Icon = svc.icon;
                              return (
                                <a key={svc.num} href={svc.href} onClick={(e) => handleNavClick(svc.viewId, e, svc.href)} className="flex items-start gap-3 p-3 hover:bg-[#F4F6FA] transition group rounded-md">
                                  <div className="shrink-0 w-8 h-8 rounded-sm bg-[#002E5B] text-white flex items-center justify-center">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h5 className="text-[12px] font-bold text-[#001D3D] group-hover:text-[#002E5B] transition font-nav">{svc.title}</h5>
                                    <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">{svc.desc}</p>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA ESPACE CLIENT — BLEU NUIT AGRANDI */}
            <div className="hidden 2xl:flex items-center gap-2 shrink-0">
              <button
                onClick={() => onOpenAuth && onOpenAuth('login', 'client')}
                className="px-7 py-3 bg-[#002E5B] text-white hover:bg-[#001D3D] transition-all duration-300 font-nav text-xs font-black uppercase rounded-sm border-2 border-[#002E5B] shadow-xl flex items-center gap-2 shrink-0 tracking-wider"
              >
                <User className="w-4 h-4 text-white" />
                <span>Espace client</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex 2xl:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#001D3D] hover:text-[#002E5B] transition">
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#001D3D]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="2xl:hidden bg-white border-b-2 border-[#002E5B] px-4 pt-2 pb-6 shadow-2xl"
          >
            <div className="space-y-0.5">
              {navMenuItems.map((item) => (
                <div key={item.id} className="border-b border-slate-100 last:border-none">
                  {!item.dropdownType ? (
                    <a href={item.href} onClick={(e) => { handleNavClick(item.viewId, e, item.href); setMobileMenuOpen(false); }} className="block py-3 text-sm font-bold text-[#001D3D] hover:text-[#002E5B] font-nav uppercase">
                      {item.label}
                    </a>
                  ) : (
                    <div>
                      <button onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)} className="w-full flex items-center justify-between py-3 text-sm font-bold text-[#001D3D] hover:text-[#002E5B] font-nav uppercase">
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#002E5B] ${activeAccordion === item.id ? 'rotate-180' : ''}`} />
                      </button>
                      {activeAccordion === item.id && (
                        <div className="pl-3 pb-3 space-y-2">
                          {item.dropdownType === 'megamenu'
                            ? [...solutionsCol1, ...solutionsCol2].map((s) => (
                                <a key={s.num} href={s.href} onClick={(e) => { handleNavClick(s.viewId, e, s.href); setMobileMenuOpen(false); }} className="block py-1.5 text-xs font-semibold text-slate-700 hover:text-[#002E5B] font-nav">{s.title}</a>
                              ))
                            : item.dropdownItems.map((sub, sIdx) => (
                                <a key={sIdx} href={sub.href} onClick={(e) => { handleNavClick(sub.viewId, e, sub.href); setMobileMenuOpen(false); }} className="block py-1.5 text-xs font-semibold text-slate-700 hover:text-[#002E5B] font-nav">{sub.label}</a>
                              ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={() => { onOpenAuth && onOpenAuth('login', 'client'); setMobileMenuOpen(false); }}
                className="px-6 py-3.5 bg-[#002E5B] text-white hover:bg-[#001D3D] transition-all font-nav text-xs font-black uppercase rounded-sm border-2 border-[#002E5B] w-full justify-center flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Espace client</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
