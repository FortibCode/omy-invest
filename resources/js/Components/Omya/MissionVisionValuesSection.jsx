import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Compass, Building, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

const VALUES_ICONS = [ShieldCheck, Award, HeartHandshake, Compass];

export default function MissionVisionValuesSection() {
  const { t } = useLanguage();
  const mvv = t.missionVisionValues;

  const missionCards = [
    { icon: Building, title: mvv.moralesTitle, text: mvv.moralesText },
    { icon: User, title: mvv.physiquesTitle, text: mvv.physiquesText },
  ];

  return (
    <section className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ══════ MISSION ══════ */}
        <div id="mission" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="section-tag-bvmac justify-center">
              <span>{mvv.missionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002E5B] leading-tight">
              {mvv.missionQuote}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {mvv.missionSub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {missionCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bvmac-card p-8"
                >
                  <Icon className="w-7 h-7 text-[#002E5B] mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-[#001D3D] mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════ VISION ══════ */}
        <div id="vision" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="section-tag-bvmac justify-center">
              <span>{mvv.visionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002E5B] leading-tight">
              {mvv.visionTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {mvv.visionSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border-t-2 border-[#002E5B] pt-6"
              >
                <span className="block text-sm font-semibold text-slate-500 mb-2">{idx + 1}</span>
                <h3 className="text-xl font-bold text-[#001D3D] mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════ VALEURS ══════ */}
        <div id="valeurs" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="section-tag-bvmac justify-center">
              <span>{mvv.valeursTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002E5B] leading-tight">
              {mvv.valeursTitle}
            </h2>
            {mvv.valeursQuote && (
              <p className="text-slate-600 text-base sm:text-lg">{mvv.valeursQuote}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
            {mvv.values.map((value, idx) => {
              const Icon = VALUES_ICONS[idx];
              return (
                <div key={value.title} className="bg-[#F7F9FC] p-7 flex items-center gap-4">
                  <Icon className="w-7 h-7 text-[#002E5B] shrink-0" strokeWidth={1.5} />
                  <h3 className="text-base font-bold text-[#001D3D] leading-snug">{value.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
