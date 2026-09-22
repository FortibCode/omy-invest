import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

export default function SectionPageHeader({ icon: Icon, title, description, breadcrumbLabel, onSelectView }) {
  const { t } = useLanguage();
  return (
    <section className="bg-[#001D3D] text-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-slate-400 mb-4">
          <button
            onClick={() => onSelectView && onSelectView('accueil')}
            className="hover:text-white transition-colors"
          >
            {t.sectionHeaderHome}
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-200">{breadcrumbLabel}</span>
        </nav>

        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
            </div>
          )}
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-slate-300 text-base mt-1.5 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
