import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

const CONTACT_ICONS = [MapPin, Phone, Mail];
const CONTACT_HREFS = [null, 'tel:+242066426989', 'mailto:contact@omya-invest.com'];

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfos = t.contact.infoCards.slice(0, 3).map((card, idx) => ({
    ...card,
    icon: CONTACT_ICONS[idx],
    href: CONTACT_HREFS[idx],
  }));

  return (
    <section id="contact" className="py-24 bg-[#F4F6FA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Title + Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-5">
              <div className="section-tag-bvmac">
                <span>{t.contact.tag}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {t.contact.desc}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3.5">
              {contactInfos.map((info, idx) => {
                const InfoIcon = info.icon;
                const CardTag = info.href ? 'a' : 'div';
                return (
                  <CardTag
                    key={idx}
                    {...(info.href ? { href: info.href } : {})}
                    className="bvmac-card p-6 flex items-center gap-5 group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#002E5B] text-white flex items-center justify-center shrink-0">
                      <InfoIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm text-slate-500">{info.title}</h4>
                      <p className="text-base text-[#001D3D] font-bold mt-1 leading-snug group-hover:text-[#002E5B] transition-colors">
                        {info.detail}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{info.sub}</p>
                    </div>
                    {info.href && (
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#002E5B] transition-colors shrink-0" />
                    )}
                  </CardTag>
                );
              })}
            </div>

          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm rounded-lg">

              <div className="mb-8 pb-6 border-b border-slate-200">
                <h3 className="text-2xl font-bold text-[#001D3D]">{t.contact.formTitle}</h3>
                <p className="text-slate-500 mt-1">{t.contact.formSub}</p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#002E5B]/10 text-[#002E5B] flex items-center justify-center mx-auto border-2 border-[#002E5B]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001D3D]">{t.contact.sentTitle}</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {t.contact.sentDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-bvmac-outline text-sm mt-4"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#001D3D] mb-2">{t.contact.labelNom}</label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder={t.contact.placeholderNom}
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3.5 text-sm text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#001D3D] mb-2">{t.contact.labelPrenom}</label>
                      <input
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        placeholder={t.contact.placeholderPrenom}
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3.5 text-sm text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#001D3D] mb-2">{t.contact.labelEmail}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.placeholderEmail}
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3.5 text-sm text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#001D3D] mb-2">{t.contact.labelTelephone}</label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder={t.contact.placeholderTelephone}
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3.5 text-sm text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001D3D] mb-2">{t.contact.labelObjet}</label>
                    <select
                      required
                      value={formData.objet}
                      onChange={(e) => setFormData({ ...formData, objet: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-md px-4 py-3.5 text-sm text-[#001D3D] focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 focus:bg-white transition"
                    >
                      <option value="">{t.contact.objetPlaceholder}</option>
                      <option value="investir">{t.contact.objetInvestir}</option>
                      <option value="financer">{t.contact.objetFinancer}</option>
                      <option value="partenaire">{t.contact.objetPartenaire}</option>
                      <option value="gestion">{t.contact.objetGestion}</option>
                      <option value="autre">{t.contact.objetAutre}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001D3D] mb-2">{t.contact.labelMessage}</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.placeholderMessage}
                      className="w-full bg-white border border-slate-300 rounded-md px-4 py-3.5 text-sm text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:ring-2 focus:ring-[#002E5B]/15 focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-bvmac-primary w-full justify-center text-sm py-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitBtn}</span>
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    {t.contact.privacyNote}
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
