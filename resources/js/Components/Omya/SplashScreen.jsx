import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/Omya/OmyaLogo';

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState('show'); // 'show' | 'exit'

  useEffect(() => {
    if (phase !== 'show') return;
    // Laisse le temps à la révélation du logo (~1.3s) puis marque une pause avant la sortie
    const hold = setTimeout(() => setPhase('exit'), 3000);
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
              gap: '22px',
            }}
          >
            {/* Logo officiel OMYA INVEST — révélation progressive de gauche à droite (du "O" jusqu'à "INVEST") */}
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
            >
              <OmyaLogo light={false} className="h-16 sm:h-20 w-auto" />
            </motion.div>

            {/* Ligne décorative en dégradé */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
              style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, #001D3D, #0057B8)',
                borderRadius: '99px',
              }}
            />

            {/* Sous-titre institutionnel */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.45 }}
              style={{
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#6B7280',
                margin: 0,
                textAlign: 'center',
              }}
            >
              Société de Bourse · COSUMAF-SDB-01/2025
            </motion.p>
          </div>

          {/* Indicateur de chargement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
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
