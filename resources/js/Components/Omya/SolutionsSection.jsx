import React, { useState, useEffect } from 'react';
import { Landmark, Briefcase, TrendingUp, Award, ArrowRight, ShieldCheck, Layers, Handshake, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (icône, ancre) — fusionnées avec le texte traduit par index.
const SERVICES_META = [
  { id: 'solutions-structuration', icon: Landmark },
  { id: 'solutions-developpement', icon: Briefcase },
  { id: 'solutions-placements', icon: TrendingUp },
  { id: 'solutions-conseil', icon: Award },
  { id: 'solutions-execution', icon: Handshake },
  { id: 'solutions-conservation', icon: ShieldCheck },
  { id: 'solutions-gestion', icon: Layers },
];

export default function SolutionsSection({ onSelectView }) {
  const { t } = useLanguage();
  const SERVICES = SERVICES_META.map((meta, idx) => ({
    ...meta,
    num: String(idx + 1).padStart(2, '0'),
    ...t.solutions.services[idx],
  }));

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play timer for lateral carousel (6s)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const activeService = SERVICES[activeIndex];
  const prevService = SERVICES[(activeIndex - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(activeIndex + 1) % SERVICES.length];

  const ActiveIcon = activeService.icon;
  const PrevIcon = prevService.icon;
  const NextIcon = nextService.icon;

  return (
    <section id="nos-solutions" className="py-28 bg-white text-slate-800 relative overflow-hidden border-t-2 border-slate-200 select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="section-tag-bvmac justify-center">
            <span>{t.solutions.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t.solutions.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-poppins">
            {t.solutions.descBefore} <strong className="text-[#002E5B] font-mono">COSUMAF-SDB-01/2025</strong>{t.solutions.descAfter}
          </p>
        </div>

        {/* Quick Tabs for all 7 Services */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-12 border-b border-slate-200">
          {SERVICES.map((svc, idx) => (
            <button
              key={svc.num}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-sm font-nav text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                idx === activeIndex
                  ? 'bg-[#002E5B] text-white shadow-md border-b-2 border-b-[#002E5B]'
                  : 'bg-[#F4F6FA] text-slate-700 hover:text-[#002E5B] border border-slate-200'
              }`}
            >
              <span className="font-mono text-[10px] text-[#002E5B] font-bold">{svc.num}</span>
              <span>{svc.title}</span>
            </button>
          ))}
        </div>

        {/* ── 3-CARD LATERAL CAROUSEL (LEFT PREVIEW - CENTER FEATURED - RIGHT PREVIEW) ── */}
        <div className="relative flex items-center justify-center min-h-[380px]">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full max-w-6xl mx-auto">

            {/* LEFT CARD (PREVIOUS PREVIEW) */}
            <div
              onClick={handlePrev}
              className="hidden lg:block lg:col-span-3 cursor-pointer opacity-50 hover:opacity-85 transition-all transform hover:-translate-x-1"
            >
              <div className="bvmac-card p-6 bg-[#F4F6FA] border border-slate-200 opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-white text-[#002E5B] flex items-center justify-center font-bold border border-slate-200">
                    <PrevIcon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm font-bold text-[#002E5B]">{prevService.num}</span>
                </div>
                <span className="text-[9px] font-bold font-nav uppercase text-slate-400 block mb-1">{prevService.tag}</span>
                <h4 className="text-sm font-bold text-[#002E5B] line-clamp-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {prevService.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 font-poppins">
                  {prevService.desc}
                </p>
                <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] text-[#002E5B] font-nav uppercase font-bold flex items-center gap-1">
                  <span>{t.solutions.prevArrow}</span>
                </div>
              </div>
            </div>

            {/* CENTER FEATURED ACTIVE CARD */}
            <div className="lg:col-span-6 relative z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.num}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="bvmac-card p-8 sm:p-10 bg-white border-2 border-[#002E5B] shadow-2xl rounded-xl relative overflow-hidden"
                >
                  {/* Decorative Header Bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-[#002E5B]" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#002E5B] text-white flex items-center justify-center shadow-md">
                      <ActiveIcon className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black font-mono text-[#002E5B] block">
                        {activeService.num}
                      </span>
                      <span className="text-[10px] font-nav uppercase tracking-widest text-slate-500 font-bold">
                        {t.solutions.serviceCounter(activeIndex + 1)}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10.5px] font-bold font-nav uppercase tracking-wider text-[#002E5B] bg-[#F4F6FA] px-3 py-1 rounded-sm border border-slate-300 mb-3 inline-block">
                    {activeService.tag}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#002E5B] leading-tight mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {activeService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-poppins font-light bg-[#F4F6FA] p-5 rounded-md border border-slate-200">
                    {activeService.desc}
                  </p>

                  <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-bvmac-primary text-xs">
                      <span>{t.solutions.consultBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <span className="text-[11px] font-nav font-bold uppercase text-slate-500">
                      {t.solutions.agreementBadge}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT CARD (NEXT PREVIEW) */}
            <div
              onClick={handleNext}
              className="hidden lg:block lg:col-span-3 cursor-pointer opacity-50 hover:opacity-85 transition-all transform hover:translate-x-1"
            >
              <div className="bvmac-card p-6 bg-[#F4F6FA] border border-slate-200 opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-white text-[#002E5B] flex items-center justify-center font-bold border border-slate-200">
                    <NextIcon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm font-bold text-[#002E5B]">{nextService.num}</span>
                </div>
                <span className="text-[9px] font-bold font-nav uppercase text-slate-400 block mb-1">{nextService.tag}</span>
                <h4 className="text-sm font-bold text-[#002E5B] line-clamp-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {nextService.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 font-poppins">
                  {nextService.desc}
                </p>
                <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] text-[#002E5B] font-nav uppercase font-bold flex items-center justify-end gap-1">
                  <span>{t.solutions.nextArrow}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Side Arrow Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#002E5B] text-white hover:bg-[#001D3D] transition-all flex items-center justify-center shadow-xl border border-slate-300"
            title={t.solutions.prevService}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#002E5B] text-white hover:bg-[#001D3D] transition-all flex items-center justify-center shadow-xl border border-slate-300"
            title={t.solutions.nextService}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Carousel Timer & Play/Pause Controls */}
        <div className="mt-10 flex items-center justify-center gap-4 text-xs font-poppins text-slate-500">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 text-[#002E5B] font-nav font-bold uppercase hover:underline transition"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-[#002E5B]" /> : <Play className="w-4 h-4 text-[#002E5B]" />}
            <span>{isPlaying ? t.common.pause : t.common.lecture}</span>
          </button>

          <span className="font-mono text-slate-300">•</span>

          <span className="font-mono font-bold text-[#002E5B]">
            {t.solutions.footerCounter(activeIndex + 1)}
          </span>
        </div>

      </div>
    </section>
  );
}
