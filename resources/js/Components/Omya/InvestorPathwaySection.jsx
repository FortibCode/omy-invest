import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Search, CheckCircle2, ShieldCheck, PieChart, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';

export default function InvestorPathwaySection({ onSelectView }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const journeySteps = [
    {
      num: '01',
      title: 'Comprendre ses objectifs',
      subtitle: 'Audit patrimonial & Profil de risque',
      desc: 'Analyse approfondie de votre situation financière, vos contraintes de liquidité, votre horizon temporel et votre niveau de tolérance au risque.',
      icon: Target,
      highlight: 'Définition des priorités d\'investissement & Horizon temporel',
    },
    {
      num: '02',
      title: 'Identifier les solutions',
      subtitle: 'Sourcing & Veille de marché',
      desc: 'Sélection rigoureuse d\'opportunités d\'investissement adaptées sur les marchés d\'actions, d\'obligations d\'État et de titres d\'entreprises de la zone CEMAC.',
      icon: Search,
      highlight: 'Accès privilégié aux opportunités boursières CEMAC',
    },
    {
      num: '03',
      title: 'Sélectionner les actifs',
      desc: 'Conseil sur-mesure ou mandat de gestion discrétionnaire personnalisé pour composer et équilibrer un portefeuille d\'actifs optimal.',
      icon: ShieldCheck,
      subtitle: 'Allocation d\'actifs stratégique',
      highlight: 'Optimisation du couple Rendement / Risque',
    },
    {
      num: '04',
      title: 'Passer les ordres',
      subtitle: 'Exécution boursière sécurisée',
      desc: 'Exécution d\'ordres rapide et sécurisée auprès du marché boursier régional BVMAC et tenue de votre compte titres agréé par le dépositaire central BEAC (DCU).',
      icon: CheckCircle2,
      highlight: 'Sécurité des transactions & Conservation BEAC',
    },
    {
      num: '05',
      title: 'Suivre son portefeuille',
      subtitle: 'Reporting & Arbitrage',
      desc: 'Reporting périodique transparent, suivi en temps réel des performances financières et ajustements stratégiques de votre portefeuille.',
      icon: PieChart,
      highlight: 'Transparence totale & Suivi analytique régulier',
    },
  ];

  // Auto-advance stepper
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStepData = journeySteps[activeStep];
  const StepIcon = currentStepData.icon;

  return (
    <section id="investir" className="py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200 select-none">
      
      {/* Subtle Background Accent Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#002E5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header — "Vous souhaitez investir ?" */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-tag-bvmac justify-center">
            <TrendingUp className="w-4 h-4 text-[#002E5B]" />
            <span>Agents à Capacité de Financement</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Vous souhaitez investir ?
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-[#F4F6FA] p-6 rounded-md border-l-4 border-l-[#002E5B] border border-slate-200 shadow-sm font-poppins">
            « Pour les agents à capacité de financement : <strong className="text-[#002E5B] font-semibold">OMYA INVEST</strong> vous accompagne (en fonction de vos besoins, de vos objectifs, de vos contraintes et de votre horizon temporel) vers les placements les plus sûrs et les plus rentables. »
          </p>
        </div>

        {/* ── INTERACTIVE 5-STEP INVESTOR STEPPER (UNCLUTTERED LIGHT CARDS) ── */}
        <div className="mb-16">
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#001D3D] font-nav uppercase tracking-wide">
              Le Parcours Investisseur en 5 Étapes
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-poppins">
              Cliquez ou laissez défiler les étapes pour découvrir notre méthode d'accompagnement
            </p>
          </div>

          {/* Step Navigation Tabs Bar */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-200">
            {journeySteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-sm font-nav text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  idx === activeStep
                    ? 'bg-[#002E5B] text-white shadow-lg scale-105 ring-2 ring-[#002E5B]/40'
                    : 'bg-[#F4F6FA] text-slate-700 hover:text-[#002E5B] hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span className="font-mono text-[11px]">{step.num}</span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-[#F4F6FA] p-8 sm:p-12 border-2 border-slate-200 border-l-8 border-l-[#002E5B] rounded-xl shadow-xl relative min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepData.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300/80 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#002E5B] text-white flex items-center justify-center shrink-0 shadow-md">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#002E5B]">Étape {currentStepData.num} sur 05</span>
                      <h4 className="text-xl sm:text-2xl font-bold text-[#001D3D] mt-0.5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        {currentStepData.title}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#002E5B] bg-white px-3 py-1.5 rounded-md border border-slate-300 shadow-sm">
                    {currentStepData.subtitle}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-poppins font-normal max-w-4xl">
                  {currentStepData.desc}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 text-xs text-[#002E5B] font-nav font-bold uppercase bg-white px-3 py-1.5 rounded-md border border-slate-300 shadow-sm">
                    <span>✓ {currentStepData.highlight}</span>
                  </div>

                  {/* Manual Stepper Prev/Next Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-slate-600 hover:text-[#002E5B] text-xs font-nav font-bold uppercase mr-2"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 inline" /> : <Play className="w-4 h-4 inline" />}
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)}
                      className="w-9 h-9 rounded-sm bg-white hover:bg-[#002E5B] hover:text-white transition flex items-center justify-center text-[#001D3D] border border-slate-300 shadow-sm"
                      title="Étape précédente"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev + 1) % journeySteps.length)}
                      className="w-9 h-9 rounded-sm bg-white hover:bg-[#002E5B] hover:text-white transition flex items-center justify-center text-[#001D3D] border border-slate-300 shadow-sm"
                      title="Étape suivante"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 3 Core investor solutions overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bvmac-card p-6 border-l-4 border-l-[#002E5B] bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all">
            <h4 className="text-base font-bold text-[#002E5B] mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Placements Financiers</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-poppins">
              Placer les actifs financiers pour le compte tiers sur le marché des capitaux de la CEMAC.
            </p>
            <a href="#solutions-placements" onClick={(e) => handleLinkClick(e, '#solutions-placements')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
              <span>En savoir plus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bvmac-card p-6 border-l-4 border-l-[#002E5B] bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all">
            <h4 className="text-base font-bold text-[#002E5B] mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Gestion de Portefeuille</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-poppins">
              Mandat discrétionnaire et conseil en investissement personnalisé selon vos priorités.
            </p>
            <a href="#solutions-gestion" onClick={(e) => handleLinkClick(e, '#solutions-gestion')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
              <span>En savoir plus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bvmac-card p-6 border-l-4 border-l-[#002E5B] bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all">
            <h4 className="text-base font-bold text-[#002E5B] mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Exécution d'Ordre</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-poppins">
              Exécution rapide et sécurisée des ordres d'achat et de vente de titres pour le compte des investisseurs.
            </p>
            <a href="#solutions-execution" onClick={(e) => handleLinkClick(e, '#solutions-execution')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
              <span>En savoir plus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
