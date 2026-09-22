import React from 'react';
import { FolderDown, Download } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

// Documents à publier (fichiers à placer dans public/documents/) :
// { category: 'Règlement', title: '...', desc: '...', format: 'PDF', href: '/documents/nom-du-fichier.pdf' }
const DOCUMENTS = [];

export default function DocumentsSection() {
  const { t } = useLanguage();

  return (
    <section id="documents" className="py-24 bg-[#F4F6FA] text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="section-tag-bvmac justify-center">
            <span>{t.documents.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#002E5B] leading-tight">
            {t.documents.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.documents.desc}
          </p>
        </div>

        {DOCUMENTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCUMENTS.map((doc) => (
              <article key={doc.href} className="bvmac-card p-7 flex flex-col">
                <span className="text-sm text-slate-500 mb-2">{doc.category}</span>
                <h3 className="text-lg font-bold text-[#002E5B] leading-snug mb-2">{doc.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1">{doc.desc}</p>
                <a
                  href={doc.href}
                  download
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002E5B] hover:underline self-start"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.documents.download} ({doc.format})</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center border border-dashed border-slate-300 rounded-lg p-10 bg-white">
            <FolderDown className="w-8 h-8 text-slate-300 mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-slate-500">{t.documents.emptyState}</p>
          </div>
        )}

      </div>
    </section>
  );
}
