import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (ancre, photo, cadrage, couleur) — fusionnées avec le texte traduit par index.
// `focus` = object-position : garde le sujet de la photo dans le cadre.
// `panel` = couleur de l'aplat de texte (palette sobre, toutes lisibles avec du texte blanc).
const SERVICES_META = [
  { id: 'solutions-structuration', image: '/images/image-hero-3.jpeg', focus: '62% center', panel: '#2E5E87' }, // bleu acier
  { id: 'solutions-developpement', image: '/images/image-hero-7.jpeg', focus: '50% center', panel: '#8C2F39' }, // rouge bordeaux
  { id: 'solutions-placements', image: '/images/image-hero-1.jpeg', focus: '72% center', panel: '#5B4B8A' }, // violet
  { id: 'solutions-conseil', image: '/images/image-hero-9.jpeg', focus: '28% center', panel: '#1F6F6B' }, // bleu sarcelle
  { id: 'solutions-execution', image: '/images/image-hero-6.jpeg', focus: '62% center', panel: '#A44E2A' }, // terracotta
  { id: 'solutions-conservation', image: '/images/equipe-reunion-table.jpg', focus: 'center', panel: '#6E73A0' }, // lavande
  { id: 'solutions-gestion', image: '/images/image-hero-5.jpeg', focus: '58% center', panel: '#7A2E5C' }, // prune
];
const CTA_PANEL = '#0B2A4A'; // bleu nuit (dernière diapositive : contact)

const EASE = [0.22, 1, 0.36, 1];

const AUTOPLAY_DELAY = 5000; // ms entre deux diapositives

// Titre façon « premier mot en gras italique + suite en graisse légère »
function SplitTitle({ text, className = '' }) {
  const typo = (str) => str.replace(/'/g, '\u2019').replace(/\s+([?!:;])/g, '\u00A0$1');
  const [first, ...rest] = typo(text).split(' ');
  return (
    <h3 className={className}>
      <span className="font-bold italic">{first}</span>
      {rest.length > 0 && <span className="font-light"> {rest.join(' ')}</span>}
    </h3>
  );
}

export default function SolutionsSection({ onSelectView }) {
  const { t } = useLanguage();
  const services = SERVICES_META.map((meta, idx) => ({ ...meta, ...t.solutions.services[idx] }));
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [paused, setPaused] = useState(false);
  const [restartKey, setRestartKey] = useState(0); // relance le minuteur après une action manuelle
  const directionRef = useRef(1); // 1 = vers la droite, -1 = vers la gauche
  const reduceMotion = useReducedMotion();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  // Active / désactive les flèches selon la position de défilement
  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  // Avance d'une diapositive (largeur de la première + espacement)
  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (el.firstElementChild.offsetWidth + gap), behavior: 'smooth' });
  };

  // Défilement automatique en aller-retour : avance jusqu'à la fin, puis repart en sens inverse
  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atStart = el.scrollLeft <= 4;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (directionRef.current === 1 && atEnd) directionRef.current = -1;
      else if (directionRef.current === -1 && atStart) directionRef.current = 1;
      scrollByCard(directionRef.current);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [paused, reduceMotion, restartKey]);

  const handleArrow = (dir) => {
    directionRef.current = dir;
    scrollByCard(dir);
    setRestartKey((k) => k + 1);
  };

  // Flèches : simples chevrons blancs, centrés sur la photo (mobile) ou sur la diapositive (grand écran)
  const arrowClass = (enabled) =>
    `absolute z-10 top-[130px] sm:top-[170px] lg:top-1/2 -translate-y-1/2 p-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-opacity duration-300 ${
      enabled ? 'opacity-100 hover:opacity-80' : 'opacity-0 pointer-events-none'
    }`;

  return (
    <section
      id="nos-solutions"
      className="py-28 lg:py-36 text-slate-800"
      style={{
        backgroundImage: "url('/images/bg-1-omya.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#001D3D',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-[2.75rem] font-bold text-white leading-tight">
            {t.solutions.title}
          </h2>
        </div>
      </div>

      {/* ── CARROUSEL (largeur du site) : photo + titre à gauche, aplat de couleur + texte à droite ── */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => { setPaused(false); setRestartKey((k) => k + 1); }}
      >
        <button onClick={() => handleArrow(-1)} className={`${arrowClass(canPrev)} left-5 sm:left-7 lg:left-12`} aria-label={t.hero.prevSlide}>
          <ChevronLeft className="w-7 h-7" strokeWidth={2.5} />
        </button>
        <button onClick={() => handleArrow(1)} className={`${arrowClass(canNext)} right-5 sm:right-7 lg:right-12`} aria-label={t.hero.nextSlide}>
          <ChevronRight className="w-7 h-7" strokeWidth={2.5} />
        </button>

        <motion.div
          ref={trackRef}
          onScroll={updateArrows}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
        >
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group shrink-0 snap-start w-full grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2 lg:h-[460px]"
            >
              {/* Photo + titre */}
              <div className="relative h-[260px] sm:h-[340px] lg:h-full overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: service.focus }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Voile teinté (couleur de l'aplat) : harmonise photo et texte ; s'atténue au survol */}
                <div className="absolute inset-0 mix-blend-multiply opacity-50 transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: service.panel }} />
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <SplitTitle
                  text={service.title}
                  className="absolute left-6 right-6 bottom-7 sm:left-10 lg:left-14 lg:right-10 lg:bottom-14 text-[1.6rem] sm:text-[1.85rem] lg:text-[2rem] leading-[1.15] tracking-[-0.01em] text-white"
                />
              </div>

              {/* Aplat de couleur + texte */}
              <div className="flex items-center px-6 py-9 sm:px-10 lg:px-14" style={{ backgroundColor: service.panel }}>
                <p className="max-w-[460px] text-[16px] leading-[1.75] text-white/90 lg:-mt-10">
                  {service.desc}
                </p>
              </div>
            </article>
          ))}

          {/* Dernière diapositive : appel au contact, même format */}
          <div className="group shrink-0 snap-start w-full grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2 lg:h-[460px]">
            <div className="relative h-[260px] sm:h-[340px] lg:h-full overflow-hidden">
              <img
                src="/images/image-hero-2.jpeg"
                alt=""
                loading="lazy"
                style={{ objectPosition: '62% center' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Voile teinté (couleur de l'aplat) : harmonise photo et texte ; s'atténue au survol */}
              <div className="absolute inset-0 mix-blend-multiply opacity-50 transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: CTA_PANEL }} />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <SplitTitle
                text={t.solutions.ctaTitle}
                className="absolute left-6 right-6 bottom-7 sm:left-10 lg:left-14 lg:right-10 lg:bottom-14 text-[1.6rem] sm:text-[1.85rem] lg:text-[2rem] leading-[1.15] tracking-[-0.01em] text-white"
              />
            </div>
            <div className="flex items-center px-6 py-9 sm:px-10 lg:px-14" style={{ backgroundColor: CTA_PANEL }}>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white text-white text-[15px] font-semibold hover:bg-white hover:text-[#001D3D] transition-colors lg:-mt-10"
              >
                <span>{t.solutions.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
