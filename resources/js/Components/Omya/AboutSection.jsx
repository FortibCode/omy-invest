import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

export default function AboutSection({ onSelectView, hideTag = false }) {
  const { t } = useLanguage();
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="presentation" className="py-24 bg-[#F4F6FA] text-slate-800 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Clean Editorial Text & Official Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {!hideTag && (
              <div className="section-tag-bvmac">
                <span>{t.about.tag}</span>
              </div>
            )}

            <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
              {t.about.title}
            </h2>

            <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                {t.about.p1} <strong className="font-semibold text-[#002E5B] whitespace-nowrap">COSUMAF-SDB-01/2025</strong>.
              </p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Les trois activités */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
              {[t.about.activity1, t.about.activity2, t.about.activity3].map((activity) => (
                <li key={activity} className="flex items-center gap-2 text-sm font-semibold text-[#002E5B]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a href="#nos-solutions" onClick={(e) => handleLinkClick(e, '#nos-solutions')} className="btn-bvmac-primary">
                <span>{t.about.ctaBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Single Clean Framed Photo (No Colliding Overlaps) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="relative rounded-lg overflow-hidden shadow-md bg-[#002E5B]">
                <img
                  src="/images/image-hero-8.jpeg"
                  alt={t.about.photoAlt}
                  className="w-full h-[420px] object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#001D3D]/90 to-transparent" />

                {/* Agrément, posé en bas de la photo */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="block text-sm text-slate-300">{t.about.agreementLabel}</span>
                      <strong className="block font-semibold">COSUMAF-SDB-01/2025</strong>
                    </div>
                  </div>
                  <span className="text-sm text-slate-300 hidden sm:block">{t.about.zoneLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
