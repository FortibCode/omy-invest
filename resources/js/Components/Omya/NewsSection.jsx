import React from 'react';
import { Newspaper, Calendar, ArrowRight, ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

export default function NewsSection({ onSelectView }) {
  const { t } = useLanguage();
  // En attente des communiqués et publications réels d'OMYA INVEST à publier ici.
  const newsItems = [];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="actualites" className="py-24 bg-[#001D3D] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="section-tag-light justify-center">
            <Newspaper className="w-4 h-4 text-[#FFFFFF]" />
            <span>{t.news.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t.news.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-poppins">
            {t.news.desc}
          </p>
        </div>

        {/* Institutional Publications Cards */}
        {newsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bvmac-card-dark p-7 border-l-4 border-l-[#FFFFFF] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFFFFF] font-nav bg-[#FFFFFF]/15 px-3 py-1 rounded-sm border border-[#FFFFFF]/30">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-2 mb-3 leading-snug" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-poppins">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-xs font-bold text-[#FFFFFF] hover:underline flex items-center gap-1 font-nav uppercase">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center bvmac-card-dark p-10 border border-white/10">
            <Newspaper className="w-9 h-9 text-white/30 mx-auto mb-4" />
            <p className="text-sm text-slate-300 font-poppins">
              {t.news.emptyState}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
