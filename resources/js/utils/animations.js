/**
 * animations.js — Framer Motion variants & helpers for OMYA INVEST
 * Utiliser avec motion.div et useInView/useAnimation de framer-motion
 */

/* ─────────────────────────────────────────────────
   VARIANTS RÉUTILISABLES
───────────────────────────────────────────────── */

/** Fade + montée depuis le bas */
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade + entrée depuis la gauche */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade + entrée depuis la droite */
export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Scale depuis 0.85 → 1 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade simple */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

/**
 * Container stagger — les enfants s'animent en cascade
 * @param {number} staggerChildren - délai entre chaque enfant (défaut 0.1s)
 * @param {number} delayChildren - délai initial avant le premier enfant
 */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/** Variant pour un élément enfant dans un stagger (fadeInUp) */
export const staggerItem = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Variant pour carte (scale + fade) dans un stagger */
export const staggerCard = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────────
   VIEWPORT OPTIONS (pour whileInView)
───────────────────────────────────────────────── */

/** Options standard pour déclencher l'animation au scroll */
export const viewport = {
  once: true,      // ne rejoue qu'une seule fois
  amount: 0.15,    // 15% de l'élément doit être visible
};

/** Options pour les gros blocs */
export const viewportLarge = {
  once: true,
  amount: 0.1,
};

/* ─────────────────────────────────────────────────
   TRANSITIONS PRÉDÉFINIES
───────────────────────────────────────────────── */

export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

/* ─────────────────────────────────────────────────
   HERO — Variants spéciaux
───────────────────────────────────────────────── */

export const heroTitle = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroBadge = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'backOut' },
  },
};

export const heroDashboard = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroContainer = staggerContainer(0.1, 0.05);
