import React from 'react';
import { motion } from 'framer-motion';

export default function StatsCounterSection() {
  const stats = [
    {
      value: '100%',
      label: 'Conformité & Agrément',
      sub: 'COSUMAF-SDB-01/2025',
    },
    {
      value: '6',
      label: 'États de la Zone CEMAC',
      sub: 'Cameroun, Congo, Gabon, Tchad, RCA, Guinee-Equatoriale',
    },
    {
      value: '07',
      label: 'Services & Expertises',
      sub: 'Structuration, Courtage & Gestion',
    },
    {
      value: 'YAO CORP',
      label: 'Groupe Institutionnel',
      sub: 'Société de Bourse Filiale',
    },
  ];

  return (
    <section className="bg-[#0B192C] text-white py-12 border-t border-b border-[#FFFFFF]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center space-y-1.5"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
