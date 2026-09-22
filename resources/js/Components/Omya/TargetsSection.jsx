import React from 'react';
import { Building2, Landmark, Store, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

const TARGETS_ICONS = [Building2, Landmark, Store, Users];

export default function TargetsSection() {
  const { t } = useLanguage();

  return (
    <section id="cibles" className="py-24 bg-[#001D3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-tag-light justify-center">
            <span>{t.targets.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            {t.targets.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.targets.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.targets.items.map((item, idx) => {
            const Icon = TARGETS_ICONS[idx];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="glass-card-dark border border-white/10 p-7"
              >
                <Icon className="w-7 h-7 text-white mb-5" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-white leading-snug mb-3">{item.title}</h3>
                <p className="text-[15px] text-slate-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
