import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Métadonnées non traduisibles (ancre, image) — fusionnées avec le texte traduit par index.
const OPERATIONS_META = [
  { id: 'emprunt-obligataire', image: '/images/image-hero-4.jpeg' },
  { id: 'ouverture-capital', image: '/images/image-hero-9.jpeg' },
  { id: 'financement-structure', image: '/images/image-hero-7.jpeg' },
  { id: 'conseil-financement', image: '/images/image-hero-5.jpeg' },
];

export default function IssuerPathwaySection({ onSelectView }) {
  const { t } = useLanguage();
  const operations = OPERATIONS_META.map((meta, idx) => ({ ...meta, ...t.issuer.operations[idx] }));

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="financer" className="py-24 bg-[#001D3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div id="besoin-financement" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-tag-light justify-center">
            <span>{t.issuer.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            {t.issuer.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.issuer.quote}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {operations.map((op, idx) => (
            <motion.article
              key={op.id}
              id={op.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.08 }}
              className="bg-white/[0.04] border border-white/10 rounded-lg overflow-hidden flex flex-col sm:flex-row"
            >
              <img
                src={op.image}
                alt={op.title}
                loading="lazy"
                className="w-full sm:w-44 lg:w-52 h-48 sm:h-auto object-cover shrink-0"
              />
              <div className="p-6 flex flex-col gap-3">
                <span className="text-sm text-[#A9C1DE]">{op.tag}</span>
                <h3 className="text-xl font-bold text-white leading-snug">{op.title}</h3>
                <p className="text-[15px] text-slate-300 leading-relaxed flex-1">{op.desc}</p>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:underline self-start"
                >
                  <span>{op.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Appel à l'action pour les émetteurs */}
        <div className="mt-12 bg-white text-[#001D3D] p-8 sm:p-10 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#002E5B]">
              {t.issuer.bannerTitle}
            </h3>
            <p className="text-slate-600">
              {t.issuer.bannerDesc}
            </p>
          </div>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-bvmac-primary shrink-0">
            <span>{t.issuer.bannerBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
