import React, { useState } from 'react';
import { BookOpen, Landmark, TrendingUp, ShieldCheck, FileText, ChevronRight, Info, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';

export default function FinancialMarketSection({ onSelectView }) {
  const [activeTab, setActiveTab] = useState('instruments');

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const instruments = [
    {
      type: 'Actions',
      tag: 'Titres de Propriété',
      desc: 'Parts du capital social d\'entreprises publiques ou privées cotées sur la BVMAC (Bourse des Valeurs Mobilières d\'Afrique Centrale). Procurant un droit de vote et des dividendes.',
    },
    {
      type: 'Obligations',
      tag: 'Titres de Créance',
      desc: 'Emprunts émis par les États de la zone CEMAC (Cameroun, Congo, Gabon, Tchad, RCA, Guinée Équatoriale) ou des sociétés privées. Offrant des coupons d\'intérêts réguliers et remboursement du capital.',
    },
    {
      type: 'Titres Financiers Structurés',
      tag: 'Ingénierie',
      desc: 'Instruments financiers combinant plusieurs actifs pour répondre à des besoins spécifiques de rendement et de couverture pour les investisseurs institutionnels.',
    },
  ];

  const actors = [
    {
      name: 'COSUMAF',
      role: 'Régulateur Régional',
      desc: 'Commission de Surveillance du Marché Financier de l\'Afrique Centrale. Assure la protection des investisseurs et délivre les agréments (ex: Agrément COSUMAF-SDB-01/2025).',
    },
    {
      name: 'BVMAC',
      role: 'Bourse Régionale',
      desc: 'Bourse des Valeurs Mobilières d\'Afrique Centrale, entreprise de marché assurant la cotation et la négociation des titres.',
    },
    {
      name: 'BEAC (DCU)',
      role: 'Dépositaire Central Unique',
      desc: 'La Banque des États de l\'Afrique Centrale assure la conservation des titres et le règlement-livraison des opérations.',
    },
    {
      name: 'Sociétés de Bourse (SDB)',
      role: 'Intermédiaires Agréés',
      desc: 'OMYA INVEST et les SDB agréées sont les seuls intermédiaires autorisés à exécuter les ordres, structurer les émissions et conserver les titres.',
    },
  ];

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
            <span>Pédagogie Financière & Cadre Réglementaire</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Comprendre le Marché Financier CEMAC
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed font-poppins">
            OMYA INVEST s'engage activement dans l'éducation financière pour vous accompagner en toute clarté sur le marché financier sous-régional.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-md bg-[#001D3D] border border-[#FFFFFF]/30 space-x-2">
            <button
              onClick={() => setActiveTab('instruments')}
              className={`px-6 py-2.5 rounded-sm text-xs font-bold font-nav uppercase transition-all ${
                activeTab === 'instruments'
                  ? 'bg-[#FFFFFF] text-[#001D3D] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Instruments Financiers
            </button>
            <button
              onClick={() => setActiveTab('acteurs')}
              className={`px-6 py-2.5 rounded-sm text-xs font-bold font-nav uppercase transition-all ${
                activeTab === 'acteurs'
                  ? 'bg-[#FFFFFF] text-[#001D3D] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Acteurs du Marché CEMAC
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
                  <p className="text-xs text-slate-300 leading-relaxed font-poppins">
                    {inst.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-xs font-bold text-[#FFFFFF] hover:underline flex items-center gap-1 font-nav uppercase">
                    <span>Investir en {inst.type}</span>
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
                  <p className="text-xs text-slate-300 leading-relaxed font-poppins">
                    {actor.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Informative Banner */}
        <div className="mt-12 p-6 bg-[#001D3D] rounded-md border border-[#FFFFFF]/30 flex items-center gap-4 text-xs text-slate-300 font-poppins">
          <Info className="w-6 h-6 text-[#FFFFFF] shrink-0" />
          <p>
            Toutes les opérations d'échanges de titres et de souscription sur le marché CEMAC sont soumises à la réglementation rigoureuse de la <strong className="text-white">COSUMAF</strong> et conservées par le Dépositaire Central Unique assuré par la <strong className="text-white">BEAC (DCU)</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
