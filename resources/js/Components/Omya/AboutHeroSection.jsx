import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { useLanguage } from '@/Context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Apostrophe typographique et espace insécable avant : ; ? ! (typographie française)
const typo = (text) => (text ? text.replace(/'/g, '’').replace(/\s+([?!:;»])/g, ' $1') : text);

/*
  Écran d'ouverture de la rubrique « À propos », en deux temps (piloté par le défilement) :
  1. À l'arrivée : voile noir presque opaque, logo blanc + texte de présentation au centre.
  2. En défilant : le logo blanc et le texte s'effacent, le voile s'éclaircit et l'image de fond
     (bg-3, avec son propre logo OMYA INVEST) se révèle. La section reste fixée pendant la transition.
  Passe sous l'en-tête (-mt), qui reste transparent tant qu'on n'a pas défilé.
*/
export default function AboutHeroSection() {
  const { t, currentLang } = useLanguage();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const veilRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Apparition du logo puis du texte à l'ouverture de la page
      gsap.from(contentRef.current.children, { autoAlpha: 0, y: 24, duration: 1, ease: 'power3.out', stagger: 0.2 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=110%', // longueur de défilement consacrée à la transition
          scrub: 0.8,
          pin: true,
        },
      });

      tl.to(contentRef.current, { autoAlpha: 0, y: -60, scale: 0.96, duration: 0.45 }, 0)
        .to(veilRef.current, { opacity: 0.3, duration: 0.8 }, 0.1)
        .fromTo(imageRef.current, { scale: 1.12 }, { scale: 1, duration: 1 }, 0);

      // La page change de rubrique avec une animation d'entrée : on recalcule les positions une fois installée.
      const refresh = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => clearTimeout(refresh);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="presentation"
      lang={currentLang.toLowerCase()}
      className="relative -mt-[110px] h-[100svh] min-h-[640px] overflow-hidden bg-[#001D3D] text-white"
    >
      {/* Image de fond (bg-3). Sur mobile, zone réduite et centrée pour que son logo tienne en largeur. */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[62svh] lg:inset-0 lg:h-full lg:translate-y-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/bg-3-omya.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />
        {/* Fondus haut et bas vers le bleu nuit (mobile, où l'image n'occupe pas tout l'écran) */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#001D3D] to-transparent lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#001D3D] to-transparent lg:hidden" />
      </div>

      {/* Voile noir : presque opaque à l'arrivée, il s'éclaircit au défilement */}
      <div ref={veilRef} className="absolute inset-0 bg-[#0B0D12] opacity-[0.92]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Logo blanc + texte de présentation */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-[110px] pb-10 text-center will-change-transform"
      >
        <div>
          <OmyaLogo light className="h-20 sm:h-24 lg:h-28 w-auto" />
        </div>
        <div className="mt-9 max-w-[760px] space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.7] text-white/90">
          <p>
            {typo(t.about.p1)} <span className="whitespace-nowrap">COSUMAF-SDB-01/2025</span>.
          </p>
          <p>{typo(t.about.p2)}</p>
          <p>{typo(t.about.p3)}</p>
        </div>
      </div>
    </section>
  );
}
