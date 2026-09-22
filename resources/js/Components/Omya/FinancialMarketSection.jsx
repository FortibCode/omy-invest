import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

const INSTRUMENT_IDS = ['instruments-actions', 'instruments-obligations', 'instruments-structures'];

export default function FinancialMarketSection({ onSelectView }) {
  const { t } = useLanguage();
  const fm = t.financialMarket;

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="marche-financier" className="py-24 bg-[#F4F6FA] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div id="education-financiere" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-tag-bvmac justify-center">
            <span>{fm.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
            {fm.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {fm.desc}
          </p>
        </div>

        {/* Instruments */}
        <h3 className="text-2xl font-bold text-[#001D3D] mb-6">{fm.tabInstruments}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {fm.instruments.map((inst, idx) => (
            <motion.div
              key={inst.type}
              id={INSTRUMENT_IDS[idx]}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bvmac-card p-7 flex flex-col"
            >
              <span className="text-sm text-slate-500 mb-1">{inst.tag}</span>
              <h4 className="text-xl font-bold text-[#002E5B] mb-3">{inst.type}</h4>
              <p className="text-[15px] text-slate-600 leading-relaxed flex-1">{inst.desc}</p>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#002E5B] hover:underline self-start"
              >
                <span>{fm.investIn(inst.type)}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Acteurs du marché */}
        <h3 id="marche-cemac" className="text-2xl font-bold text-[#001D3D] mb-6">{fm.tabActors}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fm.actors.map((actor, idx) => (
            <motion.div
              key={actor.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bvmac-card p-7"
            >
              <span className="text-sm text-slate-500">{actor.role}</span>
              <h4 className="text-lg font-bold text-[#002E5B] mt-1 mb-3">{actor.name}</h4>
              <p className="text-[15px] text-slate-600 leading-relaxed">{actor.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-slate-200 border-l-4 border-l-[#002E5B] flex items-start gap-4 text-slate-600">
          <Info className="w-5 h-5 text-[#002E5B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">{fm.bannerText}</p>
        </div>

      </div>
    </section>
  );
}
