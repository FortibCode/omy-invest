import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CrossLinkSection({ icon: Icon, title, description, ctas = [], onSelectView, dark = false }) {
  return (
    <section className={`py-14 sm:py-16 ${dark ? 'bg-[#001D3D] text-white border-t border-white/10' : 'bg-white text-slate-800 border-t border-slate-200'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">

        {Icon && (
          <div className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center ${dark ? 'bg-white/10 border border-white/20' : 'bg-[#F4F6FA] border border-slate-200'}`}>
            <Icon className={`w-6 h-6 ${dark ? 'text-white' : 'text-[#002E5B]'}`} />
          </div>
        )}

        <h3 className={`text-xl sm:text-2xl font-bold leading-tight ${dark ? 'text-white' : 'text-[#002E5B]'}`} style={{ fontFamily: "'Open Sans', sans-serif" }}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed max-w-xl mx-auto font-poppins ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          {ctas.map((cta, idx) => (
            <a
              key={cta.targetView}
              href={cta.href}
              onClick={(e) => { e.preventDefault(); onSelectView && onSelectView(cta.targetView); }}
              className={idx === 0 ? (dark ? 'btn-bvmac-white' : 'btn-bvmac-primary') : (dark ? 'btn-bvmac-outline-white' : 'btn-bvmac-outline')}
            >
              <span>{cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
