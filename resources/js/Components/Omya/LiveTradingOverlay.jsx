import React, { useEffect, useState } from 'react';

export default function LiveTradingOverlay() {
  // Live ticker particles floating upward over background
  const [particles, setParticles] = useState([
    { id: 1, text: 'BVMAC ▲ 197.80', x: '15%', y: '30%', opacity: 0.8 },
    { id: 2, text: 'SAFACAM ▲ +1.25%', x: '45%', y: '20%', opacity: 0.7 },
    { id: 3, text: 'SOCAPALM ▲ +0.95%', x: '75%', y: '40%', opacity: 0.85 },
    { id: 4, text: 'CAC 40 ▲ 7988.4', x: '60%', y: '65%', opacity: 0.6 },
    { id: 5, text: 'EUR/XAF 655.95', x: '25%', y: '70%', opacity: 0.75 },
  ]);

  // Continuously shift floating ticker positions for live market feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newY = parseFloat(p.y) - 0.3;
          if (newY < 10) newY = 85;
          return { ...p, y: `${newY}%` };
        })
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      
      {/* 1. Live Animated Laser Candlesticks & Wave Stream Layer */}
      <svg className="w-full h-full object-cover opacity-45" viewBox="0 0 1440 900" fill="none">
        
        {/* Animated Laser Grid Scanline */}
        <line x1="0" y1="200" x2="1440" y2="200" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="6 6" opacity="0.4" />
        <line x1="0" y1="400" x2="1440" y2="400" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="6 6" opacity="0.4" />
        <line x1="0" y1="600" x2="1440" y2="600" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="6 6" opacity="0.4" />

        {/* Dynamic Continuous Wave Path 1 (Cyan/Green Glow) */}
        <path
          d="M -50 350 Q 200 250, 450 380 T 900 300 T 1300 200 T 1550 280"
          stroke="url(#glow-wave-cyan)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />

        {/* Dynamic Continuous Wave Path 2 (Gold Bull Surge) */}
        <path
          d="M -50 480 Q 250 550, 550 400 T 1000 450 T 1550 250"
          stroke="url(#glow-wave-gold)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />

        {/* Live Candlestick Columns on Glass Windows */}
        <g className="animate-pulse">
          {/* Green Bull Candles */}
          <rect x="220" y="280" width="10" height="70" fill="#10B981" rx="2" />
          <line x1="225" y1="250" x2="225" y2="380" stroke="#10B981" strokeWidth="2" />

          <rect x="290" y="220" width="10" height="110" fill="#38BDF8" rx="2" />
          <line x1="295" y1="190" x2="295" y2="350" stroke="#38BDF8" strokeWidth="2" />

          {/* Red/Pink Bear Adjustments */}
          <rect x="360" y="310" width="10" height="40" fill="#EC4899" rx="2" />
          <line x1="365" y1="290" x2="365" y2="370" stroke="#EC4899" strokeWidth="2" />

          {/* Major Surge */}
          <rect x="750" y="160" width="12" height="160" fill="#10B981" rx="2" />
          <line x1="756" y1="130" x2="756" y2="340" stroke="#10B981" strokeWidth="2" />

          <rect x="830" y="120" width="12" height="120" fill="#38BDF8" rx="2" />
          <line x1="836" y1="90" x2="836" y2="260" stroke="#38BDF8" strokeWidth="2" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="glow-wave-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="glow-wave-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* 2. Floating Ticker Price Badges */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute px-3 py-1 rounded-full bg-[#082F49]/80 border border-[#38BDF8]/40 text-[#BAE6FD] text-[10px] font-mono font-bold backdrop-blur-md shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all duration-700"
          style={{
            left: p.x,
            top: p.y,
            opacity: p.opacity,
          }}
        >
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{p.text}</span>
          </span>
        </div>
      ))}

      {/* 3. Trader Cursor Light Nodes Simulating Active Trading Floor Operations */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8] animate-ping opacity-60" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8] animate-ping opacity-70" />
    </div>
  );
}
