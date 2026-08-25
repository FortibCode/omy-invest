import React from 'react';
import { ShieldCheck, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { LinkedInIcon, XIcon, FacebookIcon, YouTubeIcon } from '@/Components/Omya/SocialIcons';
import { resolveAnchor } from '@/utils/viewAnchors';
import { useLanguage } from '@/Context/LanguageContext';

export default function FooterSection({ onSelectView }) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const { viewId, anchorId } = resolveAnchor(href);
    if (onSelectView) onSelectView(viewId, anchorId);
  };

  const solutionsLinks = t.footer.solutionsLinks;
  const navLinks = t.footer.navLinks;
  const marketLinks = t.footer.marketLinks;

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
                {t.footer.tagline}
              </strong>
              {t.footer.brandDesc}
            </p>

            {/* Contact mini infos */}
            <div className="space-y-2.5 pt-2 text-sm text-slate-600 font-poppins">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#002E5B] shrink-0 mt-0.5" />
                <span>{t.contact.infoCards[0].detail}, {t.contact.infoCards[0].sub}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#002E5B] shrink-0" />
                <a href="tel:+242066426989" className="hover:text-[#002E5B] transition-colors">{t.contact.infoCards[1].detail}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#002E5B] shrink-0" />
                <a href="mailto:contact@omya-invest.com" className="hover:text-[#002E5B] transition-colors">{t.contact.infoCards[2].detail}</a>
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
              {t.footer.colInstitution}
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
              {t.footer.colSolutions}
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
              {t.footer.colMarket}
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
              <p className="text-xs text-slate-500 mb-2 font-poppins">{t.footer.newsletterText}</p>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-bvmac-primary text-xs w-full justify-center py-2.5">
                <span>{t.footer.newsletterBtn}</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="bg-[#F4F6FA] py-5 px-4 border-t border-slate-200 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-poppins">
            {t.footer.rightsText(year)}
          </p>
          <div className="flex items-center gap-3 font-poppins">
            <span className="hover:text-[#002E5B] cursor-pointer transition">{t.footer.legalNotice}</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#002E5B] cursor-pointer transition">{t.footer.privacyPolicy}</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#002E5B] cursor-pointer transition">{t.footer.legalMentions}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
