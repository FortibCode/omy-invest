import React from 'react';
import { ShieldCheck, Globe, Landmark, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatsCounterSection() {
  const stats = [
    {
      value: '100%',
      label: 'Conformité & Agrément',
      sub: 'COSUMAF-SDB-01/2025',
      icon: ShieldCheck,
    },
    {
      value: '6',
      label: 'États de la Zone CEMAC',
      sub: 'Cameroun, Congo, Gabon, Tchad, RCA, Guinee-Equatoriale',
      icon: Globe,
    },
    {
      value: '07',
      label: 'Services & Expertises',
      sub: 'Structuration, Courtage & Gestion',
      icon: Landmark,
    },
    {
      value: 'YAO CORP',
      label: 'Groupe Institutionnel',
      sub: 'Société de Bourse Filiale',
      icon: Building2,
    },
  ];

  return (
    <section className="bg-[#0B192C] text-white py-12 border-t border-b border-[#FFFFFF]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/15 border border-[#FFFFFF]/30 text-[#FFFFFF] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-black font-serif-luxury text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[10.5px] text-slate-400 font-mono">
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
