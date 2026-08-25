import React from 'react';
import { FolderDown, FileText, Download, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

export default function DocumentsSection({ onSelectView }) {
  const { t } = useLanguage();
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  // En attente des documents officiels réels d'OMYA INVEST (règlements, prospectus, formulaires) à publier ici.
  const documentsList = [];

  return (
    <section id="documents" className="py-24 bg-[#F4F6FA] text-slate-800 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="section-tag-bvmac justify-center">
            <FolderDown className="w-4 h-4 text-[#002E5B]" />
            <span>{t.documents.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t.documents.title}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-poppins">
            {t.documents.desc}
          </p>
        </div>

        {/* Document Cards */}
        {documentsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentsList.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bvmac-card p-7 bg-white border border-[#D4DCE8] border-l-4 border-l-[#002E5B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#002E5B] font-nav bg-[#EEF2F8] px-3 py-1 rounded-sm">
                      {doc.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#002E5B] bg-[#F4F6FA] px-2 py-0.5 rounded border border-[#002E5B]/30">
                      {doc.format}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#002E5B] mt-2 mb-3 leading-snug" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-poppins">
                    {doc.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 font-poppins">OMYA INVEST COSUMAF</span>
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-bvmac-outline text-[11px] py-1.5 px-3 flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>Télécharger</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center bvmac-card p-10 bg-white border border-[#D4DCE8]">
            <FolderDown className="w-9 h-9 text-[#002E5B]/40 mx-auto mb-4" />
            <p className="text-sm text-slate-600 font-poppins">
              {t.documents.emptyState}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
