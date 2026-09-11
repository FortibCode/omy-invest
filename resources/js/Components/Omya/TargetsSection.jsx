import React from 'react';
import { Building2, Landmark, Store, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

const TARGETS_ICONS = [Building2, Landmark, Store, Users];

export default function TargetsSection() {
  const { t } = useLanguage();
  const targets = t.targets.items.map((item, idx) => ({ ...item, icon: TARGETS_ICONS[idx] }));

  return (
    <section id="cibles" className="py-24 bg-[#0B192C] text-white relative overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FFFFFF]">
            <span>{t.targets.tag}</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            {t.targets.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {t.targets.desc}
          </p>
        </div>

        {/* 4 Blocks Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-dark p-7 flex flex-col justify-between group border border-slate-800 hover:border-[#FFFFFF]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 flex items-center justify-center text-[#FFFFFF] group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFFFFF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#FFFFFF]">{item.role}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#FFFFFF] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
