import React from 'react';
import { TrendingUp, FileText, Layers, Landmark, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import {
  fadeInUp, staggerContainer, staggerCard, viewport, viewportLarge,
} from '@/utils/animations';

export default function ProductsSection() {
  const { t } = useLanguage();

  const products = [
    {
      icon: TrendingUp,
      title: t.prod1Title || 'Actions Cotées',
      description: t.prod1Desc || 'Investissez dans les fleurons économiques d\'Afrique Centrale cotés sur la BVMAC.',
      link: '#actions',
      color: '#0EA5E9',
    },
    {
      icon: FileText,
      title: t.prod2Title || 'Obligations',
      description: t.prod2Desc || 'Titres de créance d\'État (CEMAC) et obligations d\'entreprises privées offrant un rendement garanti.',
      link: '#obligations',
      color: '#0369A1',
    },
    {
      icon: Layers,
      title: t.prod3Title || 'OPCVM / FCP',
      description: t.prod3Desc || 'Fonds communs de placement gérés par des experts pour diversifier vos risques.',
      link: '#opcvm',
      color: '#0EA5E9',
    },
    {
      icon: Landmark,
      title: t.prod4Title || 'Titres Publics',
      description: t.prod4Desc || 'Bons et obligations du Trésor assimilables souscrits auprès des États de la CEMAC.',
      link: '#titres-publics',
      color: '#0369A1',
    },
    {
      icon: Briefcase,
      title: t.prod5Title || 'Private Equity',
      description: t.prod5Desc || 'Accompagnement et prises de participation dans des entreprises non cotées à fort potentiel.',
      link: '#fonds-investissement',
      color: '#0EA5E9',
    },
  ];

  return (
    <section className="section-white py-20 section-divider" id="produits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="section-tag">Solutions Sur-Mesure</span>
          <h2 className="section-title mt-2">{t.productsTitle || 'Nos Produits Financiers'}</h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-3 rounded-full shadow-lg" />
        </motion.div>

        {/* 5 Cards Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLarge}
        >
          {products.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={index}
                variants={staggerCard}
                className="consult-card p-6 flex flex-col justify-between text-center group relative overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: '0 16px 40px rgba(3, 105, 161,0.14)',
                }}
              >
                <div>
                  {/* Top orange highlight line on hover */}
                  <div className="w-8 h-1 bg-sky-500 rounded-full mx-auto mb-4 group-hover:w-full transition-all duration-300" />

                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition duration-300 shadow-md"
                    style={{ background: '#0C4A6E' }}
                  >
                    <IconComp className="w-6 h-6 text-sky-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-black text-gray-800 tracking-wide mb-3 uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Discover Link */}
                <motion.a
                  href={item.link}
                  className="inline-flex items-center justify-center text-[11px] font-extrabold text-sky-500 hover:text-sky-600 tracking-wider uppercase transition"
                  whileHover={{ x: 3 }}
                >
                  <span>{t.discover || 'Découvrir'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
