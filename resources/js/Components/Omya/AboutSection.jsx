import React from 'react';
import { ShieldCheck, MapPin, Building2, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { resolveAnchor } from '@/utils/viewAnchors';

export default function AboutSection({ onSelectView }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  return (
    <section id="presentation" className="py-24 bg-[#F4F6FA] text-slate-800 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Clean Editorial Text & Official Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="section-tag-bvmac">
              <span>À propos d'OMYA INVEST</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Une Société de Bourse Agréée sur le Marché Régional CEMAC
            </h2>

            {/* EXACT FORM TEXT IN A CLEAN SPACIATION */}
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-poppins">
              <p className="bg-white p-6 rounded-md border border-[#D4DCE8] shadow-sm">
                <strong className="text-[#002E5B] font-semibold">OMYA INVEST</strong>, filiale du groupe{' '}
                <strong className="text-[#002E5B] font-semibold">YAO CORP</strong>, est une société de bourse agréée par la Commission de Surveillance du Marché Financier de l'Afrique Centrale (COSUMAF) sous le numéro d'agrément{' '}
                <span className="inline-block font-mono font-bold text-[#002E5B] bg-[#F4F6FA] px-2.5 py-0.5 rounded border border-[#002E5B]/50">
                  COSUMAF-SDB-01/2025
                </span>.
              </p>
              
              <p className="text-slate-600">
                Basée à Brazzaville (République du Congo), elle intervient sur l'ensemble du marché financier régional CEMAC, au service des États, des entreprises publiques et privées, des institutionnels ainsi que particuliers.
              </p>

              <p className="text-slate-600">
                Ses activités couvrent : le courtage des titres financiers, la structuration financière et le développement d'affaires institutionnel.
              </p>
            </div>

            {/* 3 Activities List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 font-poppins">
              <div className="flex items-center gap-2 p-3 bg-white rounded-md border border-[#D4DCE8]">
                <CheckCircle2 className="w-4 h-4 text-[#002E5B] shrink-0" />
                <span className="text-xs font-bold text-[#002E5B]">Courtage de titres</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-md border border-[#D4DCE8]">
                <CheckCircle2 className="w-4 h-4 text-[#002E5B] shrink-0" />
                <span className="text-xs font-bold text-[#002E5B]">Structuration</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-md border border-[#D4DCE8]">
                <CheckCircle2 className="w-4 h-4 text-[#002E5B] shrink-0" />
                <span className="text-xs font-bold text-[#002E5B]">Développement</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#nos-solutions" onClick={(e) => handleLinkClick(e, '#nos-solutions')} className="btn-bvmac-primary">
                <span>Découvrir nos 7 expertises</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Single Clean Framed Photo (No Colliding Overlaps) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg">
              
              {/* Background Accent Frame */}
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-tr from-[#002E5B] to-[#002E5B] opacity-20 blur-md" />

              {/* Single Clean Framed Photo */}
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white bg-[#002E5B]">
                <img
                  src="/images/image-hero-8.jpeg"
                  alt="OMYA INVEST — Société de Bourse COSUMAF-SDB-01/2025"
                  className="w-full h-[400px] object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-transparent to-transparent" />

                {/* Clean Stamp Banner at Bottom */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#001D3D]/95 backdrop-blur-md p-4 rounded-md border border-[#002E5B]/40 flex items-center justify-between text-white font-poppins">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#002E5B] text-[#001D3D] flex items-center justify-center shrink-0 font-bold">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#002E5B] font-nav tracking-wider block">Agrément COSUMAF</span>
                      <strong className="text-sm font-mono text-white">COSUMAF-SDB-01/2025</strong>
                    </div>
                  </div>
                  <span className="text-[10px] font-nav uppercase tracking-widest text-slate-300 font-bold bg-white/10 px-2.5 py-1 rounded-sm hidden sm:block">
                    Zone CEMAC
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
