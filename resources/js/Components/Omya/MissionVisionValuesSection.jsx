import React from 'react';
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Compass, Building, User, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVisionValuesSection() {
  const visionSteps = [
    {
      num: '01',
      text: 'Contribuer à l\'approfondissement du marché des capitaux et au financement du développement économique de la sous-région',
      title: 'Approfondissement du Marché CEMAC',
    },
    {
      num: '02',
      text: 'Être un acteur majeur de l’éducation financière',
      title: 'Éducation Financière & Pédagogie',
    },
    {
      num: '03',
      text: 'Être une référence dans l’optimisation des capitaux.',
      title: 'Référence en Optimisation',
    },
  ];

  const values = [
    { title: 'Intégrité', icon: ShieldCheck },
    { title: 'Rigueur professionnelle', icon: Award },
    { title: 'Proximité avec les clients', icon: HeartHandshake },
    { title: 'Engagement au service du développement', icon: Compass },
  ];

  return (
    <section className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* ══════ 1. MISSION SECTION ══════ */}
        <div id="mission" className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-tag-light justify-center">
              <Target className="w-4 h-4 text-[#FFFFFF]" />
              <span>Notre Mission</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold font-serif-luxury text-white leading-tight">
              « Un capital dormant ne construit rien : parlons de vos projets! »
            </h2>
            <p className="text-slate-400 text-sm">
              OMYA INVEST adapte sa mission aux spécificités des personnes morales et des personnes physiques.
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
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFFFFF]">Dimension 01</span>
                    <h3 className="text-xl font-bold font-serif-luxury text-white">Pour les Personnes Morales</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed bg-[#0A1128]/80 p-5 rounded-xl border border-slate-800">
                  « Accompagner les États, les entreprises et les investisseurs institutionnels de la sous-région CEMAC dans la mobilisation de capitaux et la structuration de solutions de financement adaptées à leurs besoins, en s'appuyant sur une expertise pointue du marché des titres. »
                </p>
              </div>
            </motion.div>

            {/* Personnes Physiques */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-dark p-8 border border-sky-500/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400">Dimension 02</span>
                    <h3 className="text-xl font-bold font-serif-luxury text-white">Pour les Personnes Physiques</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed bg-[#0A1128]/80 p-5 rounded-xl border border-slate-800">
                  « optimiser l’épargne des investisseurs en sélectionnant pour eux des meilleurs actifs en tenant compte du couple rendement/risque. »
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
              <span>Notre Vision</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-white leading-tight">
              Trois Axes pour Façonner le Marché Financier Régional
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
                <p className="text-xs text-slate-300 leading-relaxed bg-[#0A1128]/60 p-4 rounded-xl border border-slate-800/80">
                  « {step.text} »
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
              <span>Nos Valeurs</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-white leading-tight">
              Les Piliers Éthiques d'OMYA INVEST
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto italic font-serif-luxury">
              « Intégrité, rigueur professionnelle, proximité avec les clients et engagement au service du développement de la sous-région. »
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
