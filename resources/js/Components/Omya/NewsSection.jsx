import React from 'react';
import { Newspaper } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

// Communiqués à publier : { date: '12/09/2026', category: 'Communiqué', title: '...', desc: '...', href: '/documents/...pdf' }
const NEWS_ITEMS = [];

export default function NewsSection() {
  const { t } = useLanguage();

  return (
    <section id="actualites" className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="section-tag-bvmac justify-center">
            <span>{t.news.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
            {t.news.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.news.desc}
          </p>
        </div>

        {NEWS_ITEMS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ITEMS.map((item) => (
              <article key={item.title} className="bvmac-card p-7 flex flex-col">
                <div className="flex items-center justify-between gap-3 text-sm text-slate-500 mb-3">
                  <span>{item.category}</span>
                  <time>{item.date}</time>
                </div>
                <h3 className="text-lg font-bold text-[#002E5B] leading-snug mb-2">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1">{item.desc}</p>
                {item.href && (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-[#002E5B] hover:underline self-start">
                    {t.common.enSavoirPlus}
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center border border-dashed border-slate-300 rounded-lg p-10">
            <Newspaper className="w-8 h-8 text-slate-300 mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-slate-500">{t.news.emptyState}</p>
          </div>
        )}

      </div>
    </section>
  );
}
