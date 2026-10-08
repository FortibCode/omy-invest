import React, { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/Context/LanguageContext';
import SplitChapter, { AccordionList } from '@/Components/Omya/SplitChapter';

// Logo de chaque cible, dans l'ordre de t.targets.items :
// Entreprises publiques et privées, Institutionnels, PME / PMI, Particuliers.
const TARGETS_LOGOS = [
  '/images/logo-entreprise-prive-public-icones.png',
  '/images/institutionel.jpeg',
  '/images/logo-ministeres.png',
  '/images/logo-particuliers.jpeg',
];

// « Nos cibles » : même format que Mission / Vision / Valeurs (texte + photo, animation de convergence).
// Photo à gauche, pour poursuivre l'alternance après « Valeurs » (photo à droite).
export default function TargetsSection() {
  const { t } = useLanguage();
  const targets = t.targets.items.map((item, idx) => ({ title: item.title, text: item.desc, logo: TARGETS_LOGOS[idx] }));

  useLayoutEffect(() => {
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => clearTimeout(refresh);
  }, []);

  return (
    <section className="relative pb-20 lg:pb-28 overflow-hidden text-white">

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SplitChapter id="cibles" image="/images/image-hero-6.jpeg" imageFocus="60% center" photoLeft color="#8C2F39">
          <AccordionList idPrefix="cibles" items={targets} />
        </SplitChapter>
      </div>
    </section>
  );
}
