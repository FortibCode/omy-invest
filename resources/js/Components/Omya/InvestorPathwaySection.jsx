import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Search, CheckCircle2, ShieldCheck, PieChart, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

const STEPS_ICONS = [Target, Search, ShieldCheck, CheckCircle2, PieChart];

export default function InvestorPathwaySection({ onSelectView }) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const journeySteps = t.investor.steps.map((step, idx) => ({
    ...step,
    num: String(idx + 1).padStart(2, '0'),
    icon: STEPS_ICONS[idx],
  }));

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
            <span>{t.investor.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t.investor.title}
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-[#F4F6FA] p-6 rounded-md border-l-4 border-l-[#002E5B] border border-slate-200 shadow-sm font-poppins">
            {t.investor.quote}
          </p>
        </div>

        {/* ── INTERACTIVE 5-STEP INVESTOR STEPPER (UNCLUTTERED LIGHT CARDS) ── */}
        <div className="mb-16">

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#001D3D] font-nav uppercase tracking-wide">
              {t.investor.stepperTitle}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-poppins">
              {t.investor.stepperSub}
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
                      <span className="text-xs font-mono font-bold text-[#002E5B]">{t.investor.stepOf(currentStepData.num)}</span>
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
                      title={t.investor.prevStep}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev + 1) % journeySteps.length)}
                      className="w-9 h-9 rounded-sm bg-white hover:bg-[#002E5B] hover:text-white transition flex items-center justify-center text-[#001D3D] border border-slate-300 shadow-sm"
                      title={t.investor.nextStep}
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
            <h4 className="text-base font-bold text-[#002E5B] mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{t.investor.overviewCards[0].title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-poppins">
              {t.investor.overviewCards[0].desc}
            </p>
            <a href="#solutions-placements" onClick={(e) => handleLinkClick(e, '#solutions-placements')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
              <span>{t.common.enSavoirPlus}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bvmac-card p-6 border-l-4 border-l-[#002E5B] bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all">
            <h4 className="text-base font-bold text-[#002E5B] mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{t.investor.overviewCards[1].title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-poppins">
              {t.investor.overviewCards[1].desc}
            </p>
            <a href="#solutions-gestion" onClick={(e) => handleLinkClick(e, '#solutions-gestion')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
              <span>{t.common.enSavoirPlus}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bvmac-card p-6 border-l-4 border-l-[#002E5B] bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all">
            <h4 className="text-base font-bold text-[#002E5B] mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{t.investor.overviewCards[2].title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-poppins">
              {t.investor.overviewCards[2].desc}
            </p>
            <a href="#solutions-execution" onClick={(e) => handleLinkClick(e, '#solutions-execution')} className="text-xs font-bold text-[#002E5B] hover:underline inline-flex items-center gap-1 font-nav uppercase">
              <span>{t.common.enSavoirPlus}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
