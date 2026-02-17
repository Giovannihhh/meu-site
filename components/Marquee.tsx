
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();
  
  // Converte a string separada por vírgula em array
  const items = t('marquee_items').split(',');

  return (
    <div className="w-full bg-zinc-900/30 border-y border-white/5 py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-3xl md:text-5xl font-display font-black text-zinc-800 tracking-tighter hover:text-white/20 transition-colors cursor-default">
                  {item}
                </span>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
