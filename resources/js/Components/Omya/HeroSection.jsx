import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (images, ancres) — fusionnées avec le texte traduit par index de slide.
const HERO_SLIDES_META = [
  { id: 1, primaryBtnHref: '#investir', secondaryBtnHref: '#financer', image: '/images/image-hero-1.jpeg' },
  { id: 2, primaryBtnHref: '#investir', secondaryBtnHref: '#nos-solutions', image: '/images/image-hero-2.jpeg' },
  { id: 3, primaryBtnHref: '#financer', secondaryBtnHref: '#solutions-structuration', image: '/images/image-hero-3.jpeg' },
  { id: 4, primaryBtnHref: '#contact', secondaryBtnHref: '#partenaires', image: '/images/image-hero-6.jpeg' },
];

// Animation variants for smooth horizontal slider motion
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.2,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

export default function HeroSection({ onSelectView }) {
  const { t } = useLanguage();
  const HERO_SLIDES = HERO_SLIDES_META.map((meta, idx) => ({ ...meta, ...t.hero.slides[idx] }));
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const slideIndex = Math.abs(page % HERO_SLIDES.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index) => {
    const dir = index > slideIndex ? 1 : -1;
    setPage([index, dir]);
  };

  // Auto-play timer (7s)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [page, isPlaying]);

  const activeSlide = HERO_SLIDES[slideIndex];

  const handleCtaClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="accueil" className="relative bg-white text-slate-800 pt-6 pb-12 overflow-hidden font-sans select-none border-b border-slate-200">
      
      {/* PURE WHITE LEFT & RIGHT SIDES / MARGINS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── MAIN SWIPER SLIDER CAROUSEL CONTAINER (Navy Blue Card on White Background) ── */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-300 bg-[#001D3D] min-h-[500px] lg:min-h-[540px] flex flex-col justify-between">
          
          {/* SLIDE BACKGROUND IMAGE & SLIDE CONTENT */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-0 flex items-center"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat z-0"
                style={{
                  backgroundImage: `url('${activeSlide.image}')`,
                }}
              />

              {/* Gradient Overlays for crystal clear readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001D3D] via-[#002E5B]/95 to-[#002E5B]/40 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-transparent to-black/30 z-10" />

              {/* Dot Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-[0.05] z-10"
                style={{
                  backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Slide Text Content */}
              <div className="relative z-20 p-8 sm:p-14 lg:p-16 max-w-3xl space-y-6">
                
                {/* Badge Tag */}
                {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/10 border-l-4 border-white text-white font-nav text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>{activeSlide.tag}</span>
                </div> */}

                {/* Main Headline */}
                <h1
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {activeSlide.titleLine1}{' '}
                  <span className="text-white">
                    {activeSlide.titleHighlight}
                  </span>{' '}
                  {activeSlide.titleLine2}
                </h1>

                {/* Paragraph Description */}
                <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-poppins font-light bg-[#001D3D]/80 p-5 rounded-md border border-slate-700/60 backdrop-blur-md">
                  {activeSlide.description}
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href={activeSlide.primaryBtnHref} onClick={(e) => handleCtaClick(e, activeSlide.primaryBtnHref)} className="btn-bvmac-white">
                    <span>{activeSlide.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href={activeSlide.secondaryBtnHref} onClick={(e) => handleCtaClick(e, activeSlide.secondaryBtnHref)} className="btn-bvmac-outline-white">
                    <span>{activeSlide.secondaryBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* ── SIDE NAVIGATION ARROWS (LEFT / RIGHT) ── */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 border border-slate-300 hover:bg-[#002E5B] hover:text-white text-[#001D3D] transition-all flex items-center justify-center shadow-xl backdrop-blur-md group"
            title={t.hero.prevSlide}
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 border border-slate-300 hover:bg-[#002E5B] hover:text-white text-[#001D3D] transition-all flex items-center justify-center shadow-xl backdrop-blur-md group"
            title={t.hero.nextSlide}
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* ── BOTTOM CAROUSEL TABS & CONTROLS ── */}
          <div className="relative z-30 bg-[#001D3D]/95 backdrop-blur-md px-6 py-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Slide Category Tabs */}
            <div className="relative w-full sm:w-auto">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`px-3.5 py-1.5 rounded-sm font-nav text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                      idx === slideIndex
                        ? 'bg-white text-[#001D3D] shadow-md'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-slate-700/50'
                    }`}
                  >
                    <span className="font-mono text-[10px]">0{slide.id}</span>
                    <span>{slide.category}</span>
                  </button>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#001D3D] to-transparent pointer-events-none sm:hidden" />
            </div>

            {/* Controls & Progress */}
            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition font-nav uppercase font-semibold text-[11px]"
                title={isPlaying ? t.hero.pauseAuto : t.hero.playAuto}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white" />}
                <span>{isPlaying ? t.common.pause : t.common.play}</span>
              </button>

              <div className="h-4 w-px bg-slate-700" />

              <span className="font-mono font-bold text-slate-200 text-xs">
                <span className="text-white">0{slideIndex + 1}</span> / 0{HERO_SLIDES.length}
              </span>
            </div>

          </div>

          {/* Active progress bar */}
          <div className="relative z-30 h-1 w-full bg-slate-900 overflow-hidden">
            <motion.div
              key={page}
              initial={{ width: '0%' }}
              animate={{ width: isPlaying ? '100%' : '0%' }}
              transition={{ duration: isPlaying ? 7 : 0, ease: 'linear' }}
              className="h-full bg-white"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
