import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Apostrophe typographique et espace insécable avant : ; ? ! (typographie française)
export const typo = (text) => (text ? text.replace(/'/g, '\u2019').replace(/\s+([?!:;»])/g, '\u00A0$1') : text);

// Repère numéroté (01, 02…) commun aux chapitres
export function ChapterNum({ n }) {
  return <span className="block text-xs font-mono font-bold tracking-wider text-white/65">{String(n).padStart(2, '0')}</span>;
}

// Fond des sections à chapitres : noir bleuté avec halos bleus diffus (pas d'image : une image étirée
// sur plusieurs chapitres ferait apparaître son logo en très grand entre les blocs).
export function ChapterHalos() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_35%_at_0%_15%,rgba(30,110,215,0.22),transparent_70%),radial-gradient(55%_30%_at_100%_50%,rgba(30,110,215,0.18),transparent_70%),radial-gradient(60%_35%_at_0%_90%,rgba(30,110,215,0.2),transparent_70%)]" />
  );
}

/*
  Un « chapitre » : photo + bloc de texte coloré, disposés en biais (forme de losange) —
  le bloc de texte chevauche légèrement la photo et descend plus bas qu'elle ; le côté alterne
  avec `photoLeft`. Au défilement (GSAP + ScrollTrigger, synchronisé au scroll) : texte et photo
  arrivent de côtés opposés et convergent, la photo se dézoome légèrement, puis les éléments
  du bloc apparaissent un à un.
*/
// imageFit 'contain' : photo affichée en entier (ex. photo verticale sur fond uni), sur le fond `imageBg`, avec un voile allégé.
export default function SplitChapter({ id, image, imageFocus = 'center', imageFit = 'cover', imageBg = '#000000', photoLeft = false, color = '#2E5E87', children }) {
  const contain = imageFit === 'contain';
  const rootRef = useRef(null);
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const dir = photoLeft ? -1 : 1; // côté d'où arrive la photo
      const items = textRef.current.querySelectorAll('[data-reveal]');

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 88%',
          end: 'center 50%',
          scrub: 0.8,
        },
      });

      tl.fromTo(photoRef.current, { xPercent: 30 * dir, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1 }, 0)
        .fromTo(textRef.current, { xPercent: -40 * dir, y: 60, autoAlpha: 0 }, { xPercent: 0, y: 0, autoAlpha: 1, duration: 1 }, 0.15)
        .fromTo(imgRef.current, { scale: contain ? 1.05 : 1.18 }, { scale: 1, duration: 1.3, ease: 'none' }, 0)
        .fromTo(items, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.12 }, 0.6);
    });
    return () => mm.revert();
  }, [photoLeft, contain]);

  // Grand écran : grille de 12 colonnes ; photo sur 7 colonnes, texte sur 6 → une colonne de chevauchement.
  const photoCols = photoLeft ? 'lg:col-start-1 lg:col-end-8' : 'lg:col-start-6 lg:col-end-13';
  const textCols = photoLeft ? 'lg:col-start-7 lg:col-end-13' : 'lg:col-start-1 lg:col-end-7';

  return (
    <div ref={rootRef} id={id} className="flex flex-col lg:grid lg:grid-cols-12">
      {/* Conteneur photo (en haut, hauteur fixe) */}
      <div ref={photoRef} style={contain ? { backgroundColor: imageBg } : undefined} className={`group relative ${photoCols} lg:row-start-1 lg:self-start h-[260px] sm:h-[380px] lg:h-[480px] overflow-hidden will-change-transform`}>
        <img
          ref={imgRef}
          src={image}
          alt=""
          loading="lazy"
          style={{ objectPosition: imageFocus }}
          className={contain
            // Photo entière, centrée ; l'élément colle à la photo pour que le fondu des côtés tombe sur ses bords
            ? 'relative mx-auto h-full w-auto max-w-full object-contain [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]'
            : 'absolute inset-0 w-full h-full object-cover'}
        />
        {/* Voile teinté (couleur du bloc de texte) + léger assombrissement ; s'atténue au survol */}
        <div className={`absolute inset-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-20 ${contain ? 'opacity-25' : 'opacity-55'}`} style={{ backgroundColor: color }} />
        {!contain && <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />}
      </div>

      {/* Conteneur description : couleur propre, décalé vers le bas et posé en partie sur la photo */}
      <div
        ref={textRef}
        style={{ backgroundColor: color }}
        className={`relative z-10 ${textCols} lg:row-start-1 lg:self-start -mt-10 mx-4 sm:mx-10 lg:mx-0 lg:mt-[90px] lg:min-h-[480px] flex items-center px-6 py-10 sm:px-12 sm:py-14 lg:px-12 xl:px-14 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.75)] will-change-transform`}
      >
        <div className="w-full max-w-[560px]">{children}</div>
      </div>
    </div>
  );
}

// Menu déroulant : un clic sur un titre affiche son texte (un seul ouvert à la fois, le premier par défaut).
// items : [{ title, text, logo? }] — logo : image affichée dans un badge blanc à gauche du titre.
export function AccordionList({ items, idPrefix }) {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (idx) => setOpenIdx((cur) => (cur === idx ? null : idx));

  return (
    <div className="space-y-2">
      {items.map((item, idx) => {
        const open = openIdx === idx;
        const panelId = `${idPrefix}-panel-${idx}`;
        return (
          <div key={item.title} data-reveal>
            <h3>
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group w-full flex items-center justify-between gap-6 py-3 text-left"
              >
                <span className="flex items-center gap-4 min-w-0">
                  {item.logo && (
                    <span className="shrink-0 w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm">
                      <img src={item.logo} alt="" className="max-w-full max-h-full object-contain" />
                    </span>
                  )}
                  <span className="text-xl sm:text-2xl font-semibold leading-snug">{typo(item.title)}</span>
                </span>
                <span className="shrink-0 w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationComplete={() => ScrollTrigger.refresh()}
                  className="overflow-hidden"
                >
                  <p className="pb-4 pr-12 text-[16px] font-light leading-[1.7] text-white/80">{typo(item.text)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
