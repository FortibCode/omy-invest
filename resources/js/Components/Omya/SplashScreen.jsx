import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FULL_NAME = 'OMYA INVEST';

export default function SplashScreen({ onFinish }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'hold' | 'exit'

  useEffect(() => {
    if (phase !== 'typing') return;

    if (visibleCount < FULL_NAME.length) {
      // 180ms par lettre → 11 lettres ≈ 2s de frappe
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, 180);
      return () => clearTimeout(timer);
    } else {
      // Toutes les lettres affichées → on attend 1.2s puis on passe en exit
      // 2500ms de pause après frappe complète → total ≈ 5,1s
      const hold = setTimeout(() => setPhase('exit'), 2500);
      return () => clearTimeout(hold);
    }
  }, [visibleCount, phase]);

  // Quand l'animation de sortie est terminée, on appelle onFinish
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
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {/* Ligne décorative animée au-dessus du texte */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #001D3D, #0057B8)',
              borderRadius: '99px',
              transformOrigin: 'left center',
            }}
          />

          {/* Nom de l'entreprise lettre par lettre */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0px',
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#001D3D',
              lineHeight: 1,
            }}
          >
            {FULL_NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={
                  i < visibleCount
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 18 }
                }
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  display: 'inline-block',
                  // Espace pour le caractère espace dans le nom
                  minWidth: char === ' ' ? '0.35em' : undefined,
                  // Coloration différente pour "INVEST"
                  color: i >= 5 ? '#0057B8' : '#001D3D',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Sous-titre discret */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={
              visibleCount === FULL_NAME.length
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 8 }
            }
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#6B7280',
            }}
          >
            Société de Bourse · COSUMAF-SDB-01/2025
          </motion.p>

          {/* Ligne décorative animée en-dessous */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              visibleCount === FULL_NAME.length
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #0057B8, #001D3D)',
              borderRadius: '99px',
              transformOrigin: 'right center',
            }}
          />

          {/* Indicateur de chargement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
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
