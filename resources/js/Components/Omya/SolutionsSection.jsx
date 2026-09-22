import React from 'react';
import { Landmark, Briefcase, TrendingUp, Award, ArrowRight, ShieldCheck, Layers, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (icône, ancre) — fusionnées avec le texte traduit par index.
const SERVICES_META = [
  { id: 'solutions-structuration', icon: Landmark },
  { id: 'solutions-developpement', icon: Briefcase },
  { id: 'solutions-placements', icon: TrendingUp },
  { id: 'solutions-conseil', icon: Award },
  { id: 'solutions-execution', icon: Handshake },
  { id: 'solutions-conservation', icon: ShieldCheck },
  { id: 'solutions-gestion', icon: Layers },
];

export default function SolutionsSection({ onSelectView }) {
  const { t } = useLanguage();
  const services = SERVICES_META.map((meta, idx) => ({ ...meta, ...t.solutions.services[idx] }));

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="nos-solutions" className="py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="section-tag-bvmac justify-center">
            <span>{t.solutions.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
            {t.solutions.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.solutions.descBefore} <strong className="font-semibold text-[#002E5B] whitespace-nowrap">COSUMAF-SDB-01/2025</strong>{t.solutions.descAfter}
          </p>
        </div>

        {/* 7 services + une case de contact : grille 4 × 2 sur grand écran */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                className="bg-white p-7 flex flex-col gap-4 hover:bg-[#F7F9FC] transition-colors"
              >
                <Icon className="w-7 h-7 text-[#002E5B]" strokeWidth={1.5} />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#001D3D] leading-snug">{service.title}</h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.article>
            );
          })}

          <div className="bg-[#002E5B] p-7 flex flex-col justify-between gap-6 text-white">
            <p className="text-xl font-semibold leading-snug">{t.solutions.ctaTitle}</p>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all self-start"
            >
              <span>{t.solutions.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
