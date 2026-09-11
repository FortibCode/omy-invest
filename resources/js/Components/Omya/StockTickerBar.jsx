import React, { useState, useEffect } from 'react';

/**
 * StockTickerBar Component — Barre de cotation 100% DYNAMIQUE issue du serveur API Laravel
 */

export default function StockTickerBar({ speed = 45 }) {
  const [tickerItems, setTickerItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [sessionDate, setSessionDate] = useState('');

  // 1. Horloge & Date de séance dynamiques (Temps réel)
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Heure en direct (GMT+1 Yaoundé / Brazzaville)
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes} (GMT+1)`);

      // Date de séance dynamique en français
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      let formattedDate = now.toLocaleDateString('fr-FR', options);
      formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
      setSessionDate(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // 2. Chargement 100% DYNAMIQUE des cotations réelles depuis le serveur Laravel (/api/market-data)
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('/api/market-data');
        if (response.ok) {
          const json = await response.json();
          if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
            const formatted = json.data.map((item) => ({
              symbol: item.symbol,
              value:
                typeof item.value === 'number'
                  ? item.value.toLocaleString('fr-FR') + ' ' + (item.unit || '')
                  : item.value,
              change: (item.isPositive ? '+' : '') + item.change + ' %',
              isPositive: item.isPositive,
            }));
            setTickerItems(formatted);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error('Erreur lors du chargement API des données de marché:', err);
      }
    };

    fetchApiData();
    // Rafraîchissement dynamique toutes les 30 secondes
    const interval = setInterval(fetchApiData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Duplication dynamique pour défilement en boucle infinie sans saut
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-[#020611] text-slate-200 text-[12.5px] py-1.5 px-3 border-b border-slate-900 flex items-center justify-between font-sans relative z-50 select-none">

      {/* GAUCHE : SÉANCE DE COTATION DYNAMIQUE */}
      <div className="shrink-0 flex items-center gap-1.5 pr-4 text-slate-300 font-medium">
        <span className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center text-[10px] font-bold text-[#38BDF8]">
          A
        </span>
        <span className="uppercase tracking-wider font-semibold text-[12px]">
          SÉANCE DE COTATION : {sessionDate || 'Chargement...'}
        </span>
      </div>

      {/* CENTRE : TICKER DÉFILANT DYNAMIQUE (ISSU DE L'API) */}
      <div className="flex-1 overflow-hidden mx-4 relative">
        {loading || tickerItems.length === 0 ? (
          <div className="text-slate-400 font-mono text-[12.5px] animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Chargement des cours réels du marché...</span>
          </div>
        ) : (
          <div
            className="animate-ticker flex items-center space-x-8 whitespace-nowrap"
            style={{ animationDuration: `${speed}s` }}
          >
            {duplicatedItems.map((item, idx) => (
              <div key={idx} className="inline-flex items-center space-x-1.5 font-mono text-[12.5px]">
                {/* Flèche hausse / baisse */}
                <span className={item.isPositive ? 'text-emerald-400 font-bold' : 'text-rose-500 font-bold'}>
                  {item.isPositive ? '▲' : '▼'}
                </span>

                {/* Symbole */}
                <span className="font-bold text-white uppercase">{item.symbol}</span>

                {/* Valeur & Variation */}
                <span className={item.isPositive ? 'text-emerald-400' : 'text-rose-400'}>
                  {item.value} ({item.change})
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DROITE : HEURE DYNAMIQUE */}
      <div className="shrink-0 pl-4 text-slate-400 font-mono text-[12px] hidden md:block">
        Heure de Yaoundé / Brazzaville : {currentTime}
      </div>

    </div>
  );
}
