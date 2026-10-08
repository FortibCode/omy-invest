import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import {
  fadeInLeft, fadeInRight, fadeInUp,
  viewport, viewportLarge,
} from '@/utils/animations';



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
              <span className="section-tag-bvmac">{t.aboutUsTag || "À Propos de Nous"}</span>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002E5B] leading-tight">
              {t.aboutUsHeading || "Nous Sommes une Société de Bourse"}{' '}
              <span className="text-[#001D3D]">{t.aboutUsHeadingAccent || "Dédiée à Votre Succès"}</span>
            </h2>

            {/* Intro text */}
            <p className="text-slate-600 leading-relaxed text-base">
              {t.aboutUsDesc || "Depuis plus de 10 ans, OMYA INVEST accompagne ses clients avec rigueur, transparence et une profonde connaissance des marchés financiers de la CEMAC. Agréée par la COSUMAF, nous vous offrons un accès direct à la BVMAC et aux meilleures opportunités d'investissement."}
            </p>

            {/* Highlight bullets */}
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 bg-slate-50 border-l-4 border-[#002E5B] rounded-r-lg">
                  <h3 className="font-bold text-[#001D3D] text-base mb-1">{h.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Experience badge */}
            <div className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded bg-[#002E5B] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                10+
              </div>
              <div>
                <div className="font-bold text-[#001D3D] text-sm">{t.yearsExpTitle || "10 Ans d'Expérience"}</div>
                <div className="text-slate-500 text-xs leading-snug">
                  {t.yearsExpDesc || "Expert en marchés financiers CEMAC depuis 2014 — Brazzaville, Congo."}
                </div>
              </div>
            </div>

            {/* Certifications grid */}
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-3 rounded-md bg-white border border-slate-200 text-xs font-semibold text-[#001D3D]"
                >
                  {cert}
                </div>
              ))}
            </div>

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
