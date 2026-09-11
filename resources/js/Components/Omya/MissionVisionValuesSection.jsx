import React from 'react';
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Compass, Building, User, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

const VALUES_ICONS = [ShieldCheck, Award, HeartHandshake, Compass];

export default function MissionVisionValuesSection() {
  const { t } = useLanguage();
  const visionSteps = t.missionVisionValues.visionSteps.map((step, idx) => ({
    ...step,
    num: String(idx + 1).padStart(2, '0'),
  }));

  const values = t.missionVisionValues.values.map((val, idx) => ({ ...val, icon: VALUES_ICONS[idx] }));

  return (
    <section className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* ══════ 1. MISSION SECTION ══════ */}
        <div id="mission" className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-tag-light justify-center">
              <Target className="w-4 h-4 text-[#FFFFFF]" />
              <span>{t.missionVisionValues.missionTag}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold font-serif-luxury text-white leading-tight">
              {t.missionVisionValues.missionQuote}
            </h2>
            <p className="text-slate-400 text-base">
              {t.missionVisionValues.missionSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Personnes Morales */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-dark p-8 border border-[#FFFFFF]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 flex items-center justify-center text-[#FFFFFF]">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF]">{t.missionVisionValues.moralesLabel}</span>
                    <h3 className="text-xl font-bold font-serif-luxury text-white">{t.missionVisionValues.moralesTitle}</h3>
                  </div>
                </div>

                <p className="text-base text-slate-300 leading-relaxed bg-[#0A1128]/80 p-5 rounded-xl border border-slate-800">
                  {t.missionVisionValues.moralesText}
                </p>
              </div>
            </motion.div>

            {/* Personnes Physiques */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-dark p-8 border border-[#FFFFFF]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 flex items-center justify-center text-[#FFFFFF]">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFFFFF]">{t.missionVisionValues.physiquesLabel}</span>
                    <h3 className="text-xl font-bold font-serif-luxury text-white">{t.missionVisionValues.physiquesTitle}</h3>
                  </div>
                </div>

                <p className="text-base text-slate-300 leading-relaxed bg-[#0A1128]/80 p-5 rounded-xl border border-slate-800">
                  {t.missionVisionValues.physiquesText}
                </p>
              </div>
            </motion.div>

          </div>

        </div>


        {/* ══════ 2. VISION SECTION ══════ */}
        <div id="vision" className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-tag-light justify-center">
              <Eye className="w-4 h-4 text-[#FFFFFF]" />
              <span>{t.missionVisionValues.visionTag}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-white leading-tight">
              {t.missionVisionValues.visionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-dark p-8 border border-slate-800 relative group hover:border-[#FFFFFF]/50 transition-all"
              >
                <span className="text-4xl font-black font-mono text-[#FFFFFF]/40 group-hover:text-[#FFFFFF] transition-colors block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold font-serif-luxury text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed bg-[#0A1128]/60 p-4 rounded-xl border border-slate-800/80">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>


        {/* ══════ 3. VALEURS SECTION (Cartes avec Guillemets Dorés Style Template) ══════ */}
        <div id="valeurs" className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-tag-light justify-center">
              <ShieldCheck className="w-4 h-4 text-[#FFFFFF]" />
              <span>{t.missionVisionValues.valeursTag}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-white leading-tight">
              {t.missionVisionValues.valeursTitle}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto italic font-serif-luxury">
              {t.missionVisionValues.valeursQuote}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card-dark p-7 border border-slate-800 hover:border-[#FFFFFF]/50 transition-all flex flex-col justify-between relative"
                >
                  {/* Guillemet Doré au sommet (Testimonial Style) */}
                  <Quote className="w-8 h-8 text-[#FFFFFF]/30 absolute top-4 right-4" />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 flex items-center justify-center text-[#FFFFFF] mb-4">
                      <ValIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-serif-luxury text-white">
                      {val.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
