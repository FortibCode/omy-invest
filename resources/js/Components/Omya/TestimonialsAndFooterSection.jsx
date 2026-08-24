import React, { useState, useEffect } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send, ChevronLeft, ChevronRight, Quote, Star,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import {
  fadeInUp, staggerContainer, staggerItem, viewport, viewportLarge,
} from '@/utils/animations';

const socialLinks = [
  { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

/* ── Slide variants ── */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.35 },
  }),
};

export default function TestimonialsAndFooterSection() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      quote: "OMYA INVEST nous accompagne depuis plusieurs années dans la gestion de notre portefeuille avec un professionnalisme, une réactivité et une transparence exemplaires.",
      author: "Jean-Baptiste Mboumba",
      role: "Directeur Financier, Groupe SABC",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Grâce aux conseils stratégiques de l'équipe OMYA, nous avons pu optimiser nos placements et surpasser nos objectifs de rendement.",
      author: "Marie-Claire Dupont",
      role: "Investisseuse Privée & Gestionnaire de Fonds",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Une équipe à l'écoute, réactive et hautement qualifiée. Leur structuration de notre projet obligataire a été menée avec succès.",
      author: "Alain Kouadio",
      role: "PDG, Groupe HÉVÉA Industrie",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "L'accès direct aux titres BVMAC et l'accompagnement personnalisé font d'OMYA INVEST la référence de la finance en Afrique Centrale.",
      author: "Sylvie Ndong",
      role: "Directrice des Trésoreries, Bank Alliance",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveTestimonial((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const goTo = (idx) => {
    setDirection(idx > activeTestimonial ? 1 : -1);
    setActiveTestimonial(idx);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [activeTestimonial]);

  const footerLinks = [
    { href: '#', label: t.navHome || 'Accueil' },
    { href: '#actualites', label: t.navNews || 'Actualités' },
    { href: '#a-propos', label: 'À Propos' },
    { href: '#services', label: 'Services' },
    { href: '#marches', label: t.marketsTitle || 'Marchés' },
    { href: '#contact', label: 'Contact' },
  ];

  const footerServices = [
    'Société de Bourse',
    'Gestion de Patrimoine',
    'Conseil Financier',
    'Investissements CEMAC',
    'Analyse de Marché',
    'Gestion d\'Actifs',
  ];

  return (
    <>
      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section-light py-24 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="section-tag">{t.testimonialsTag || "Confiance & Satisfaction"}</span>
            <h2 className="section-title mt-2">{t.testimonialsTitle || 'Ce Que Disent Nos Clients'}</h2>
          </motion.div>

          {/* 3-up grid + featured */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Featured testimonial (large) */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeTestimonial}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="consult-card p-8 relative"
                    style={{ borderLeft: '4px solid #0EA5E9' }}
                  >
                    {/* Quote icon */}
                    <Quote className="w-10 h-10 text-sky-200 absolute top-6 right-6" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -30 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.05 * i, type: 'spring', stiffness: 300 }}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-gray-600 text-base italic leading-relaxed mb-6">
                      "{testimonials[activeTestimonial].quote}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <motion.img
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-sky-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                      />
                      <div>
                        <div className="font-black text-gray-800 text-sm">
                          {testimonials[activeTestimonial].author}
                        </div>
                        <div className="text-xs text-sky-500 font-semibold">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-5">
                <motion.button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-sky-500 hover:text-sky-500 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        activeTestimonial === i
                          ? 'w-8 h-2.5 bg-sky-500'
                          : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.3 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-sky-500 hover:text-sky-500 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Side: other testimonials mini */}
            <motion.div
              className="space-y-4"
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {testimonials.filter((_, i) => i !== activeTestimonial).slice(0, 2).map((test, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="consult-card p-5 cursor-pointer"
                  whileHover={{ borderLeftColor: '#0EA5E9', borderLeftWidth: '3px' }}
                  onClick={() => goTo(testimonials.indexOf(test))}
                >
                  <div className="flex gap-1 mb-2">
                    {[...Array(test.rating)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs italic leading-relaxed mb-3 line-clamp-3">
                    "{test.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <img src={test.image} alt={test.author} className="w-8 h-8 rounded-full object-cover border border-sky-300" />
                    <div>
                      <div className="text-xs font-black text-gray-700">{test.author}</div>
                      <div className="text-[10px] text-sky-500">{test.role.split(',')[0]}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Team photo card */}
              <motion.div
                className="consult-card overflow-hidden relative h-40"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                  alt="Équipe OMYA INVEST"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/90 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="text-white font-black text-sm">{t.ourTeamTitle || "Notre Équipe d'Experts"}</div>
                  <div className="text-sky-400 text-xs font-semibold">Brazzaville — Congo</div>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {t.availableBadge || "Disponible"}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════ CTA BANNER ══════ */}
      <section className="cta-banner py-20 relative">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                {t.ctaTitle || "Parlons de Vos Objectifs Financiers & Obtenez une"}{' '}
                <span style={{ color: '#0EA5E9' }}>{t.ctaTitleAccent || "Consultation Gratuite"}</span>
              </h2>
              <p className="text-sky-300 leading-relaxed text-base">
                {t.ctaDesc || "Nos experts certifiés COSUMAF sont disponibles pour analyser votre situation et vous proposer une stratégie d'investissement adaptée à vos objectifs."}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={viewport}
            >
              <motion.a
                href="#contact"
                className="btn-orange flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.getConsultation || "Obtenir une Consultation"}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#rendez-vous"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3 rounded-lg hover:bg-white/10 hover:border-white/70 transition"
                whileHover={{ scale: 1.04 }}
              >
                {t.bookAppointment || "Prendre Rendez-vous"}
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════ FOOTER — Navy ══════ */}
      <footer className="pt-16 pb-8" style={{ background: '#0C4A6E' }} id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10"
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLarge}
          >
            {/* Col 1: Brand */}
            <motion.div variants={staggerItem} className="space-y-4">
              <OmyaLogo light={true} className="h-10" />
              <p className="text-sky-400 text-sm leading-relaxed">
                OMYA INVEST, votre partenaire de confiance pour investir avec sérénité et performance sur les marchés CEMAC.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, path }) => (
                  <motion.a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 hover:text-sky-400 hover:border-sky-400/50 transition"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d={path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Col 2: Quick Links */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                {t.quickLinks || 'Liens Rapides'}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href={link.href}
                      className="flex items-center gap-2 text-sky-400 text-sm hover:text-sky-400 transition font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 3: Services */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                {t.servicesLinks || "Services"}
              </h3>
              <ul className="space-y-2.5">
                {footerServices.map((svc, i) => (
                  <li key={i}>
                    <motion.a
                      href="#services"
                      className="flex items-center gap-2 text-sky-400 text-sm hover:text-sky-400 transition font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      {svc}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 4: Contact + Hours */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                {t.addressHoursTitle || "Adresse & Horaires"}
              </h3>
              <div className="space-y-3 text-sm text-sky-400">
                <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }}>
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Avenue Amilcar Cabral, Centre-ville, Brazzaville — Congo</span>
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 3 }}>
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>+242 06 123 45 67</span>
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 3 }}>
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>contact@omya-invest.com</span>
                </motion.div>
              </div>

              <div className="pt-1 border-t border-white/10">
                <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">{t.openDaysTitle || "Jours Ouverts"}</h4>
                <p className="text-sky-400 text-sm flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  {t.openDaysValue || "Lun – Ven : 08h00 – 17h00"}
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Sub-footer */}
          <motion.div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={viewport}
          >
            <div>{t.footerRights || '© 2024 OMYA INVEST. Tous droits réservés.'}</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sky-400 transition">{t.legalMentions || 'Mentions Légales'}</a>
              <span>|</span>
              <a href="#" className="hover:text-sky-400 transition">{t.privacyPolicy || 'Confidentialité'}</a>
              <span>|</span>
              <a href="#" className="hover:text-sky-400 transition">{t.siteMap || 'Plan du Site'}</a>
            </div>
          </motion.div>

        </div>
      </footer>
    </>
  );
}
