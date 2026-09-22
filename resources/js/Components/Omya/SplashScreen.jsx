import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';
import { useLanguage } from '@/Context/LanguageContext';

// Le « O » occupe les 24,3 % gauches du fichier logo (59 px sur 243).
// On n'affiche d'abord que lui, centré, puis le logo se déroule jusqu'à « OMYA INVEST ».
const O_CLIP = 'inset(0 75.7% 0 0)';
const O_CENTER_X = '37.85%'; // (1 - 0.243) / 2 : garde la partie visible au centre pendant le déroulé

export default function SplashScreen({ onFinish }) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState('show'); // 'show' | 'exit'

  useEffect(() => {
    if (phase !== 'show') return;
    // Apparition du O, déroulé du logo (~1.9s), puis le temps de lire la signature avant la sortie
    const hold = setTimeout(() => setPhase('exit'), 4200);
    return () => clearTimeout(hold);
  }, [phase]);

  const handleExitComplete = () => {
    if (phase === 'exit') onFinish();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {phase !== 'exit' && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#F8FAFC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Halo radial doux derrière le logo */}
          <div
            style={{
              position: 'absolute',
              width: 'min(70vw, 640px)',
              height: 'min(70vw, 640px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,87,184,0.08) 0%, rgba(0,87,184,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 24px',
            }}
          >
            {/* Logo officiel OMYA INVEST : le O apparaît seul, puis le logo se déroule jusqu'à INVEST */}
            <motion.div
              initial={{ opacity: 0, clipPath: O_CLIP, x: O_CENTER_X }}
              animate={{
                opacity: [0, 1, 1, 1],
                clipPath: [O_CLIP, O_CLIP, O_CLIP, 'inset(0 0% 0 0)'],
                x: [O_CENTER_X, O_CENTER_X, O_CENTER_X, '0%'],
              }}
              transition={{
                duration: 1.9,
                delay: 0.1,
                times: [0, 0.25, 0.42, 1],
                ease: ['easeOut', 'linear', [0.65, 0, 0.35, 1]],
              }}
            >
              <OmyaLogo light={false} className="h-20 sm:h-24 lg:h-28 w-auto" />
            </motion.div>

            {/* Signature de marque, sous le logo */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.85 }}
              style={{
                // Toujours sur une seule ligne : la taille suit la largeur de l'écran (la phrase fait ~24,8em)
                fontSize: 'clamp(0.625rem, calc((100vw - 48px) / 25.5), 1.375rem)',
                fontWeight: 500,
                lineHeight: 1.4,
                color: '#002E5B',
                margin: '28px 0 0',
                whiteSpace: 'nowrap',
                textAlign: 'center',
              }}
            >
              {t.footer.tagline}
            </motion.p>

            {/* Filet de séparation */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 2.2 }}
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: '#A9C1DE',
                margin: '26px 0 18px',
              }}
            />

            {/* Sous-titre institutionnel */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 2.3 }}
              style={{
                fontSize: 'clamp(0.625rem, 1.4vw, 0.85rem)',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6B7280',
                margin: 0,
                textAlign: 'center',
              }}
            >
              Société de bourse · COSUMAF-SDB-01/2025
            </motion.p>
          </div>

          {/* Indicateur de chargement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4 }}
            style={{
              position: 'absolute',
              bottom: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{ opacity: [0.2, 1, 0.2], y: [0, -4, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: dot * 0.2,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#0057B8',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
