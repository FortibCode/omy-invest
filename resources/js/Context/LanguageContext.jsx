import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'FR', label: 'Français', short: 'FR' },
  { code: 'EN', label: 'English', short: 'EN' },
  { code: 'PT', label: 'Português', short: 'PT' },
];

export const translations = {
  FR: {
    // ── Header, Auth Modal & generic UI (existant, conservé) ──
    clientSpace: "Espace client",
    memberSpace: "Espace membre",
    login: "Se connecter",
    register: "S'inscrire",
    language: "Français",
    languageSelect: "Langue",

    authModalLoginTitle: "Accéder à votre espace",
    authModalRegisterTitle: "Créer votre compte",
    authModalLoginDesc: "Connectez-vous pour suivre vos investissements et gérer votre portefeuille.",
    authModalRegisterDesc: "Rejoignez OMYA INVEST et accédez aux opportunités boursières.",
    orByEmail: "ou par email",
    fullName: "Nom complet",
    emailAddr: "Adresse e-mail",
    passwordLabel: "Mot de passe",
    passwordConfirm: "Confirmer le mot de passe",
    forgotPass: "Oublié ?",
    investorType: "Type d'investisseur",
    particulier: "Investisseur particulier",
    corporate: "Entreprise / Institutionnel",
    rememberMe: "Se souvenir de moi",
    acceptTerms: "J'accepte les conditions d'utilisation",
    submitLogin: "Se connecter",
    submitRegister: "S'inscrire",

    common: {
      precedent: "Précédent",
      suivant: "Suivant",
      pause: "Pause",
      lecture: "Lecture",
      play: "Play",
      enSavoirPlus: "En savoir plus",
      voirTout: "Voir tout",
    },

    // ── Barre des onglets (Rubrique) ──
    viewTabs: [
      { id: 'accueil', label: 'Accueil' },
      { id: 'a-propos', label: 'À propos' },
      { id: 'nos-solutions', label: 'Nos solutions' },
      { id: 'investir', label: 'Investir' },
      { id: 'financer', label: 'Financer' },
      { id: 'partenaires', label: 'Partenaires' },
      { id: 'marche-financier', label: 'Marché CEMAC' },
      { id: 'actualites-documents', label: 'Presse & Doc' },
      { id: 'contact', label: 'Contact' },
    ],

    // ── HeaderNav ──
    headerNav: {
      espaceClient: "Espace client",
      solutionsMegaAgrement: "Agrément COSUMAF-SDB-01/2025",
      solutionsMegaTitle: "Nos 7 services",
      solutionsMegaSeeAll: "Voir tout",
      items: [
        { id: 'accueil', label: 'Accueil', href: '#accueil' },
        {
          id: 'a-propos', label: 'À propos', href: '#presentation',
          dropdownItems: [
            { label: 'Présentation', desc: 'Agrément COSUMAF et groupe YAO CORP', href: '#presentation' },
            { label: 'Notre mission', desc: 'Personnes morales et personnes physiques', href: '#mission' },
            { label: 'Notre vision', desc: 'Nos trois ambitions', href: '#vision' },
            { label: 'Nos valeurs', desc: 'Intégrité, rigueur, proximité, engagement', href: '#valeurs' },
            { label: 'Nos cibles', desc: 'Entreprises, institutionnels, PME, particuliers', href: '#cibles' },
          ],
        },
        { id: 'nos-solutions', label: 'Nos solutions', href: '#nos-solutions' },
        {
          id: 'investir', label: 'Investir', href: '#investir',
          dropdownItems: [
            { label: 'Pourquoi investir ?', desc: 'Optimiser et sécuriser votre capital', href: '#pourquoi-investir' },
            { label: 'Placements financiers', desc: 'Titres cotés sur le marché CEMAC', href: '#solutions-placements' },
            { label: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire et conseil', href: '#solutions-gestion' },
            { label: "Exécution d'ordres", desc: 'Achat et vente de titres à la BVMAC', href: '#solutions-execution' },
            { label: 'Comprendre la bourse', desc: "L'essentiel avant d'investir", href: '#marche-financier' },
          ],
        },
        {
          id: 'financer', label: 'Financer', href: '#financer',
          dropdownItems: [
            { label: 'Besoin de financement ?', desc: 'Lever des capitaux sur le marché', href: '#besoin-financement' },
            { label: 'Structuration financière', desc: 'Montage des opérations des émetteurs', href: '#solutions-structuration' },
            { label: 'Emprunt obligataire', desc: 'Levée de fonds sur le marché obligataire', href: '#emprunt-obligataire' },
            { label: 'Ouverture du capital', desc: 'Introduction en bourse, augmentation de capital', href: '#ouverture-capital' },
            { label: 'Conseil en financement', desc: 'Conseil aux émetteurs et aux investisseurs', href: '#solutions-conseil' },
          ],
        },
        { id: 'partenaires', label: 'Partenaires', href: '#partenaires' },
        {
          id: 'marche-financier', label: 'Marché financier', href: '#marche-financier',
          dropdownItems: [
            { label: 'Comprendre le marché CEMAC', desc: 'Organisation et rôle de la COSUMAF', href: '#marche-cemac' },
            { label: 'Actions', desc: 'Titres de propriété cotés sur la BVMAC', href: '#instruments-actions' },
            { label: 'Obligations', desc: "Titres de créances d'États et entreprises", href: '#instruments-obligations' },
            { label: 'Éducation financière', desc: "Comprendre avant d'investir", href: '#education-financiere' },
          ],
        },
        {
          id: 'actualites-documents', label: 'Presse & Doc', href: '#actualites',
          dropdownItems: [
            { label: 'Actualités', desc: "Les nouvelles d'OMYA INVEST", href: '#actualites-recents' },
            { label: 'Publications', desc: 'Analyses et notes de marché', href: '#publications' },
            { label: 'Communiqués', desc: "Annonces officielles d'OMYA INVEST", href: '#communiques' },
            { label: 'Documents', desc: 'Règlements, prospectus, formulaires', href: '#documents' },
          ],
        },
        { id: 'contact', label: 'Contact', href: '#contact' },
      ],
      solutionsCol1: [
        { num: '01', title: 'Structuration financière', desc: "Montage d'opérations obligataires et d'ouverture du capital", viewId: 'nos-solutions', href: '#solutions-structuration' },
        { num: '02', title: "Développement d'affaires", desc: 'Accompagnement des États, entreprises et institutionnels', viewId: 'nos-solutions', href: '#solutions-developpement' },
        { num: '03', title: 'Placements financiers', desc: 'Placer les actifs sur le marché des capitaux CEMAC', viewId: 'investir', href: '#solutions-placements' },
        { num: '04', title: 'Conseil en financement', desc: 'Conseil aux émetteurs et aux investisseurs', viewId: 'financer', href: '#solutions-conseil' },
      ],
      solutionsCol2: [
        { num: '05', title: "Exécution d'ordre", desc: "Ordres d'achat et de vente des titres", viewId: 'investir', href: '#solutions-execution' },
        { num: '06', title: 'Conservation et compte-titres', desc: 'Agréé par le dépositaire central unique (BEAC)', viewId: 'nos-solutions', href: '#solutions-conservation' },
        { num: '07', title: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire et conseil en investissement', viewId: 'investir', href: '#solutions-gestion' },
      ],
    },

    // ── Hero (page d'accueil) ──
    hero: {
      slides: [
        {
          titleLine1: 'Vos capitaux méritent', titleHighlight: 'mieux', titleLine2: "qu'un compte qui dort.",
          description: "OMYA INVEST connecte d'une part, les agents à besoin de financement (États, entreprises et institutionnels) de la zone CEMAC, et d'autre part, les agents à capacité de financement (particuliers/personnes physiques, États, les entreprises et les investisseurs institutionnels) de la CEMAC et du reste du monde.",
          primaryBtnText: 'Je souhaite investir', secondaryBtnText: 'Je recherche un financement', category: 'OMYA INVEST',
        },
        {
          titleLine1: 'Vous souhaitez', titleHighlight: 'investir ?', titleLine2: '',
          description: "Pour les agents à capacité de financement : OMYA INVEST vous accompagne (en fonction de vos besoins, de vos objectifs, de vos contraintes et de votre horizon temporel) vers les placements les plus sûrs et les plus rentables.",
          primaryBtnText: 'Découvrir nos solutions', secondaryBtnText: 'Nos 7 services', category: 'Investir',
        },
        {
          titleLine1: 'Vous recherchez un', titleHighlight: 'financement ?', titleLine2: '',
          description: "Pour les agents à besoin de financement : OMYA INVEST structure pour vous les opérations d'emprunt obligataire, d'ouverture du capital et de financement structuré.",
          primaryBtnText: 'Présenter mon projet', secondaryBtnText: 'Structuration financière', category: 'Financer',
        },
        {
          titleLine1: 'Devenez', titleHighlight: 'partenaire', titleLine2: "d'OMYA INVEST.",
          description: "OMYA INVEST accueille les apporteurs d'affaires et des partenaires fiables et dont les apports cadrent avec ses activités.",
          primaryBtnText: 'Devenir partenaire', secondaryBtnText: 'Nos partenaires', category: 'Partenaires',
        },
      ],
      prevSlide: 'Diapositive précédente',
      nextSlide: 'Diapositive suivante',
      pauseAuto: 'Mettre en pause',
      playAuto: 'Lecture automatique',
    },

    // ── À propos ──
    about: {
      tag: "À propos d'OMYA INVEST",
      title: 'Une société de bourse agréée sur le marché financier de la CEMAC',
      p1Before: '',
      p1: "OMYA INVEST, filiale du groupe YAO CORP, est une société de bourse agréée par la Commission de Surveillance du Marché Financier de l'Afrique Centrale (COSUMAF) sous le numéro d'agrément",
      p2: "Basée à Brazzaville (République du Congo), elle intervient sur l'ensemble du marché financier régional CEMAC, au service des États, des entreprises publiques et privées, des institutionnels ainsi que particuliers.",
      p3: "Ses activités couvrent : le courtage des titres financiers, la structuration financière et le développement d'affaires institutionnel.",
      activity1: 'Courtage de titres',
      activity2: 'Structuration',
      activity3: 'Développement',
      ctaBtn: 'Découvrir nos services',
      agreementLabel: 'Agrément COSUMAF',
      zoneLabel: 'Zone CEMAC',
      photoAlt: 'OMYA INVEST — Société de Bourse COSUMAF-SDB-01/2025',
    },

    // ── Nos Solutions ──
    solutions: {
      tag: 'Nos métiers',
      title: 'Nos solutions et services financiers',
      descBefore: 'Société de bourse agréée par la COSUMAF sous le numéro',
      descAfter: ", OMYA INVEST intervient sur l'ensemble des marchés de la zone CEMAC.",
      services: [
        { title: 'Structuration financière', desc: "Montage et structuration des opérations d'emprunts obligataires et d'ouverture du capital ; financement structuré.", tag: 'Émetteurs' },
        { title: "Développement d'affaires", desc: 'Accompagnement des États, des entreprises publiques et privées et des institutionnels dans leurs recherches de financement.', tag: 'États et institutionnels' },
        { title: 'Placements financiers', desc: 'Placer les actifs financiers pour le compte de tiers sur le marché des capitaux de la CEMAC.', tag: 'Marché des capitaux' },
        { title: 'Conseil en financement', desc: 'Conseil aux émetteurs et aux investisseurs dans la structuration de leurs opérations sur le marché des titres.', tag: 'Conseil' },
        { title: "Exécution d'ordre", desc: "Exécuter les ordres d'achat et de vente de titres pour le compte des investisseurs.", tag: 'Courtage' },
        { title: 'Conservation et tenue de compte-titres', desc: "Agréé par le dépositaire central unique (DCU), dont la fonction est assurée par la Banque des États de l'Afrique centrale (BEAC).", tag: 'Conservation' },
        { title: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire et conseil en investissement.', tag: 'Gestion sous mandat' },
      ],
      serviceCounter: (n) => `Service ${n} sur 7`,
      footerCounter: (n) => `${n} / 7`,
      consultBtn: 'Nous consulter pour ce service',
      ctaTitle: 'Un besoin précis ? Parlons-en.',
      ctaBtn: 'Nous contacter',
      agreementBadge: 'Agrément COSUMAF-SDB-01/2025',
      prevService: 'Service précédent',
      nextService: 'Service suivant',
      prevArrow: '← Précédent',
      nextArrow: 'Suivant →',
    },

    // ── Investir ──
    investor: {
      tag: 'Investisseurs',
      title: 'Vous souhaitez investir ?',
      quote: "OMYA INVEST vous accompagne, en fonction de vos besoins, de vos objectifs, de vos contraintes et de votre horizon temporel, vers les placements les plus sûrs et les plus rentables.",
      stepperTitle: 'Comment nous travaillons avec vous',
      stepperSub: '',
      stepOf: (n) => `Étape ${n} sur 5`,
      prevStep: 'Étape précédente',
      nextStep: 'Étape suivante',
      steps: [
        { title: 'Comprendre vos objectifs', subtitle: '', desc: 'Nous faisons le point avec vous sur votre situation, vos besoins de liquidité, votre horizon de placement et le niveau de risque que vous acceptez.', highlight: '' },
        { title: 'Identifier les solutions', subtitle: '', desc: "Nous repérons les titres adaptés à votre profil parmi les actions, les obligations d'État et les titres d'entreprises du marché CEMAC.", highlight: '' },
        { title: 'Choisir les actifs', subtitle: '', desc: 'Selon votre choix, nous vous conseillons ou nous gérons votre portefeuille sous mandat, en cherchant le bon équilibre entre rendement et risque.', highlight: '' },
        { title: 'Passer les ordres', subtitle: '', desc: "Nous exécutons vos ordres d'achat et de vente sur la BVMAC. Vos titres sont inscrits sur votre compte-titres, conservé auprès du dépositaire central unique (BEAC).", highlight: '' },
        { title: 'Suivre votre portefeuille', subtitle: '', desc: "Nous vous rendons compte régulièrement de l'évolution de votre portefeuille et l'ajustons avec vous si vos objectifs changent.", highlight: '' },
      ],
      overviewCards: [
        { title: 'Placements financiers', desc: 'Placer les actifs financiers pour le compte de tiers sur le marché des capitaux de la CEMAC.' },
        { title: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire et conseil en investissement, selon vos objectifs.' },
        { title: "Exécution d'ordre", desc: "Exécution des ordres d'achat et de vente de titres pour le compte des investisseurs." },
      ],
    },

    // ── Financer ──
    issuer: {
      tag: 'Émetteurs',
      title: 'Vous recherchez un financement ?',
      quote: "Pour les États, les entreprises et les institutionnels, OMYA INVEST structure les opérations d'emprunt obligataire, d'ouverture du capital et de financement structuré.",
      prevOp: 'Opération précédente',
      nextOp: 'Opération suivante',
      operations: [
        { title: 'Emprunt obligataire', tag: 'Dette obligataire', desc: "Montage, structuration et placement d'emprunts obligataires émis par des États, des collectivités ou des entreprises sur le marché financier de la CEMAC.", btnText: "Parler d'un emprunt obligataire", detail: "Dette souveraine et dette d'entreprise" },
        { title: 'Ouverture du capital', tag: 'Fonds propres', desc: "Accompagnement des entreprises qui entrent en bourse à la BVMAC ou qui augmentent leur capital pour financer leur développement.", btnText: 'Parler de votre projet', detail: 'Introduction en bourse et augmentation de capital' },
        { title: 'Financement structuré', tag: 'Ingénierie financière', desc: "Montage de financements sur mesure pour des projets d'investissement de grande taille.", btnText: 'Présenter votre projet', detail: "Projets d'investissement" },
        { title: 'Conseil en financement', tag: 'Conseil aux émetteurs', desc: 'Nous aidons les émetteurs à choisir le mode de financement adapté, à préparer leur opération et à constituer les dossiers destinés à la COSUMAF.', btnText: 'Demander un conseil', detail: 'Préparation des opérations' },
      ],
      bannerTitle: 'Vous êtes un État, une entreprise ou un investisseur institutionnel ?',
      bannerDesc: 'Notre équipe vous reçoit à Brazzaville et vous accompagne dans toute la zone CEMAC.',
      bannerBtn: 'Présenter mon projet',
    },

    // ── Équipe & Partenaires ──
    team: {
      tag: 'Gouvernance',
      title: 'Notre équipe',
      desc: 'Les interlocuteurs qui vous accompagnent chez OMYA INVEST.',
      nameNotSet: 'Nom à renseigner',
      positions: {
        'Direction Générale': 'Direction générale',
        'Responsable Structuration': 'Responsable de la structuration',
        'Responsable Négociation & Courtage': 'Responsable négociation et courtage',
        'Responsable Conformité & Contrôle': 'Responsable conformité et contrôle',
      },
      departments: {
        'Gestion stratégique & Gouvernance institutionnelle': 'Gestion stratégique et gouvernance',
        'Ingénierie financière & Émissions de titres': 'Ingénierie financière et émissions de titres',
        "Exécution d'ordres et Animation du marché BVMAC": "Exécution d'ordres et animation du marché BVMAC",
        'Réglementation COSUMAF & Gestion des Risques': 'Réglementation COSUMAF et gestion des risques',
      },
      partnersTag: 'Partenaires',
      partnersTitle: 'Nos partenaires',
      partnersDesc: 'Cliquez sur un logo pour afficher le partenaire.',
      pauseOrbit: "Arrêter l'animation",
      playOrbit: "Relancer l'animation",
      officialPartner: 'Partenaire',
      clickToEnlarge: 'Voir le partenaire',
      clickToEnlargeTitle: 'Cliquer pour agrandir',
      contactAboutPartnership: 'Prendre contact au sujet de ce partenariat',
      visitOfficialSite: 'Visiter le site officiel',
    },

    // ── Mission, Vision, Valeurs ──
    missionVisionValues: {
      missionTag: 'Notre mission',
      missionQuote: 'Un capital dormant ne construit rien : parlons de vos projets !',
      missionSub: 'OMYA INVEST adapte sa mission aux spécificités des personnes morales et des personnes physiques.',
      moralesLabel: '',
      moralesTitle: 'Pour les personnes morales',
      moralesText: "Accompagner les États, les entreprises et les investisseurs institutionnels de la sous-région CEMAC dans la mobilisation de capitaux et la structuration de solutions de financement adaptées à leurs besoins, en s'appuyant sur une expertise pointue du marché des titres.",
      physiquesLabel: '',
      physiquesTitle: 'Pour les personnes physiques',
      physiquesText: "Optimiser l'épargne des investisseurs en sélectionnant pour eux les meilleurs actifs, en tenant compte du couple rendement/risque.",

      visionTag: 'Notre vision',
      visionTitle: 'Nos trois ambitions',
      visionSteps: [
        { title: 'Un marché des capitaux plus profond', text: "Contribuer à l'approfondissement du marché des capitaux et au financement du développement économique de la sous-région." },
        { title: "L'éducation financière", text: "Être un acteur majeur de l'éducation financière." },
        { title: "L'optimisation des capitaux", text: "Être une référence dans l'optimisation des capitaux." },
      ],

      valeursTag: 'Nos valeurs',
      valeursTitle: 'Ce qui guide notre travail',
      valeursQuote: '',
      values: [
        { title: 'Intégrité' },
        { title: 'Rigueur professionnelle' },
        { title: 'Proximité avec les clients' },
        { title: 'Engagement pour le développement de la sous-région' },
      ],
    },

    // ── Nos Cibles ──
    targets: {
      tag: 'À qui nous nous adressons',
      title: 'Nos cibles',
      desc: "OMYA INVEST s'adresse à l'ensemble des acteurs économiques de la zone CEMAC et du reste du monde.",
      items: [
        { title: 'Entreprises publiques et privées', desc: 'Entreprises qui veulent lever des fonds, par emprunt obligataire ou ouverture du capital, ou placer leur trésorerie.', role: '', badge: '' },
        { title: 'Institutionnels', desc: "Caisses de retraite, compagnies d'assurance, banques et autres investisseurs institutionnels de la sous-région.", role: '', badge: '' },
        { title: 'PME / PMI', desc: "Petites et moyennes entreprises qui ont besoin d'être accompagnées pour lever des fonds et structurer leur financement.", role: '', badge: '' },
        { title: 'Particuliers', desc: 'Personnes qui souhaitent faire fructifier leur épargne en investissant en actions ou en obligations cotées à la BVMAC.', role: '', badge: '' },
      ],
    },

    // ── Marché Financier CEMAC ──
    financialMarket: {
      tag: 'Éducation financière',
      title: 'Comprendre le marché financier de la CEMAC',
      desc: "Avant d'investir, mieux vaut savoir comment fonctionne le marché. Voici l'essentiel.",
      tabInstruments: 'Les instruments',
      tabActors: 'Les acteurs du marché',
      instruments: [
        { type: 'Actions', tag: 'Titres de propriété', desc: "Parts du capital d'entreprises cotées à la BVMAC (Bourse des valeurs mobilières de l'Afrique centrale). Elles donnent droit à une part des bénéfices, les dividendes, et au vote en assemblée générale." },
        { type: 'Obligations', tag: 'Titres de créance', desc: "Emprunts émis par les États de la CEMAC (Cameroun, Congo, Gabon, Tchad, Centrafrique, Guinée équatoriale) ou par des entreprises. Elles versent des intérêts réguliers, les coupons, et le capital est remboursé à l'échéance." },
        { type: 'Produits structurés', tag: 'Ingénierie', desc: "Instruments qui combinent plusieurs actifs pour répondre à un objectif précis de rendement ou de protection. Ils s'adressent surtout aux investisseurs institutionnels." },
      ],
      investIn: (type) => `Investir en ${type.toLowerCase()}`,
      actors: [
        { name: 'COSUMAF', role: 'Régulateur régional', desc: "Commission de surveillance du marché financier de l'Afrique centrale. Elle protège les investisseurs et agrée les intervenants du marché." },
        { name: 'BVMAC', role: 'Bourse régionale', desc: "Bourse des valeurs mobilières de l'Afrique centrale. Elle organise la cotation et la négociation des titres." },
        { name: 'BEAC (DCU)', role: 'Dépositaire central unique', desc: "La Banque des États de l'Afrique centrale conserve les titres et assure le règlement-livraison des opérations." },
        { name: 'Sociétés de bourse (SDB)', role: 'Intermédiaires agréés', desc: 'Les sociétés de bourse agréées, comme OMYA INVEST, négocient les titres à la BVMAC pour le compte de leurs clients.' },
      ],
      bannerText: "Sur le marché de la CEMAC, les opérations sur titres sont encadrées par la COSUMAF, et les titres sont conservés par le dépositaire central unique, la BEAC.",
    },

    // ── Actualités ──
    news: {
      tag: 'Presse',
      title: 'Actualités et publications',
      desc: "Communiqués, avis et notes d'information publiés par OMYA INVEST.",
      emptyState: 'Aucune actualité publiée pour le moment. Revenez bientôt pour retrouver nos communiqués et publications.',
    },

    // ── Documents ──
    documents: {
      tag: 'Documents',
      title: 'Documents à télécharger',
      desc: "Règlements, notes d'information, prospectus et formulaires d'OMYA INVEST.",
      emptyState: 'Aucun document publié pour le moment. Revenez bientôt pour retrouver nos règlements, prospectus et formulaires officiels.',
      download: 'Télécharger',
    },

    // ── Contact ──
    contact: {
      tag: 'Contact',
      title: 'Parlons de votre projet',
      desc: 'Vous souhaitez investir, lever des fonds ou devenir partenaire ? Écrivez-nous, notre équipe vous répondra.',
      infoCards: [
        { title: 'Siège social', detail: '76 avenue Amilcar Cabral, centre-ville', sub: 'Immeuble Villarecci, en face du Radisson, Brazzaville' },
        { title: 'Téléphone', detail: '+242 06 642 69 89', sub: 'Appels & WhatsApp' },
        { title: 'Email', detail: 'contact@omya-invest.com', sub: 'Réponse sous 24 à 48h' },
        { title: 'Horaires', detail: 'Lundi – Vendredi', sub: '08:00 – 17:30 (GMT+1)' },
      ],
      formTitle: 'Écrivez-nous',
      formSub: 'Décrivez votre demande ou votre projet',
      sentTitle: 'Merci pour votre message',
      sentDesc: 'Notre équipe reviendra vers vous dans les meilleurs délais.',
      sendAnother: 'Envoyer un autre message',
      labelNom: 'Nom *',
      placeholderNom: 'Votre nom',
      labelPrenom: 'Prénom *',
      placeholderPrenom: 'Votre prénom',
      labelEmail: 'Email *',
      placeholderEmail: 'votre.email@exemple.com',
      labelTelephone: 'Téléphone',
      placeholderTelephone: '+242 06 --- ----',
      labelObjet: 'Objet de votre demande *',
      objetPlaceholder: "Sélectionnez l'objet de votre message",
      objetInvestir: 'Je souhaite investir',
      objetFinancer: 'Je recherche un financement',
      objetPartenaire: "Apporteur d'affaires ou partenariat",
      objetGestion: 'Gestion de portefeuille',
      objetAutre: 'Autre demande',
      labelMessage: 'Message *',
      placeholderMessage: 'Décrivez votre demande, votre projet ou vos objectifs financiers...',
      submitBtn: 'Envoyer le message',
      privacyNote: 'Vos données sont traitées de façon confidentielle conformément à nos obligations réglementaires.',
    },

    // ── Footer ──
    footer: {
      tagline: "Vos capitaux méritent mieux qu'un compte qui dort.",
      brandDesc: 'OMYA INVEST connecte les agents à besoin de financement et les agents à capacité de financement de la zone CEMAC et du reste du monde.',
      colInstitution: 'Institution',
      colSolutions: 'Nos solutions',
      colMarket: 'Marché et presse',
      navLinks: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'À propos', href: '#presentation' },
        { label: 'Notre mission', href: '#mission' },
        { label: 'Notre vision', href: '#vision' },
        { label: 'Nos valeurs', href: '#valeurs' },
        { label: 'Nos cibles', href: '#cibles' },
        { label: 'Équipe et partenaires', href: '#equipe' },
      ],
      solutionsLinks: [
        { label: 'Structuration financière', href: '#solutions-structuration' },
        { label: "Développement d'affaires", href: '#solutions-developpement' },
        { label: 'Placements financiers', href: '#solutions-placements' },
        { label: 'Conseil en financement', href: '#solutions-conseil' },
        { label: "Exécution d'ordre", href: '#solutions-execution' },
        { label: 'Conservation et tenue de compte-titres', href: '#solutions-conservation' },
        { label: 'Gestion de portefeuille', href: '#solutions-gestion' },
      ],
      marketLinks: [
        { label: 'Marché financier CEMAC', href: '#marche-financier' },
        { label: 'Investir', href: '#investir' },
        { label: 'Se financer', href: '#financer' },
        { label: 'Partenaires', href: '#partenaires' },
        { label: 'Actualités', href: '#actualites' },
        { label: 'Documents', href: '#documents' },
        { label: 'Contact', href: '#contact' },
      ],
      newsletterText: 'Restez informé des opportunités de marché :',
      newsletterBtn: 'Abonnement Newsletter',
      rightsText: (year) => `© ${year} OMYA INVEST — Tous droits réservés. Filiale du Groupe YAO CORP. Agréée par la COSUMAF.`,
      legalNotice: 'Agrément COSUMAF-SDB-01/2025',
      privacyPolicy: 'Politique de confidentialité',
      legalMentions: 'Mentions légales',
    },

    // ── Bandeaux légers (SectionPageHeader) par onglet ──
    sectionHeaders: {
      'a-propos': { title: "À propos d'OMYA INVEST", breadcrumbLabel: 'À propos', description: 'Société de bourse agréée par la COSUMAF (SDB-01/2025), filiale du groupe YAO CORP.' },
      'nos-solutions': { title: 'Nos solutions', breadcrumbLabel: 'Nos solutions', description: '7 services pour les investisseurs et les émetteurs de la zone CEMAC.' },
      'investir': { title: 'Investir', breadcrumbLabel: 'Investir', description: 'Placer votre épargne sur le marché financier de la CEMAC.' },
      'financer': { title: 'Se financer', breadcrumbLabel: 'Financer', description: 'Emprunt obligataire, ouverture du capital et financement structuré.' },
      'partenaires': { title: 'Équipe et partenaires', breadcrumbLabel: 'Partenaires', description: "L'équipe d'OMYA INVEST et ses partenaires." },
      'marche-financier': { title: 'Le marché CEMAC', breadcrumbLabel: 'Marché CEMAC', description: 'Actions, obligations et fonctionnement du marché.' },
      'actualites-documents': { title: 'Presse et documents', breadcrumbLabel: 'Presse & Doc', description: "Communiqués, publications et documents d'OMYA INVEST." },
      'contact': { title: 'Contact', breadcrumbLabel: 'Contact', description: 'Nos coordonnées et un formulaire pour nous écrire.' },
    },
    sectionHeaderHome: 'Accueil',

    // ── Bandeaux de renvoi (CrossLinkSection) ──
    crossLinks: {
      solutionsToPaths: { title: 'Vous souhaitez investir ou vous cherchez un financement ?', description: 'Chaque démarche a sa page : placer votre capital, ou structurer une opération de financement.', cta1: 'Je veux investir', cta2: 'Je cherche un financement' },
      investirToSolutions: { title: "Voir l'ensemble de nos services", description: "Placements, gestion de portefeuille, exécution d'ordres : découvrez nos 7 services.", cta: 'Voir nos solutions' },
      financerToSolutions: { title: "Voir l'ensemble de nos services", description: "Structuration financière, conseil, développement d'affaires : découvrez nos 7 services.", cta: 'Voir nos solutions' },
      partenairesToAbout: { title: 'En savoir plus sur OMYA INVEST', description: 'Notre agrément, notre groupe, notre mission et nos valeurs.', cta: 'Découvrir OMYA INVEST' },
      marcheToAbout: { title: 'Qui est OMYA INVEST ?', description: 'Une société de bourse agréée par la COSUMAF, filiale du groupe YAO CORP, qui intervient dans toute la zone CEMAC.', cta: 'Découvrir OMYA INVEST' },
      contactToPartners: { title: 'Nos partenaires', description: "Découvrez l'équipe d'OMYA INVEST et les partenaires avec lesquels nous travaillons.", cta: 'Voir nos partenaires' },
    },

    // ── SEO ──
    seo: {
      title: 'OMYA INVEST — Société de Bourse Agréée COSUMAF-SDB-01/2025 | Groupe YAO CORP',
      description: "OMYA INVEST, filiale du Groupe YAO CORP, est une société de bourse agréée par la COSUMAF (COSUMAF-SDB-01/2025). Nous connectons investisseurs et émetteurs sur toute la zone CEMAC.",
      keywords: 'OMYA INVEST, COSUMAF, société de bourse, CEMAC, investissement, financement, BVMAC, YAO CORP, Brazzaville, Congo, obligations, actions, gestion de portefeuille',
    },
  },

  EN: {
    clientSpace: "Client area",
    memberSpace: "Member area",
    login: "Log in",
    register: "Sign up",
    language: "English",
    languageSelect: "Language",

    authModalLoginTitle: "Access your account",
    authModalRegisterTitle: "Create your account",
    authModalLoginDesc: "Log in to track your investments and manage your portfolio.",
    authModalRegisterDesc: "Join OMYA INVEST and access stock market opportunities.",
    orByEmail: "or with email",
    fullName: "Full name",
    emailAddr: "Email address",
    passwordLabel: "Password",
    passwordConfirm: "Confirm password",
    forgotPass: "Forgot?",
    investorType: "Investor type",
    particulier: "Individual investor",
    corporate: "Corporate / Institutional",
    rememberMe: "Remember me",
    acceptTerms: "I accept the terms of use",
    submitLogin: "Log in",
    submitRegister: "Sign up",

    common: {
      precedent: "Previous",
      suivant: "Next",
      pause: "Pause",
      lecture: "Play",
      play: "Play",
      enSavoirPlus: "Learn more",
      voirTout: "View all",
    },

    viewTabs: [
      { id: 'accueil', label: 'Home' },
      { id: 'a-propos', label: 'About' },
      { id: 'nos-solutions', label: 'Our solutions' },
      { id: 'investir', label: 'Invest' },
      { id: 'financer', label: 'Finance' },
      { id: 'partenaires', label: 'Partners' },
      { id: 'marche-financier', label: 'CEMAC Market' },
      { id: 'actualites-documents', label: 'Press & Docs' },
      { id: 'contact', label: 'Contact' },
    ],

    headerNav: {
      espaceClient: "Client area",
      solutionsMegaAgrement: "COSUMAF-SDB-01/2025 License",
      solutionsMegaTitle: "Our 7 services",
      solutionsMegaSeeAll: "View all",
      items: [
        { id: 'accueil', label: 'Home', href: '#accueil' },
        {
          id: 'a-propos', label: 'About', href: '#presentation',
          dropdownItems: [
            { label: 'Overview', desc: 'COSUMAF license and YAO CORP group', href: '#presentation' },
            { label: 'Our mission', desc: 'Companies, institutions and individuals', href: '#mission' },
            { label: 'Our vision', desc: 'Our three ambitions', href: '#vision' },
            { label: 'Our values', desc: 'Integrity, rigor, closeness, commitment', href: '#valeurs' },
            { label: 'Who we serve', desc: 'Companies, institutions, SMEs, individuals', href: '#cibles' },
          ],
        },
        { id: 'nos-solutions', label: 'Our solutions', href: '#nos-solutions' },
        {
          id: 'investir', label: 'Invest', href: '#investir',
          dropdownItems: [
            { label: 'Why invest?', desc: 'Optimize and secure your capital', href: '#pourquoi-investir' },
            { label: 'Financial investments', desc: 'Securities listed on the CEMAC market', href: '#solutions-placements' },
            { label: 'Portfolio management', desc: 'Discretionary mandate and advice', href: '#solutions-gestion' },
            { label: 'Order execution', desc: 'Buying and selling securities on the BVMAC', href: '#solutions-execution' },
            { label: 'Understanding the market', desc: 'The essentials before you invest', href: '#marche-financier' },
          ],
        },
        {
          id: 'financer', label: 'Finance', href: '#financer',
          dropdownItems: [
            { label: 'Need financing?', desc: 'Raising capital on the market', href: '#besoin-financement' },
            { label: 'Financial structuring', desc: "Structuring issuers' operations", href: '#solutions-structuration' },
            { label: 'Bond issuance', desc: 'Raising funds on the bond market', href: '#emprunt-obligataire' },
            { label: 'Capital opening', desc: 'IPOs and capital increases', href: '#ouverture-capital' },
            { label: 'Financing advisory', desc: 'Advice for issuers and investors', href: '#solutions-conseil' },
          ],
        },
        { id: 'partenaires', label: 'Partners', href: '#partenaires' },
        {
          id: 'marche-financier', label: 'Financial market', href: '#marche-financier',
          dropdownItems: [
            { label: 'Understanding the CEMAC market', desc: 'How it works and the role of COSUMAF', href: '#marche-cemac' },
            { label: 'Stocks', desc: 'Equity securities listed on the BVMAC', href: '#instruments-actions' },
            { label: 'Bonds', desc: 'Debt securities of states and corporations', href: '#instruments-obligations' },
            { label: 'Financial education', desc: 'Understand before you invest', href: '#education-financiere' },
          ],
        },
        {
          id: 'actualites-documents', label: 'Press & Docs', href: '#actualites',
          dropdownItems: [
            { label: 'News', desc: 'News from OMYA INVEST', href: '#actualites-recents' },
            { label: 'Publications', desc: 'Analyses and market notes', href: '#publications' },
            { label: 'Press releases', desc: 'Official OMYA INVEST announcements', href: '#communiques' },
            { label: 'Documents', desc: 'Regulations, prospectuses, forms', href: '#documents' },
          ],
        },
        { id: 'contact', label: 'Contact', href: '#contact' },
      ],
      solutionsCol1: [
        { num: '01', title: 'Financial structuring', desc: 'Bond issuance and capital opening deal design', viewId: 'nos-solutions', href: '#solutions-structuration' },
        { num: '02', title: 'Business development', desc: 'Support for States, corporations and institutions', viewId: 'nos-solutions', href: '#solutions-developpement' },
        { num: '03', title: 'Financial investments', desc: 'Placing assets on the CEMAC capital market', viewId: 'investir', href: '#solutions-placements' },
        { num: '04', title: 'Financing advisory', desc: 'Advisory for issuers and investors', viewId: 'financer', href: '#solutions-conseil' },
      ],
      solutionsCol2: [
        { num: '05', title: 'Order execution', desc: 'Buy and sell orders on securities', viewId: 'investir', href: '#solutions-execution' },
        { num: '06', title: 'Custody and securities accounts', desc: 'Licensed by the central securities depository (BEAC)', viewId: 'nos-solutions', href: '#solutions-conservation' },
        { num: '07', title: 'Portfolio management', desc: 'Discretionary mandate and investment advisory', viewId: 'investir', href: '#solutions-gestion' },
      ],
    },

    hero: {
      slides: [
        {
          titleLine1: 'Your capital deserves', titleHighlight: 'better', titleLine2: 'than a dormant account.',
          description: "OMYA INVEST connects, on one hand, entities seeking financing (States, corporations and institutions) across the CEMAC zone, and on the other, entities with financing capacity (individuals, States, corporations and institutional investors) across CEMAC and the rest of the world.",
          primaryBtnText: 'I want to invest', secondaryBtnText: 'I am seeking financing', category: 'OMYA INVEST',
        },
        {
          titleLine1: 'Would you like to', titleHighlight: 'invest?', titleLine2: '',
          description: "For entities with financing capacity: OMYA INVEST guides you (based on your needs, objectives, constraints and time horizon) toward the safest and most profitable investments.",
          primaryBtnText: 'Discover our solutions', secondaryBtnText: 'Our 7 services', category: 'Invest',
        },
        {
          titleLine1: 'Are you looking for', titleHighlight: 'financing?', titleLine2: '',
          description: "For entities seeking financing, OMYA INVEST structures bond issues, capital openings and structured financing operations.",
          primaryBtnText: 'Present my project', secondaryBtnText: 'Financial structuring', category: 'Finance',
        },
        {
          titleLine1: 'Become an', titleHighlight: 'OMYA INVEST', titleLine2: 'partner.',
          description: "OMYA INVEST welcomes business introducers and reliable partners whose contributions align with its activities.",
          primaryBtnText: 'Become a partner', secondaryBtnText: 'Our partners', category: 'Partners',
        },
      ],
      prevSlide: 'Previous slide',
      nextSlide: 'Next slide',
      pauseAuto: 'Pause',
      playAuto: 'Auto-play',
    },

    about: {
      tag: "About OMYA INVEST",
      title: 'A licensed brokerage firm on the CEMAC financial market',
      p1: "OMYA INVEST, a subsidiary of the YAO CORP group, is a stock brokerage firm licensed by the Central Africa Financial Market Oversight Commission (COSUMAF) under license number",
      p2: "Based in Brazzaville (Republic of Congo), it operates across the entire CEMAC regional financial market, serving States, public and private companies, institutional and individual clients.",
      p3: "Its activities cover securities brokerage, financial structuring and institutional business development.",
      activity1: 'Securities brokerage',
      activity2: 'Structuring',
      activity3: 'Development',
      ctaBtn: 'Discover our services',
      agreementLabel: 'COSUMAF License',
      zoneLabel: 'CEMAC Zone',
      photoAlt: 'OMYA INVEST — Stock Brokerage Firm COSUMAF-SDB-01/2025',
    },

    solutions: {
      tag: 'What we do',
      title: 'Our financial solutions and services',
      descBefore: 'A stock brokerage firm licensed by COSUMAF under number',
      descAfter: ', OMYA INVEST operates across the entire CEMAC zone market.',
      services: [
        { title: 'Financial structuring', desc: 'Design and structuring of bond issues and capital openings; structured financing.', tag: 'Issuers' },
        { title: 'Business development', desc: 'Supporting States, public and private companies and institutions in their search for financing.', tag: 'States and institutions' },
        { title: 'Financial investments', desc: 'Placing financial assets on behalf of third parties on the CEMAC capital market.', tag: 'Capital markets' },
        { title: 'Financing advisory', desc: 'Advising issuers and investors on structuring their securities market operations.', tag: 'Advisory' },
        { title: 'Order execution', desc: 'Executing buy and sell orders on securities on behalf of investors.', tag: 'Brokerage' },
        { title: 'Custody and securities account keeping', desc: 'Licensed by the single central securities depository (DCU), a role performed by the Bank of Central African States (BEAC).', tag: 'Custody' },
        { title: 'Portfolio management', desc: 'Discretionary mandate and investment advice.', tag: 'Managed portfolios' },
      ],
      serviceCounter: (n) => `Service ${n} of 7`,
      footerCounter: (n) => `${n} / 7`,
      consultBtn: 'Consult us for this service',
      ctaTitle: "Have a specific need? Let's talk.",
      ctaBtn: 'Contact us',
      agreementBadge: 'COSUMAF-SDB-01/2025 License',
      prevService: 'Previous service',
      nextService: 'Next service',
      prevArrow: '← Previous',
      nextArrow: 'Next →',
    },

    investor: {
      tag: 'Investors',
      title: 'Would you like to invest?',
      quote: "OMYA INVEST guides you, based on your needs, objectives, constraints and time horizon, toward the safest and most profitable investments.",
      stepperTitle: 'How we work with you',
      stepperSub: '',
      stepOf: (n) => `Step ${n} of 5`,
      prevStep: 'Previous step',
      nextStep: 'Next step',
      steps: [
        { title: 'Understanding your goals', subtitle: '', desc: 'We review your situation with you: your liquidity needs, your investment horizon and the level of risk you are comfortable with.', highlight: '' },
        { title: 'Identifying solutions', subtitle: '', desc: 'We look for securities that suit your profile among the stocks, government bonds and corporate securities of the CEMAC market.', highlight: '' },
        { title: 'Choosing assets', subtitle: '', desc: 'Depending on your choice, we advise you or manage your portfolio under a mandate, looking for the right balance between return and risk.', highlight: '' },
        { title: 'Placing orders', subtitle: '', desc: 'We execute your buy and sell orders on the BVMAC. Your securities are held in your securities account, kept with the single central securities depository (BEAC).', highlight: '' },
        { title: 'Tracking your portfolio', subtitle: '', desc: 'We report to you regularly on how your portfolio is doing and adjust it with you if your goals change.', highlight: '' },
      ],
      overviewCards: [
        { title: 'Financial investments', desc: 'Placing financial assets on behalf of third parties on the CEMAC capital market.' },
        { title: 'Portfolio management', desc: 'Discretionary mandate and investment advice, based on your goals.' },
        { title: 'Order execution', desc: 'Executing buy and sell orders on securities on behalf of investors.' },
      ],
    },

    issuer: {
      tag: 'Issuers',
      title: 'Are you looking for financing?',
      quote: "For States, companies and institutions, OMYA INVEST structures bond issues, capital openings and structured financing operations.",
      prevOp: 'Previous operation',
      nextOp: 'Next operation',
      operations: [
        { title: 'Bond issuance', tag: 'Bond debt', desc: 'Design, structuring and placement of bonds issued by States, local authorities or companies on the CEMAC financial market.', btnText: 'Talk about a bond issue', detail: 'Sovereign and corporate debt' },
        { title: 'Capital opening', tag: 'Equity', desc: 'Supporting companies that list on the BVMAC or increase their capital to finance their growth.', btnText: 'Talk about your project', detail: 'IPOs and capital increases' },
        { title: 'Structured financing', tag: 'Financial engineering', desc: 'Tailored financing for large investment projects.', btnText: 'Present your project', detail: 'Investment projects' },
        { title: 'Financing advisory', tag: 'Issuer advisory', desc: 'We help issuers choose the right type of financing, prepare their operation and put together the files submitted to COSUMAF.', btnText: 'Ask for advice', detail: 'Preparing operations' },
      ],
      bannerTitle: 'Are you a State, a company or an institutional investor?',
      bannerDesc: 'Our team welcomes you in Brazzaville and supports you across the CEMAC zone.',
      bannerBtn: 'Present my project',
    },

    team: {
      tag: 'Governance',
      title: 'Our team',
      desc: 'The people who support you at OMYA INVEST.',
      nameNotSet: 'Name to be provided',
      positions: {
        'Direction Générale': 'General management',
        'Responsable Structuration': 'Head of structuring',
        'Responsable Négociation & Courtage': 'Head of trading and brokerage',
        'Responsable Conformité & Contrôle': 'Head of compliance and control',
      },
      departments: {
        'Gestion stratégique & Gouvernance institutionnelle': 'Strategic management and governance',
        'Ingénierie financière & Émissions de titres': 'Financial engineering and securities issuance',
        "Exécution d'ordres et Animation du marché BVMAC": 'Order execution and BVMAC market making',
        'Réglementation COSUMAF & Gestion des Risques': 'COSUMAF regulation and risk management',
      },
      partnersTag: 'Partners',
      partnersTitle: 'Our partners',
      partnersDesc: 'Click a logo to see the partner.',
      pauseOrbit: 'Stop the animation',
      playOrbit: 'Restart the animation',
      officialPartner: 'Partner',
      clickToEnlarge: 'View partner',
      clickToEnlargeTitle: 'Click to enlarge',
      contactAboutPartnership: 'Get in touch about this partnership',
      visitOfficialSite: 'Visit official website',
    },

    missionVisionValues: {
      missionTag: 'Our mission',
      missionQuote: "Dormant capital builds nothing: let's talk about your projects!",
      missionSub: 'OMYA INVEST tailors its mission to the specific needs of legal entities and individuals.',
      moralesLabel: '',
      moralesTitle: 'For companies and institutions',
      moralesText: 'Supporting States, companies and institutional investors in the CEMAC sub-region in raising capital and structuring financing solutions suited to their needs, drawing on in-depth knowledge of the securities market.',
      physiquesLabel: '',
      physiquesTitle: 'For individuals',
      physiquesText: "Optimizing investors' savings by selecting the best assets for them, taking into account the risk/return trade-off.",

      visionTag: 'Our vision',
      visionTitle: 'Our three ambitions',
      visionSteps: [
        { title: 'A deeper capital market', text: 'Contributing to the deepening of the capital market and to financing the economic development of the sub-region.' },
        { title: 'Financial education', text: 'Being a major player in financial education.' },
        { title: 'Capital optimization', text: 'Being a reference in capital optimization.' },
      ],

      valeursTag: 'Our values',
      valeursTitle: 'What guides our work',
      valeursQuote: '',
      values: [
        { title: 'Integrity' },
        { title: 'Professional rigor' },
        { title: 'Closeness to clients' },
        { title: 'Commitment to the development of the sub-region' },
      ],
    },

    targets: {
      tag: 'Who we serve',
      title: 'Our clients',
      desc: 'OMYA INVEST serves the full range of economic players across the CEMAC zone and the rest of the world.',
      items: [
        { title: 'Public and private companies', desc: 'Companies looking to raise funds, through a bond issue or a capital opening, or to invest their cash.', role: '', badge: '' },
        { title: 'Institutions', desc: 'Pension funds, insurance companies, banks and other institutional investors in the sub-region.', role: '', badge: '' },
        { title: 'SMEs', desc: 'Small and medium-sized businesses that need support to raise funds and structure their financing.', role: '', badge: '' },
        { title: 'Individuals', desc: 'People who want to grow their savings by investing in stocks or bonds listed on the BVMAC.', role: '', badge: '' },
      ],
    },

    financialMarket: {
      tag: 'Financial education',
      title: 'Understanding the CEMAC financial market',
      desc: 'Before investing, it helps to know how the market works. Here are the essentials.',
      tabInstruments: 'Instruments',
      tabActors: 'Market players',
      instruments: [
        { type: 'Stocks', tag: 'Equity securities', desc: 'Shares in the capital of companies listed on the BVMAC (Central African stock exchange). They give a right to a share of profits, the dividends, and to vote at general meetings.' },
        { type: 'Bonds', tag: 'Debt securities', desc: 'Loans issued by CEMAC States (Cameroon, Congo, Gabon, Chad, Central African Republic, Equatorial Guinea) or by companies. They pay regular interest, the coupons, and the capital is repaid at maturity.' },
        { type: 'Structured products', tag: 'Engineering', desc: 'Instruments that combine several assets to meet a specific return or protection goal. They are mainly aimed at institutional investors.' },
      ],
      investIn: (type) => `Invest in ${type.toLowerCase()}`,
      actors: [
        { name: 'COSUMAF', role: 'Regional regulator', desc: 'Central African Financial Market Supervisory Commission. It protects investors and licenses market participants.' },
        { name: 'BVMAC', role: 'Regional stock exchange', desc: 'The Central African stock exchange. It organizes the listing and trading of securities.' },
        { name: 'BEAC (DCU)', role: 'Single central securities depository', desc: 'The Bank of Central African States holds securities in custody and handles the settlement of transactions.' },
        { name: 'Brokerage firms (SDB)', role: 'Licensed intermediaries', desc: 'Licensed brokerage firms, such as OMYA INVEST, trade securities on the BVMAC on behalf of their clients.' },
      ],
      bannerText: 'On the CEMAC market, securities transactions are supervised by COSUMAF, and securities are held by the single central securities depository, BEAC.',
    },

    news: {
      tag: 'Press',
      title: 'News and publications',
      desc: 'Releases, notices and information notes published by OMYA INVEST.',
      emptyState: 'No news published yet. Check back soon for our releases and publications.',
    },

    documents: {
      tag: 'Documents',
      title: 'Documents to download',
      desc: "OMYA INVEST's regulations, information notes, prospectuses and forms.",
      emptyState: 'No documents published yet. Check back soon for our regulations, prospectuses and official forms.',
      download: 'Download',
    },

    contact: {
      tag: 'Contact',
      title: "Let's talk about your project",
      desc: 'Want to invest, raise funds or become a partner? Write to us and our team will get back to you.',
      infoCards: [
        { title: 'Head office', detail: '76 Avenue Amilcar Cabral, city centre', sub: 'Villarecci building, opposite the Radisson, Brazzaville' },
        { title: 'Phone', detail: '+242 06 642 69 89', sub: 'Calls & WhatsApp' },
        { title: 'Email', detail: 'contact@omya-invest.com', sub: 'Response within 24 to 48h' },
        { title: 'Hours', detail: 'Monday – Friday', sub: '08:00 AM – 05:30 PM (GMT+1)' },
      ],
      formTitle: 'Write to us',
      formSub: 'Describe your request or your project',
      sentTitle: 'Thank you for your message',
      sentDesc: 'Our team will get back to you as soon as possible.',
      sendAnother: 'Send another message',
      labelNom: 'Last name *',
      placeholderNom: 'Your last name',
      labelPrenom: 'First name *',
      placeholderPrenom: 'Your first name',
      labelEmail: 'Email *',
      placeholderEmail: 'your.email@example.com',
      labelTelephone: 'Phone',
      placeholderTelephone: '+242 06 --- ----',
      labelObjet: 'Subject of your request *',
      objetPlaceholder: 'Select the subject of your message',
      objetInvestir: 'I want to invest',
      objetFinancer: 'I am looking for financing',
      objetPartenaire: 'Business introducer or partnership',
      objetGestion: 'Portfolio management',
      objetAutre: 'Other request',
      labelMessage: 'Message *',
      placeholderMessage: 'Describe your request, your project or your financial goals...',
      submitBtn: 'Send message',
      privacyNote: 'Your data is handled confidentially in accordance with our regulatory obligations.',
    },

    footer: {
      tagline: 'Your capital deserves better than a dormant account.',
      brandDesc: 'OMYA INVEST connects entities seeking financing with entities with financing capacity across the CEMAC zone and the rest of the world.',
      colInstitution: 'Institution',
      colSolutions: 'Our solutions',
      colMarket: 'Market and press',
      navLinks: [
        { label: 'Home', href: '#accueil' },
        { label: 'About', href: '#presentation' },
        { label: 'Our mission', href: '#mission' },
        { label: 'Our vision', href: '#vision' },
        { label: 'Our values', href: '#valeurs' },
        { label: 'Who we serve', href: '#cibles' },
        { label: 'Team and partners', href: '#equipe' },
      ],
      solutionsLinks: [
        { label: 'Financial structuring', href: '#solutions-structuration' },
        { label: 'Business development', href: '#solutions-developpement' },
        { label: 'Financial investments', href: '#solutions-placements' },
        { label: 'Financing advisory', href: '#solutions-conseil' },
        { label: 'Order execution', href: '#solutions-execution' },
        { label: 'Custody and securities accounts', href: '#solutions-conservation' },
        { label: 'Portfolio management', href: '#solutions-gestion' },
      ],
      marketLinks: [
        { label: 'CEMAC financial market', href: '#marche-financier' },
        { label: 'Invest', href: '#investir' },
        { label: 'Raise funds', href: '#financer' },
        { label: 'Partners', href: '#partenaires' },
        { label: 'News', href: '#actualites' },
        { label: 'Documents', href: '#documents' },
        { label: 'Contact', href: '#contact' },
      ],
      newsletterText: 'Stay informed of market opportunities:',
      newsletterBtn: 'Newsletter Subscription',
      rightsText: (year) => `© ${year} OMYA INVEST — All rights reserved. Subsidiary of YAO CORP Group. Licensed by COSUMAF.`,
      legalNotice: 'License COSUMAF-SDB-01/2025',
      privacyPolicy: 'Privacy policy',
      legalMentions: 'Legal notice',
    },

    sectionHeaders: {
      'a-propos': { title: 'About OMYA INVEST', breadcrumbLabel: 'About', description: 'A brokerage firm licensed by COSUMAF (SDB-01/2025), subsidiary of the YAO CORP group.' },
      'nos-solutions': { title: 'Our solutions', breadcrumbLabel: 'Our solutions', description: '7 services for investors and issuers across the CEMAC zone.' },
      'investir': { title: 'Invest', breadcrumbLabel: 'Invest', description: 'Investing your savings on the CEMAC financial market.' },
      'financer': { title: 'Raise funds', breadcrumbLabel: 'Finance', description: 'Bond issues, capital openings and structured financing.' },
      'partenaires': { title: 'Team and partners', breadcrumbLabel: 'Partners', description: 'The OMYA INVEST team and its partners.' },
      'marche-financier': { title: 'The CEMAC market', breadcrumbLabel: 'CEMAC Market', description: 'Stocks, bonds and how the market works.' },
      'actualites-documents': { title: 'Press and documents', breadcrumbLabel: 'Press & Docs', description: "OMYA INVEST's releases, publications and documents." },
      'contact': { title: 'Contact', breadcrumbLabel: 'Contact', description: 'Our contact details and a form to write to us.' },
    },
    sectionHeaderHome: 'Home',

    crossLinks: {
      solutionsToPaths: { title: 'Looking to invest or to raise funds?', description: 'Each has its own page: investing your capital, or structuring a financing operation.', cta1: 'I want to invest', cta2: 'I need financing' },
      investirToSolutions: { title: 'See all our services', description: 'Investments, portfolio management, order execution: discover our 7 services.', cta: 'View our solutions' },
      financerToSolutions: { title: 'See all our services', description: 'Financial structuring, advisory, business development: discover our 7 services.', cta: 'View our solutions' },
      partenairesToAbout: { title: 'Learn more about OMYA INVEST', description: 'Our license, our group, our mission and our values.', cta: 'Discover OMYA INVEST' },
      marcheToAbout: { title: 'Who is OMYA INVEST?', description: 'A brokerage firm licensed by COSUMAF, subsidiary of the YAO CORP group, working across the CEMAC zone.', cta: 'Discover OMYA INVEST' },
      contactToPartners: { title: 'Our partners', description: 'Meet the OMYA INVEST team and the partners we work with.', cta: 'View our partners' },
    },

    seo: {
      title: 'OMYA INVEST — Licensed Stock Brokerage Firm COSUMAF-SDB-01/2025 | YAO CORP Group',
      description: 'OMYA INVEST, a subsidiary of YAO CORP Group, is a stock brokerage firm licensed by COSUMAF (COSUMAF-SDB-01/2025). We connect investors and issuers across the entire CEMAC zone.',
      keywords: 'OMYA INVEST, COSUMAF, stock brokerage, CEMAC, investment, financing, BVMAC, YAO CORP, Brazzaville, Congo, bonds, stocks, portfolio management',
    },
  },

  PT: {
    clientSpace: "Área do cliente",
    memberSpace: "Área de membro",
    login: "Entrar",
    register: "Registar",
    language: "Português",
    languageSelect: "Idioma",

    authModalLoginTitle: "Aceder à sua conta",
    authModalRegisterTitle: "Criar a sua conta",
    authModalLoginDesc: "Inicie sessão para acompanhar os seus investimentos e gerir a sua carteira.",
    authModalRegisterDesc: "Junte-se à OMYA INVEST e aceda às oportunidades bolsistas.",
    orByEmail: "ou por email",
    fullName: "Nome completo",
    emailAddr: "Endereço de e-mail",
    passwordLabel: "Palavra-passe",
    passwordConfirm: "Confirmar a palavra-passe",
    forgotPass: "Esqueceu-se?",
    investorType: "Tipo de investidor",
    particulier: "Investidor particular",
    corporate: "Empresa / Institucional",
    rememberMe: "Lembrar-me",
    acceptTerms: "Aceito os termos de utilização",
    submitLogin: "Entrar",
    submitRegister: "Registar",

    common: {
      precedent: "Anterior",
      suivant: "Seguinte",
      pause: "Pausa",
      lecture: "Reproduzir",
      play: "Reproduzir",
      enSavoirPlus: "Saiba mais",
      voirTout: "Ver tudo",
    },

    viewTabs: [
      { id: 'accueil', label: 'Início' },
      { id: 'a-propos', label: 'Sobre nós' },
      { id: 'nos-solutions', label: 'Soluções' },
      { id: 'investir', label: 'Investir' },
      { id: 'financer', label: 'Financiar' },
      { id: 'partenaires', label: 'Parceiros' },
      { id: 'marche-financier', label: 'Mercado CEMAC' },
      { id: 'actualites-documents', label: 'Imprensa e docs' },
      { id: 'contact', label: 'Contacto' },
    ],

    headerNav: {
      espaceClient: "Área do cliente",
      solutionsMegaAgrement: "Licença COSUMAF-SDB-01/2025",
      solutionsMegaTitle: "Os nossos 7 serviços",
      solutionsMegaSeeAll: "Ver tudo",
      items: [
        { id: 'accueil', label: 'Início', href: '#accueil' },
        {
          id: 'a-propos', label: 'Sobre nós', href: '#presentation',
          dropdownItems: [
            { label: 'Apresentação', desc: 'Licença COSUMAF e grupo YAO CORP', href: '#presentation' },
            { label: 'A nossa missão', desc: 'Empresas, instituições e particulares', href: '#mission' },
            { label: 'A nossa visão', desc: 'As nossas três ambições', href: '#vision' },
            { label: 'Os nossos valores', desc: 'Integridade, rigor, proximidade, compromisso', href: '#valeurs' },
            { label: 'A quem nos dirigimos', desc: 'Empresas, instituições, PME, particulares', href: '#cibles' },
          ],
        },
        { id: 'nos-solutions', label: 'Soluções', href: '#nos-solutions' },
        {
          id: 'investir', label: 'Investir', href: '#investir',
          dropdownItems: [
            { label: 'Por que investir?', desc: 'Otimizar e proteger o seu capital', href: '#pourquoi-investir' },
            { label: 'Investimentos financeiros', desc: 'Títulos cotados no mercado CEMAC', href: '#solutions-placements' },
            { label: 'Gestão de carteira', desc: 'Mandato discricionário e aconselhamento', href: '#solutions-gestion' },
            { label: 'Execução de ordens', desc: 'Compra e venda de títulos na BVMAC', href: '#solutions-execution' },
            { label: 'Compreender a bolsa', desc: 'O essencial antes de investir', href: '#marche-financier' },
          ],
        },
        {
          id: 'financer', label: 'Financiar', href: '#financer',
          dropdownItems: [
            { label: 'Precisa de financiamento?', desc: 'Captar capitais no mercado', href: '#besoin-financement' },
            { label: 'Estruturação financeira', desc: 'Montagem das operações dos emissores', href: '#solutions-structuration' },
            { label: 'Empréstimo obrigacionista', desc: 'Captação de fundos no mercado obrigacionista', href: '#emprunt-obligataire' },
            { label: 'Abertura de capital', desc: 'Entrada em bolsa e aumentos de capital', href: '#ouverture-capital' },
            { label: 'Consultoria em financiamento', desc: 'Aconselhamento a emissores e investidores', href: '#solutions-conseil' },
          ],
        },
        { id: 'partenaires', label: 'Parceiros', href: '#partenaires' },
        {
          id: 'marche-financier', label: 'Mercado financeiro', href: '#marche-financier',
          dropdownItems: [
            { label: 'Compreender o mercado CEMAC', desc: 'Funcionamento e papel da COSUMAF', href: '#marche-cemac' },
            { label: 'Ações', desc: 'Títulos de propriedade cotados na BVMAC', href: '#instruments-actions' },
            { label: 'Obrigações', desc: 'Títulos de dívida de Estados e empresas', href: '#instruments-obligations' },
            { label: 'Educação financeira', desc: 'Compreender antes de investir', href: '#education-financiere' },
          ],
        },
        {
          id: 'actualites-documents', label: 'Imprensa e docs', href: '#actualites',
          dropdownItems: [
            { label: 'Notícias', desc: 'Notícias da OMYA INVEST', href: '#actualites-recents' },
            { label: 'Publicações', desc: 'Análises e notas de mercado', href: '#publications' },
            { label: 'Comunicados', desc: 'Anúncios oficiais da OMYA INVEST', href: '#communiques' },
            { label: 'Documentos', desc: 'Regulamentos, prospetos, formulários', href: '#documents' },
          ],
        },
        { id: 'contact', label: 'Contacto', href: '#contact' },
      ],
      solutionsCol1: [
        { num: '01', title: 'Estruturação financeira', desc: 'Montagem de operações obrigacionistas e de abertura de capital', viewId: 'nos-solutions', href: '#solutions-structuration' },
        { num: '02', title: 'Desenvolvimento de negócios', desc: 'Acompanhamento de Estados, empresas e instituições', viewId: 'nos-solutions', href: '#solutions-developpement' },
        { num: '03', title: 'Investimentos financeiros', desc: 'Aplicação de ativos no mercado de capitais CEMAC', viewId: 'investir', href: '#solutions-placements' },
        { num: '04', title: 'Consultoria em financiamento', desc: 'Consultoria a emissores e investidores', viewId: 'financer', href: '#solutions-conseil' },
      ],
      solutionsCol2: [
        { num: '05', title: 'Execução de ordens', desc: 'Ordens de compra e venda de títulos', viewId: 'investir', href: '#solutions-execution' },
        { num: '06', title: 'Custódia e conta de títulos', desc: 'Licenciada pelo depositário central único (BEAC)', viewId: 'nos-solutions', href: '#solutions-conservation' },
        { num: '07', title: 'Gestão de carteira', desc: 'Mandato discricionário e consultoria em investimento', viewId: 'investir', href: '#solutions-gestion' },
      ],
    },

    hero: {
      slides: [
        {
          titleLine1: 'O seu capital merece', titleHighlight: 'mais', titleLine2: 'do que uma conta parada.',
          description: "A OMYA INVEST conecta, por um lado, os agentes com necessidade de financiamento (Estados, empresas e instituições) da zona CEMAC e, por outro, os agentes com capacidade de financiamento (particulares, Estados, empresas e investidores institucionais) da CEMAC e do resto do mundo.",
          primaryBtnText: 'Quero investir', secondaryBtnText: 'Procuro financiamento', category: 'OMYA INVEST',
        },
        {
          titleLine1: 'Deseja', titleHighlight: 'investir?', titleLine2: '',
          description: "Para os agentes com capacidade de financiamento: a OMYA INVEST acompanha-o (de acordo com as suas necessidades, objetivos, limitações e horizonte temporal) rumo aos investimentos mais seguros e rentáveis.",
          primaryBtnText: 'Descobrir as nossas soluções', secondaryBtnText: 'Os nossos 7 serviços', category: 'Investir',
        },
        {
          titleLine1: 'Procura um', titleHighlight: 'financiamento?', titleLine2: '',
          description: "Para os agentes com necessidade de financiamento, a OMYA INVEST estrutura as operações de empréstimo obrigacionista, abertura de capital e financiamento estruturado.",
          primaryBtnText: 'Apresentar o meu projeto', secondaryBtnText: 'Estruturação financeira', category: 'Financiar',
        },
        {
          titleLine1: 'Torne-se', titleHighlight: 'parceiro', titleLine2: 'da OMYA INVEST.',
          description: "A OMYA INVEST acolhe intermediários de negócios e parceiros de confiança cujos contributos se enquadrem nas suas atividades.",
          primaryBtnText: 'Tornar-se parceiro', secondaryBtnText: 'Os nossos parceiros', category: 'Parceiros',
        },
      ],
      prevSlide: 'Slide anterior',
      nextSlide: 'Próximo slide',
      pauseAuto: 'Pausar',
      playAuto: 'Reprodução automática',
    },

    about: {
      tag: "Sobre a OMYA INVEST",
      title: 'Uma sociedade corretora licenciada no mercado financeiro da CEMAC',
      p1: "A OMYA INVEST, filial do grupo YAO CORP, é uma sociedade corretora licenciada pela Comissão de Supervisão do Mercado Financeiro da África Central (COSUMAF) sob o número de licença",
      p2: "Sediada em Brazzaville (República do Congo), atua em todo o mercado financeiro regional CEMAC, ao serviço de Estados, empresas públicas e privadas, instituições e particulares.",
      p3: "As suas atividades abrangem: a corretagem de títulos financeiros, a estruturação financeira e o desenvolvimento de negócios institucionais.",
      activity1: 'Corretagem de títulos',
      activity2: 'Estruturação',
      activity3: 'Desenvolvimento',
      ctaBtn: 'Descobrir os nossos serviços',
      agreementLabel: 'Licença COSUMAF',
      zoneLabel: 'Zona CEMAC',
      photoAlt: 'OMYA INVEST — Sociedade Corretora COSUMAF-SDB-01/2025',
    },

    solutions: {
      tag: 'O que fazemos',
      title: 'As nossas soluções e serviços financeiros',
      descBefore: 'Sociedade corretora licenciada pela COSUMAF sob o número',
      descAfter: ', a OMYA INVEST atua em todos os mercados da zona CEMAC.',
      services: [
        { title: 'Estruturação financeira', desc: 'Montagem e estruturação de operações de empréstimo obrigacionista e de abertura de capital; financiamento estruturado.', tag: 'Emissores' },
        { title: 'Desenvolvimento de negócios', desc: 'Acompanhamento de Estados, empresas públicas e privadas e instituições na procura de financiamento.', tag: 'Estados e instituições' },
        { title: 'Investimentos financeiros', desc: 'Aplicar ativos financeiros por conta de terceiros no mercado de capitais da CEMAC.', tag: 'Mercado de capitais' },
        { title: 'Consultoria em financiamento', desc: 'Aconselhar emissores e investidores na estruturação das suas operações no mercado de títulos.', tag: 'Aconselhamento' },
        { title: 'Execução de ordens', desc: 'Executar ordens de compra e venda de títulos por conta dos investidores.', tag: 'Corretagem' },
        { title: 'Custódia e manutenção de conta de títulos', desc: 'Licenciada pelo depositário central único (DCU), cuja função é assegurada pelo Banco dos Estados da África Central (BEAC).', tag: 'Custódia' },
        { title: 'Gestão de carteira', desc: 'Mandato discricionário e aconselhamento em investimento.', tag: 'Gestão sob mandato' },
      ],
      serviceCounter: (n) => `Serviço ${n} de 7`,
      footerCounter: (n) => `${n} / 7`,
      consultBtn: 'Consultar-nos sobre este serviço',
      ctaTitle: 'Tem uma necessidade específica? Vamos falar.',
      ctaBtn: 'Contactar-nos',
      agreementBadge: 'Licença COSUMAF-SDB-01/2025',
      prevService: 'Serviço anterior',
      nextService: 'Próximo serviço',
      prevArrow: '← Anterior',
      nextArrow: 'Seguinte →',
    },

    investor: {
      tag: 'Investidores',
      title: 'Deseja investir?',
      quote: "A OMYA INVEST acompanha-o, de acordo com as suas necessidades, objetivos, limitações e horizonte temporal, rumo aos investimentos mais seguros e rentáveis.",
      stepperTitle: 'Como trabalhamos consigo',
      stepperSub: '',
      stepOf: (n) => `Etapa ${n} de 5`,
      prevStep: 'Etapa anterior',
      nextStep: 'Próxima etapa',
      steps: [
        { title: 'Compreender os seus objetivos', subtitle: '', desc: 'Analisamos consigo a sua situação, as suas necessidades de liquidez, o seu horizonte de investimento e o nível de risco que está disposto a aceitar.', highlight: '' },
        { title: 'Identificar as soluções', subtitle: '', desc: 'Procuramos os títulos adequados ao seu perfil entre as ações, as obrigações do Estado e os títulos de empresas do mercado CEMAC.', highlight: '' },
        { title: 'Escolher os ativos', subtitle: '', desc: 'Conforme a sua escolha, aconselhamo-lo ou gerimos a sua carteira através de um mandato, procurando o equilíbrio certo entre rendimento e risco.', highlight: '' },
        { title: 'Executar as ordens', subtitle: '', desc: 'Executamos as suas ordens de compra e venda na BVMAC. Os seus títulos ficam registados na sua conta de títulos, junto do depositário central único (BEAC).', highlight: '' },
        { title: 'Acompanhar a sua carteira', subtitle: '', desc: 'Informamo-lo regularmente sobre a evolução da sua carteira e ajustamo-la consigo se os seus objetivos mudarem.', highlight: '' },
      ],
      overviewCards: [
        { title: 'Investimentos financeiros', desc: 'Aplicar ativos financeiros por conta de terceiros no mercado de capitais da CEMAC.' },
        { title: 'Gestão de carteira', desc: 'Mandato discricionário e aconselhamento em investimento, de acordo com os seus objetivos.' },
        { title: 'Execução de ordens', desc: 'Execução de ordens de compra e venda de títulos por conta dos investidores.' },
      ],
    },

    issuer: {
      tag: 'Emissores',
      title: 'Procura um financiamento?',
      quote: "Para os Estados, as empresas e as instituições, a OMYA INVEST estrutura as operações de empréstimo obrigacionista, abertura de capital e financiamento estruturado.",
      prevOp: 'Operação anterior',
      nextOp: 'Próxima operação',
      operations: [
        { title: 'Empréstimo obrigacionista', tag: 'Dívida obrigacionista', desc: 'Montagem, estruturação e colocação de empréstimos obrigacionistas emitidos por Estados, autarquias ou empresas no mercado financeiro da CEMAC.', btnText: 'Falar de um empréstimo obrigacionista', detail: 'Dívida soberana e dívida empresarial' },
        { title: 'Abertura de capital', tag: 'Capitais próprios', desc: 'Acompanhamento das empresas que entram em bolsa na BVMAC ou aumentam o seu capital para financiar o seu desenvolvimento.', btnText: 'Falar do seu projeto', detail: 'Entrada em bolsa e aumento de capital' },
        { title: 'Financiamento estruturado', tag: 'Engenharia financeira', desc: 'Montagem de financiamentos à medida para grandes projetos de investimento.', btnText: 'Apresentar o seu projeto', detail: 'Projetos de investimento' },
        { title: 'Consultoria em financiamento', tag: 'Aconselhamento a emissores', desc: 'Ajudamos os emissores a escolher o modo de financiamento adequado, a preparar a operação e a constituir os processos a submeter à COSUMAF.', btnText: 'Pedir aconselhamento', detail: 'Preparação das operações' },
      ],
      bannerTitle: 'É um Estado, uma empresa ou um investidor institucional?',
      bannerDesc: 'A nossa equipa recebe-o em Brazzaville e acompanha-o em toda a zona CEMAC.',
      bannerBtn: 'Apresentar o meu projeto',
    },

    team: {
      tag: 'Governação',
      title: 'A nossa equipa',
      desc: 'As pessoas que o acompanham na OMYA INVEST.',
      nameNotSet: 'Nome a definir',
      positions: {
        'Direction Générale': 'Direção geral',
        'Responsable Structuration': 'Responsável de estruturação',
        'Responsable Négociation & Courtage': 'Responsável de negociação e corretagem',
        'Responsable Conformité & Contrôle': 'Responsável de conformidade e controlo',
      },
      departments: {
        'Gestion stratégique & Gouvernance institutionnelle': 'Gestão estratégica e governação',
        'Ingénierie financière & Émissions de titres': 'Engenharia financeira e emissões de títulos',
        "Exécution d'ordres et Animation du marché BVMAC": 'Execução de ordens e dinamização do mercado BVMAC',
        'Réglementation COSUMAF & Gestion des Risques': 'Regulamentação COSUMAF e gestão de riscos',
      },
      partnersTag: 'Parceiros',
      partnersTitle: 'Os nossos parceiros',
      partnersDesc: 'Clique num logótipo para ver o parceiro.',
      pauseOrbit: 'Parar a animação',
      playOrbit: 'Retomar a animação',
      officialPartner: 'Parceiro',
      clickToEnlarge: 'Ver o parceiro',
      clickToEnlargeTitle: 'Clique para ampliar',
      contactAboutPartnership: 'Entrar em contacto sobre esta parceria',
      visitOfficialSite: 'Visitar o site oficial',
    },

    missionVisionValues: {
      missionTag: 'A nossa missão',
      missionQuote: 'Um capital parado não constrói nada: vamos falar dos seus projetos!',
      missionSub: 'A OMYA INVEST adapta a sua missão às especificidades das pessoas jurídicas e das pessoas físicas.',
      moralesLabel: '',
      moralesTitle: 'Para as pessoas jurídicas',
      moralesText: 'Acompanhar os Estados, as empresas e os investidores institucionais da sub-região CEMAC na mobilização de capitais e na estruturação de soluções de financiamento adaptadas às suas necessidades, com base num conhecimento aprofundado do mercado de títulos.',
      physiquesLabel: '',
      physiquesTitle: 'Para as pessoas físicas',
      physiquesText: 'Otimizar a poupança dos investidores, selecionando para eles os melhores ativos, tendo em conta o binómio rendimento/risco.',

      visionTag: 'A nossa visão',
      visionTitle: 'As nossas três ambições',
      visionSteps: [
        { title: 'Um mercado de capitais mais profundo', text: 'Contribuir para o aprofundamento do mercado de capitais e para o financiamento do desenvolvimento económico da sub-região.' },
        { title: 'A educação financeira', text: 'Ser um ator de referência na educação financeira.' },
        { title: 'A otimização de capitais', text: 'Ser uma referência na otimização de capitais.' },
      ],

      valeursTag: 'Os nossos valores',
      valeursTitle: 'O que orienta o nosso trabalho',
      valeursQuote: '',
      values: [
        { title: 'Integridade' },
        { title: 'Rigor profissional' },
        { title: 'Proximidade com os clientes' },
        { title: 'Compromisso com o desenvolvimento da sub-região' },
      ],
    },

    targets: {
      tag: 'A quem nos dirigimos',
      title: 'Os nossos públicos',
      desc: 'A OMYA INVEST dirige-se a todos os agentes económicos da zona CEMAC e do resto do mundo.',
      items: [
        { title: 'Empresas públicas e privadas', desc: 'Empresas que pretendem captar fundos, através de um empréstimo obrigacionista ou da abertura de capital, ou aplicar a sua tesouraria.', role: '', badge: '' },
        { title: 'Instituições', desc: 'Fundos de pensões, seguradoras, bancos e outros investidores institucionais da sub-região.', role: '', badge: '' },
        { title: 'PME', desc: 'Pequenas e médias empresas que precisam de apoio para captar fundos e estruturar o seu financiamento.', role: '', badge: '' },
        { title: 'Particulares', desc: 'Pessoas que pretendem fazer crescer as suas poupanças investindo em ações ou obrigações cotadas na BVMAC.', role: '', badge: '' },
      ],
    },

    financialMarket: {
      tag: 'Educação financeira',
      title: 'Compreender o mercado financeiro da CEMAC',
      desc: 'Antes de investir, convém saber como funciona o mercado. Eis o essencial.',
      tabInstruments: 'Os instrumentos',
      tabActors: 'Os agentes do mercado',
      instruments: [
        { type: 'Ações', tag: 'Títulos de propriedade', desc: 'Partes do capital de empresas cotadas na BVMAC (Bolsa de Valores Mobiliários da África Central). Dão direito a uma parte dos lucros, os dividendos, e ao voto em assembleia geral.' },
        { type: 'Obrigações', tag: 'Títulos de dívida', desc: 'Empréstimos emitidos pelos Estados da CEMAC (Camarões, Congo, Gabão, Chade, República Centro-Africana, Guiné Equatorial) ou por empresas. Pagam juros regulares, os cupões, e o capital é reembolsado no vencimento.' },
        { type: 'Produtos estruturados', tag: 'Engenharia', desc: 'Instrumentos que combinam vários ativos para responder a um objetivo preciso de rendimento ou de proteção. Destinam-se sobretudo a investidores institucionais.' },
      ],
      investIn: (type) => `Investir em ${type.toLowerCase()}`,
      actors: [
        { name: 'COSUMAF', role: 'Regulador regional', desc: 'Comissão de Supervisão do Mercado Financeiro da África Central. Protege os investidores e licencia os intervenientes do mercado.' },
        { name: 'BVMAC', role: 'Bolsa regional', desc: 'Bolsa de Valores Mobiliários da África Central. Organiza a cotação e a negociação dos títulos.' },
        { name: 'BEAC (DCU)', role: 'Depositário central único', desc: 'O Banco dos Estados da África Central guarda os títulos e assegura a liquidação das operações.' },
        { name: 'Sociedades corretoras (SDB)', role: 'Intermediários licenciados', desc: 'As sociedades corretoras licenciadas, como a OMYA INVEST, negociam títulos na BVMAC por conta dos seus clientes.' },
      ],
      bannerText: 'No mercado da CEMAC, as operações sobre títulos são supervisionadas pela COSUMAF e os títulos são guardados pelo depositário central único, o BEAC.',
    },

    news: {
      tag: 'Imprensa',
      title: 'Notícias e publicações',
      desc: 'Comunicados, avisos e notas informativas publicados pela OMYA INVEST.',
      emptyState: 'Nenhuma notícia publicada no momento. Volte em breve para encontrar os nossos comunicados e publicações.',
    },

    documents: {
      tag: 'Documentos',
      title: 'Documentos para descarregar',
      desc: 'Regulamentos, notas informativas, prospetos e formulários da OMYA INVEST.',
      emptyState: 'Nenhum documento publicado no momento. Volte em breve para encontrar os nossos regulamentos, prospetos e formulários oficiais.',
      download: 'Descarregar',
    },

    contact: {
      tag: 'Contacto',
      title: 'Vamos falar do seu projeto',
      desc: 'Quer investir, captar fundos ou tornar-se parceiro? Escreva-nos e a nossa equipa responder-lhe-á.',
      infoCards: [
        { title: 'Sede social', detail: '76 Avenue Amilcar Cabral, centro da cidade', sub: 'Edifício Villarecci, em frente ao Radisson, Brazzaville' },
        { title: 'Telefone', detail: '+242 06 642 69 89', sub: 'Chamadas & WhatsApp' },
        { title: 'Email', detail: 'contact@omya-invest.com', sub: 'Resposta em 24 a 48h' },
        { title: 'Horário', detail: 'Segunda – Sexta', sub: '08:00 – 17:30 (GMT+1)' },
      ],
      formTitle: 'Escreva-nos',
      formSub: 'Descreva o seu pedido ou o seu projeto',
      sentTitle: 'Obrigado pela sua mensagem',
      sentDesc: 'A nossa equipa entrará em contacto consigo com a maior brevidade possível.',
      sendAnother: 'Enviar outra mensagem',
      labelNom: 'Apelido *',
      placeholderNom: 'O seu apelido',
      labelPrenom: 'Nome próprio *',
      placeholderPrenom: 'O seu nome próprio',
      labelEmail: 'Email *',
      placeholderEmail: 'o.seu.email@exemplo.com',
      labelTelephone: 'Telefone',
      placeholderTelephone: '+242 06 --- ----',
      labelObjet: 'Assunto do seu pedido *',
      objetPlaceholder: 'Selecione o assunto da sua mensagem',
      objetInvestir: 'Quero investir',
      objetFinancer: 'Procuro financiamento',
      objetPartenaire: 'Intermediário de negócios ou parceria',
      objetGestion: 'Gestão de carteira',
      objetAutre: 'Outro pedido',
      labelMessage: 'Mensagem *',
      placeholderMessage: 'Descreva o seu pedido, o seu projeto ou os seus objetivos financeiros...',
      submitBtn: 'Enviar mensagem',
      privacyNote: 'Os seus dados são tratados de forma confidencial, em conformidade com as nossas obrigações regulamentares.',
    },

    footer: {
      tagline: 'O seu capital merece mais do que uma conta parada.',
      brandDesc: 'A OMYA INVEST conecta os agentes com necessidade de financiamento e os agentes com capacidade de financiamento da zona CEMAC e do resto do mundo.',
      colInstitution: 'Instituição',
      colSolutions: 'As nossas soluções',
      colMarket: 'Mercado e imprensa',
      navLinks: [
        { label: 'Início', href: '#accueil' },
        { label: 'Sobre nós', href: '#presentation' },
        { label: 'A nossa missão', href: '#mission' },
        { label: 'A nossa visão', href: '#vision' },
        { label: 'Os nossos valores', href: '#valeurs' },
        { label: 'A quem nos dirigimos', href: '#cibles' },
        { label: 'Equipa e parceiros', href: '#equipe' },
      ],
      solutionsLinks: [
        { label: 'Estruturação financeira', href: '#solutions-structuration' },
        { label: 'Desenvolvimento de negócios', href: '#solutions-developpement' },
        { label: 'Investimentos financeiros', href: '#solutions-placements' },
        { label: 'Consultoria em financiamento', href: '#solutions-conseil' },
        { label: 'Execução de ordens', href: '#solutions-execution' },
        { label: 'Custódia e conta de títulos', href: '#solutions-conservation' },
        { label: 'Gestão de carteira', href: '#solutions-gestion' },
      ],
      marketLinks: [
        { label: 'Mercado financeiro CEMAC', href: '#marche-financier' },
        { label: 'Investir', href: '#investir' },
        { label: 'Financiar-se', href: '#financer' },
        { label: 'Parceiros', href: '#partenaires' },
        { label: 'Notícias', href: '#actualites' },
        { label: 'Documentos', href: '#documents' },
        { label: 'Contacto', href: '#contact' },
      ],
      newsletterText: 'Mantenha-se informado sobre as oportunidades de mercado:',
      newsletterBtn: 'Subscrição da Newsletter',
      rightsText: (year) => `© ${year} OMYA INVEST — Todos os direitos reservados. Filial do Grupo YAO CORP. Licenciada pela COSUMAF.`,
      legalNotice: 'Licença COSUMAF-SDB-01/2025',
      privacyPolicy: 'Política de privacidade',
      legalMentions: 'Avisos legais',
    },

    sectionHeaders: {
      'a-propos': { title: 'Sobre a OMYA INVEST', breadcrumbLabel: 'Sobre nós', description: 'Sociedade corretora licenciada pela COSUMAF (SDB-01/2025), filial do grupo YAO CORP.' },
      'nos-solutions': { title: 'Soluções', breadcrumbLabel: 'Soluções', description: '7 serviços para investidores e emissores da zona CEMAC.' },
      'investir': { title: 'Investir', breadcrumbLabel: 'Investir', description: 'Aplicar as suas poupanças no mercado financeiro da CEMAC.' },
      'financer': { title: 'Financiar-se', breadcrumbLabel: 'Financiar', description: 'Empréstimo obrigacionista, abertura de capital e financiamento estruturado.' },
      'partenaires': { title: 'Equipa e parceiros', breadcrumbLabel: 'Parceiros', description: 'A equipa da OMYA INVEST e os seus parceiros.' },
      'marche-financier': { title: 'O mercado CEMAC', breadcrumbLabel: 'Mercado CEMAC', description: 'Ações, obrigações e funcionamento do mercado.' },
      'actualites-documents': { title: 'Imprensa e documentos', breadcrumbLabel: 'Imprensa e docs', description: 'Comunicados, publicações e documentos da OMYA INVEST.' },
      'contact': { title: 'Contacto', breadcrumbLabel: 'Contacto', description: 'Os nossos contactos e um formulário para nos escrever.' },
    },
    sectionHeaderHome: 'Início',

    crossLinks: {
      solutionsToPaths: { title: 'Quer investir ou procura financiamento?', description: 'Cada caso tem a sua página: aplicar o seu capital ou estruturar uma operação de financiamento.', cta1: 'Quero investir', cta2: 'Procuro financiamento' },
      investirToSolutions: { title: 'Ver todos os nossos serviços', description: 'Investimentos, gestão de carteira, execução de ordens: descubra os nossos 7 serviços.', cta: 'Ver as nossas soluções' },
      financerToSolutions: { title: 'Ver todos os nossos serviços', description: 'Estruturação financeira, consultoria, desenvolvimento de negócios: descubra os nossos 7 serviços.', cta: 'Ver as nossas soluções' },
      partenairesToAbout: { title: 'Saiba mais sobre a OMYA INVEST', description: 'A nossa licença, o nosso grupo, a nossa missão e os nossos valores.', cta: 'Descobrir a OMYA INVEST' },
      marcheToAbout: { title: 'Quem é a OMYA INVEST?', description: 'Uma sociedade corretora licenciada pela COSUMAF, filial do grupo YAO CORP, que atua em toda a zona CEMAC.', cta: 'Descobrir a OMYA INVEST' },
      contactToPartners: { title: 'Os nossos parceiros', description: 'Conheça a equipa da OMYA INVEST e os parceiros com quem trabalhamos.', cta: 'Ver os nossos parceiros' },
    },

    seo: {
      title: 'OMYA INVEST — Sociedade Corretora Licenciada COSUMAF-SDB-01/2025 | Grupo YAO CORP',
      description: 'A OMYA INVEST, filial do Grupo YAO CORP, é uma sociedade corretora licenciada pela COSUMAF (COSUMAF-SDB-01/2025). Conectamos investidores e emissores em toda a zona CEMAC.',
      keywords: 'OMYA INVEST, COSUMAF, sociedade corretora, CEMAC, investimento, financiamento, BVMAC, YAO CORP, Brazzaville, Congo, obrigações, ações, gestão de carteira',
    },
  },
};

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('FR');

  const t = translations[currentLang] || translations.FR;

  const changeLanguage = (code) => {
    if (translations[code]) setCurrentLang(code);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
