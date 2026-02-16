
import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "ENTREGA EM 7 DIAS", "DESIGN EXCLUSIVO", "SUPORTE 24/7", "TECNOLOGIA NEXT-GEN", "ALTA PERFORMANCE", 
    "SITES QUE VENDEM", "SEO OTIMIZADO", "FOCO EM CONVERSÃO"
  ];

  return (
    <div className="w-full bg-zinc-900/30 border-y border-white/5 py-10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-3xl md:text-5xl font-display font-black text-zinc-800 tracking-tighter hover:text-white/20 transition-colors">
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
