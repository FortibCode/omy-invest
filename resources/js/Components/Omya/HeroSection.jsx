import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';

const imgSlide = {
  enter:  { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
  exit:   { opacity: 0, scale: 0.98, transition: { duration: 0.8 } },
};

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imgError, setImgError] = useState(false);

  /* 9 Hero images from public/images/ */
  const slides = [
    { image: '/images/image-hero-1.jpeg' },
    { image: '/images/image-hero-2.jpeg' },
    { image: '/images/image-hero-3.jpeg' },
    { image: '/images/image-hero-4.jpeg' },
    // { image: '/images/image-hero-5.jpeg' },
    // { image: '/images/image-hero-6.jpeg' },
    // { image: '/images/image-hero-7.jpeg' },
    // { image: '/images/image-hero-8.jpeg' },
    // { image: '/images/image-hero-9.jpeg' },
  ];

  /* Auto-advance background image every 5 seconds */
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setActive(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => { setDirection(-1); setActive((active - 1 + slides.length) % slides.length); };
  const next = () => { setDirection(1);  setActive((active + 1) % slides.length); };

  const slide = slides[active];

  return (
    <section id="accueil" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* ── Background Image Slider (Only images animate automatically) ── */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={`bg-${active}`}
          custom={direction}
          variants={imgSlide}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* ── Ultra-Clear Background Overlay (Images hyper claires et bien visibles) ── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.20) 0%, rgba(15, 23, 42, 0.08) 50%, rgba(15, 23, 42, 0.25) 100%)',
        }} 
      />

      {/* ── Slide Navigation Buttons (Subtle On Edges) ── */}
      <button
        onClick={prev}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        aria-label="Next Image"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Slide Indicators (9 Dots) ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/50 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === active
                ? 'w-6 h-2 bg-sky-400 shadow-[0_0_10px_#38BDF8]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── MAIN HERO CENTERED CONTENT (STATIC CONTAINER - NO RE-ANIMATION ON SLIDE CHANGE) ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 py-16 flex items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          {/* Glassmorphic Container Card (Static) */}
          <div className="bg-slate-950/70 backdrop-blur-2xl border border-white/35 shadow-[0_25px_70px_rgba(0,0,0,0.5)] rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12 text-center md:text-left relative overflow-hidden group">
            
            {/* Ambient Glow Effects */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* 1. LEFT SIDE: OMYA Invest Logo (Slightly reduced size for optimal message clearance) */}
            <div className="shrink-0 flex items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 shadow-xl transition-transform duration-300 hover:scale-105">
              {!imgError ? (
                <img 
                  src="/images/logo-omya.png" 
                  alt="OMYA INVEST" 
                  onError={() => setImgError(true)}
                  className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
                />
              ) : (
                <OmyaLogo light={true} className="h-12 sm:h-14 md:h-16 lg:h-18" />
              )}
            </div>

            {/* VERTICAL DIVIDER LINE (Desktop) */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-sky-400/60 to-transparent shrink-0" />

            {/* HORIZONTAL DIVIDER LINE (Mobile) */}
            <div className="block md:hidden w-28 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shrink-0" />

            {/* 2. RIGHT SIDE: Text Message (Displayed prominently and legibly) */}
            <div className="space-y-2.5 max-w-xl flex-1 flex flex-col items-center md:items-start">
              
              {/* Line 1 */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                Certaines choses ne se précipitent pas.
              </h1>

              {/* Line 2 */}
              <p className="text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-cyan-300 leading-snug drop-shadow-sm">
                Notre site arrive prochainement.
              </p>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
