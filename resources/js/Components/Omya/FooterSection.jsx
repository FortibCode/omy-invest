import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { LinkedInIcon, XIcon, FacebookIcon, YouTubeIcon } from '@/Components/Omya/SocialIcons';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

const SOCIAL_LINKS = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: XIcon, label: 'X (Twitter)', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: YouTubeIcon, label: 'YouTube', href: '#' },
];

export default function FooterSection({ onSelectView }) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const columns = [
    { title: t.footer.colInstitution, links: t.footer.navLinks },
    { title: t.footer.colSolutions, links: t.footer.solutionsLinks },
    { title: t.footer.colMarket, links: t.footer.marketLinks },
  ];

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Marque et coordonnées */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#accueil" onClick={(e) => handleLinkClick(e, '#accueil')} className="inline-block">
              <OmyaLogo light={false} className="h-10 w-auto" />
            </a>

            <div className="max-w-sm space-y-2">
              {/* Signature de marque, rattachée au logo */}
              <p className="text-lg font-semibold text-[#002E5B] leading-snug text-balance">{t.footer.tagline}</p>
              <p className="text-[15px] text-slate-600 leading-relaxed">{t.footer.brandDesc}</p>
            </div>

            <ul className="space-y-2.5 text-[15px] text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#002E5B] shrink-0 mt-1" />
                <span>{t.contact.infoCards[0].detail}, {t.contact.infoCards[0].sub}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#002E5B] shrink-0" />
                <a href="tel:+242066426989" className="hover:text-[#002E5B] transition-colors">{t.contact.infoCards[1].detail}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#002E5B] shrink-0" />
                <a href="mailto:contact@omya-invest.com" className="hover:text-[#002E5B] transition-colors">{t.contact.infoCards[2].detail}</a>
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#002E5B] hover:border-[#002E5B] transition-colors"
                  >
                    <SocialIcon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Colonnes de liens */}
          {columns.map((column) => (
            <nav key={column.title} className="space-y-4">
              <h4 className="text-sm font-bold text-[#001D3D]">{column.title}</h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-[15px] text-slate-600 hover:text-[#002E5B] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

        </div>
      </div>

      {/* Mentions */}
      <div className="border-t border-slate-200 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 text-center sm:text-left">
          <p>{t.footer.rightsText(year)}</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>{t.footer.legalNotice}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.privacyPolicy}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.legalMentions}</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
