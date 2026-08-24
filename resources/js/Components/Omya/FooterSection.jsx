import React from 'react';
import { ShieldCheck, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { LinkedInIcon, XIcon, FacebookIcon, YouTubeIcon } from '@/Components/Omya/SocialIcons';
import { resolveAnchor } from '@/utils/viewAnchors';

export default function FooterSection({ onSelectView }) {
  const year = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const solutionsLinks = [
    { label: 'Structuration financière', href: '#solutions-structuration' },
    { label: 'Développement d\'affaires', href: '#solutions-developpement' },
    { label: 'Placements financiers', href: '#solutions-placements' },
    { label: 'Conseil en financement', href: '#solutions-conseil' },
    { label: 'Exécution d\'ordre', href: '#solutions-execution' },
    { label: 'Conservation & tenue de compte-titre', href: '#solutions-conservation' },
    { label: 'Gestion de portefeuille', href: '#solutions-gestion' },
  ];

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos & Agrément', href: '#presentation' },
    { label: 'Notre Mission', href: '#mission' },
    { label: 'Notre Vision', href: '#vision' },
    { label: 'Nos Valeurs', href: '#valeurs' },
    { label: 'Nos Cibles', href: '#cibles' },
    { label: 'Équipe & Partenaires', href: '#equipe' },
  ];

  const marketLinks = [
    { label: 'Marché Financier CEMAC', href: '#marche-financier' },
    { label: 'Parcours Investir', href: '#investir' },
    { label: 'Parcours Financer', href: '#financer' },
    { label: 'Partenaires Officiels', href: '#partenaires' },
    { label: 'Actualités & Communiqués', href: '#actualites' },
    { label: 'Centre de Documentation', href: '#documents' },
    { label: 'Contact & Support', href: '#contact' },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
    { icon: XIcon, label: 'X (Twitter)', href: '#' },
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
    { icon: YouTubeIcon, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-white text-slate-700 text-sm border-t-2 border-slate-200 select-none">

      {/* MAIN FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#accueil" onClick={(e) => handleLinkClick(e, '#accueil')} className="inline-block">
              <OmyaLogo light={false} className="h-10 w-auto" />
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xs font-poppins">
              <strong className="text-[#002E5B] italic font-serif-luxury block mb-1">
                « Vos capitaux méritent mieux qu'un compte qui dort. »
              </strong>
              OMYA INVEST connecte les agents à besoin de financement et les agents à capacité de financement de la zone CEMAC et du reste du monde.
            </p>

            {/* Contact mini infos */}
            <div className="space-y-2.5 pt-2 text-sm text-slate-600 font-poppins">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#002E5B] shrink-0 mt-0.5" />
                <span>76 Avenue Amilcar Cabral, Centre-ville, Immeuble Villarecci, en face du Radisson — Brazzaville</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#002E5B] shrink-0" />
                <a href="tel:+242066426989" className="hover:text-[#002E5B] transition-colors">+242 06 642 69 89</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#002E5B] shrink-0" />
                <a href="mailto:contact@omya-invest.com" className="hover:text-[#002E5B] transition-colors">contact@omya-invest.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className="w-9 h-9 rounded-lg bg-[#F4F6FA] border border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#002E5B] transition-all shadow-sm"
                  >
                    <SocialIcon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Column 1: Navigation ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#002E5B] uppercase tracking-wider border-b border-slate-200 pb-3 font-nav">
              Institution
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-600 hover:text-[#002E5B] font-medium transition-colors inline-flex items-center gap-1.5 group font-poppins"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-[#002E5B] transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 2: Solutions ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#002E5B] uppercase tracking-wider border-b border-slate-200 pb-3 font-nav">
              Nos Solutions
            </h4>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-600 hover:text-[#002E5B] font-medium transition-colors inline-flex items-center gap-1.5 group font-poppins"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-[#002E5B] transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Market & Press ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#002E5B] uppercase tracking-wider border-b border-slate-200 pb-3 font-nav">
              Marché & Presse
            </h4>
            <ul className="space-y-2">
              {marketLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-600 hover:text-[#002E5B] font-medium transition-colors inline-flex items-center gap-1.5 group font-poppins"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-[#002E5B] transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Newsletter Placeholder */}
            <div className="pt-4 mt-2 border-t border-slate-200">
              <p className="text-xs text-slate-500 mb-2 font-poppins">Restez informé des opportunités de marché :</p>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-bvmac-primary text-xs w-full justify-center py-2.5">
                <span>Abonnement Newsletter</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="bg-[#F4F6FA] py-5 px-4 border-t border-slate-200 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-poppins">
            © {year} <strong className="text-[#002E5B]">OMYA INVEST</strong> — Tous droits réservés.
            Filiale du Groupe <strong className="text-[#002E5B]">YAO CORP</strong>. Agréée par la COSUMAF.
          </p>
          <div className="flex items-center gap-3 font-poppins">
            <span className="hover:text-[#002E5B] cursor-pointer transition">Avis Réglementaire COSUMAF-SDB-01/2025</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#002E5B] cursor-pointer transition">Politique de Confidentialité</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#002E5B] cursor-pointer transition">Mentions Légales</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
