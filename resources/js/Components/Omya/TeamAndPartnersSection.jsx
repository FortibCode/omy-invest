import React, { useState, useEffect } from 'react';
import { Pause, Play, X, ArrowRight, ExternalLink, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { LinkedInIcon } from '@/Components/Omya/SocialIcons';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

// Membres de l'équipe — à compléter avec les vraies informations :
//   name     : nom complet (identique dans toutes les langues)
//   photo    : chemin de la photo portrait, ex. '/images/equipe/prenom-nom.jpg' (format portrait conseillé, ~800×1000px)
//   linkedin : URL du profil LinkedIn (optionnel)
// Le poste et le département sont traduits dans LanguageContext (t.team.positions / t.team.departments).
const TEAM_META = [
  { id: 1, name: '', photo: null, linkedin: null },
  { id: 2, name: '', photo: null, linkedin: null },
  { id: 3, name: '', photo: null, linkedin: null },
  { id: 4, name: '', photo: null, linkedin: null },
];

export default function TeamAndPartnersSection({ onSelectView }) {
  const { t } = useLanguage();
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [modalPartner, setModalPartner] = useState(null); // Selected partner for enlarged modal view

  const positionKeys = ['Direction Générale', 'Responsable Structuration', 'Responsable Négociation & Courtage', 'Responsable Conformité & Contrôle'];
  const departmentKeys = [
    'Gestion stratégique & Gouvernance institutionnelle',
    'Ingénierie financière & Émissions de titres',
    "Exécution d'ordres et Animation du marché BVMAC",
    'Réglementation COSUMAF & Gestion des Risques',
  ];
  const teamMembers = TEAM_META.map((meta, idx) => ({
    ...meta,
    position: t.team.positions[positionKeys[idx]],
    department: t.team.departments[departmentKeys[idx]],
  }));

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

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="section-tag-bvmac justify-center">
              <span>{t.team.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
              {t.team.title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {t.team.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-md sm:max-w-none mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8EEF6]">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name || member.position}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {member.name ? (
                        <span className="text-5xl font-bold text-[#002E5B]/60">
                          {getInitials(member.name)}
                        </span>
                      ) : (
                        <UserIcon className="w-20 h-20 text-[#002E5B]/20" strokeWidth={1.25} />
                      )}
                    </div>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn — ${member.name}`}
                      className="absolute bottom-4 right-4 w-9 h-9 rounded bg-white text-[#002E5B] flex items-center justify-center shadow hover:bg-[#002E5B] hover:text-white transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Identité */}
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-bold text-[#001D3D] leading-snug">
                    {member.name || t.team.nameNotSet}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#002E5B]">
                    {member.position}
                  </p>
                  <p className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-500 leading-relaxed">
                    {member.department}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>

      {/* ══════ 2. PARTENAIRES SECTION : ORBITAL GLOBE AVEC OUVERTURE DE LOGO EN GRAND EN CLICK ══════ */}
      <div id="partenaires" className="py-24 bg-[#001D3D] text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
            <div className="section-tag-light justify-center">
              <span>{t.team.partnersTag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              {t.team.partnersTitle}
            </h2>
            <p className="text-slate-300 text-base">
              {t.team.partnersDesc}
            </p>
          </div>

          {/* Controls: Pause / Play rotation */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="px-4 py-1.5 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/20"
            >
              {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isRotating ? t.team.pauseOrbit : t.team.playOrbit}</span>
            </button>
          </div>

          {/* ── ORBITE DES PARTENAIRES ── */}
          <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center my-4">

            {/* Logo OMYA au centre */}
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white shadow-lg flex items-center justify-center p-6 sm:p-7 z-20">
              <OmyaLogo light={false} className="h-11 sm:h-14 w-auto" />
            </div>

            {/* Trajectoire */}
            <div
              className="absolute w-[320px] sm:w-[680px] h-[160px] sm:h-[220px] rounded-[50%] border border-dashed border-white/20 pointer-events-none z-10"
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
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white p-2 sm:p-2.5 flex items-center justify-center shadow-md transition-shadow overflow-hidden ${
                    isHighlighted ? 'ring-4 ring-white/40' : ''
                  }`}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
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
                className="bvmac-card-dark p-6 cursor-pointer group"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-white p-2 flex items-center justify-center shrink-0">
                    <img
                      src={featuredPartner.logo}
                      alt={featuredPartner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm text-slate-300">
                      {t.team.officialPartner}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {featuredPartner.name}
                    </h3>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <span className="text-sm font-semibold text-white inline-flex items-center gap-1.5 group-hover:underline">
                    <span>{t.team.clickToEnlarge}</span>
                    <ArrowRight className="w-4 h-4" />
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
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-white p-2.5 flex items-center justify-center transition-opacity ${
                    isActive ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                  }`}
                  title={`${partner.name} - ${t.team.clickToEnlargeTitle}`}
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
            className="fixed inset-0 z-50 bg-[#001D3D]/80 flex items-center justify-center p-4"
            onClick={() => setModalPartner(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-lg w-full p-8 sm:p-10 relative shadow-xl text-center text-[#001D3D]"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalPartner(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 w-9 h-9 rounded-full text-slate-500 hover:text-[#001D3D] hover:bg-slate-100 transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-lg bg-white p-6 mx-auto mb-6 flex items-center justify-center border border-slate-200">
                <img
                  src={modalPartner.logo}
                  alt={modalPartner.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="block text-sm text-slate-500 mb-1">
                {t.team.officialPartner}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#002E5B] mb-8">
                {modalPartner.name}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={(e) => { handleLinkClick(e, '#contact'); setModalPartner(null); }}
                  className="btn-bvmac-primary"
                >
                  <span>{t.team.contactAboutPartnership}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                {modalPartner.website && (
                  <a
                    href={modalPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bvmac-outline"
                  >
                    <span>{t.team.visitOfficialSite}</span>
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
