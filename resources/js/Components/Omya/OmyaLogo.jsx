import React from 'react';

export default function OmyaLogo({ className = "h-9", light = false }) {
  // Logo officiel OMYA INVEST (version haute résolution, fond transparent).
  // Sur fond sombre : même fichier recoloré (OMYA en blanc, INVEST en bleu clair) → omya-invest-logo-white.png.
  return (
    <img
      src={light ? '/images/omya-invest-logo-white.png' : '/images/omya-invest-logo-hd.png'}
      alt="OMYA INVEST"
      className={`inline-block object-contain select-none ${className}`}
    />
  );
}
