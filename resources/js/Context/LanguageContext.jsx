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
    clientSpace: "Espace Client",
    memberSpace: "Espace Membre",
    login: "Se connecter",
    register: "S'inscrire",
    language: "Français",
    languageSelect: "Langue",
    categoryRubric: "Rubrique",

    authModalLoginTitle: "Accéder à votre Espace",
    authModalRegisterTitle: "Créer votre Compte",
    authModalLoginDesc: "Connectez-vous pour suivre vos investissements et gérer votre portefeuille.",
    authModalRegisterDesc: "Rejoignez OMYA INVEST et accédez aux opportunités boursières.",
    orByEmail: "ou par email",
    fullName: "Nom Complet",
    emailAddr: "Adresse Email",
    passwordLabel: "Mot de passe",
    forgotPass: "Oublié ?",
    investorType: "Type d'Investisseur",
    particulier: "Investisseur Particulier",
    corporate: "Entreprise / Institutionnel",
    rememberMe: "Se souvenir de moi",
    acceptTerms: "J'accepte les conditions d'utilisation",
    submitLogin: "SE CONNECTER",
    submitRegister: "S'INSCRIRE",

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
      { id: 'nos-solutions', label: 'Nos Solutions' },
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
      solutionsMegaTitle: "Nos 7 Solutions & Services Financiers",
      solutionsMegaSeeAll: "Voir tout",
      items: [
        { id: 'accueil', label: 'Accueil', href: '#accueil' },
        {
          id: 'a-propos', label: 'À propos', href: '#presentation',
          dropdownItems: [
            { label: 'Présentation', desc: 'Agrément COSUMAF & Groupe YAO CORP', href: '#presentation' },
            { label: 'Notre mission', desc: 'Accompagnement personnes morales & physiques', href: '#mission' },
            { label: 'Notre vision', desc: '3 axes pour le marché CEMAC', href: '#vision' },
            { label: 'Nos valeurs', desc: 'Intégrité, Rigueur & Proximité', href: '#valeurs' },
            { label: 'Nos cibles', desc: 'États, Entreprises, PME & Particuliers', href: '#cibles' },
          ],
        },
        { id: 'nos-solutions', label: 'Nos solutions', href: '#nos-solutions' },
        {
          id: 'investir', label: 'Investir', href: '#investir',
          dropdownItems: [
            { label: 'Pourquoi investir ?', desc: 'Optimiser et sécuriser votre capital', href: '#pourquoi-investir' },
            { label: 'Placements financiers', desc: 'Titres et opportunités sur la CEMAC', href: '#solutions-placements' },
            { label: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire sur-mesure', href: '#solutions-gestion' },
            { label: "Exécution d'ordre", desc: 'Transactions rapides et sécurisées', href: '#solutions-execution' },
            { label: 'Comprendre la bourse', desc: 'Guide pédagogique pour investisseurs', href: '#marche-financier' },
          ],
        },
        {
          id: 'financer', label: 'Financer', href: '#financer',
          dropdownItems: [
            { label: 'Besoin de financement ?', desc: 'Mobilisation de capitaux structurés', href: '#besoin-financement' },
            { label: 'Structuration financière', desc: 'Montage sur-mesure pour émetteurs', href: '#solutions-structuration' },
            { label: 'Emprunt obligataire', desc: 'Levée de fonds sur le marché obligataire', href: '#emprunt-obligataire' },
            { label: 'Ouverture du capital', desc: 'Introduction en bourse & equity', href: '#ouverture-capital' },
            { label: 'Conseil en financement', desc: 'Accompagnement stratégique des émetteurs', href: '#solutions-conseil' },
          ],
        },
        { id: 'partenaires', label: 'Partenaires', href: '#partenaires' },
        {
          id: 'marche-financier', label: 'Marché financier', href: '#marche-financier',
          dropdownItems: [
            { label: 'Comprendre le marché CEMAC', desc: 'Organisation et cadre COSUMAF', href: '#marche-cemac' },
            { label: 'Actions', desc: 'Titres de propriété cotés sur la BVMAC', href: '#instruments-actions' },
            { label: 'Obligations', desc: "Titres de créances d'États et entreprises", href: '#instruments-obligations' },
            { label: 'Éducation financière', desc: 'Pédagogie et guides de marché', href: '#education-financiere' },
          ],
        },
        {
          id: 'actualites-documents', label: 'Presse & Doc', href: '#actualites',
          dropdownItems: [
            { label: 'Actualités', desc: 'Dernières nouvelles du marché CEMAC', href: '#actualites-recents' },
            { label: 'Publications', desc: "Analyses et rapports d'experts", href: '#publications' },
            { label: 'Communiqués', desc: 'Annonces officielles OMYA INVEST', href: '#communiques' },
            { label: 'Documents', desc: 'Règlements, prospectus & formulaires', href: '#documents' },
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
        { num: '06', title: 'Conservation & compte-titre', desc: 'Agréé par le dépositaire central BEAC (DCU)', viewId: 'nos-solutions', href: '#solutions-conservation' },
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
          titleLine1: 'Vous souhaitez', titleHighlight: 'investir ?', titleLine2: '',
          description: "Pour les agents à capacité de financement : OMYA INVEST vous accompagne (en fonction de vos besoins, de vos objectifs, de vos contraintes et de votre horizon temporel) vers les placements les plus sûrs et les plus rentables.",
          primaryBtnText: 'Découvrir nos solutions', secondaryBtnText: 'Nos 7 services', category: 'Investir',
        },
        {
          titleLine1: 'Vous recherchez un', titleHighlight: 'financement ?', titleLine2: '',
          description: "Pour les agents à besoin de financement : OMYA INVEST structure pour vous les opérations d'emprunt obligataire, d'ouverture du capital, de financement structuré, …",
          primaryBtnText: 'Présenter mon projet', secondaryBtnText: 'Structuration financière', category: 'Financer',
        },
        {
          titleLine1: 'Partenariats &', titleHighlight: 'Alliances', titleLine2: 'fiables.',
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
      title: 'Une Société de Bourse Agréée sur le Marché Régional CEMAC',
      p1Before: '',
      p1: "OMYA INVEST, filiale du groupe YAO CORP, est une société de bourse agréée par la Commission de Surveillance du Marché Financier de l'Afrique Centrale (COSUMAF) sous le numéro d'agrément",
      p2: "Basée à Brazzaville (République du Congo), elle intervient sur l'ensemble du marché financier régional CEMAC, au service des États, des entreprises publiques et privées, des institutionnels ainsi que particuliers.",
      p3: "Ses activités couvrent : le courtage des titres financiers, la structuration financière et le développement d'affaires institutionnel.",
      activity1: 'Courtage de titres',
      activity2: 'Structuration',
      activity3: 'Développement',
      ctaBtn: 'Découvrir nos 7 expertises',
      agreementLabel: 'Agrément COSUMAF',
      zoneLabel: 'Zone CEMAC',
      photoAlt: 'OMYA INVEST — Société de Bourse COSUMAF-SDB-01/2025',
    },

    // ── Nos Solutions ──
    solutions: {
      tag: 'Offre Institutionnelle Certifiée',
      title: 'Nos Solutions & Services Financiers',
      descBefore: 'Société de bourse agréée par la COSUMAF sous le numéro',
      descAfter: ", OMYA INVEST intervient sur l'ensemble des marchés de la zone CEMAC.",
      services: [
        { title: 'Structuration financière', desc: "Montage et structuration des opérations d'emprunts obligataires et d'ouverture du capital ; Financement structuré ...", tag: 'Émetteurs & Structuration' },
        { title: "Développement d'affaires", desc: 'Accompagnement des États, des entreprises publiques et privées et des institutionnels dans leurs recherches de financement', tag: 'Institutionnels & États' },
        { title: 'Placements financiers', desc: 'Placer les actifs financiers pour le compte tiers sur le marché des capitaux de la CEMAC', tag: 'Marchés Financiers CEMAC' },
        { title: 'Conseil en financement', desc: 'Conseil aux émetteurs et aux investisseurs dans la structuration de leurs opérations sur le marché des titres.', tag: 'Conseil Stratégique' },
        { title: "Exécution d'ordre", desc: "Exécuter les ordres d'achat et de vente des titres pour le compte des investisseurs", tag: 'Courtage & Bourse' },
        { title: 'Conservation & tenue de compte-titre', desc: 'Agréé par le dépositaire central unique (DCU) dont la fonction est assurée par la Banque des Etats de l\'Afrique Centrale (BEAC)', tag: 'Agréé DCU / BEAC' },
        { title: 'Gestion de portefeuille', desc: 'Mandat discrétionnaire et conseil en investissement', tag: 'Gestion Sur-mesure' },
      ],
      serviceCounter: (n) => `Service 0${n} / 07`,
      footerCounter: (n) => `0${n} / 07 Services Certifiés`,
      consultBtn: 'Nous consulter pour ce service',
      agreementBadge: 'Agrément COSUMAF-SDB-01/2025',
      prevService: 'Service précédent',
      nextService: 'Service suivant',
      prevArrow: '← Précédent',
      nextArrow: 'Suivant →',
    },

    // ── Investir ──
    investor: {
      tag: 'Agents à Capacité de Financement',
      title: 'Vous souhaitez investir ?',
      quote: "« Pour les agents à capacité de financement : OMYA INVEST vous accompagne (en fonction de vos besoins, de vos objectifs, de vos contraintes et de votre horizon temporel) vers les placements les plus sûrs et les plus rentables. »",
      stepperTitle: 'Le Parcours Investisseur en 5 Étapes',
      stepperSub: "Cliquez ou laissez défiler les étapes pour découvrir notre méthode d'accompagnement",
      stepOf: (n) => `Étape ${n} sur 05`,
      prevStep: 'Étape précédente',
      nextStep: 'Étape suivante',
      steps: [
        { title: 'Comprendre ses objectifs', subtitle: 'Audit patrimonial & Profil de risque', desc: 'Analyse approfondie de votre situation financière, vos contraintes de liquidité, votre horizon temporel et votre niveau de tolérance au risque.', highlight: "Définition des priorités d'investissement & Horizon temporel" },
        { title: 'Identifier les solutions', subtitle: 'Sourcing & Veille de marché', desc: "Sélection rigoureuse d'opportunités d'investissement adaptées sur les marchés d'actions, d'obligations d'État et de titres d'entreprises de la zone CEMAC.", highlight: 'Accès privilégié aux opportunités boursières CEMAC' },
        { title: 'Sélectionner les actifs', subtitle: "Allocation d'actifs stratégique", desc: "Conseil sur-mesure ou mandat de gestion discrétionnaire personnalisé pour composer et équilibrer un portefeuille d'actifs optimal.", highlight: 'Optimisation du couple Rendement / Risque' },
        { title: 'Passer les ordres', subtitle: 'Exécution boursière sécurisée', desc: "Exécution d'ordres rapide et sécurisée auprès du marché boursier régional BVMAC et tenue de votre compte titres agréé par le dépositaire central BEAC (DCU).", highlight: 'Sécurité des transactions & Conservation BEAC' },
        { title: 'Suivre son portefeuille', subtitle: 'Reporting & Arbitrage', desc: 'Reporting périodique transparent, suivi en temps réel des performances financières et ajustements stratégiques de votre portefeuille.', highlight: 'Transparence totale & Suivi analytique régulier' },
      ],
      overviewCards: [
        { title: 'Placements Financiers', desc: 'Placer les actifs financiers pour le compte tiers sur le marché des capitaux de la CEMAC.' },
        { title: 'Gestion de Portefeuille', desc: 'Mandat discrétionnaire et conseil en investissement personnalisé selon vos priorités.' },
        { title: "Exécution d'Ordre", desc: "Exécution rapide et sécurisée des ordres d'achat et de vente de titres pour le compte des investisseurs." },
      ],
    },

    // ── Financer ──
    issuer: {
      tag: 'Agents à Besoin de Financement',
      title: 'Vous recherchez un financement ?',
      quote: "« Pour les agents à besoin de financement (États, entreprises et institutionnels) : OMYA INVEST structure pour vous les opérations d'emprunt obligataire, d'ouverture du capital, de financement structuré, … »",
      prevOp: 'Opération précédente',
      nextOp: 'Opération suivante',
      operations: [
        { title: 'Emprunt obligataire', tag: 'Levée de Dette & Marché Obligataire', desc: "Montage, structuration et placement d'émissions obligataires publiques (États, collectivités) ou privées (entreprises) sur le marché financier régional CEMAC.", btnText: "Discuter d'un emprunt obligataire", detail: "Structuration de dette souveraine & d'entreprise" },
        { title: 'Ouverture du capital', tag: 'Equity & Fonds Propres', desc: "Accompagnement rigoureux à l'introduction en bourse (IPO sur la BVMAC) et augmentations de capital pour financer le développement et la croissance.", btnText: "Découvrir l'ouverture du capital", detail: 'Introduction BVMAC & Augmentation de capital' },
        { title: 'Financement structuré', tag: 'Ingénierie Financière Sur-Mesure', desc: "Ingénierie financière avancée pour la réalisation et le bouclage financier de grands projets d'infrastructures, d'énergie et d'investissements d'envergure.", btnText: "Structurer un projet d'infrastructure", detail: "Projets d'infrastructures & Financements complexes" },
        { title: 'Conseil en financement', tag: 'Accompagnement Stratégique Émetteurs', desc: 'Conseil stratégique aux émetteurs pour déterminer les meilleures options de financement, optimiser la structure bilancielle et préparer l\'agrément COSUMAF.', btnText: 'Solliciter un conseil stratégique', detail: 'Optimisation bilancielle & Dossiers COSUMAF' },
      ],
      bannerTitle: 'Vous êtes un État, une Entreprise publique/privée ou un Institutionnel ?',
      bannerDesc: "Nos experts en ingénierie financière et développement d'affaires sont à votre disposition à Brazzaville et dans toute la zone CEMAC.",
      bannerBtn: 'Présenter mon projet',
    },

    // ── Équipe & Partenaires ──
    team: {
      tag: 'Gouvernance & Leadership',
      title: "Notre Équipe d'Experts Certifiés",
      desc: "Une équipe pluridisciplinaire d'ingénieurs financiers, de traders agréés et de juristes au service de vos opérations.",
      nameNotSet: 'Nom à renseigner',
      positions: {
        'Direction Générale': 'Direction Générale',
        'Responsable Structuration': 'Responsable Structuration',
        'Responsable Négociation & Courtage': 'Responsable Négociation & Courtage',
        'Responsable Conformité & Contrôle': 'Responsable Conformité & Contrôle',
      },
      departments: {
        'Gestion stratégique & Gouvernance institutionnelle': 'Gestion stratégique & Gouvernance institutionnelle',
        'Ingénierie financière & Émissions de titres': 'Ingénierie financière & Émissions de titres',
        "Exécution d'ordres et Animation du marché BVMAC": "Exécution d'ordres et Animation du marché BVMAC",
        'Réglementation COSUMAF & Gestion des Risques': 'Réglementation COSUMAF & Gestion des Risques',
      },
      partnersTag: 'Réseau & Partenariats Certifiés',
      partnersTitle: 'Nos Partenaires en Rotation Continue',
      partnersDesc: "Cliquez sur un logo en orbite pour l'afficher en grand et découvrir ses détails.",
      pauseOrbit: "Mettre en pause l'orbite",
      playOrbit: "Lancer l'orbite continu",
      officialPartner: 'Partenaire Officiel',
      clickToEnlarge: 'Cliquer pour agrandir le logo',
      clickToEnlargeTitle: 'Cliquer pour agrandir',
      contactAboutPartnership: 'Prendre contact au sujet de ce partenariat',
      visitOfficialSite: 'Visiter le site officiel',
    },

    // ── Mission, Vision, Valeurs ──
    missionVisionValues: {
      missionTag: 'Notre Mission',
      missionQuote: '« Un capital dormant ne construit rien : parlons de vos projets! »',
      missionSub: 'OMYA INVEST adapte sa mission aux spécificités des personnes morales et des personnes physiques.',
      moralesLabel: 'Dimension 01',
      moralesTitle: 'Pour les Personnes Morales',
      moralesText: "« Accompagner les États, les entreprises et les investisseurs institutionnels de la sous-région CEMAC dans la mobilisation de capitaux et la structuration de solutions de financement adaptées à leurs besoins, en s'appuyant sur une expertise pointue du marché des titres. »",
      physiquesLabel: 'Dimension 02',
      physiquesTitle: 'Pour les Personnes Physiques',
      physiquesText: "« optimiser l'épargne des investisseurs en sélectionnant pour eux des meilleurs actifs en tenant compte du couple rendement/risque. »",

      visionTag: 'Notre Vision',
      visionTitle: 'Trois Axes pour Façonner le Marché Financier Régional',
      visionSteps: [
        { title: 'Approfondissement du Marché CEMAC', text: "Contribuer à l'approfondissement du marché des capitaux et au financement du développement économique de la sous-région" },
        { title: 'Éducation Financière & Pédagogie', text: 'Être un acteur majeur de l\'éducation financière' },
        { title: 'Référence en Optimisation', text: "Être une référence dans l'optimisation des capitaux." },
      ],

      valeursTag: 'Nos Valeurs',
      valeursTitle: "Les Piliers Éthiques d'OMYA INVEST",
      valeursQuote: '« Intégrité, rigueur professionnelle, proximité avec les clients et engagement au service du développement de la sous-région. »',
      values: [
        { title: 'Intégrité' },
        { title: 'Rigueur professionnelle' },
        { title: 'Proximité avec les clients' },
        { title: 'Engagement au service du développement' },
      ],
    },

    // ── Nos Cibles ──
    targets: {
      tag: "Périmètre d'Intervention",
      title: 'Nos Cibles',
      desc: "OMYA INVEST s'adresse à l'ensemble des acteurs économiques de la zone CEMAC et du reste du monde.",
      items: [
        { title: 'Entreprises publiques et privées', desc: 'Grandes entreprises recherchant du capital structurel, une émission de dette (emprunt obligataire), une augmentation de capital ou une optimisation financière.', role: 'Émetteurs & Emprunteurs', badge: 'Grande Entreprise' },
        { title: 'Institutionnels', desc: "Caisses de retraite, fonds souverains, compagnies d'assurance, banques et investisseurs institutionnels de la sous-région CEMAC.", role: 'Investisseurs Qualifiés', badge: 'Investisseurs Pro' },
        { title: 'PME / PMI', desc: 'Petites et moyennes entreprises en pleine croissance nécessitant un accompagnement sur-mesure pour lever des fonds et structurer leur bilan.', role: 'Croissance & Structuration', badge: 'Développement' },
        { title: 'Particuliers', desc: "Personnes physiques désireuses de faire fructifier leur épargne, d'accéder aux actions/obligations de la BVMAC et de diversifier leur patrimoine.", role: 'Épargnants & Investisseurs', badge: 'Personnes Physiques' },
      ],
    },

    // ── Marché Financier CEMAC ──
    financialMarket: {
      tag: 'Pédagogie Financière & Cadre Réglementaire',
      title: 'Comprendre le Marché Financier CEMAC',
      desc: "OMYA INVEST s'engage activement dans l'éducation financière pour vous accompagner en toute clarté sur le marché financier sous-régional.",
      tabInstruments: 'Instruments Financiers',
      tabActors: 'Acteurs du Marché CEMAC',
      instruments: [
        { type: 'Actions', tag: 'Titres de Propriété', desc: "Parts du capital social d'entreprises publiques ou privées cotées sur la BVMAC (Bourse des Valeurs Mobilières d'Afrique Centrale). Procurant un droit de vote et des dividendes." },
        { type: 'Obligations', tag: 'Titres de Créance', desc: "Emprunts émis par les États de la zone CEMAC (Cameroun, Congo, Gabon, Tchad, RCA, Guinée Équatoriale) ou des sociétés privées. Offrant des coupons d'intérêts réguliers et remboursement du capital." },
        { type: 'Titres Financiers Structurés', tag: 'Ingénierie', desc: 'Instruments financiers combinant plusieurs actifs pour répondre à des besoins spécifiques de rendement et de couverture pour les investisseurs institutionnels.' },
      ],
      investIn: (type) => `Investir en ${type}`,
      actors: [
        { name: 'COSUMAF', role: 'Régulateur Régional', desc: "Commission de Surveillance du Marché Financier de l'Afrique Centrale. Assure la protection des investisseurs et délivre les agréments (ex: Agrément COSUMAF-SDB-01/2025)." },
        { name: 'BVMAC', role: 'Bourse Régionale', desc: "Bourse des Valeurs Mobilières d'Afrique Centrale, entreprise de marché assurant la cotation et la négociation des titres." },
        { name: 'BEAC (DCU)', role: 'Dépositaire Central Unique', desc: "La Banque des États de l'Afrique Centrale assure la conservation des titres et le règlement-livraison des opérations." },
        { name: 'Sociétés de Bourse (SDB)', role: 'Intermédiaires Agréés', desc: 'OMYA INVEST et les SDB agréées sont les seuls intermédiaires autorisés à exécuter les ordres, structurer les émissions et conserver les titres.' },
      ],
      bannerText: "Toutes les opérations d'échanges de titres et de souscription sur le marché CEMAC sont soumises à la réglementation rigoureuse de la COSUMAF et conservées par le Dépositaire Central Unique assuré par la BEAC (DCU).",
    },

    // ── Actualités ──
    news: {
      tag: 'Presse & Communiqués Officiels',
      title: 'Actualités & Publications Officieuses',
      desc: "Retrouvez les communiqués de presse, avis officiels et notes d'information boursière d'OMYA INVEST.",
      emptyState: 'Aucune actualité publiée pour le moment. Revenez bientôt pour retrouver nos communiqués et publications.',
    },

    // ── Documents ──
    documents: {
      tag: 'Centre de Documentation',
      title: 'Bibliothèque Documentaire Institutionnelle',
      desc: "Téléchargez l'ensemble des règlements, notices d'information, prospectus d'émissions obligataires et formulaires officiels d'OMYA INVEST.",
      emptyState: 'Aucun document publié pour le moment. Revenez bientôt pour retrouver nos règlements, prospectus et formulaires officiels.',
    },

    // ── Contact ──
    contact: {
      tag: 'Prendre Contact',
      title: 'Parlons de Votre Projet ou de Vos Capitaux',
      desc: "Notre équipe d'experts est à votre écoute, que vous souhaitiez investir, trouver un financement ou établir un partenariat institutionnel.",
      infoCards: [
        { title: 'Siège Social', detail: '76 Avenue Amilcar Cabral, Centre-ville', sub: 'Immeuble Villarecci, en face du Radisson — Brazzaville' },
        { title: 'Téléphone', detail: '+242 06 642 69 89', sub: 'Appels & WhatsApp' },
        { title: 'Email', detail: 'contact@omya-invest.com', sub: 'Réponse sous 24 à 48h' },
        { title: 'Horaires', detail: 'Lundi – Vendredi', sub: '08:00 – 17:30 (GMT+1)' },
      ],
      formTitle: 'Formulaire de Prise en Charge',
      formSub: 'Décrivez votre demande ou votre projet',
      sentTitle: 'Message Envoyé !',
      sentDesc: "Merci d'avoir contacté OMYA INVEST. Notre équipe traitera votre demande dans les meilleurs délais et vous répondra sous 48h ouvrables.",
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
      objetInvestir: 'Je souhaite investir (Agent à capacité de financement)',
      objetFinancer: 'Je recherche un financement (Agent à besoin de financement)',
      objetPartenaire: "Apporteur d'affaires / Partenariat",
      objetGestion: 'Gestion de portefeuille ou mandat discrétionnaire',
      objetAutre: 'Autre demande',
      labelMessage: 'Message *',
      placeholderMessage: 'Décrivez votre demande, votre projet ou vos objectifs financiers...',
      submitBtn: 'Envoyer mon message à OMYA INVEST',
      privacyNote: 'Vos données sont traitées de façon confidentielle conformément à nos obligations réglementaires.',
    },

    // ── Footer ──
    footer: {
      tagline: "« Vos capitaux méritent mieux qu'un compte qui dort. »",
      brandDesc: 'OMYA INVEST connecte les agents à besoin de financement et les agents à capacité de financement de la zone CEMAC et du reste du monde.',
      colInstitution: 'Institution',
      colSolutions: 'Nos Solutions',
      colMarket: 'Marché & Presse',
      navLinks: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'À propos & Agrément', href: '#presentation' },
        { label: 'Notre Mission', href: '#mission' },
        { label: 'Notre Vision', href: '#vision' },
        { label: 'Nos Valeurs', href: '#valeurs' },
        { label: 'Nos Cibles', href: '#cibles' },
        { label: 'Équipe & Partenaires', href: '#equipe' },
      ],
      solutionsLinks: [
        { label: 'Structuration financière', href: '#solutions-structuration' },
        { label: "Développement d'affaires", href: '#solutions-developpement' },
        { label: 'Placements financiers', href: '#solutions-placements' },
        { label: 'Conseil en financement', href: '#solutions-conseil' },
        { label: "Exécution d'ordre", href: '#solutions-execution' },
        { label: 'Conservation & tenue de compte-titre', href: '#solutions-conservation' },
        { label: 'Gestion de portefeuille', href: '#solutions-gestion' },
      ],
      marketLinks: [
        { label: 'Marché Financier CEMAC', href: '#marche-financier' },
        { label: 'Parcours Investir', href: '#investir' },
        { label: 'Parcours Financer', href: '#financer' },
        { label: 'Partenaires Officiels', href: '#partenaires' },
        { label: 'Actualités & Communiqués', href: '#actualites' },
        { label: 'Centre de Documentation', href: '#documents' },
        { label: 'Contact & Support', href: '#contact' },
      ],
      newsletterText: 'Restez informé des opportunités de marché :',
      newsletterBtn: 'Abonnement Newsletter',
      rightsText: (year) => `© ${year} OMYA INVEST — Tous droits réservés. Filiale du Groupe YAO CORP. Agréée par la COSUMAF.`,
      legalNotice: 'Avis Réglementaire COSUMAF-SDB-01/2025',
      privacyPolicy: 'Politique de Confidentialité',
      legalMentions: 'Mentions Légales',
    },

    // ── Bandeaux légers (SectionPageHeader) par onglet ──
    sectionHeaders: {
      'a-propos': { title: "À propos d'OMYA INVEST", breadcrumbLabel: 'À propos', description: 'Société de bourse agréée COSUMAF-SDB-01/2025, filiale du Groupe YAO CORP.' },
      'nos-solutions': { title: 'Nos Solutions & Services Financiers', breadcrumbLabel: 'Nos Solutions', description: '7 expertises au service des investisseurs et des émetteurs de la zone CEMAC.' },
      'investir': { title: 'Vous souhaitez investir ?', breadcrumbLabel: 'Investir', description: 'Faites fructifier votre capital sur le marché financier régional CEMAC.' },
      'financer': { title: 'Vous recherchez un financement ?', breadcrumbLabel: 'Financer', description: "Structuration d'emprunts obligataires, ouverture du capital et financement structuré." },
      'partenaires': { title: 'Notre Réseau de Partenaires', breadcrumbLabel: 'Partenaires', description: "Une équipe d'experts certifiés et des partenariats institutionnels de confiance." },
      'marche-financier': { title: 'Comprendre le Marché Financier CEMAC', breadcrumbLabel: 'Marché CEMAC', description: 'Actions, obligations et éducation financière sur la zone CEMAC.' },
      'actualites-documents': { title: 'Actualités & Documentation', breadcrumbLabel: 'Presse & Doc', description: "Publications, communiqués et documents officiels d'OMYA INVEST." },
      'contact': { title: 'Parlons de Votre Projet', breadcrumbLabel: 'Contact', description: "Notre équipe vous accompagne dans vos projets d'investissement ou de financement." },
    },
    sectionHeaderHome: 'Accueil',

    // ── Bandeaux de renvoi (CrossLinkSection) ──
    crossLinks: {
      solutionsToPaths: { title: 'Vous êtes investisseur ou vous recherchez un financement ?', description: 'Découvrez le parcours qui vous correspond : investir votre capital ou structurer une opération de financement.', cta1: 'Parcours Investisseur', cta2: 'Parcours Émetteur' },
      investirToSolutions: { title: "Explorez l'ensemble de nos solutions", description: 'Placements financiers, gestion de portefeuille, exécution d\'ordres... découvrez nos 7 expertises complètes.', cta: 'Voir nos solutions' },
      financerToSolutions: { title: 'Découvrez toutes nos expertises de structuration', description: "Structuration financière, conseil, développement d'affaires... explorez nos 7 solutions complètes.", cta: 'Voir nos solutions' },
      partenairesToAbout: { title: 'En savoir plus sur OMYA INVEST', description: 'Agrément COSUMAF, filiation au Groupe YAO CORP, mission et valeurs : découvrez notre identité institutionnelle.', cta: 'Découvrir OMYA INVEST' },
      marcheToAbout: { title: 'Qui est OMYA INVEST ?', description: 'Société de bourse agréée COSUMAF-SDB-01/2025, filiale du Groupe YAO CORP, au service de toute la zone CEMAC.', cta: 'Découvrir OMYA INVEST' },
      contactToPartners: { title: 'Découvrez notre réseau de partenaires', description: "Une équipe d'experts certifiés et des partenariats institutionnels de confiance partout dans la zone CEMAC.", cta: 'Voir nos partenaires' },
    },

    // ── SEO ──
    seo: {
      title: 'OMYA INVEST — Société de Bourse Agréée COSUMAF-SDB-01/2025 | Groupe YAO CORP',
      description: "OMYA INVEST, filiale du Groupe YAO CORP, est une société de bourse agréée par la COSUMAF (COSUMAF-SDB-01/2025). Nous connectons investisseurs et émetteurs sur toute la zone CEMAC.",
      keywords: 'OMYA INVEST, COSUMAF, société de bourse, CEMAC, investissement, financement, BVMAC, YAO CORP, Brazzaville, Congo, obligations, actions, gestion de portefeuille',
    },
  },

  EN: {
    clientSpace: "Client Area",
    memberSpace: "Member Area",
    login: "Log In",
    register: "Sign Up",
    language: "English",
    languageSelect: "Language",
    categoryRubric: "Section",

    authModalLoginTitle: "Access Your Account",
    authModalRegisterTitle: "Create Your Account",
    authModalLoginDesc: "Log in to track your investments and manage your portfolio.",
    authModalRegisterDesc: "Join OMYA INVEST and access stock market opportunities.",
    orByEmail: "or with email",
    fullName: "Full Name",
    emailAddr: "Email Address",
    passwordLabel: "Password",
    forgotPass: "Forgot?",
    investorType: "Investor Type",
    particulier: "Individual Investor",
    corporate: "Corporate / Institutional",
    rememberMe: "Remember me",
    acceptTerms: "I accept the terms of use",
    submitLogin: "LOG IN",
    submitRegister: "SIGN UP",

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
      { id: 'nos-solutions', label: 'Our Solutions' },
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
      solutionsMegaTitle: "Our 7 Financial Solutions & Services",
      solutionsMegaSeeAll: "View all",
      items: [
        { id: 'accueil', label: 'Home', href: '#accueil' },
        {
          id: 'a-propos', label: 'About', href: '#presentation',
          dropdownItems: [
            { label: 'Overview', desc: 'COSUMAF license & YAO CORP Group', href: '#presentation' },
            { label: 'Our Mission', desc: 'Support for legal entities & individuals', href: '#mission' },
            { label: 'Our Vision', desc: '3 pillars for the CEMAC market', href: '#vision' },
            { label: 'Our Values', desc: 'Integrity, Rigor & Proximity', href: '#valeurs' },
            { label: 'Our Targets', desc: 'States, Corporations, SMEs & Individuals', href: '#cibles' },
          ],
        },
        { id: 'nos-solutions', label: 'Our Solutions', href: '#nos-solutions' },
        {
          id: 'investir', label: 'Invest', href: '#investir',
          dropdownItems: [
            { label: 'Why invest?', desc: 'Optimize and secure your capital', href: '#pourquoi-investir' },
            { label: 'Financial investments', desc: 'Securities and opportunities across CEMAC', href: '#solutions-placements' },
            { label: 'Portfolio management', desc: 'Tailored discretionary mandate', href: '#solutions-gestion' },
            { label: 'Order execution', desc: 'Fast and secure transactions', href: '#solutions-execution' },
            { label: 'Understanding the market', desc: 'A learning guide for investors', href: '#marche-financier' },
          ],
        },
        {
          id: 'financer', label: 'Finance', href: '#financer',
          dropdownItems: [
            { label: 'Need financing?', desc: 'Structured capital mobilization', href: '#besoin-financement' },
            { label: 'Financial structuring', desc: 'Tailored deal design for issuers', href: '#solutions-structuration' },
            { label: 'Bond issuance', desc: 'Raising funds on the bond market', href: '#emprunt-obligataire' },
            { label: 'Capital opening', desc: 'IPO & equity offerings', href: '#ouverture-capital' },
            { label: 'Financing advisory', desc: 'Strategic support for issuers', href: '#solutions-conseil' },
          ],
        },
        { id: 'partenaires', label: 'Partners', href: '#partenaires' },
        {
          id: 'marche-financier', label: 'Financial Market', href: '#marche-financier',
          dropdownItems: [
            { label: 'Understanding the CEMAC market', desc: 'Structure and COSUMAF framework', href: '#marche-cemac' },
            { label: 'Stocks', desc: 'Equity securities listed on the BVMAC', href: '#instruments-actions' },
            { label: 'Bonds', desc: 'Debt securities of states and corporations', href: '#instruments-obligations' },
            { label: 'Financial education', desc: 'Market learning and guides', href: '#education-financiere' },
          ],
        },
        {
          id: 'actualites-documents', label: 'Press & Docs', href: '#actualites',
          dropdownItems: [
            { label: 'News', desc: 'Latest CEMAC market news', href: '#actualites-recents' },
            { label: 'Publications', desc: 'Expert analyses and reports', href: '#publications' },
            { label: 'Press releases', desc: 'Official OMYA INVEST announcements', href: '#communiques' },
            { label: 'Documents', desc: 'Regulations, prospectuses & forms', href: '#documents' },
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
        { num: '06', title: 'Custody & securities accounts', desc: 'Licensed by the BEAC central depositary (DCU)', viewId: 'nos-solutions', href: '#solutions-conservation' },
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
          description: "For entities seeking financing: OMYA INVEST structures bond issuance, capital opening and structured financing operations for you...",
          primaryBtnText: 'Present my project', secondaryBtnText: 'Financial structuring', category: 'Finance',
        },
        {
          titleLine1: 'Reliable', titleHighlight: 'Partnerships', titleLine2: '& Alliances.',
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
      title: 'A Licensed Stock Brokerage Firm on the CEMAC Regional Market',
      p1: "OMYA INVEST, a subsidiary of the YAO CORP group, is a stock brokerage firm licensed by the Central Africa Financial Market Oversight Commission (COSUMAF) under license number",
      p2: "Based in Brazzaville (Republic of Congo), it operates across the entire CEMAC regional financial market, serving States, public and private companies, institutional and individual clients.",
      p3: "Its activities cover securities brokerage, financial structuring and institutional business development.",
      activity1: 'Securities brokerage',
      activity2: 'Structuring',
      activity3: 'Development',
      ctaBtn: 'Discover our 7 areas of expertise',
      agreementLabel: 'COSUMAF License',
      zoneLabel: 'CEMAC Zone',
      photoAlt: 'OMYA INVEST — Stock Brokerage Firm COSUMAF-SDB-01/2025',
    },

    solutions: {
      tag: 'Certified Institutional Offering',
      title: 'Our Financial Solutions & Services',
      descBefore: 'A stock brokerage firm licensed by COSUMAF under number',
      descAfter: ', OMYA INVEST operates across the entire CEMAC zone market.',
      services: [
        { title: 'Financial structuring', desc: 'Design and structuring of bond issuance and capital opening operations; Structured financing ...', tag: 'Issuers & Structuring' },
        { title: 'Business development', desc: 'Support for States, public and private companies and institutions in their search for financing', tag: 'Institutions & States' },
        { title: 'Financial investments', desc: 'Placing financial assets on behalf of third parties on the CEMAC capital market', tag: 'CEMAC Financial Markets' },
        { title: 'Financing advisory', desc: 'Advising issuers and investors on structuring their securities market operations.', tag: 'Strategic Advisory' },
        { title: 'Order execution', desc: 'Executing buy and sell orders on securities on behalf of investors', tag: 'Brokerage & Trading' },
        { title: 'Custody & securities account keeping', desc: 'Licensed by the central single depositary (DCU), whose function is performed by the Bank of Central African States (BEAC)', tag: 'BEAC / DCU Licensed' },
        { title: 'Portfolio management', desc: 'Discretionary mandate and investment advisory', tag: 'Tailored Management' },
      ],
      serviceCounter: (n) => `Service 0${n} / 07`,
      footerCounter: (n) => `0${n} / 07 Certified Services`,
      consultBtn: 'Consult us for this service',
      agreementBadge: 'COSUMAF-SDB-01/2025 License',
      prevService: 'Previous service',
      nextService: 'Next service',
      prevArrow: '← Previous',
      nextArrow: 'Next →',
    },

    investor: {
      tag: 'Entities with Financing Capacity',
      title: 'Would you like to invest?',
      quote: "\"For entities with financing capacity: OMYA INVEST guides you (based on your needs, objectives, constraints and time horizon) toward the safest and most profitable investments.\"",
      stepperTitle: 'The 5-Step Investor Journey',
      stepperSub: 'Click or let the steps scroll to discover our support method',
      stepOf: (n) => `Step ${n} of 05`,
      prevStep: 'Previous step',
      nextStep: 'Next step',
      steps: [
        { title: 'Understanding your goals', subtitle: 'Wealth audit & risk profile', desc: 'In-depth analysis of your financial situation, liquidity constraints, time horizon and risk tolerance level.', highlight: 'Defining investment priorities & time horizon' },
        { title: 'Identifying solutions', subtitle: 'Sourcing & market monitoring', desc: "Rigorous selection of suitable investment opportunities on the CEMAC zone's equity, government bond and corporate securities markets.", highlight: 'Privileged access to CEMAC market opportunities' },
        { title: 'Selecting assets', subtitle: 'Strategic asset allocation', desc: 'Tailored advisory or a personalized discretionary management mandate to build and balance an optimal asset portfolio.', highlight: 'Optimizing the Return / Risk trade-off' },
        { title: 'Placing orders', subtitle: 'Secure market execution', desc: 'Fast and secure order execution on the BVMAC regional stock market, and holding your securities account licensed by the BEAC central depositary (DCU).', highlight: 'Transaction security & BEAC custody' },
        { title: 'Tracking your portfolio', subtitle: 'Reporting & rebalancing', desc: 'Transparent periodic reporting, real-time tracking of financial performance and strategic adjustments to your portfolio.', highlight: 'Total transparency & regular analytical monitoring' },
      ],
      overviewCards: [
        { title: 'Financial Investments', desc: 'Placing financial assets on behalf of third parties on the CEMAC capital market.' },
        { title: 'Portfolio Management', desc: 'Discretionary mandate and personalized investment advisory tailored to your priorities.' },
        { title: 'Order Execution', desc: 'Fast and secure execution of buy and sell orders on behalf of investors.' },
      ],
    },

    issuer: {
      tag: 'Entities Seeking Financing',
      title: 'Are you looking for financing?',
      quote: "\"For entities seeking financing (States, corporations and institutions): OMYA INVEST structures bond issuance, capital opening and structured financing operations for you...\"",
      prevOp: 'Previous operation',
      nextOp: 'Next operation',
      operations: [
        { title: 'Bond issuance', tag: 'Debt Raising & Bond Market', desc: 'Design, structuring and placement of public (States, local authorities) or private (corporate) bond issuances on the CEMAC regional financial market.', btnText: 'Discuss a bond issuance', detail: 'Sovereign & corporate debt structuring' },
        { title: 'Capital opening', tag: 'Equity & Own Funds', desc: 'Rigorous support for IPOs (on the BVMAC) and capital increases to finance growth and development.', btnText: 'Discover capital opening', detail: 'BVMAC listing & capital increase' },
        { title: 'Structured financing', tag: 'Tailored Financial Engineering', desc: 'Advanced financial engineering for the delivery and financial close of major infrastructure, energy and large-scale investment projects.', btnText: 'Structure an infrastructure project', detail: 'Infrastructure projects & complex financing' },
        { title: 'Financing advisory', tag: 'Strategic Support for Issuers', desc: 'Strategic advisory for issuers to determine the best financing options, optimize balance sheet structure and prepare COSUMAF licensing files.', btnText: 'Request strategic advisory', detail: 'Balance sheet optimization & COSUMAF filings' },
      ],
      bannerTitle: 'Are you a State, a public/private company or an institution?',
      bannerDesc: 'Our financial engineering and business development experts are available to you in Brazzaville and across the CEMAC zone.',
      bannerBtn: 'Present my project',
    },

    team: {
      tag: 'Governance & Leadership',
      title: 'Our Team of Certified Experts',
      desc: 'A multidisciplinary team of financial engineers, licensed traders and legal experts serving your operations.',
      nameNotSet: 'Name to be provided',
      positions: {
        'Direction Générale': 'General Management',
        'Responsable Structuration': 'Head of Structuring',
        'Responsable Négociation & Courtage': 'Head of Trading & Brokerage',
        'Responsable Conformité & Contrôle': 'Head of Compliance & Control',
      },
      departments: {
        'Gestion stratégique & Gouvernance institutionnelle': 'Strategic management & institutional governance',
        'Ingénierie financière & Émissions de titres': 'Financial engineering & securities issuance',
        "Exécution d'ordres et Animation du marché BVMAC": 'Order execution and BVMAC market making',
        'Réglementation COSUMAF & Gestion des Risques': 'COSUMAF regulation & risk management',
      },
      partnersTag: 'Certified Network & Partnerships',
      partnersTitle: 'Our Partners in Continuous Rotation',
      partnersDesc: 'Click on an orbiting logo to enlarge it and discover its details.',
      pauseOrbit: 'Pause the orbit',
      playOrbit: 'Start the continuous orbit',
      officialPartner: 'Official Partner',
      clickToEnlarge: 'Click to enlarge the logo',
      clickToEnlargeTitle: 'Click to enlarge',
      contactAboutPartnership: 'Get in touch about this partnership',
      visitOfficialSite: 'Visit official website',
    },

    missionVisionValues: {
      missionTag: 'Our Mission',
      missionQuote: '"Dormant capital builds nothing: let\'s talk about your projects!"',
      missionSub: 'OMYA INVEST tailors its mission to the specific needs of legal entities and individuals.',
      moralesLabel: 'Dimension 01',
      moralesTitle: 'For Legal Entities',
      moralesText: '"Supporting States, corporations and institutional investors in the CEMAC sub-region in raising capital and structuring financing solutions tailored to their needs, drawing on deep securities market expertise."',
      physiquesLabel: 'Dimension 02',
      physiquesTitle: 'For Individuals',
      physiquesText: '"optimizing investors\' savings by selecting the best assets for them, taking into account the risk/return trade-off."',

      visionTag: 'Our Vision',
      visionTitle: 'Three Pillars Shaping the Regional Financial Market',
      visionSteps: [
        { title: 'Deepening the CEMAC Market', text: 'Contribute to deepening the capital market and financing the economic development of the sub-region' },
        { title: 'Financial Education & Outreach', text: 'Be a major player in financial education' },
        { title: 'Reference in Capital Optimization', text: 'Be a reference in capital optimization.' },
      ],

      valeursTag: 'Our Values',
      valeursTitle: 'The Ethical Pillars of OMYA INVEST',
      valeursQuote: '"Integrity, professional rigor, client proximity and commitment to the development of the sub-region."',
      values: [
        { title: 'Integrity' },
        { title: 'Professional Rigor' },
        { title: 'Client Proximity' },
        { title: 'Commitment to Development' },
      ],
    },

    targets: {
      tag: 'Scope of Intervention',
      title: 'Our Targets',
      desc: 'OMYA INVEST serves the full range of economic players across the CEMAC zone and the rest of the world.',
      items: [
        { title: 'Public and private companies', desc: 'Large corporations seeking structural capital, debt issuance (bond loans), capital increases, or financial optimization.', role: 'Issuers & Borrowers', badge: 'Large Corporation' },
        { title: 'Institutions', desc: 'Pension funds, sovereign wealth funds, insurance companies, banks and institutional investors of the CEMAC sub-region.', role: 'Qualified Investors', badge: 'Professional Investors' },
        { title: 'SMEs', desc: 'Fast-growing small and medium-sized businesses requiring tailored support to raise funds and structure their balance sheet.', role: 'Growth & Structuring', badge: 'Development' },
        { title: 'Individuals', desc: 'Individuals looking to grow their savings, access BVMAC stocks/bonds and diversify their wealth.', role: 'Savers & Investors', badge: 'Individuals' },
      ],
    },

    financialMarket: {
      tag: 'Financial Education & Regulatory Framework',
      title: 'Understanding the CEMAC Financial Market',
      desc: 'OMYA INVEST is actively committed to financial education, guiding you with full clarity through the sub-regional financial market.',
      tabInstruments: 'Financial Instruments',
      tabActors: 'CEMAC Market Players',
      instruments: [
        { type: 'Stocks', tag: 'Equity Securities', desc: 'Shares in the capital of public or private companies listed on the BVMAC (Central Africa Stock Exchange). Providing voting rights and dividends.' },
        { type: 'Bonds', tag: 'Debt Securities', desc: 'Loans issued by CEMAC zone States (Cameroon, Congo, Gabon, Chad, CAR, Equatorial Guinea) or private companies. Offering regular interest coupons and capital repayment.' },
        { type: 'Structured Financial Securities', tag: 'Engineering', desc: 'Financial instruments combining several assets to meet the specific return and hedging needs of institutional investors.' },
      ],
      investIn: (type) => `Invest in ${type}`,
      actors: [
        { name: 'COSUMAF', role: 'Regional Regulator', desc: 'Central Africa Financial Market Oversight Commission. Ensures investor protection and grants licenses (e.g., COSUMAF-SDB-01/2025 License).' },
        { name: 'BVMAC', role: 'Regional Stock Exchange', desc: 'The Central Africa Stock Exchange, a market operator ensuring the listing and trading of securities.' },
        { name: 'BEAC (DCU)', role: 'Central Single Depositary', desc: 'The Bank of Central African States handles the custody of securities and settlement-delivery of transactions.' },
        { name: 'Brokerage Firms (SDB)', role: 'Licensed Intermediaries', desc: 'OMYA INVEST and licensed brokerage firms are the only intermediaries authorized to execute orders, structure issuances and hold securities in custody.' },
      ],
      bannerText: 'All securities trading and subscription transactions on the CEMAC market are subject to strict COSUMAF regulation and held in custody by the Central Single Depositary operated by BEAC (DCU).',
    },

    news: {
      tag: 'Press & Official Releases',
      title: 'News & Publications',
      desc: "Find OMYA INVEST's press releases, official notices and market information notes here.",
      emptyState: 'No news published yet. Check back soon for our releases and publications.',
    },

    documents: {
      tag: 'Documentation Center',
      title: 'Institutional Document Library',
      desc: "Download all of OMYA INVEST's regulations, information notices, bond issuance prospectuses and official forms.",
      emptyState: 'No documents published yet. Check back soon for our regulations, prospectuses and official forms.',
    },

    contact: {
      tag: 'Get in Touch',
      title: "Let's Talk About Your Project or Your Capital",
      desc: 'Our team of experts is ready to listen, whether you want to invest, find financing, or establish an institutional partnership.',
      infoCards: [
        { title: 'Head Office', detail: '76 Avenue Amilcar Cabral, Downtown', sub: 'Villarecci Building, opposite the Radisson — Brazzaville' },
        { title: 'Phone', detail: '+242 06 642 69 89', sub: 'Calls & WhatsApp' },
        { title: 'Email', detail: 'contact@omya-invest.com', sub: 'Response within 24 to 48h' },
        { title: 'Hours', detail: 'Monday – Friday', sub: '08:00 AM – 05:30 PM (GMT+1)' },
      ],
      formTitle: 'Request Form',
      formSub: 'Describe your request or your project',
      sentTitle: 'Message Sent!',
      sentDesc: 'Thank you for contacting OMYA INVEST. Our team will process your request as soon as possible and respond within 48 business hours.',
      sendAnother: 'Send another message',
      labelNom: 'Last Name *',
      placeholderNom: 'Your last name',
      labelPrenom: 'First Name *',
      placeholderPrenom: 'Your first name',
      labelEmail: 'Email *',
      placeholderEmail: 'your.email@example.com',
      labelTelephone: 'Phone',
      placeholderTelephone: '+242 06 --- ----',
      labelObjet: 'Subject of your request *',
      objetPlaceholder: 'Select the subject of your message',
      objetInvestir: 'I want to invest (entity with financing capacity)',
      objetFinancer: 'I am seeking financing (entity in need of financing)',
      objetPartenaire: 'Business introducer / Partnership',
      objetGestion: 'Portfolio management or discretionary mandate',
      objetAutre: 'Other request',
      labelMessage: 'Message *',
      placeholderMessage: 'Describe your request, your project or your financial goals...',
      submitBtn: 'Send my message to OMYA INVEST',
      privacyNote: 'Your data is handled confidentially in accordance with our regulatory obligations.',
    },

    footer: {
      tagline: '"Your capital deserves better than a dormant account."',
      brandDesc: 'OMYA INVEST connects entities seeking financing with entities with financing capacity across the CEMAC zone and the rest of the world.',
      colInstitution: 'Institution',
      colSolutions: 'Our Solutions',
      colMarket: 'Market & Press',
      navLinks: [
        { label: 'Home', href: '#accueil' },
        { label: 'About & License', href: '#presentation' },
        { label: 'Our Mission', href: '#mission' },
        { label: 'Our Vision', href: '#vision' },
        { label: 'Our Values', href: '#valeurs' },
        { label: 'Our Targets', href: '#cibles' },
        { label: 'Team & Partners', href: '#equipe' },
      ],
      solutionsLinks: [
        { label: 'Financial structuring', href: '#solutions-structuration' },
        { label: 'Business development', href: '#solutions-developpement' },
        { label: 'Financial investments', href: '#solutions-placements' },
        { label: 'Financing advisory', href: '#solutions-conseil' },
        { label: 'Order execution', href: '#solutions-execution' },
        { label: 'Custody & securities accounts', href: '#solutions-conservation' },
        { label: 'Portfolio management', href: '#solutions-gestion' },
      ],
      marketLinks: [
        { label: 'CEMAC Financial Market', href: '#marche-financier' },
        { label: 'Investor Journey', href: '#investir' },
        { label: 'Issuer Journey', href: '#financer' },
        { label: 'Official Partners', href: '#partenaires' },
        { label: 'News & Releases', href: '#actualites' },
        { label: 'Documentation Center', href: '#documents' },
        { label: 'Contact & Support', href: '#contact' },
      ],
      newsletterText: 'Stay informed of market opportunities:',
      newsletterBtn: 'Newsletter Subscription',
      rightsText: (year) => `© ${year} OMYA INVEST — All rights reserved. Subsidiary of YAO CORP Group. Licensed by COSUMAF.`,
      legalNotice: 'COSUMAF-SDB-01/2025 Regulatory Notice',
      privacyPolicy: 'Privacy Policy',
      legalMentions: 'Legal Notice',
    },

    sectionHeaders: {
      'a-propos': { title: 'About OMYA INVEST', breadcrumbLabel: 'About', description: 'Stock brokerage firm licensed COSUMAF-SDB-01/2025, subsidiary of YAO CORP Group.' },
      'nos-solutions': { title: 'Our Financial Solutions & Services', breadcrumbLabel: 'Our Solutions', description: '7 areas of expertise serving investors and issuers across the CEMAC zone.' },
      'investir': { title: 'Would you like to invest?', breadcrumbLabel: 'Invest', description: 'Grow your capital on the CEMAC regional financial market.' },
      'financer': { title: 'Are you looking for financing?', breadcrumbLabel: 'Finance', description: 'Bond issuance structuring, capital opening and structured financing.' },
      'partenaires': { title: 'Our Partner Network', breadcrumbLabel: 'Partners', description: 'A team of certified experts and trusted institutional partnerships.' },
      'marche-financier': { title: 'Understanding the CEMAC Financial Market', breadcrumbLabel: 'CEMAC Market', description: 'Stocks, bonds and financial education across the CEMAC zone.' },
      'actualites-documents': { title: 'News & Documentation', breadcrumbLabel: 'Press & Docs', description: "OMYA INVEST's official publications, releases and documents." },
      'contact': { title: "Let's Talk About Your Project", breadcrumbLabel: 'Contact', description: 'Our team supports you in your investment or financing projects.' },
    },
    sectionHeaderHome: 'Home',

    crossLinks: {
      solutionsToPaths: { title: 'Are you an investor or looking for financing?', description: 'Discover the path that suits you: investing your capital or structuring a financing operation.', cta1: 'Investor Journey', cta2: 'Issuer Journey' },
      investirToSolutions: { title: 'Explore all of our solutions', description: 'Financial investments, portfolio management, order execution... discover our 7 full areas of expertise.', cta: 'View our solutions' },
      financerToSolutions: { title: 'Discover all of our structuring expertise', description: 'Financial structuring, advisory, business development... explore our 7 full solutions.', cta: 'View our solutions' },
      partenairesToAbout: { title: 'Learn more about OMYA INVEST', description: 'COSUMAF license, YAO CORP Group affiliation, mission and values: discover our institutional identity.', cta: 'Discover OMYA INVEST' },
      marcheToAbout: { title: 'Who is OMYA INVEST?', description: 'A COSUMAF-SDB-01/2025 licensed stock brokerage firm, subsidiary of YAO CORP Group, serving the entire CEMAC zone.', cta: 'Discover OMYA INVEST' },
      contactToPartners: { title: 'Discover our partner network', description: 'A team of certified experts and trusted institutional partnerships throughout the CEMAC zone.', cta: 'View our partners' },
    },

    seo: {
      title: 'OMYA INVEST — Licensed Stock Brokerage Firm COSUMAF-SDB-01/2025 | YAO CORP Group',
      description: 'OMYA INVEST, a subsidiary of YAO CORP Group, is a stock brokerage firm licensed by COSUMAF (COSUMAF-SDB-01/2025). We connect investors and issuers across the entire CEMAC zone.',
      keywords: 'OMYA INVEST, COSUMAF, stock brokerage, CEMAC, investment, financing, BVMAC, YAO CORP, Brazzaville, Congo, bonds, stocks, portfolio management',
    },
  },

  PT: {
    clientSpace: "Área do Cliente",
    memberSpace: "Área de Membro",
    login: "Entrar",
    register: "Registrar",
    language: "Português",
    languageSelect: "Idioma",
    categoryRubric: "Seção",

    authModalLoginTitle: "Aceder à sua Conta",
    authModalRegisterTitle: "Criar a sua Conta",
    authModalLoginDesc: "Inicie sessão para acompanhar os seus investimentos e gerir a sua carteira.",
    authModalRegisterDesc: "Junte-se à OMYA INVEST e aceda às oportunidades bolsistas.",
    orByEmail: "ou por email",
    fullName: "Nome Completo",
    emailAddr: "Endereço de Email",
    passwordLabel: "Palavra-passe",
    forgotPass: "Esqueceu-se?",
    investorType: "Tipo de Investidor",
    particulier: "Investidor Individual",
    corporate: "Empresa / Institucional",
    rememberMe: "Lembrar-me",
    acceptTerms: "Aceito os termos de utilização",
    submitLogin: "ENTRAR",
    submitRegister: "REGISTAR",

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
      { id: 'nos-solutions', label: 'Nossas Soluções' },
      { id: 'investir', label: 'Investir' },
      { id: 'financer', label: 'Financiar' },
      { id: 'partenaires', label: 'Parceiros' },
      { id: 'marche-financier', label: 'Mercado CEMAC' },
      { id: 'actualites-documents', label: 'Imprensa & Doc.' },
      { id: 'contact', label: 'Contato' },
    ],

    headerNav: {
      espaceClient: "Área do cliente",
      solutionsMegaAgrement: "Licença COSUMAF-SDB-01/2025",
      solutionsMegaTitle: "As Nossas 7 Soluções & Serviços Financeiros",
      solutionsMegaSeeAll: "Ver tudo",
      items: [
        { id: 'accueil', label: 'Início', href: '#accueil' },
        {
          id: 'a-propos', label: 'Sobre nós', href: '#presentation',
          dropdownItems: [
            { label: 'Apresentação', desc: 'Licença COSUMAF & Grupo YAO CORP', href: '#presentation' },
            { label: 'Nossa Missão', desc: 'Apoio a pessoas jurídicas e físicas', href: '#mission' },
            { label: 'Nossa Visão', desc: '3 eixos para o mercado CEMAC', href: '#vision' },
            { label: 'Nossos Valores', desc: 'Integridade, Rigor & Proximidade', href: '#valeurs' },
            { label: 'Nossos Alvos', desc: 'Estados, Empresas, PME & Particulares', href: '#cibles' },
          ],
        },
        { id: 'nos-solutions', label: 'Nossas Soluções', href: '#nos-solutions' },
        {
          id: 'investir', label: 'Investir', href: '#investir',
          dropdownItems: [
            { label: 'Por que investir?', desc: 'Otimizar e proteger o seu capital', href: '#pourquoi-investir' },
            { label: 'Investimentos financeiros', desc: 'Títulos e oportunidades na CEMAC', href: '#solutions-placements' },
            { label: 'Gestão de carteira', desc: 'Mandato discricionário sob medida', href: '#solutions-gestion' },
            { label: 'Execução de ordens', desc: 'Transações rápidas e seguras', href: '#solutions-execution' },
            { label: 'Compreender a bolsa', desc: 'Guia pedagógico para investidores', href: '#marche-financier' },
          ],
        },
        {
          id: 'financer', label: 'Financiar', href: '#financer',
          dropdownItems: [
            { label: 'Precisa de financiamento?', desc: 'Mobilização de capitais estruturados', href: '#besoin-financement' },
            { label: 'Estruturação financeira', desc: 'Montagem sob medida para emissores', href: '#solutions-structuration' },
            { label: 'Empréstimo obrigacionista', desc: 'Captação de fundos no mercado obrigacionista', href: '#emprunt-obligataire' },
            { label: 'Abertura de capital', desc: 'IPO e operações de capital próprio', href: '#ouverture-capital' },
            { label: 'Consultoria em financiamento', desc: 'Acompanhamento estratégico dos emissores', href: '#solutions-conseil' },
          ],
        },
        { id: 'partenaires', label: 'Parceiros', href: '#partenaires' },
        {
          id: 'marche-financier', label: 'Mercado Financeiro', href: '#marche-financier',
          dropdownItems: [
            { label: 'Compreender o mercado CEMAC', desc: 'Organização e quadro da COSUMAF', href: '#marche-cemac' },
            { label: 'Ações', desc: 'Títulos de propriedade cotados na BVMAC', href: '#instruments-actions' },
            { label: 'Obrigações', desc: 'Títulos de dívida de Estados e empresas', href: '#instruments-obligations' },
            { label: 'Educação financeira', desc: 'Pedagogia e guias de mercado', href: '#education-financiere' },
          ],
        },
        {
          id: 'actualites-documents', label: 'Imprensa & Doc.', href: '#actualites',
          dropdownItems: [
            { label: 'Notícias', desc: 'Últimas notícias do mercado CEMAC', href: '#actualites-recents' },
            { label: 'Publicações', desc: 'Análises e relatórios de especialistas', href: '#publications' },
            { label: 'Comunicados', desc: 'Anúncios oficiais da OMYA INVEST', href: '#communiques' },
            { label: 'Documentos', desc: 'Regulamentos, prospetos & formulários', href: '#documents' },
          ],
        },
        { id: 'contact', label: 'Contato', href: '#contact' },
      ],
      solutionsCol1: [
        { num: '01', title: 'Estruturação financeira', desc: 'Montagem de operações obrigacionistas e de abertura de capital', viewId: 'nos-solutions', href: '#solutions-structuration' },
        { num: '02', title: 'Desenvolvimento de negócios', desc: 'Acompanhamento de Estados, empresas e instituições', viewId: 'nos-solutions', href: '#solutions-developpement' },
        { num: '03', title: 'Investimentos financeiros', desc: 'Aplicação de ativos no mercado de capitais CEMAC', viewId: 'investir', href: '#solutions-placements' },
        { num: '04', title: 'Consultoria em financiamento', desc: 'Consultoria a emissores e investidores', viewId: 'financer', href: '#solutions-conseil' },
      ],
      solutionsCol2: [
        { num: '05', title: 'Execução de ordens', desc: 'Ordens de compra e venda de títulos', viewId: 'investir', href: '#solutions-execution' },
        { num: '06', title: 'Custódia & conta-título', desc: 'Licenciado pelo depositário central BEAC (DCU)', viewId: 'nos-solutions', href: '#solutions-conservation' },
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
          description: "Para os agentes com necessidade de financiamento: a OMYA INVEST estrutura para si as operações de empréstimo obrigacionista, abertura de capital e financiamento estruturado…",
          primaryBtnText: 'Apresentar o meu projeto', secondaryBtnText: 'Estruturação financeira', category: 'Financiar',
        },
        {
          titleLine1: 'Parcerias &', titleHighlight: 'Alianças', titleLine2: 'de confiança.',
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
      title: 'Uma Sociedade Corretora Licenciada no Mercado Regional CEMAC',
      p1: "A OMYA INVEST, filial do grupo YAO CORP, é uma sociedade corretora licenciada pela Comissão de Supervisão do Mercado Financeiro da África Central (COSUMAF) sob o número de licença",
      p2: "Sediada em Brazzaville (República do Congo), atua em todo o mercado financeiro regional CEMAC, ao serviço de Estados, empresas públicas e privadas, instituições e particulares.",
      p3: "As suas atividades abrangem: a corretagem de títulos financeiros, a estruturação financeira e o desenvolvimento de negócios institucionais.",
      activity1: 'Corretagem de títulos',
      activity2: 'Estruturação',
      activity3: 'Desenvolvimento',
      ctaBtn: 'Descobrir as nossas 7 especialidades',
      agreementLabel: 'Licença COSUMAF',
      zoneLabel: 'Zona CEMAC',
      photoAlt: 'OMYA INVEST — Sociedade Corretora COSUMAF-SDB-01/2025',
    },

    solutions: {
      tag: 'Oferta Institucional Certificada',
      title: 'As Nossas Soluções & Serviços Financeiros',
      descBefore: 'Sociedade corretora licenciada pela COSUMAF sob o número',
      descAfter: ', a OMYA INVEST atua em todos os mercados da zona CEMAC.',
      services: [
        { title: 'Estruturação financeira', desc: 'Montagem e estruturação de operações de empréstimos obrigacionistas e de abertura de capital; Financiamento estruturado ...', tag: 'Emissores & Estruturação' },
        { title: 'Desenvolvimento de negócios', desc: 'Acompanhamento de Estados, empresas públicas e privadas e instituições na procura de financiamento', tag: 'Instituições & Estados' },
        { title: 'Investimentos financeiros', desc: 'Aplicar ativos financeiros por conta de terceiros no mercado de capitais da CEMAC', tag: 'Mercados Financeiros CEMAC' },
        { title: 'Consultoria em financiamento', desc: 'Aconselhar emissores e investidores na estruturação das suas operações no mercado de títulos.', tag: 'Consultoria Estratégica' },
        { title: 'Execução de ordens', desc: 'Executar ordens de compra e venda de títulos por conta dos investidores', tag: 'Corretagem & Bolsa' },
        { title: 'Custódia & manutenção de conta-título', desc: 'Licenciada pelo depositário central único (DCU), cuja função é assegurada pelo Banco dos Estados da África Central (BEAC)', tag: 'Licenciada DCU / BEAC' },
        { title: 'Gestão de carteira', desc: 'Mandato discricionário e consultoria em investimento', tag: 'Gestão Sob Medida' },
      ],
      serviceCounter: (n) => `Serviço 0${n} / 07`,
      footerCounter: (n) => `0${n} / 07 Serviços Certificados`,
      consultBtn: 'Consultar-nos sobre este serviço',
      agreementBadge: 'Licença COSUMAF-SDB-01/2025',
      prevService: 'Serviço anterior',
      nextService: 'Próximo serviço',
      prevArrow: '← Anterior',
      nextArrow: 'Seguinte →',
    },

    investor: {
      tag: 'Agentes com Capacidade de Financiamento',
      title: 'Deseja investir?',
      quote: "«Para os agentes com capacidade de financiamento: a OMYA INVEST acompanha-o (de acordo com as suas necessidades, objetivos, limitações e horizonte temporal) rumo aos investimentos mais seguros e rentáveis.»",
      stepperTitle: 'O Percurso do Investidor em 5 Etapas',
      stepperSub: 'Clique ou deixe as etapas avançarem para descobrir o nosso método de acompanhamento',
      stepOf: (n) => `Etapa ${n} de 05`,
      prevStep: 'Etapa anterior',
      nextStep: 'Próxima etapa',
      steps: [
        { title: 'Compreender os objetivos', subtitle: 'Auditoria patrimonial & Perfil de risco', desc: 'Análise aprofundada da sua situação financeira, restrições de liquidez, horizonte temporal e nível de tolerância ao risco.', highlight: 'Definição das prioridades de investimento & Horizonte temporal' },
        { title: 'Identificar as soluções', subtitle: 'Sourcing & Vigilância de mercado', desc: 'Seleção rigorosa de oportunidades de investimento adaptadas nos mercados de ações, obrigações de Estado e títulos de empresas da zona CEMAC.', highlight: 'Acesso privilegiado às oportunidades bolsistas da CEMAC' },
        { title: 'Selecionar os ativos', subtitle: 'Alocação de ativos estratégica', desc: 'Consultoria sob medida ou mandato de gestão discricionária personalizado para compor e equilibrar uma carteira de ativos ideal.', highlight: 'Otimização do binómio Rendimento / Risco' },
        { title: 'Executar as ordens', subtitle: 'Execução bolsista segura', desc: 'Execução de ordens rápida e segura junto do mercado bolsista regional BVMAC e manutenção da sua conta-título licenciada pelo depositário central BEAC (DCU).', highlight: 'Segurança das transações & Custódia BEAC' },
        { title: 'Acompanhar a carteira', subtitle: 'Relatórios & Reequilíbrio', desc: 'Relatórios periódicos transparentes, acompanhamento em tempo real do desempenho financeiro e ajustes estratégicos da sua carteira.', highlight: 'Transparência total & Acompanhamento analítico regular' },
      ],
      overviewCards: [
        { title: 'Investimentos Financeiros', desc: 'Aplicar ativos financeiros por conta de terceiros no mercado de capitais da CEMAC.' },
        { title: 'Gestão de Carteira', desc: 'Mandato discricionário e consultoria de investimento personalizada de acordo com as suas prioridades.' },
        { title: 'Execução de Ordens', desc: 'Execução rápida e segura de ordens de compra e venda de títulos por conta dos investidores.' },
      ],
    },

    issuer: {
      tag: 'Agentes com Necessidade de Financiamento',
      title: 'Procura um financiamento?',
      quote: "«Para os agentes com necessidade de financiamento (Estados, empresas e instituições): a OMYA INVEST estrutura para si as operações de empréstimo obrigacionista, abertura de capital e financiamento estruturado…»",
      prevOp: 'Operação anterior',
      nextOp: 'Próxima operação',
      operations: [
        { title: 'Empréstimo obrigacionista', tag: 'Captação de Dívida & Mercado Obrigacionista', desc: 'Montagem, estruturação e colocação de emissões obrigacionistas públicas (Estados, autarquias) ou privadas (empresas) no mercado financeiro regional CEMAC.', btnText: 'Discutir um empréstimo obrigacionista', detail: 'Estruturação de dívida soberana & empresarial' },
        { title: 'Abertura de capital', tag: 'Equity & Fundos Próprios', desc: 'Acompanhamento rigoroso da entrada em bolsa (IPO na BVMAC) e aumentos de capital para financiar o desenvolvimento e o crescimento.', btnText: 'Descobrir a abertura de capital', detail: 'Entrada na BVMAC & Aumento de capital' },
        { title: 'Financiamento estruturado', tag: 'Engenharia Financeira Sob Medida', desc: 'Engenharia financeira avançada para a concretização e o fecho financeiro de grandes projetos de infraestruturas, energia e investimentos de grande escala.', btnText: 'Estruturar um projeto de infraestrutura', detail: 'Projetos de infraestrutura & Financiamentos complexos' },
        { title: 'Consultoria em financiamento', tag: 'Acompanhamento Estratégico de Emissores', desc: 'Consultoria estratégica a emissores para determinar as melhores opções de financiamento, otimizar a estrutura do balanço e preparar o processo de licenciamento junto da COSUMAF.', btnText: 'Solicitar uma consultoria estratégica', detail: 'Otimização do balanço & Processos COSUMAF' },
      ],
      bannerTitle: 'É um Estado, uma Empresa pública/privada ou uma Instituição?',
      bannerDesc: 'Os nossos especialistas em engenharia financeira e desenvolvimento de negócios estão à sua disposição em Brazzaville e em toda a zona CEMAC.',
      bannerBtn: 'Apresentar o meu projeto',
    },

    team: {
      tag: 'Governança & Liderança',
      title: 'A Nossa Equipa de Especialistas Certificados',
      desc: 'Uma equipa multidisciplinar de engenheiros financeiros, traders licenciados e juristas ao serviço das suas operações.',
      nameNotSet: 'Nome a definir',
      positions: {
        'Direction Générale': 'Direção Geral',
        'Responsable Structuration': 'Responsável de Estruturação',
        'Responsable Négociation & Courtage': 'Responsável de Negociação & Corretagem',
        'Responsable Conformité & Contrôle': 'Responsável de Conformidade & Controlo',
      },
      departments: {
        'Gestion stratégique & Gouvernance institutionnelle': 'Gestão estratégica & Governança institucional',
        'Ingénierie financière & Émissions de titres': 'Engenharia financeira & Emissões de títulos',
        "Exécution d'ordres et Animation du marché BVMAC": 'Execução de ordens e dinamização do mercado BVMAC',
        'Réglementation COSUMAF & Gestion des Risques': 'Regulamentação COSUMAF & Gestão de Riscos',
      },
      partnersTag: 'Rede & Parcerias Certificadas',
      partnersTitle: 'Os Nossos Parceiros em Rotação Contínua',
      partnersDesc: 'Clique num logótipo em órbita para o ampliar e descobrir os seus detalhes.',
      pauseOrbit: 'Pausar a órbita',
      playOrbit: 'Iniciar a órbita contínua',
      officialPartner: 'Parceiro Oficial',
      clickToEnlarge: 'Clique para ampliar o logótipo',
      clickToEnlargeTitle: 'Clique para ampliar',
      contactAboutPartnership: 'Entrar em contacto sobre esta parceria',
      visitOfficialSite: 'Visitar o site oficial',
    },

    missionVisionValues: {
      missionTag: 'A Nossa Missão',
      missionQuote: '«Um capital parado não constrói nada: vamos falar dos seus projetos!»',
      missionSub: 'A OMYA INVEST adapta a sua missão às especificidades das pessoas jurídicas e das pessoas físicas.',
      moralesLabel: 'Dimensão 01',
      moralesTitle: 'Para as Pessoas Jurídicas',
      moralesText: '«Acompanhar os Estados, as empresas e os investidores institucionais da sub-região CEMAC na mobilização de capitais e na estruturação de soluções de financiamento adaptadas às suas necessidades, apoiando-se numa especialização aprofundada do mercado de títulos.»',
      physiquesLabel: 'Dimensão 02',
      physiquesTitle: 'Para as Pessoas Físicas',
      physiquesText: '«otimizar a poupança dos investidores selecionando para eles os melhores ativos, tendo em conta o binómio rendimento/risco.»',

      visionTag: 'A Nossa Visão',
      visionTitle: 'Três Eixos para Moldar o Mercado Financeiro Regional',
      visionSteps: [
        { title: 'Aprofundamento do Mercado CEMAC', text: 'Contribuir para o aprofundamento do mercado de capitais e para o financiamento do desenvolvimento económico da sub-região' },
        { title: 'Educação Financeira & Pedagogia', text: 'Ser um ator de referência na educação financeira' },
        { title: 'Referência em Otimização', text: 'Ser uma referência na otimização de capitais.' },
      ],

      valeursTag: 'Os Nossos Valores',
      valeursTitle: 'Os Pilares Éticos da OMYA INVEST',
      valeursQuote: '«Integridade, rigor profissional, proximidade com os clientes e compromisso ao serviço do desenvolvimento da sub-região.»',
      values: [
        { title: 'Integridade' },
        { title: 'Rigor Profissional' },
        { title: 'Proximidade com os Clientes' },
        { title: 'Compromisso com o Desenvolvimento' },
      ],
    },

    targets: {
      tag: 'Âmbito de Intervenção',
      title: 'Os Nossos Alvos',
      desc: 'A OMYA INVEST dirige-se a todos os agentes económicos da zona CEMAC e do resto do mundo.',
      items: [
        { title: 'Empresas públicas e privadas', desc: 'Grandes empresas que procuram capital estrutural, emissão de dívida (empréstimo obrigacionista), aumentos de capital ou otimização financeira.', role: 'Emissores & Mutuários', badge: 'Grande Empresa' },
        { title: 'Instituições', desc: 'Fundos de pensões, fundos soberanos, seguradoras, bancos e investidores institucionais da sub-região CEMAC.', role: 'Investidores Qualificados', badge: 'Investidores Profissionais' },
        { title: 'PME', desc: 'Pequenas e médias empresas em plena expansão que necessitam de apoio sob medida para captar fundos e estruturar o seu balanço.', role: 'Crescimento & Estruturação', badge: 'Desenvolvimento' },
        { title: 'Particulares', desc: 'Pessoas físicas que desejam fazer crescer as suas poupanças, aceder a ações/obrigações da BVMAC e diversificar o seu património.', role: 'Poupadores & Investidores', badge: 'Pessoas Físicas' },
      ],
    },

    financialMarket: {
      tag: 'Pedagogia Financeira & Quadro Regulamentar',
      title: 'Compreender o Mercado Financeiro CEMAC',
      desc: 'A OMYA INVEST está ativamente empenhada na educação financeira, para o acompanhar com total clareza no mercado financeiro sub-regional.',
      tabInstruments: 'Instrumentos Financeiros',
      tabActors: 'Agentes do Mercado CEMAC',
      instruments: [
        { type: 'Ações', tag: 'Títulos de Propriedade', desc: 'Partes do capital social de empresas públicas ou privadas cotadas na BVMAC (Bolsa de Valores Mobiliários da África Central). Conferem direito de voto e dividendos.' },
        { type: 'Obrigações', tag: 'Títulos de Dívida', desc: 'Empréstimos emitidos pelos Estados da zona CEMAC (Camarões, Congo, Gabão, Chade, RCA, Guiné Equatorial) ou por empresas privadas. Oferecem cupões de juros regulares e reembolso de capital.' },
        { type: 'Títulos Financeiros Estruturados', tag: 'Engenharia', desc: 'Instrumentos financeiros que combinam vários ativos para responder a necessidades específicas de rendimento e cobertura para investidores institucionais.' },
      ],
      investIn: (type) => `Investir em ${type}`,
      actors: [
        { name: 'COSUMAF', role: 'Regulador Regional', desc: 'Comissão de Supervisão do Mercado Financeiro da África Central. Assegura a proteção dos investidores e concede as licenças (ex.: Licença COSUMAF-SDB-01/2025).' },
        { name: 'BVMAC', role: 'Bolsa Regional', desc: 'Bolsa de Valores Mobiliários da África Central, entidade de mercado responsável pela cotação e negociação de títulos.' },
        { name: 'BEAC (DCU)', role: 'Depositário Central Único', desc: 'O Banco dos Estados da África Central assegura a custódia dos títulos e a liquidação-entrega das operações.' },
        { name: 'Sociedades Corretoras (SDB)', role: 'Intermediários Licenciados', desc: 'A OMYA INVEST e as SDB licenciadas são os únicos intermediários autorizados a executar ordens, estruturar emissões e custodiar títulos.' },
      ],
      bannerText: 'Todas as operações de negociação e subscrição de títulos no mercado CEMAC estão sujeitas à regulamentação rigorosa da COSUMAF e são custodiadas pelo Depositário Central Único, assegurado pelo BEAC (DCU).',
    },

    news: {
      tag: 'Imprensa & Comunicados Oficiais',
      title: 'Notícias & Publicações',
      desc: 'Encontre aqui os comunicados de imprensa, avisos oficiais e notas informativas de mercado da OMYA INVEST.',
      emptyState: 'Nenhuma notícia publicada no momento. Volte em breve para encontrar os nossos comunicados e publicações.',
    },

    documents: {
      tag: 'Centro de Documentação',
      title: 'Biblioteca Documental Institucional',
      desc: 'Descarregue todos os regulamentos, notas informativas, prospetos de emissões obrigacionistas e formulários oficiais da OMYA INVEST.',
      emptyState: 'Nenhum documento publicado no momento. Volte em breve para encontrar os nossos regulamentos, prospetos e formulários oficiais.',
    },

    contact: {
      tag: 'Entrar em Contacto',
      title: 'Vamos Falar do Seu Projeto ou dos Seus Capitais',
      desc: 'A nossa equipa de especialistas está disponível, quer pretenda investir, encontrar financiamento ou estabelecer uma parceria institucional.',
      infoCards: [
        { title: 'Sede Social', detail: '76 Avenue Amilcar Cabral, Centro da cidade', sub: 'Edifício Villarecci, em frente ao Radisson — Brazzaville' },
        { title: 'Telefone', detail: '+242 06 642 69 89', sub: 'Chamadas & WhatsApp' },
        { title: 'Email', detail: 'contact@omya-invest.com', sub: 'Resposta em 24 a 48h' },
        { title: 'Horário', detail: 'Segunda – Sexta', sub: '08:00 – 17:30 (GMT+1)' },
      ],
      formTitle: 'Formulário de Atendimento',
      formSub: 'Descreva o seu pedido ou o seu projeto',
      sentTitle: 'Mensagem Enviada!',
      sentDesc: 'Obrigado por contactar a OMYA INVEST. A nossa equipa irá tratar do seu pedido o mais rapidamente possível e responderá no prazo de 48 horas úteis.',
      sendAnother: 'Enviar outra mensagem',
      labelNom: 'Apelido *',
      placeholderNom: 'O seu apelido',
      labelPrenom: 'Nome Próprio *',
      placeholderPrenom: 'O seu nome próprio',
      labelEmail: 'Email *',
      placeholderEmail: 'o.seu.email@exemplo.com',
      labelTelephone: 'Telefone',
      placeholderTelephone: '+242 06 --- ----',
      labelObjet: 'Assunto do seu pedido *',
      objetPlaceholder: 'Selecione o assunto da sua mensagem',
      objetInvestir: 'Desejo investir (agente com capacidade de financiamento)',
      objetFinancer: 'Procuro financiamento (agente com necessidade de financiamento)',
      objetPartenaire: 'Intermediário de negócios / Parceria',
      objetGestion: 'Gestão de carteira ou mandato discricionário',
      objetAutre: 'Outro pedido',
      labelMessage: 'Mensagem *',
      placeholderMessage: 'Descreva o seu pedido, o seu projeto ou os seus objetivos financeiros...',
      submitBtn: 'Enviar a minha mensagem à OMYA INVEST',
      privacyNote: 'Os seus dados são tratados de forma confidencial, em conformidade com as nossas obrigações regulamentares.',
    },

    footer: {
      tagline: '«O seu capital merece mais do que uma conta parada.»',
      brandDesc: 'A OMYA INVEST conecta os agentes com necessidade de financiamento e os agentes com capacidade de financiamento da zona CEMAC e do resto do mundo.',
      colInstitution: 'Instituição',
      colSolutions: 'As Nossas Soluções',
      colMarket: 'Mercado & Imprensa',
      navLinks: [
        { label: 'Início', href: '#accueil' },
        { label: 'Sobre nós & Licença', href: '#presentation' },
        { label: 'A Nossa Missão', href: '#mission' },
        { label: 'A Nossa Visão', href: '#vision' },
        { label: 'Os Nossos Valores', href: '#valeurs' },
        { label: 'Os Nossos Alvos', href: '#cibles' },
        { label: 'Equipa & Parceiros', href: '#equipe' },
      ],
      solutionsLinks: [
        { label: 'Estruturação financeira', href: '#solutions-structuration' },
        { label: 'Desenvolvimento de negócios', href: '#solutions-developpement' },
        { label: 'Investimentos financeiros', href: '#solutions-placements' },
        { label: 'Consultoria em financiamento', href: '#solutions-conseil' },
        { label: 'Execução de ordens', href: '#solutions-execution' },
        { label: 'Custódia & conta-título', href: '#solutions-conservation' },
        { label: 'Gestão de carteira', href: '#solutions-gestion' },
      ],
      marketLinks: [
        { label: 'Mercado Financeiro CEMAC', href: '#marche-financier' },
        { label: 'Percurso Investidor', href: '#investir' },
        { label: 'Percurso Emissor', href: '#financer' },
        { label: 'Parceiros Oficiais', href: '#partenaires' },
        { label: 'Notícias & Comunicados', href: '#actualites' },
        { label: 'Centro de Documentação', href: '#documents' },
        { label: 'Contacto & Suporte', href: '#contact' },
      ],
      newsletterText: 'Mantenha-se informado sobre as oportunidades de mercado:',
      newsletterBtn: 'Subscrição da Newsletter',
      rightsText: (year) => `© ${year} OMYA INVEST — Todos os direitos reservados. Filial do Grupo YAO CORP. Licenciada pela COSUMAF.`,
      legalNotice: 'Aviso Regulamentar COSUMAF-SDB-01/2025',
      privacyPolicy: 'Política de Privacidade',
      legalMentions: 'Avisos Legais',
    },

    sectionHeaders: {
      'a-propos': { title: 'Sobre a OMYA INVEST', breadcrumbLabel: 'Sobre nós', description: 'Sociedade corretora licenciada COSUMAF-SDB-01/2025, filial do Grupo YAO CORP.' },
      'nos-solutions': { title: 'As Nossas Soluções & Serviços Financeiros', breadcrumbLabel: 'Nossas Soluções', description: '7 especialidades ao serviço dos investidores e emissores da zona CEMAC.' },
      'investir': { title: 'Deseja investir?', breadcrumbLabel: 'Investir', description: 'Faça crescer o seu capital no mercado financeiro regional CEMAC.' },
      'financer': { title: 'Procura um financiamento?', breadcrumbLabel: 'Financiar', description: 'Estruturação de empréstimos obrigacionistas, abertura de capital e financiamento estruturado.' },
      'partenaires': { title: 'A Nossa Rede de Parceiros', breadcrumbLabel: 'Parceiros', description: 'Uma equipa de especialistas certificados e parcerias institucionais de confiança.' },
      'marche-financier': { title: 'Compreender o Mercado Financeiro CEMAC', breadcrumbLabel: 'Mercado CEMAC', description: 'Ações, obrigações e educação financeira na zona CEMAC.' },
      'actualites-documents': { title: 'Notícias & Documentação', breadcrumbLabel: 'Imprensa & Doc.', description: 'Publicações, comunicados e documentos oficiais da OMYA INVEST.' },
      'contact': { title: 'Vamos Falar do Seu Projeto', breadcrumbLabel: 'Contato', description: 'A nossa equipa acompanha-o nos seus projetos de investimento ou financiamento.' },
    },
    sectionHeaderHome: 'Início',

    crossLinks: {
      solutionsToPaths: { title: 'É investidor ou procura financiamento?', description: 'Descubra o percurso que lhe convém: investir o seu capital ou estruturar uma operação de financiamento.', cta1: 'Percurso Investidor', cta2: 'Percurso Emissor' },
      investirToSolutions: { title: 'Explore todas as nossas soluções', description: 'Investimentos financeiros, gestão de carteira, execução de ordens... descubra as nossas 7 especialidades completas.', cta: 'Ver as nossas soluções' },
      financerToSolutions: { title: 'Descubra todas as nossas especialidades de estruturação', description: 'Estruturação financeira, consultoria, desenvolvimento de negócios... explore as nossas 7 soluções completas.', cta: 'Ver as nossas soluções' },
      partenairesToAbout: { title: 'Saiba mais sobre a OMYA INVEST', description: 'Licença COSUMAF, filiação ao Grupo YAO CORP, missão e valores: descubra a nossa identidade institucional.', cta: 'Descobrir a OMYA INVEST' },
      marcheToAbout: { title: 'Quem é a OMYA INVEST?', description: 'Sociedade corretora licenciada COSUMAF-SDB-01/2025, filial do Grupo YAO CORP, ao serviço de toda a zona CEMAC.', cta: 'Descobrir a OMYA INVEST' },
      contactToPartners: { title: 'Descubra a nossa rede de parceiros', description: 'Uma equipa de especialistas certificados e parcerias institucionais de confiança em toda a zona CEMAC.', cta: 'Ver os nossos parceiros' },
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
