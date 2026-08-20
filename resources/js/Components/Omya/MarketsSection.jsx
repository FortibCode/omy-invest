import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, ArrowRight, TrendingUp, BarChart3, Clock, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import {
  fadeInLeft, fadeInRight, fadeInUp,
  staggerContainer, staggerItem, viewport, viewportLarge,
} from '@/utils/animations';

/* ── SVG Sparkline (light theme) ── */
function Sparkline({ points, w = 320, h = 90, color = '#0369A1' }) {
  if (!points || points.length < 2) return null;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * w,
    y: h - ((p - min) / range) * (h - 10) - 5,
  }));
  const path = coords.map((c, i) => `${i === 0 ? 'M' : 'L'}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
  const fill = path + ` L${w},${h} L0,${h}Z`;
  const last = coords[coords.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#spark-grad)" />
      <path d={path} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r="5" fill={color} opacity="0.9" />
      <circle cx={last.x} cy={last.y} r="9" fill={color} opacity="0.15" className="animate-ping" />
    </svg>
  );
}

export default function MarketsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('INDICES');

  /* Live BVMAC data */
  const [idx, setIdx] = useState({ price: 197.45, pct: +0.85, up: true });
  const [sparkData, setSparkData] = useState([188, 191, 189, 193, 192, 194, 195, 193, 196, 197, 197.45]);
  const [volume, setVolume] = useState(48.991);
  const [trades, setTrades] = useState([
    { id: 1, type: 'ACHAT', asset: 'SAFACAM', qty: '500 titres', price: '23 500 FCFA', up: true },
    { id: 2, type: 'SOUSCRIPTION', asset: 'BDEAC 6.00%', qty: '100 000 FCFA', price: '101.50 %', up: true },
    { id: 3, type: 'VENTE', asset: 'SOCAPALM', qty: '200 titres', price: '48 000 FCFA', up: false },
  ]);

  const allTrades = [
    { type: 'ACHAT', asset: 'SAFACAM', qty: '300 titres', price: '23 600 FCFA', up: true },
    { type: 'VENTE', asset: 'SIAT GABON', qty: '150 titres', price: '28 450 FCFA', up: false },
    { type: 'ACHAT', asset: 'BVMAC 10', qty: '500 titres', price: '157.10 PTS', up: true },
    { type: 'SOUSCRIPTION', asset: 'EOG 6.25%', qty: '200 000 FCFA', price: '100.80 %', up: true },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.46) * 0.5;
      setIdx(prev => {
        const newPrice = parseFloat((prev.price + delta).toFixed(2));
        const pct = parseFloat((delta / prev.price * 100).toFixed(2));
        return { price: newPrice, pct, up: delta >= 0 };
      });
      setSparkData(prev => {
        const last = prev[prev.length - 1];
        return [...prev.slice(1), parseFloat((last + (Math.random() - 0.46) * 1.2).toFixed(2))];
      });
      setVolume(prev => parseFloat((prev + Math.random() * 0.035).toFixed(3)));
      if (Math.random() > 0.45) {
        const next = { ...allTrades[Math.floor(Math.random() * allTrades.length)], id: Date.now() };
        setTrades(prev => [next, prev[0], prev[1]]);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { key: 'INDICES', label: t.tabIndices || 'Indices' },
    { key: 'ACTIONS', label: t.tabActions || 'Actions' },
    { key: 'OBLIGATIONS', label: t.tabObligations || 'Obligations' },
    { key: 'DEVISES', label: t.tabDevises || 'Devises' },
  ];

  const marketData = {
    INDICES: [
      { name: 'BVMAC All Share Index', value: '197.45', change: '+0.85%', positive: true },
      { name: 'BVMAC 10', value: '156.78', change: '+0.56%', positive: true },
      { name: 'CAC 40', value: '7 984.21', change: '+0.25%', positive: true },
      { name: 'DOW JONES', value: '39 065.26', change: '+0.35%', positive: true },
      { name: 'NIKKEI 225', value: '38 543.67', change: '+0.28%', positive: true },
    ],
    ACTIONS: [
      { name: 'SAFACAM (BVMAC)', value: '23 500 FCFA', change: '+1.20%', positive: true },
      { name: 'SOCAPALM (BVMAC)', value: '48 000 FCFA', change: '+0.95%', positive: true },
      { name: 'SECD (BVMAC)', value: '3 200 FCFA', change: '-0.40%', positive: false },
      { name: 'SIAT GABON', value: '28 500 FCFA', change: '+0.15%', positive: true },
      { name: 'TOTAL ENERGIES', value: '62.40 €', change: '+0.75%', positive: true },
    ],
    OBLIGATIONS: [
      { name: 'EOG 6.25% 2022-2027', value: '99.80 %', change: '+0.05%', positive: true },
      { name: 'ECMR 5.50% 2023-2028', value: '100.20 %', change: '+0.10%', positive: true },
      { name: 'BDEAC 6.00% 2021-2028', value: '101.50 %', change: '+0.00%', positive: true },
      { name: 'OAT France 10 ans', value: '3.12 %', change: '-0.02%', positive: false },
    ],
    DEVISES: [
      { name: 'EUR / XAF (FCFA)', value: '655.957', change: '0.00%', positive: true },
      { name: 'USD / XAF (FCFA)', value: '602.450', change: '+0.18%', positive: true },
      { name: 'GBP / XAF (FCFA)', value: '768.100', change: '-0.12%', positive: false },
      { name: 'EUR / USD', value: '1.0885', change: '-0.15%', positive: false },
    ],
  };

  const currentList = marketData[activeTab] || marketData.INDICES;

  return (
    <section className="section-white py-24 section-divider" id="marches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <span className="section-tag">Données en Temps Réel</span>
            <h2 className="section-title mt-2">{t.marketsTitle || 'Nos Marchés'}</h2>
          </div>
          <motion.a
            href="#tous-les-marches"
            className="btn-orange btn-sm flex items-center gap-2 self-start sm:self-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.seeAllMarkets || 'Voir Tous les Marchés'}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT: BVMAC Live Dashboard ── */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            {/* BVMAC card */}
            <div className="consult-card p-6 border-t-4 border-sky-500">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                    INDICE BVMAC ALL SHARE
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-gray-800 font-mono">
                      {idx.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-sm text-gray-400 font-bold">pts</span>
                    <motion.span
                      key={idx.up ? 'up' : 'down'}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-black ${
                        idx.up ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {idx.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {idx.up ? '+' : ''}{idx.pct.toFixed(2)}%
                    </motion.span>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  EN DIRECT
                </span>
              </div>

              {/* Sparkline */}
              <div className="h-24 w-full mb-4 bg-gray-50 rounded-xl p-2 border border-gray-100">
                <Sparkline points={sparkData} color="#0369A1" />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Volume (M FCFA)', value: volume.toFixed(3), icon: BarChart3 },
                  { label: 'Clôture Veille', value: '196.82 pts', icon: Clock },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100 text-center">
                      <Icon className="w-4 h-4 text-sky-500 mx-auto mb-1" />
                      <div className="text-sm font-black text-gray-800 font-mono">{s.value}</div>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">{s.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Live orders */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-3.5 h-3.5 text-sky-500" />
                  <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">
                    Flux d'ordres en temps réel
                  </span>
                </div>
                <div className="space-y-1.5">
                  <AnimatePresence mode="popLayout">
                    {trades.map(trade => (
                      <motion.div
                        key={trade.id}
                        layout
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ duration: 0.3 }}
                        className="market-row flex items-center justify-between text-xs font-mono gap-2"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`shrink-0 px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                            trade.type === 'ACHAT'
                              ? 'bg-emerald-100 text-emerald-700'
                              : trade.type === 'VENTE'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-sky-100 text-sky-700'
                          }`}>{trade.type}</span>
                          <span className="text-gray-800 font-bold truncate">{trade.asset}</span>
                        </div>
                        <span className="text-sky-600 font-black shrink-0">{trade.price}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Tabbed Market Table ── */}
          <motion.div
            className="lg:col-span-7 consult-card p-6 sm:p-8"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            {/* Tabs with orange active indicator */}
            <div className="flex gap-2 border-b border-gray-100 pb-4 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wide transition whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, #0C4A6E, #0369A1)' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Table rows */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  variants={staggerContainer(0.07, 0)}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2.5"
                >
                  {currentList.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="market-row flex items-center justify-between"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.positive ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <span className="font-bold text-sm text-gray-700">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-gray-800">{item.value}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-black ${
                          item.positive
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-red-50 text-red-600 border border-red-200'
                        }`}>
                          {item.positive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                          {item.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Chart mini */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">
                Tendance — {activeTab}
              </div>
              <AnimatePresence mode="wait">
                <motion.svg
                  key={activeTab}
                  className="w-full h-20"
                  viewBox="0 0 300 80"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.path
                    d="M 10 60 Q 60 65 100 35 T 180 28 T 290 8"
                    stroke="#0EA5E9"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                  <path
                    d="M 10 60 Q 60 65 100 35 T 180 28 T 290 8 L 290 78 L 10 78 Z"
                    fill="url(#orange-grad)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </AnimatePresence>
              <div className="flex justify-between text-[10px] text-gray-300 font-mono mt-1">
                <span>09:00</span><span>12:00</span><span>15:00</span><span>17:00</span>
              </div>
            </div>

            <div className="mt-4 text-right">
              <motion.a
                href="#details-marches"
                className="inline-flex items-center gap-1.5 text-xs font-black text-sky-500 hover:text-sky-600 uppercase tracking-wider"
                whileHover={{ x: 4 }}
              >
                {t.seeMoreDetails || 'Voir Plus de Détails'}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
