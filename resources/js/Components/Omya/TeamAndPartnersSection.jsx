import React from 'react';
import { User as UserIcon } from 'lucide-react';
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

  return (
    <section className="bg-[#F4F6FA] text-slate-800 relative overflow-hidden select-none">
      
      {/* ══════ ÉQUIPE D'EXPERTS ══════ */}
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

    </section>
  );
}
