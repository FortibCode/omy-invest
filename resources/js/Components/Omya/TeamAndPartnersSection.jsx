import React, { useState, useEffect } from 'react';
import { Users, Handshake, Building, Pause, Play, Sparkles, X, ArrowRight, ExternalLink, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { resolveAnchor } from '@/utils/viewAnchors';

export default function TeamAndPartnersSection({ onSelectView }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [modalPartner, setModalPartner] = useState(null); // Selected partner for enlarged modal view

  // NOTE: renseigner le nom complet, le poste exact et la photo (ex: '/images/equipe/prenom-nom.jpg')
  // de chaque membre. Sans photo, un avatar avec les initiales du nom s'affiche automatiquement.
  const teamMembers = [
    { id: 1, name: '', position: 'Direction Générale', department: 'Gestion stratégique & Gouvernance institutionnelle', photo: null },
    { id: 2, name: '', position: 'Responsable Structuration', department: 'Ingénierie financière & Émissions de titres', photo: null },
    { id: 3, name: '', position: 'Responsable Négociation & Courtage', department: 'Exécution d\'ordres et Animation du marché BVMAC', photo: null },
    { id: 4, name: '', position: 'Responsable Conformité & Contrôle', department: 'Réglementation COSUMAF & Gestion des Risques', photo: null },
  ];

  const getInitials = (fullName) => fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

  // REAL PARTNER LOGOS FROM PUBLIC/IMAGES DIRECTORY
  // Seuls le nom et le logo sont confirmés ; pas de caractérisation du partenariat tant qu'elle n'est pas validée par OMYA INVEST.
  const officialPartners = [
    { id: 0, name: 'Groupe YAO CORP', logo: '/images/logo-yaocorp.png', website: 'https://www.yaocorp.com/' },
    { id: 1, name: 'Bamboo', logo: '/images/bambo.jpeg', website: 'https://www.bamboo-emf.com/' },
    { id: 2, name: 'BPC Bourse', logo: '/images/bpc-logo-png_seeklogo-381651.png' },
    { id: 3, name: 'Zoe', logo: '/images/zoe.jpeg' },
    { id: 4, name: 'BP', logo: '/images/Bp.jpeg', website: 'https://www.bp.com/' },
    { id: 5, name: 'CORRIDOR ASSET MANAGEMENT', logo: '/images/corridor.png' },
    { id: 6, name: 'STONE SHED ASSET MANAGEMENT', logo: '/images/mangement-asset.jpeg', website: 'https://www.stoneshed-am.com/' },
  ];

  // Smooth continuous rotation animation loop (60fps continuous globe orbit)
  useEffect(() => {
    if (!isRotating || modalPartner !== null) return;
    let animFrameId;
    const animateOrbit = () => {
      setRotationAngle((prev) => (prev + 0.35) % 360);
      animFrameId = requestAnimationFrame(animateOrbit);
    };
    animFrameId = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(animFrameId);
  }, [isRotating, modalPartner]);

  // Determine which partner is currently closest to the front viewer
  const getFrontPartnerIndex = () => {
    let closestIndex = 0;
    let maxScale = -1;
    officialPartners.forEach((_, idx) => {
      const angleOffset = (idx * 360) / officialPartners.length;
      const totalAngle = (rotationAngle + angleOffset) % 360;
      const rad = (totalAngle * Math.PI) / 180;
      const sinVal = Math.sin(rad);
      if (sinVal > maxScale) {
        maxScale = sinVal;
        closestIndex = idx;
      }
    });
    return closestIndex;
  };

  const activeIndex = hoveredPartner !== null ? hoveredPartner : getFrontPartnerIndex();
  const featuredPartner = officialPartners[activeIndex];

  const handlePartnerClick = (partner) => {
    setModalPartner(partner);
  };

  return (
    <section className="bg-[#F4F6FA] text-slate-800 relative overflow-hidden select-none">
      
      {/* ══════ 1. ÉQUIPE D'EXPERTS ══════ */}
      <div id="equipe" className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="section-tag-bvmac justify-center">
              <Users className="w-4 h-4 text-[#002E5B]" />
              <span>Gouvernance & Leadership</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Notre Équipe d'Experts Certifiés
            </h2>
            <p className="text-slate-600 text-sm font-poppins">
              Une équipe pluridisciplinaire d'ingénieurs financiers, de traders agréés et de juristes au service de vos opérations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.id * 0.08 }}
                className="bvmac-card p-8 flex flex-col items-center text-center group bg-white border border-[#D4DCE8] shadow-sm hover:shadow-lg transition-all"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name || member.position}
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#002E5B]/40 mb-5 group-hover:border-[#002E5B] transition-all shadow-inner"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#F4F6FA] border-2 border-[#002E5B]/40 flex items-center justify-center text-[#002E5B] mb-5 group-hover:border-[#002E5B] group-hover:bg-[#002E5B]/10 transition-all font-black text-xl font-nav shadow-inner">
                    {member.name ? getInitials(member.name) : <UserIcon className="w-9 h-9" />}
                  </div>
                )}

                <h3 className="text-base font-bold text-[#002E5B] group-hover:text-[#002E5B] transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {member.name || 'Nom à renseigner'}
                </h3>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002E5B] bg-[#EEF2F8] px-2.5 py-0.5 rounded-sm font-nav mt-1.5 border border-slate-200">
                  {member.position}
                </span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-poppins">
                  {member.department}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ══════ 2. PARTENAIRES SECTION : ORBITAL GLOBE AVEC OUVERTURE DE LOGO EN GRAND EN CLICK ══════ */}
      <div id="partenaires" className="py-24 bg-[#001D3D] text-white relative overflow-hidden border-t-2 border-[#FFFFFF]">
        
        {/* Background Glowing Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <div className="section-tag-light justify-center">
              <Handshake className="w-4 h-4 text-[#FFFFFF]" />
              <span>Réseau & Partenariats Certifiés</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Nos Partenaires en Rotation Continue
            </h2>
            <p className="text-slate-300 text-sm font-poppins">
              Cliquez sur un logo en orbite pour l'afficher en grand et découvrir ses détails.
            </p>
          </div>

          {/* Controls: Pause / Play rotation */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="px-4 py-1.5 rounded-full bg-[#002E5B] hover:bg-[#FFFFFF] hover:text-[#001D3D] transition text-xs font-nav uppercase font-bold flex items-center gap-2 border border-[#FFFFFF]/30"
            >
              {isRotating ? <Pause className="w-3.5 h-3.5 text-[#FFFFFF]" /> : <Play className="w-3.5 h-3.5 text-[#FFFFFF]" />}
              <span>{isRotating ? 'Mettre en pause l\'orbite' : 'Lancer l\'orbite continu'}</span>
            </button>
          </div>

          {/* ── 3D ORBITAL GLOBE CONTAINER ── */}
          <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center my-4">

            {/* Central Globe Sphere Core */}
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center p-6 sm:p-7 z-20">
              <OmyaLogo light={false} className="h-11 sm:h-14 w-auto" />
            </div>

            {/* Elliptical Orbit Ring Line */}
            <div
              className="absolute w-[320px] sm:w-[680px] h-[160px] sm:h-[220px] rounded-[50%] border-2 border-dashed border-[#FFFFFF]/30 pointer-events-none z-10"
              style={{ transform: 'rotateX(65deg)' }}
            />

            {/* REVOLVING PURE LOGO CONTAINERS (CLICK TO OPEN IN LARGE MODAL) */}
            {officialPartners.map((partner, idx) => {
              const count = officialPartners.length;
              const angleOffset = (idx * 360) / count;
              const totalAngle = (rotationAngle + angleOffset) % 360;
              const rad = (totalAngle * Math.PI) / 180;

              // 3D Orbital Trajectory Math
              const radiusX = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 320;
              const radiusY = typeof window !== 'undefined' && window.innerWidth < 640 ? 70 : 100;

              const posX = Math.cos(rad) * radiusX;
              const posY = Math.sin(rad) * radiusY;

              // Scale & Opacity based on depth (sin = front/back)
              const depthNorm = (Math.sin(rad) + 1) / 2; // 0 (back) to 1 (front)
              const scale = 0.75 + depthNorm * 0.35; // 0.75 to 1.1
              const opacity = 0.55 + depthNorm * 0.45; // 0.55 to 1.0
              const zIndex = Math.round(depthNorm * 100);

              const isHighlighted = activeIndex === idx;

              return (
                <div
                  key={partner.id}
                  onMouseEnter={() => {
                    setHoveredPartner(idx);
                  }}
                  onMouseLeave={() => {
                    setHoveredPartner(null);
                  }}
                  onClick={() => handlePartnerClick(partner)}
                  className="absolute cursor-pointer transition-transform duration-75 group"
                  style={{
                    transform: `translate3d(${posX}px, ${posY}px, 0px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isHighlighted ? 150 : zIndex,
                  }}
                >
                  {/* CLEAN LOGO CONTAINER (CLICKABLE FOR FULLSCREEN VIEW) */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 sm:p-2.5 flex items-center justify-center shadow-2xl transition-all duration-300 overflow-hidden ${
                    isHighlighted
                      ? 'border-2 border-[#FFFFFF] shadow-[0_0_35px_rgba(255, 255, 255,0.95)] scale-115 ring-4 ring-[#FFFFFF]/30'
                      : 'border-2 border-slate-300/80 hover:border-[#FFFFFF] hover:scale-110'
                  }`}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}

          </div>

          {/* ── ACTIVE FEATURED PARTNER DETAILS CARD BELOW THE GLOBE ── */}
          <div className="max-w-2xl mx-auto mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredPartner.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                onClick={() => handlePartnerClick(featuredPartner)}
                className="bvmac-card-dark p-6 border-l-4 border-l-[#FFFFFF] bg-[#002E5B]/95 backdrop-blur-md shadow-2xl text-center space-y-3 rounded-md cursor-pointer hover:border-[#FFFFFF] transition-all group"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center border-2 border-[#FFFFFF] shadow-md shrink-0 group-hover:scale-105 transition-transform">
                    <img
                      src={featuredPartner.logo}
                      alt={featuredPartner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFFFFF] font-nav">
                      Partenaire Officiel
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-[#FFFFFF] transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {featuredPartner.name}
                    </h3>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] font-bold text-[#FFFFFF] font-nav uppercase inline-flex items-center gap-1 group-hover:underline">
                    <span>Cliquer pour agrandir le logo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── CLEAN LOGO SELECTOR STRIP ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {officialPartners.map((partner, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={partner.id}
                  onClick={() => handlePartnerClick(partner)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-2.5 flex items-center justify-center transition-all duration-300 border ${
                    isActive
                      ? 'border-2 border-[#FFFFFF] shadow-[0_0_20px_rgba(255, 255, 255,0.8)] scale-110 ring-2 ring-[#FFFFFF]'
                      : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-[#FFFFFF]'
                  }`}
                  title={`${partner.name} - Cliquer pour agrandir`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* ══════ 3. LIGHTBOX MODAL DE LOGO EN GRAND ══════ */}
      <AnimatePresence>
        {modalPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#001D3D]/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setModalPartner(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#002E5B] border-2 border-[#FFFFFF] rounded-2xl max-w-xl w-full p-8 sm:p-10 relative shadow-[0_0_80px_rgba(255, 255, 255,0.4)] text-center text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalPartner(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#001D3D] text-slate-300 hover:text-white hover:bg-[#FFFFFF] hover:text-[#001D3D] transition flex items-center justify-center border border-[#FFFFFF]/30"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Logo Display Box */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-white p-6 mx-auto mb-6 flex items-center justify-center border-4 border-[#FFFFFF] shadow-2xl">
                <img
                  src={modalPartner.logo}
                  alt={modalPartner.name}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              {/* Partner Details */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFFFFF] font-nav bg-[#FFFFFF]/15 px-3.5 py-1 rounded-sm border border-[#FFFFFF]/30 inline-block mb-3">
                Partenaire Officiel
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {modalPartner.name}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-700">
                <a
                  href="#contact"
                  onClick={(e) => { handleLinkClick(e, '#contact'); setModalPartner(null); }}
                  className="btn-bvmac-primary text-xs"
                >
                  <span>Prendre contact au sujet de ce partenariat</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                {modalPartner.website && (
                  <a
                    href={modalPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bvmac-outline-white text-xs"
                  >
                    <span>Visiter le site officiel</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
