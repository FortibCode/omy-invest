import React, { useRef } from 'react';
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import {
  fadeInLeft, fadeInRight, fadeInUp,
  staggerContainer, scaleIn, viewport, viewportLarge,
} from '@/utils/animations';

/* ── Animated Progress Bar ── */
function AnimatedProgressBar({ pct, color = '#0EA5E9' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="flex items-center gap-3 mt-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
      <motion.span
        className="text-xs font-black shrink-0"
        style={{ color }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.7 }}
      >
        {pct}%
      </motion.span>
    </div>
  );
}

export default function WhyChooseUsSection() {
  const { t } = useLanguage();

  const certifications = [
    'Agréé COSUMAF N°001/SB',
    'Membre BVMAC',
    'Adhérent BEAC',
    'Conforme OHADA',
  ];

  const highlights = [
    {
      title: t.secRegTitle || 'Sécurité & Réglementation',
      desc: t.secRegDesc || 'Société de bourse agréée par la COSUMAF. Vos fonds sont ségrégués et protégés conformément aux normes CEMAC.',
      pct: 100,
    },
    {
      title: t.perfTitle || 'Performance & Rendement',
      desc: t.perfDesc || 'Nos portefeuilles gérés ont surperformé l\'indice BVMAC de +12% en moyenne sur les 5 dernières années.',
      pct: 87,
    },
  ];

  return (
    <section id="a-propos" className="section-white py-24 section-divider overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Photo Stack with counter badge ── */}
          <motion.div
            className="photo-stack hidden lg:block"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            {/* Main photo (top-left) */}
            <motion.img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
              alt="Expert OMYA INVEST"
              className="photo-main"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />

            {/* Secondary photo (bottom-right) */}
            <motion.img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
              alt="Conseil OMYA INVEST"
              className="photo-secondary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={viewport}
              whileHover={{ scale: 1.03 }}
            />

            {/* Counter badge */}
            <motion.div
              className="counter-badge badge-pulse"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              viewport={viewport}
            >
              <div className="text-3xl font-black text-white font-mono leading-none">3 500</div>
              <div className="text-sky-400 text-xl font-black leading-none">+</div>
              <div className="text-sky-300 text-[10px] font-semibold uppercase tracking-wide mt-1">
                {t.clientTrustCount || "Clients nous font confiance"}
              </div>
            </motion.div>

            {/* Decorative orange square */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 rounded-lg opacity-20"
              style={{ background: '#0EA5E9' }}
              animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Mobile: single image */}
          <motion.div
            className="lg:hidden rounded-xl overflow-hidden h-64"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
              alt="Expert OMYA INVEST"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            className="space-y-7"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={viewport}
            >
              <span className="section-tag">{t.aboutUsTag || "À Propos de Nous"}</span>
            </motion.div>

            {/* Title */}
            <h2 className="section-title">
              {t.aboutUsHeading || "Nous Sommes une Société de Bourse"}{' '}
              <span className="orange-gradient-text">{t.aboutUsHeadingAccent || "Dédiée à Votre Succès"}</span>
            </h2>

            {/* Intro text */}
            <p className="text-gray-600 leading-relaxed text-base">
              {t.aboutUsDesc || "Depuis plus de 10 ans, OMYA INVEST accompagne ses clients avec rigueur, transparence et une profonde connaissance des marchés financiers de la CEMAC. Agréée par la COSUMAF, nous vous offrons un accès direct à la BVMAC et aux meilleures opportunités d'investissement."}
            </p>

            {/* Highlight bullets (orange bar style) */}
            <div className="space-y-5">
              {highlights.map((h, i) => (
                <div key={i} className="orange-bar">
                  <div>
                    <h3 className="font-black text-gray-800 text-base mb-1">{h.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                    <AnimatedProgressBar pct={h.pct} />
                  </div>
                </div>
              ))}
            </div>

            {/* Experience badge */}
            <motion.div
              className="flex items-center gap-4 p-4 rounded-xl border border-sky-100 bg-gray-50"
              whileHover={{ borderColor: '#0EA5E9', backgroundColor: '#F0F9FF' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#0369A1' }}>
                <Clock className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="font-black text-gray-800 text-sm">{t.yearsExpTitle || "10 Ans d'Expérience"}</div>
                <div className="text-gray-500 text-xs leading-snug">
                  {t.yearsExpDesc || "Expert en marchés financiers CEMAC depuis 2014 — Brazzaville, Congo."}
                </div>
              </div>
            </motion.div>

            {/* Certifications grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer(0.08, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-sky-100"
                  whileHover={{ borderColor: '#0EA5E9', backgroundColor: '#F0F9FF' }}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#0EA5E9' }} />
                  <span className="text-xs font-bold text-gray-700">{cert}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#services"
              className="btn-orange inline-flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.discoverServices || "Découvrir Nos Services"}
              <ArrowRight className="w-4 h-4" />
            </motion.a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
