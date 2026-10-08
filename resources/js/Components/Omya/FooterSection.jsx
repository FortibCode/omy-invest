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

function LinkColumn({ column, onClick }) {
  return (
    <nav className="space-y-4">
      <h4 className="text-sm font-bold text-white">{column.title}</h4>
      <ul className="space-y-2.5">
        {column.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => onClick(e, link.href)}
              className="text-[15px] text-white/65 hover:text-[#9CCBEB] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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
    <footer className="bg-[#1C2430] text-white/65">

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">

        {/* Marque au centre : logo, signature, réseaux sociaux */}
        <div className="flex flex-col items-center text-center">
          <a href="#accueil" onClick={(e) => handleLinkClick(e, '#accueil')} className="inline-block">
            <OmyaLogo light className="h-16 sm:h-20 w-auto" />
          </a>
          <p className="mt-6 text-lg sm:text-xl font-semibold text-white leading-snug">{t.footer.tagline}</p>
          <p className="mt-3 max-w-xl text-[15px] text-white/65 leading-relaxed">{t.footer.brandDesc}</p>

          <div className="mt-6 flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="w-9 h-9 rounded-md border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#9CCBEB] hover:border-[#9CCBEB] hover:text-[#1C2430] transition-colors"
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Colonnes : contact + liens, réparties régulièrement */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] gap-10">
          <div className="space-y-4 max-w-[320px]">
            <h4 className="text-sm font-bold text-white">{t.footer.colContact}</h4>
            <ul className="space-y-2.5 text-[15px] text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9CCBEB] shrink-0 mt-1" />
                <span>{t.contact.infoCards[0].detail}, {t.contact.infoCards[0].sub}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9CCBEB] shrink-0" />
                <a href="tel:+242066426989" className="hover:text-[#9CCBEB] transition-colors">{t.contact.infoCards[1].detail}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9CCBEB] shrink-0" />
                <a href="mailto:contact@omya-invest.com" className="hover:text-[#9CCBEB] transition-colors">{t.contact.infoCards[2].detail}</a>
              </li>
            </ul>
          </div>
          {columns.map((column) => (
            <LinkColumn key={column.title} column={column} onClick={handleLinkClick} />
          ))}
        </div>
      </div>

      {/* Mentions */}
      <div className="bg-[#151B24]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/45 text-center sm:text-left">
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
