import React, { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/Context/LanguageContext';
import SplitChapter, { AccordionList, typo } from '@/Components/Omya/SplitChapter';


// Garde le dernier mot insécable (« sous-région » ne se coupe pas au trait d'union)
function NoBreakLastWord({ text }) {
  const idx = text.lastIndexOf(' ');
  if (idx === -1) return <span className="whitespace-nowrap">{text}</span>;
  return (
    <>
      {text.slice(0, idx)} <span className="whitespace-nowrap">{text.slice(idx + 1)}</span>
    </>
  );
}

export default function MissionVisionValuesSection() {
  const { t } = useLanguage();
  const mvv = t.missionVisionValues;

  const missionItems = [
    { title: mvv.moralesTitle, text: mvv.moralesText },
    { title: mvv.physiquesTitle, text: mvv.physiquesText },
  ];

  // Recalcule les positions une fois l'onglet installé (il entre avec une animation)
  useLayoutEffect(() => {
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => clearTimeout(refresh);
  }, []);

  return (
    <section
      className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden text-white"
    >
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32">

        {/* ══════ MISSION : texte à gauche, photo à droite ══════ */}
        <SplitChapter id="mission" image="/images/image-hero-9.jpeg" imageFocus="30% center" color="#2E5E87">
          <AccordionList idPrefix="mission" items={missionItems} />
        </SplitChapter>

        {/* ══════ VISION : photo à gauche, texte à droite ══════ */}
        <SplitChapter id="vision" image="/images/equipe-reunion-table.jpg" imageFocus="center" photoLeft color="#5B4B8A">
          <AccordionList idPrefix="vision" items={mvv.visionSteps} />
        </SplitChapter>

        {/* ══════ VALEURS : texte à gauche, photo à droite ══════ */}
        <SplitChapter id="valeurs" image="/images/valeurs-mains.jpg" imageFit="contain" imageBg="#060911" color="#1F6F6B">
          {/* Liste simple : une valeur par ligne */}
          <ul className="space-y-6 sm:space-y-7">
            {mvv.values.map((value) => (
              <li key={value.title} data-reveal>
                <h3 className="text-xl sm:text-2xl font-medium leading-snug tracking-[-0.01em]">
                  <NoBreakLastWord text={typo(value.title)} />
                </h3>
              </li>
            ))}
          </ul>
        </SplitChapter>

      </div>
    </section>
  );
}
