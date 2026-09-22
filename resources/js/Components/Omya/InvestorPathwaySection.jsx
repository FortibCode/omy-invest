import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

const OVERVIEW_LINKS = ['#solutions-placements', '#solutions-gestion', '#solutions-execution'];

export default function InvestorPathwaySection({ onSelectView }) {
  const { t } = useLanguage();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="investir" className="py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-tag-bvmac justify-center">
            <span>{t.investor.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
            {t.investor.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.investor.quote}
          </p>
        </div>

        {/* Les 5 étapes, lisibles d'un seul coup d'œil */}
        <div id="pourquoi-investir" className="mb-20">
          <h3 className="text-2xl font-bold text-[#001D3D] mb-10 text-center">
            {t.investor.stepperTitle}
          </h3>

          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {t.investor.steps.map((step, idx) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full border-2 border-[#002E5B] text-[#002E5B] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="hidden lg:block h-px flex-1 bg-slate-200" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-[#001D3D] mb-2">{step.title}</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Les trois services destinés aux investisseurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.investor.overviewCards.map((card, idx) => (
            <div key={card.title} className="bvmac-card p-7 flex flex-col">
              <h4 className="text-lg font-bold text-[#002E5B] mb-2">{card.title}</h4>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-5 flex-1">{card.desc}</p>
              <a
                href={OVERVIEW_LINKS[idx]}
                onClick={(e) => handleLinkClick(e, OVERVIEW_LINKS[idx])}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#002E5B] hover:underline self-start"
              >
                <span>{t.common.enSavoirPlus}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
