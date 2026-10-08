import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (vidéo, image de repli) — fusionnées avec le texte traduit par index de slide.
const HERO_SLIDES_META = [
  { id: 1, video: '/videos/video-2.mp4', image: '/images/image-hero-1.jpeg' },
  { id: 2, video: '/videos/video-1.mp4', image: '/images/image-hero-2.jpeg' },
  { id: 3, video: '/videos/video-2.mp4', image: '/images/image-hero-3.jpeg' },
];

const SLIDE_DURATION = 8; // secondes
const AGREEMENT_NUMBER = 'COSUMAF-SDB-01/2025';
const EASE = [0.22, 1, 0.36, 1];

// Typographie soignée : apostrophe typographique, et espace insécable avant ? ! : ; pour éviter qu'ils passent seuls à la ligne.
const nbsp = (text) => (text
  ? text.replace(/'/g, '\u2019').replace(/\s+([?!:;»])/g, '\u00A0$1').replace(/«\s+/g, '«\u00A0')
  : text);

export default function HeroSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const HERO_SLIDES = HERO_SLIDES_META.map((meta, idx) => ({ ...meta, ...t.hero.slides[idx] }));
  const [slideIndex, setSlideIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const timer = setTimeout(() => setSlideIndex((i) => (i + 1) % HERO_SLIDES.length), SLIDE_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [slideIndex, HERO_SLIDES.length]);

  const activeSlide = HERO_SLIDES[slideIndex];

  // Titre : texte en graisse légère, mot-clé en semi-gras (même couleur, sans italique)
  const titleParts = [
    { text: activeSlide.titleLine1, strong: false },
    { text: activeSlide.titleHighlight, strong: true },
    { text: activeSlide.titleLine2, strong: false },
  ].filter((p) => p.text);

  return (
    // -mt : le hero passe sous tout l'en-tête (bandeau de cotation + barre de navigation), transparent en haut de page.
    <section
      id="accueil"
      className="relative -mt-[110px] min-h-[680px] h-[100svh] overflow-hidden bg-black text-white font-sans"
    >
      {/* ── FOND VIDÉO (fondu entre les slides) ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0"
        >
          {reduceMotion ? (
            <img src={activeSlide.image} alt="" className="w-full h-full object-cover grayscale" />
          ) : (
            <video
              key={activeSlide.video}
              className="w-full h-full object-cover scale-105 brightness-90 contrast-110"
              src={activeSlide.video}
              poster={activeSlide.image}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Traitement de l'image : superposition équilibrée (vidéo lisible + texte contrasté) */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 to-transparent" />



      {/* ── SYMBOLE DE LA MARQUE : Filigrane du logo « O » OMYA ── */}
      <div className="pointer-events-none select-none absolute top-[53%] -translate-y-1/2 right-[-2%] sm:right-[1%] lg:right-[2.5%] h-[68%] sm:h-[78%] lg:h-[84%] aspect-square flex items-center justify-center opacity-25 z-0">
        <img
          src="/images/omya-o-mark-clean.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* ── SÉLECTION DES SLIDES (liens verticaux, à gauche) ── */}
      <nav className="hidden md:flex absolute left-5 lg:left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === slideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setSlideIndex(idx)}
              className={`text-left text-[13px] transition-colors ${isActive ? 'text-white' : 'text-white/45 hover:text-white/80'}`}
              aria-current={isActive}
            >
              <span className={isActive ? 'font-semibold' : 'font-normal'}>{slide.category}</span>
            </button>
          );
        })}
      </nav>

      {/* ── CONTENU : centré verticalement, le haut du titre aligné sur le premier lien de gauche ── */}
      <div className="absolute inset-x-0 top-[calc(50%-66px)] z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 md:pl-44 lg:pl-48 2xl:pl-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="w-full max-w-[680px] text-white"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.015em]" style={{ textWrap: 'balance' }}>
                  {titleParts.map((part, i) => (
                    <span key={i} className={part.strong ? 'font-semibold' : 'font-light'}>
                      {nbsp(part.text)}{i < titleParts.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h1>

                <p className="mt-6 max-w-[600px] text-[15px] sm:text-[16px] leading-[1.7] text-white/75 line-clamp-5 sm:line-clamp-none">
                  {nbsp(activeSlide.description)}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── PIED DU HERO : mention d'agrément (bas gauche) + points de navigation (mobile) ── */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 md:pl-44 lg:pl-48 2xl:pl-8 pb-6 sm:pb-8 flex items-center justify-between gap-4 text-[12.5px] text-white/55">
          <span>
            <span className="hidden sm:inline">{t.hero.eyebrow} · </span>
            <span className="sm:hidden">{t.hero.agreement} </span>
            <span className="font-semibold text-white/90 tabular-nums">{AGREEMENT_NUMBER}</span>
          </span>

          {/* Points (mobile uniquement — sur grand écran, ce sont les liens verticaux) */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === slideIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/35'}`}
                aria-label={slide.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
