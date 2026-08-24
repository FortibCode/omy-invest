import React from 'react';

export default function OmyaLogo({ className = "h-9", light = false }) {
  const textColor = light ? "#FFFFFF" : "#075985";
  const investColor = light ? "#38BDF8" : "#0284C7";

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* SVG Vector Reproduction of OMYA INVEST Logo */}
      <svg
        viewBox="0 0 222 75"
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter 'O': Two facing arcs (parentheses brackets) */}
        <g stroke={textColor} strokeWidth="7" strokeLinecap="round" fill="none">
          <path d="M 28 12 A 22 22 0 0 0 28 52" />
          <path d="M 38 12 A 22 22 0 0 1 38 52" />
        </g>

        {/* Letter 'M': Modern geometric M */}
        <path
          d="M 68 52 V 12 L 86 38 L 104 12 V 52"
          stroke={textColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Letter 'Y': Geometric Y */}
        <path
          d="M 124 12 L 140 34 V 52 M 156 12 L 140 34"
          stroke={textColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Letter 'A': Open Chevron Apex (no horizontal crossbar) */}
        <path
          d="M 174 52 L 194 12 L 214 52"
          stroke={textColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Subtitle 'INVEST' */}
        <text
          x="121"
          y="71"
          textAnchor="middle"
          fill={investColor}
          fontSize="16"
          fontWeight="700"
          letterSpacing="9"
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
        >
          INVEST
        </text>
      </svg>
    </div>
  );
}
