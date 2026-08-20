import React from 'react';
import { TrendingUp, Landmark, Briefcase, Globe, ArrowRight, Play, Eye, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import {
  fadeInLeft, fadeInRight, staggerContainer, staggerCard, viewport, viewportLarge,
} from '@/utils/animations';

export default function ActivitiesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t.act1Title || 'Société de Bourse',
      desc: t.act1Desc || 'Accès direct aux marchés BVMAC — achat, vente et souscription de titres pour particuliers et institutionnels.',
      tag: 'Agréé COSUMAF',
      link: '#societe-de-bourse',
    },
    {
      icon: Landmark,
      title: t.act2Title || 'Gestion de Patrimoine',
      desc: t.act2Desc || 'Stratégies d\'investissement personnalisées, portefeuilles diversifiés et conseils patrimoniaux sur-mesure.',
      tag: 'Sur-mesure',
      link: '#gestion-patrimoine',
    },
    {
      icon: Briefcase,
      title: t.act3Title || 'Conseil Financier',
      desc: t.act3Desc || 'Expertise locale et internationale pour structurer vos opérations financières et optimiser vos rendements.',
      tag: 'Expertise locale',
      link: '#conseil-financier',
    },
    {
      icon: Globe,
      title: t.act4Title || 'Investissements',
      desc: t.act4Desc || 'Accès aux marchés financiers CEMAC et internationaux via une plateforme unique sécurisée.',
      tag: 'Local & International',
      link: '#investissements',
    },
  ];

  return (
    <>
      {/* ══════ MISSION & VISION — Navy section ══════ */}
      <section
        id="services"
        className="section-navy relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%)' }}
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Decorative diagonal */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Header */}
          <motion.div
            className="mb-14"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="text-sky-400 text-[11px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-sky-400 inline-block" />
              {t.missionVisionTag || "Notre Mission & Vision"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight max-w-xl">
              {t.missionVisionHeading || "Découvrez les Principes Fondamentaux Qui Nous Guident"}
            </h2>
          </motion.div>

          {/* Grid: image + 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Image card with play button */}
            <motion.div
              className="lg:col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ minHeight: 300 }}
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportLarge}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                alt="Notre vision"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                style={{ minHeight: 300 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/90 via-[#0C4A6E]/30 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40"
                  whileHover={{ scale: 1.15, backgroundColor: 'rgba(14, 165, 233,0.5)' }}
                  animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0.4)', '0 0 0 20px rgba(255,255,255,0)'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Play className="w-6 h-6 text-white fill-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* 2 service cards */}
            <motion.div
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer(0.15, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportLarge}
            >
              {services.slice(0, 2).map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={i}
                    variants={staggerCard}
                    className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 group"
                    whileHover={{
                      backgroundColor: 'rgba(14, 165, 233,0.12)',
                      borderColor: 'rgba(14, 165, 233,0.4)',
                      y: -6,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(14, 165, 233,0.2)', border: '1px solid rgba(14, 165, 233,0.4)' }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-sky-400" />
                    </motion.div>

                    {/* Orange top border */}
                    <div className="w-8 h-0.5 bg-sky-400 mb-3" />

                    <h3 className="text-white font-black text-base mb-2">{svc.title}</h3>
                    <p className="text-sky-300 text-sm leading-relaxed">{svc.desc}</p>

                    <motion.a
                      href={svc.link}
                      className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-black uppercase tracking-wider mt-4"
                      whileHover={{ x: 5 }}
                    >
                      {t.learnMore || 'En Savoir Plus'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════ SERVICES GRID — White section ══════ */}
      <section className="section-light py-24 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-14"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="section-tag">{t.whatWeDoTag || "Ce Que Nous Faisons"}</span>
            <h2 className="section-title mt-2">{t.activitiesTitle || 'Nos Activités & Services'}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed mt-3">
              {t.whatWeDoDesc || "Depuis plus de 10 ans, nous accompagnons nos clients avec rigueur, transparence et une profonde connaissance des marchés d'Afrique Centrale."}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={staggerCard}
                  className="consult-card p-7 flex flex-col gap-4 group cursor-pointer"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 50px rgba(3, 105, 161,0.15)',
                  }}
                >
                  {/* Orange top line */}
                  <div className="w-10 h-1 bg-sky-500 rounded-full group-hover:w-full transition-all duration-500" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: '#0369A1' }}>
                    <Icon className="w-7 h-7 text-sky-400" />
                  </div>

                  {/* Tag */}
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-500 border border-sky-200 bg-sky-50 px-2.5 py-1 rounded-full self-start">
                    {item.tag}
                  </span>

                  {/* Text */}
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-black text-gray-800 text-sm uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={item.link}
                    className="inline-flex items-center text-xs font-black uppercase tracking-widest text-sky-500 group-hover:gap-2 gap-1 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    {t.learnMore || 'En Savoir Plus'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}
