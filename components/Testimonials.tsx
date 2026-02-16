
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { 
      name: "Rodrigo Mendonça", 
      role: "Diretor de Operações na Vesta", 
      text: "A 43V3R não é apenas uma agência de desenvolvimento, é um parceiro estratégico. O novo site triplicou nosso engajamento orgânico em 3 meses." 
    },
    { 
      name: "Ana Luiza Prado", 
      role: "Fundadora da Bloom", 
      text: "A atenção aos detalhes e o suporte pós-lançamento são impecáveis. Finalmente temos uma presença digital que reflete a qualidade do nosso serviço." 
    }
  ];

  return (
    <section className="py-40 bg-[#0A0A0B] reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">A confiança de <span className="text-slate-500">grandes parceiros.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-16 rounded-[3rem] border-white/5 relative group hover:border-white/20 transition-all duration-700">
              <p className="text-2xl md:text-3xl font-serif italic text-slate-300 mb-12 leading-relaxed opacity-90">
                "{t.text}"
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-inner"></div>
                <div>
                  <h4 className="font-bold text-white text-lg tracking-tight">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
