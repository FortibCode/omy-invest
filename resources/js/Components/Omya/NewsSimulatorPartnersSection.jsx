import React, { useState } from 'react';
import { ArrowRight, Calculator, Newspaper, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import {
  fadeInLeft, fadeInRight, fadeInUp,
  staggerContainer, staggerItem, viewport, viewportLarge,
} from '@/utils/animations';

export default function NewsSimulatorPartnersSection() {
  const { t } = useLanguage();
  const [montant, setMontant] = useState(1000000);
  const [duree, setDuree] = useState(3);
  const [taux, setTaux] = useState(8);

  const calculateEstimate = () => {
    const p = parseFloat(montant) || 0;
    const r = (parseFloat(taux) || 0) / 100;
    const n = parseInt(duree) || 1;
    const result = Math.round(p * Math.pow(1 + r, n));
    return result.toLocaleString('fr-FR');
  };

  const newsArticles = [
    {
      title: 'La BVMAC enregistre une hausse de 0,85% cette semaine',
      date: '24 Mai 2024',
      category: 'Marchés',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Perspectives économiques Afrique Centrale 2024',
      date: '22 Mai 2024',
      category: 'Économie',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'OMYA INVEST récompensée pour son excellence',
      date: '20 Mai 2024',
      category: 'Société',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80',
    },
  ];

  const partners = [
    { name: 'BVMAC', logoText: 'BVMAC' },
    { name: 'BEAC', logoText: 'BEAC' },
    { name: 'Afriland First Bank', logoText: 'Afriland' },
    { name: 'BGFI Bank', logoText: 'BGFIBank' },
    { name: 'UBA', logoText: 'UBA' },
    { name: 'Ecobank', logoText: 'Ecobank' },
    { name: 'Allianz', logoText: 'Allianz' },
    { name: 'PwC', logoText: 'pwc' },
  ];

  return (
    <section className="section-light py-20 section-divider" id="actualites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Financial News */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h2 className="text-sm font-black text-gray-800 uppercase tracking-wider flex items-center">
                <Newspaper className="w-4 h-4 mr-2 text-sky-500" />
                {t.newsTitle || 'Actualités Financières'}
              </h2>
              <a
                href="#toutes-actualites"
                className="text-[11px] font-bold text-gray-500 hover:text-sky-500 flex items-center transition"
              >
                <span>{t.seeAllNews || 'Voir Tout'}</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>

            <motion.div
              className="space-y-4"
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              animate="visible"
            >
              {newsArticles.map((article, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="consult-card p-3.5 flex space-x-3 transition group cursor-pointer"
                  whileHover={{ x: 4, borderColor: 'rgba(14, 165, 233, 0.4)' }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-20 h-16 rounded-lg object-cover shrink-0 border border-gray-100"
                  />
                  <div className="space-y-1">
                    <div className="text-[10px] text-gray-400 font-bold">
                      {article.date} • <span className="text-sky-500">{article.category}</span>
                    </div>
                    <h3 className="text-xs font-bold text-gray-800 group-hover:text-sky-500 transition line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2: Investment Simulator */}
          <motion.div
            className="lg:col-span-4 consult-card p-6 border-t-4 border-sky-500 shadow-xl relative overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            
            <div className="flex items-center space-x-2 border-b border-gray-100 pb-3 mb-5">
              <Calculator className="w-5 h-5 text-sky-500" />
              <h2 className="text-sm font-black tracking-wider uppercase text-gray-800">
                {t.simTitle || 'Simulateur d\'Investissement'}
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between text-gray-600 font-semibold mb-1">
                  <span>{t.amountToInvest || 'Montant à investir'}</span>
                  <span className="font-mono text-sky-600 font-bold">
                    {Number(montant).toLocaleString('fr-FR')} FCFA
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-gray-600 font-semibold mb-1">
                  <span>{t.durationLabel || 'Durée du placement'}</span>
                  <span className="font-mono text-sky-600 font-bold">
                    {duree} {t.yearSuffix || 'ans'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={duree}
                  onChange={(e) => setDuree(e.target.value)}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-gray-600 font-semibold mb-1">
                  <span>{t.estimatedRate || 'Taux estimé'}</span>
                  <span className="font-mono text-sky-600 font-bold">
                    {taux} %
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={taux}
                  onChange={(e) => setTaux(e.target.value)}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center space-y-1 mt-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                  {t.estimatedResult || 'Capital final estimé'}
                </span>
                <span className="text-2xl font-black text-gray-800 font-mono block">
                  {calculateEstimate()} FCFA
                </span>
              </div>

              <motion.button
                type="button"
                className="btn-orange w-full justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.calculateBtn || 'Calculer mon rendement'}
              </motion.button>
            </div>

          </motion.div>

          {/* Column 3: Institutional Partners Grid */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h2 className="text-sm font-black text-gray-800 uppercase tracking-wider flex items-center">
                <Building2 className="w-4 h-4 mr-2 text-sky-500" />
                {t.partnersTitle || 'Partenaires Institutionnels'}
              </h2>
              <a
                href="#tous-partenaires"
                className="text-[11px] font-bold text-gray-500 hover:text-sky-500 flex items-center transition"
              >
                <span>{t.seeAllPartners || 'Voir Tout'}</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer(0.08, 0)}
              initial="hidden"
              animate="visible"
            >
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="consult-card p-4 flex items-center justify-center h-20 group cursor-pointer"
                  whileHover={{ scale: 1.04, borderColor: 'rgba(14, 165, 233, 0.4)' }}
                >
                  <span className="font-black text-xs text-gray-700 tracking-wider group-hover:text-sky-500 transition font-mono">
                    {partner.logoText}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
