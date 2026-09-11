import React, { useState } from 'react';
import { BookOpen, Landmark, TrendingUp, ShieldCheck, FileText, ChevronRight, Info, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

export default function FinancialMarketSection({ onSelectView }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('instruments');

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const instruments = t.financialMarket.instruments;
  const actors = t.financialMarket.actors;

  return (
    <section id="marche-financier" className="py-24 bg-[#002E5B] text-white relative overflow-hidden border-t-2 border-[#FFFFFF]">
      
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
            <BookOpen className="w-4 h-4 text-[#FFFFFF]" />
            <span>{t.financialMarket.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t.financialMarket.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-poppins">
            {t.financialMarket.desc}
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-md bg-[#001D3D] border border-[#FFFFFF]/30 space-x-2">
            <button
              onClick={() => setActiveTab('instruments')}
              className={`px-6 py-2.5 rounded-sm text-[13px] font-bold font-nav uppercase transition-all ${
                activeTab === 'instruments'
                  ? 'bg-[#FFFFFF] text-[#001D3D] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.financialMarket.tabInstruments}
            </button>
            <button
              onClick={() => setActiveTab('acteurs')}
              className={`px-6 py-2.5 rounded-sm text-[13px] font-bold font-nav uppercase transition-all ${
                activeTab === 'acteurs'
                  ? 'bg-[#FFFFFF] text-[#001D3D] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.financialMarket.tabActors}
            </button>
          </div>
        </div>

        {/* Tab 1: Instruments */}
        {activeTab === 'instruments' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instruments.map((inst, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bvmac-card-dark p-7 border-l-4 border-l-[#FFFFFF] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFFFFF] font-nav bg-[#FFFFFF]/15 px-3 py-1 rounded-sm border border-[#FFFFFF]/30">
                    {inst.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {inst.type}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-poppins">
                    {inst.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-xs font-bold text-[#FFFFFF] hover:underline flex items-center gap-1 font-nav uppercase">
                    <span>{t.financialMarket.investIn(inst.type)}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Acteurs */}
        {activeTab === 'acteurs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actors.map((actor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bvmac-card-dark p-6 border-l-4 border-l-[#6C98E1] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#6C98E1] uppercase tracking-wider">
                    {actor.role}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {actor.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-poppins">
                    {actor.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Informative Banner */}
        <div className="mt-12 p-6 bg-[#001D3D] rounded-md border border-[#FFFFFF]/30 flex items-center gap-4 text-sm text-slate-300 font-poppins">
          <Info className="w-6 h-6 text-[#FFFFFF] shrink-0" />
          <p>
            {t.financialMarket.bannerText}
          </p>
        </div>

      </div>
    </section>
  );
}
