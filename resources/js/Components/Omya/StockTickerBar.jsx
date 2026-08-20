import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight, User, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

export default function StockTickerBar({ onOpenAuth }) {
  const { currentLang, changeLanguage, t } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Dynamic Stock Data state with live price fluctuation
  const [stockItems, setStockItems] = useState([
    { name: 'BVMAC ALL SHARE', value: 197.45, change: '+0.85%', positive: true },
    { name: 'BVMAC 10', value: 156.78, change: '+0.56%', positive: true },
    { name: 'CAC 40', value: 7984.21, change: '+0.25%', positive: true },
    { name: 'DOW JONES', value: 39065.26, change: '+0.35%', positive: true },
    { name: 'PÉTROLE BRENT', value: 83.45, change: '-0.12%', positive: false },
    { name: 'OR (GOLD)', value: 2342.10, change: '+0.45%', positive: true },
    { name: 'SAFACAM (BVMAC)', value: 23500, change: '+1.20%', positive: true },
    { name: 'SOCAPALM (BVMAC)', value: 48000, change: '+0.95%', positive: true },
  ]);

  // Simulate realistic real-time price updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStockItems((prev) =>
        prev.map((item) => {
          if (Math.random() > 0.4) {
            const delta = (Math.random() - 0.48) * (item.value > 1000 ? 5 : 0.2);
            const newValue = Math.max(1, item.value + delta);
            const isPos = delta >= 0;
            return {
              ...item,
              value: parseFloat(newValue.toFixed(2)),
              positive: isPos,
              change: `${isPos ? '+' : ''}${(delta / item.value * 100).toFixed(2)}%`,
            };
          }
          return item;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const languages = [
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'PT', label: 'Português', flag: '🇵🇹' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <div className="bg-[#082F49]/90 text-sky-200 text-xs border-b border-sky-800/80 relative z-30 font-sans backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
        
        {/* Real-time Ticker Marquee */}
        <div className="flex-1 overflow-hidden mr-4">
          <div className="animate-ticker space-x-6">
            {stockItems.concat(stockItems).map((stock, idx) => (
              <div key={idx} className="inline-flex items-center space-x-1.5 font-mono">
                <span className="font-bold text-sky-300 text-[11px]">{stock.name}:</span>
                <span className="text-white font-black text-[11px]">
                  {typeof stock.value === 'number' ? stock.value.toLocaleString('fr-FR') : stock.value}
                </span>
                <span
                  className={`inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    stock.positive
                      ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 animate-pulse'
                      : 'text-rose-400 bg-rose-950/60 border border-rose-500/30'
                  }`}
                >
                  {stock.positive ? (
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-0.5" />
                  )}
                  {stock.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Controls: Trilingual Selector & Client Space */}
        <div className="flex items-center space-x-4 shrink-0 font-medium">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1.5 text-sky-300 hover:text-white px-2 py-1 rounded-md hover:bg-sky-800/80 transition text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="font-extrabold uppercase">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-sky-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-[#082F49] border border-sky-700 rounded-xl shadow-2xl py-1 z-50 text-xs">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center space-x-2 hover:bg-sky-800 transition ${
                      currentLang === lang.code ? 'text-[#BAE6FD] font-bold bg-sky-800/60' : 'text-sky-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Client Space Button */}
          <button
            onClick={() => onOpenAuth('login', 'client')}
            className="flex items-center space-x-1.5 text-[#BAE6FD] hover:text-white font-extrabold px-3 py-1 rounded-lg bg-[#0C4A6E] border border-[#0284C7]/60 hover:border-[#0284C7] transition shadow-sm text-xs uppercase tracking-wider"
          >
            <User className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{t.clientSpace}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
