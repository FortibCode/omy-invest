import React, { useState, useEffect } from 'react';
import { Landmark, ArrowRight, Coins, FileText, Building2, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (image, ancre du bouton) — fusionnées avec le texte traduit par index.
const OPERATIONS_META = [
  { id: 1, image: '/images/image-hero-4.jpeg', btnHref: '#contact' },
  { id: 2, image: '/images/image-hero-9.jpeg', btnHref: '#contact' },
  { id: 3, image: '/images/image-hero-7.jpeg', btnHref: '#contact' },
  { id: 4, image: '/images/image-hero-5.jpeg', btnHref: '#contact' },
];

export default function IssuerPathwaySection({ onSelectView }) {
  const { t } = useLanguage();
  const OPERATIONS = OPERATIONS_META.map((meta, idx) => ({
    ...meta,
    num: String(idx + 1).padStart(2, '0'),
    ...t.issuer.operations[idx],
  }));

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const [activeOpIndex, setActiveOpIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play timer (6s)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveOpIndex((prev) => (prev + 1) % OPERATIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeOp = OPERATIONS[activeOpIndex];

  return (
    <section id="financer" className="py-24 bg-[#001D3D] text-white relative overflow-hidden border-t-4 border-t-[#002E5B] select-none">
      
      {/* Background Dot Pattern Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header — "Vous recherchez un financement ?" */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="section-tag-light justify-center">
            <Landmark className="w-4 h-4 text-white" />
            <span className="text-white">{t.issuer.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t.issuer.title}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed bg-[#002E5B]/90 p-6 rounded-md border border-white/20 shadow-xl font-poppins">
            {t.issuer.quote}
          </p>
        </div>

        {/* ── INTERACTIVE OPERATION SHOWCASE SLIDER ── */}
        <div className="mb-14">
          
          {/* Top Operation Navigation Tabs */}
          <div className="relative mb-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-700/60 scrollbar-none">
              {OPERATIONS.map((op, idx) => (
                <button
                  key={op.id}
                  onClick={() => setActiveOpIndex(idx)}
                  className={`px-4 py-2.5 rounded-sm font-nav text-[13px] font-bold uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                    idx === activeOpIndex
                      ? 'bg-white text-[#001D3D] shadow-xl scale-105 font-black'
                      : 'bg-[#002E5B] text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <span className="font-mono text-[11px]">{op.num}</span>
                  <span>{op.title}</span>
                </button>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-[#001D3D] to-transparent pointer-events-none sm:hidden" />
          </div>

          {/* Active Operation Card (Synchronized Image + Text Transition) */}
          <div className="bvmac-card-dark p-8 sm:p-12 border-l-4 border-l-white relative min-h-[420px] flex items-center bg-[#002E5B]/95 rounded-xl border border-white/10 shadow-2xl">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOp.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
              >
                
                {/* Left Text Block */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black font-mono text-[#001D3D] bg-white px-3 py-1 rounded-sm border border-slate-300">
                      {activeOp.num}
                    </span>
                    <span className="text-xs font-bold font-nav uppercase tracking-wider text-white bg-white/10 px-3 py-1 rounded-sm border border-white/20">
                      {activeOp.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {activeOp.title}
                  </h3>

                  <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-poppins font-light bg-[#001D3D]/80 p-5 rounded-md border border-slate-700/60">
                    {activeOp.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <a href={activeOp.btnHref} className="btn-bvmac-white text-xs">
                      <span>{activeOp.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Controls & Stepper */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-slate-300 hover:text-white text-xs font-nav font-bold uppercase mr-2"
                        title={isPlaying ? t.common.pause : t.common.lecture}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 inline text-white" /> : <Play className="w-4 h-4 inline text-white" />}
                      </button>
                      <button
                        onClick={() => setActiveOpIndex((prev) => (prev - 1 + OPERATIONS.length) % OPERATIONS.length)}
                        className="w-9 h-9 rounded-sm bg-[#001D3D] hover:bg-white hover:text-[#001D3D] transition flex items-center justify-center text-white border border-slate-700"
                        title={t.issuer.prevOp}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setActiveOpIndex((prev) => (prev + 1) % OPERATIONS.length)}
                        className="w-9 h-9 rounded-sm bg-[#001D3D] hover:bg-white hover:text-[#001D3D] transition flex items-center justify-center text-white border border-slate-700"
                        title={t.issuer.nextOp}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Right Synchronized Image Block */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#001D3D]">
                    <img
                      src={activeOp.image}
                      alt={activeOp.title}
                      className="w-full h-[300px] sm:h-[340px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-[#001D3D]/95 backdrop-blur-md p-3.5 rounded-md border border-white/20 flex items-center justify-between text-xs text-white font-poppins">
                      <span className="font-bold text-white font-nav uppercase">{activeOp.detail}</span>
                      <span className="text-[10px] font-mono text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded">CEMAC</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* Call-to-action banner for issuers */}
        <div className="bg-white text-[#001D3D] p-8 sm:p-10 rounded-xl border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-[#002E5B]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              {t.issuer.bannerTitle}
            </h4>
            <p className="text-sm sm:text-base text-slate-600 font-poppins">
              {t.issuer.bannerDesc}
            </p>
          </div>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-bvmac-primary text-xs shrink-0">
            <span>{t.issuer.bannerBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
