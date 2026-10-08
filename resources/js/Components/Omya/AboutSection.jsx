import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Apostrophe typographique et espace insécable avant : ; ? ! (typographie française)
const typo = (text) => (text ? text.replace(/'/g, '’').replace(/\s+([?!:;»])/g, ' $1') : text);

export default function AboutSection({ onSelectView }) {
  const { t, currentLang } = useLanguage();
  const compositionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  /*
    Animation « Converging Split Containers », pilotée par le défilement (GSAP + ScrollTrigger) :
    le bloc de texte arrive de la gauche, la photo de la droite (avec un léger décalage dans le temps),
    puis les deux convergent jusqu'à leur position finale, exactement côte à côte.
    Seuls transform et opacity sont animés : dimensions, contenu et styles restent intacts,
    et la position finale (x = 0) est celle de la grille, donc ni chevauchement ni espace.
  */
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: compositionRef.current,
          start: 'top 90%',   // début : le haut de la composition entre dans l'écran
          end: 'center 55%',  // fin : la composition est bien installée à l'écran
          scrub: 0.8,         // suit le défilement, avec un léger lissage
        },
      });

      tl.fromTo(
        textRef.current,
        { xPercent: -45, y: 40, autoAlpha: 0 },
        { xPercent: 0, y: 0, autoAlpha: 1, duration: 1 },
        0,
      ).fromTo(
        imageRef.current,
        { xPercent: 45, y: -40, autoAlpha: 0 },
        { xPercent: 0, y: 0, autoAlpha: 1, duration: 1 },
        0.18, // la photo arrive un peu après le texte
      );

      // La page change de rubrique avec une animation d'entrée : on recalcule les positions une fois installée.
      const refresh = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => clearTimeout(refresh);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="presentation"
      lang={currentLang.toLowerCase()}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-omya.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/*
        Composition finale : bloc de texte (noir translucide) et photo, deux moitiés de même hauteur,
        parfaitement jointives (grille sans espacement). Texte justifié avec césure (lang sur la section).
      */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={compositionRef} className="grid lg:grid-cols-2 lg:min-h-[530px]">

          {/* Conteneur description */}
          <div
            ref={textRef}
            className="relative bg-black/55 backdrop-blur-md flex items-center px-6 py-12 sm:px-12 sm:py-14 lg:px-12 xl:px-16 will-change-transform"
          >
            <div className="max-w-[540px]">
              <p className="text-[16px] font-semibold leading-[1.55] text-white text-justify hyphens-auto">
                {typo(t.about.p1)} <span className="whitespace-nowrap">COSUMAF-SDB-01/2025</span>.
              </p>

              <div className="mt-5 space-y-4 text-[16px] font-light leading-[1.65] text-white/75 text-justify hyphens-auto">
                <p>{typo(t.about.p2)}</p>
                <p>{typo(t.about.p3)}</p>
              </div>

              <a
                href="#nos-solutions"
                onClick={(e) => handleLinkClick(e, '#nos-solutions')}
                className="group mt-9 inline-flex items-center justify-center gap-3 min-w-[260px] px-8 py-3.5 rounded-full border border-white/80 bg-transparent text-white text-[15px] font-semibold tracking-wide hover:bg-white hover:border-white hover:text-[#001D3D] transition-colors duration-300"
              >
                <span>{t.about.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Conteneur image */}
          <div ref={imageRef} className="relative h-[280px] sm:h-[420px] lg:h-auto overflow-hidden will-change-transform">
            <img
              src="/images/image-hero-8.jpeg"
              alt={t.about.photoAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
