import React, { useState } from 'react';
import {
  Menu, X, ChevronDown, User, Globe, ArrowUpRight, ArrowDownRight,
  Shield, Phone, Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import OmyaLogo from '@/Components/Omya/OmyaLogo';

const socialLinks = [
  { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

// Live stock ticker data
const stockItems = [
  { name: 'BVMAC ALL SHARE', value: '197.45', change: '+0.85%', positive: true },
  { name: 'BVMAC 10', value: '156.78', change: '+0.56%', positive: true },
  { name: 'CAC 40', value: '7 984.21', change: '+0.25%', positive: true },
  { name: 'DOW JONES', value: '39 065.26', change: '+0.35%', positive: true },
  { name: 'PÉTROLE BRENT', value: '83.45', change: '-0.12%', positive: false },
  { name: 'OR (GOLD)', value: '2 342.10', change: '+0.45%', positive: true },
  { name: 'SAFACAM (BVMAC)', value: '23 500 FCFA', change: '+1.20%', positive: true },
  { name: 'SOCAPALM (BVMAC)', value: '48 000 FCFA', change: '+0.95%', positive: true },
];

const languages = [
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'PT', label: 'Português', flag: '🇵🇹' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
];

export default function HeaderNav({ onOpenAuth }) {
  const { currentLang, changeLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navMenuItems = [
    {
      id: 'accueil',
      label: t.navHome,
      href: '#',
      dropdown: [
        { label: t.dropMarketOverview, desc: 'Aperçu global de la BVMAC & indices', href: '#marches' },
        { label: t.dropNews, desc: 'Dernières actualités de la sous-région', href: '#actualites' },
        { label: t.dropMainIndices, desc: 'Suivi des indices phares de la CEMAC', href: '#marches' },
        { label: t.dropPopStocks, desc: 'Actions les plus échangées', href: '#produits' },
      ],
    },
    {
      id: 'a-propos',
      label: t.navAbout || 'À Propos',
      href: '#a-propos',
      dropdown: [
        { label: 'Notre Histoire', desc: 'OMYA INVEST depuis 2014', href: '#a-propos' },
        { label: 'Notre Équipe', desc: 'Experts certifiés COSUMAF', href: '#a-propos' },
        { label: 'Nos Agréments', desc: 'Réglementation & conformité', href: '#a-propos' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      href: '#services',
      dropdown: [
        { label: t.dropStocks, desc: 'Actions cotées BVMAC', href: '#produits' },
        { label: t.dropBonds, desc: 'Obligations d\'État & Privées', href: '#produits' },
        { label: 'Gestion de Patrimoine', desc: 'Conseils personnalisés', href: '#services' },
        { label: 'Conseil Financier', desc: 'Stratégies d\'investissement', href: '#services' },
      ],
    },
    {
      id: 'marches',
      label: t.navMarkets,
      href: '#marches',
      dropdown: [
        { label: 'BVMAC', desc: 'Indices et actions BVMAC', href: '#marches' },
        { label: t.dropForex, desc: 'Devises (EUR, USD, XAF)', href: '#marches' },
        { label: t.dropCommodities, desc: 'Matières premières', href: '#marches' },
      ],
    },
    {
      id: 'actualites',
      label: t.navNews,
      href: '#actualites',
      dropdown: [
        { label: t.dropEconomy, desc: 'Actualités économiques CEMAC', href: '#actualites' },
        { label: t.dropCompanies, desc: 'Vie des entreprises', href: '#actualites' },
        { label: t.dropFinancialAnalyses, desc: 'Analyses des experts OMYA', href: '#actualites' },
      ],
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">

      {/* ── TOP BAR: contact info + social icons ── */}
      <div className="bg-[#0C4A6E] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: email + phone */}
          <div className="flex items-center gap-6">
            <a href="mailto:contact@omyainvest.com" className="flex items-center gap-1.5 text-sky-300 hover:text-white transition">
              <Mail className="w-3 h-3 text-sky-400" />
              <span>contact@omyainvest.com</span>
            </a>
            <a href="tel:+242061234567" className="flex items-center gap-1.5 text-sky-300 hover:text-white transition">
              <Phone className="w-3 h-3 text-sky-400" />
              <span>+242 06 123 45 67</span>
            </a>
          </div>
          {/* Right: social icons */}
          <div className="hidden sm:flex items-center gap-3">
            {socialLinks.map(({ label, path }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="text-sky-400 hover:text-sky-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d={path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR: white background ── */}
      <div className="bg-white border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#" className="flex items-center shrink-0">
              <OmyaLogo light={false} className="h-10" />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-4 py-2.5 text-sm font-600 nav-link-hover transition-colors ${
                      activeDropdown === item.id
                        ? 'text-sky-500'
                        : 'text-gray-700 hover:text-sky-500'
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180 text-sky-400' : ''
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white border border-sky-100 rounded-xl shadow-xl p-2 z-50"
                      >
                        {item.dropdown.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            className="block p-2.5 rounded-lg hover:bg-sky-50 transition group"
                          >
                            <div className="text-sm font-700 text-gray-800 group-hover:text-sky-500 transition" style={{ fontWeight: 700 }}>
                              {sub.label}
                            </div>
                            <div className="text-xs text-gray-500 leading-snug mt-0.5">
                              {sub.desc}
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right: Language + CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative z-50">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg border border-sky-200 hover:border-sky-300 transition text-xs font-bold"
                >
                  <Globe className="w-3.5 h-3.5 text-sky-500" />
                  <span>{currentLang}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute right-0 mt-2 w-36 bg-white border border-sky-100 rounded-xl shadow-xl py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { changeLanguage(lang.code); setLangDropdownOpen(false); }}
                          className={`w-full text-left px-3.5 py-2 flex items-center gap-2.5 hover:bg-sky-50 transition text-xs ${
                            currentLang === lang.code ? 'text-sky-500 font-black' : 'text-gray-600 font-bold'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Espace Client */}
              <motion.button
                onClick={() => onOpenAuth('login', 'client')}
                className="btn-orange btn-sm flex items-center gap-1.5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <User className="w-3.5 h-3.5" />
                <span>{t.clientSpace}</span>
              </motion.button>

              {/* Espace Membre */}
              <motion.button
                onClick={() => onOpenAuth('login', 'member')}
                className="btn-outline-navy btn-sm flex items-center gap-1.5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>{t.memberSpace}</span>
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>

          </div>
        </div>
      </div>

      {/* ── LIVE TICKER BAR (navy) — hidden ── */}
      {false && (
      <div className="ticker-bar py-1.5 px-4 overflow-hidden">
        <div className="animate-ticker space-x-8">
          {stockItems.concat(stockItems).map((stock, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 font-mono text-[11px]">
              <span className="font-semibold text-sky-300">{stock.name}:</span>
              <span className="text-white font-black">{stock.value}</span>
              <span className={`inline-flex items-center text-[10px] font-bold px-1 rounded ${
                stock.positive ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {stock.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stock.change}
              </span>
              <span className="text-sky-600 ml-2">|</span>
            </span>
          ))}
        </div>
      </div>
      )}

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-sky-100 px-4 overflow-hidden"
          >
            <div className="py-4 space-y-1">
              {navMenuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block py-2.5 px-3 text-sm font-bold text-gray-700 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pb-4 pt-2 border-t border-sky-100 flex flex-col gap-2.5">
              <button
                onClick={() => { onOpenAuth('login', 'client'); setMobileMenuOpen(false); }}
                className="btn-orange w-full justify-center"
              >
                {t.clientSpace}
              </button>
              <button
                onClick={() => { onOpenAuth('login', 'member'); setMobileMenuOpen(false); }}
                className="btn-outline-navy w-full justify-center"
              >
                {t.memberSpace}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
