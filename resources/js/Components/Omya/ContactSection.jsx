import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';

const CONTACT_ICONS = [MapPin, Phone, Mail, Clock];
const CONTACT_HREFS = [null, 'tel:+242066426989', 'mailto:contact@omya-invest.com', null];

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

  const contactInfos = t.contact.infoCards.map((card, idx) => ({
    ...card,
    icon: CONTACT_ICONS[idx],
    href: CONTACT_HREFS[idx],
  }));

  return (
    <section id="contact" className="py-28 bg-[#F4F6FA] text-slate-800 relative overflow-hidden border-t-4 border-t-[#002E5B] select-none">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#002E5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Title + Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="section-tag-bvmac">
                <Mail className="w-4 h-4 text-[#002E5B]" />
                <span>{t.contact.tag}</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-[#002E5B] leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {t.contact.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-poppins">
                {t.contact.desc}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfos.map((info, idx) => {
                const InfoIcon = info.icon;
                return (
                  <div key={idx} className="bvmac-card p-5 bg-white border border-slate-200 shadow-md flex items-start gap-3.5 group hover:border-[#002E5B] transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[#002E5B] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <InfoIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#001D3D] font-nav uppercase">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="block text-[11.5px] text-slate-700 font-semibold mt-0.5 font-poppins hover:text-[#002E5B] transition-colors">
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-[11.5px] text-slate-700 font-semibold mt-0.5 font-poppins">{info.detail}</p>
                      )}
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">{info.sub}</p>
                    </div>
                  </div>
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
            <div className="bg-white p-8 sm:p-12 border-2 border-slate-200 shadow-2xl rounded-2xl">

              <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-slate-200">
                <div className="w-11 h-11 rounded-lg bg-[#002E5B] text-white flex items-center justify-center shadow-md">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#001D3D] font-nav uppercase">{t.contact.formTitle}</h3>
                  <p className="text-xs text-slate-500 font-poppins">{t.contact.formSub}</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#002E5B]/10 text-[#002E5B] flex items-center justify-center mx-auto border-2 border-[#002E5B]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001D3D]" style={{ fontFamily: "'Open Sans', sans-serif" }}>{t.contact.sentTitle}</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-poppins">
                    {t.contact.sentDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-bvmac-outline text-xs mt-4"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#001D3D] mb-1.5 font-nav uppercase">{t.contact.labelNom}</label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder={t.contact.placeholderNom}
                        className="w-full bg-[#F4F6FA] border border-slate-300 rounded-md px-4 py-3 text-xs text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:bg-white transition font-poppins font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#001D3D] mb-1.5 font-nav uppercase">{t.contact.labelPrenom}</label>
                      <input
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        placeholder={t.contact.placeholderPrenom}
                        className="w-full bg-[#F4F6FA] border border-slate-300 rounded-md px-4 py-3 text-xs text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:bg-white transition font-poppins font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#001D3D] mb-1.5 font-nav uppercase">{t.contact.labelEmail}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.placeholderEmail}
                        className="w-full bg-[#F4F6FA] border border-slate-300 rounded-md px-4 py-3 text-xs text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:bg-white transition font-poppins font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#001D3D] mb-1.5 font-nav uppercase">{t.contact.labelTelephone}</label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder={t.contact.placeholderTelephone}
                        className="w-full bg-[#F4F6FA] border border-slate-300 rounded-md px-4 py-3 text-xs text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:bg-white transition font-poppins font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001D3D] mb-1.5 font-nav uppercase">{t.contact.labelObjet}</label>
                    <select
                      required
                      value={formData.objet}
                      onChange={(e) => setFormData({ ...formData, objet: e.target.value })}
                      className="w-full bg-[#F4F6FA] border border-slate-300 rounded-md px-4 py-3 text-xs text-[#001D3D] focus:outline-none focus:border-[#002E5B] focus:bg-white transition font-poppins font-medium"
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
                    <label className="block text-xs font-bold text-[#001D3D] mb-1.5 font-nav uppercase">{t.contact.labelMessage}</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.placeholderMessage}
                      className="w-full bg-[#F4F6FA] border border-slate-300 rounded-md px-4 py-3 text-xs text-[#001D3D] placeholder-slate-400 focus:outline-none focus:border-[#002E5B] focus:bg-white transition resize-none font-poppins font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-bvmac-primary w-full justify-center text-xs py-3.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitBtn}</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center font-poppins">
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
