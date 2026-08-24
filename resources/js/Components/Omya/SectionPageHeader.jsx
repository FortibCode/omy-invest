import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export default function SectionPageHeader({ icon: Icon, title, description, breadcrumbLabel, onSelectView }) {
  return (
    <section className="relative bg-[#001D3D] text-white py-10 sm:py-14 overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[11px] font-nav uppercase tracking-wider text-slate-400 mb-4">
          <button
            onClick={() => onSelectView && onSelectView('accueil')}
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Home className="w-3 h-3" />
            <span>Accueil</span>
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-bold">{breadcrumbLabel}</span>
        </div>

        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          )}
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              {title}
            </h1>
            {description && (
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 font-poppins max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
