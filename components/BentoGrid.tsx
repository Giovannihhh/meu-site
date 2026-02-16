
import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-40 reveal">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">O que nos torna <br /> <span className="text-slate-500">referência no mercado.</span></h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">Combinamos estética atemporal com performance técnica para garantir que sua empresa se destaque em um mar de mediocridade.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
        {/* Item 1 - Grande */}
        <div className="md:col-span-2 md:row-span-2 bento-item rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4 block">Performance</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">Velocidade que <br />gera receita.</h3>
            <p className="text-slate-400 text-base max-w-[280px] leading-relaxed">Reduzimos o tempo de carregamento para aumentar sua taxa de conversão em até 40%.</p>
          </div>
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center glass">
                <span className="text-2xl font-bold">A+</span>
             </div>
             <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">PageSpeed Score</span>
          </div>
          {/* Sutil background decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
        </div>

        {/* Item 2 - Vertical */}
        <div className="md:col-span-1 md:row-span-2 bento-item rounded-[2.5rem] p-10 flex flex-col justify-between group">
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Suporte <br />Estratégico</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Monitoramento proativo e atualizações constantes para que você foque no que importa: seu negócio.</p>
          </div>
        </div>

        {/* Item 3 - Entrega em 48h (Substituindo SEO e UX) */}
        <div className="md:col-span-1 md:row-span-2 bg-white text-black rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-slate-100 transition-colors relative overflow-hidden">
           <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full"></div>
           
           <div>
             <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
             </div>
             <h3 className="text-3xl font-display font-bold leading-[1.1] mb-4">Entrega em <br/>até 48h</h3>
             <p className="text-zinc-600 text-sm leading-relaxed font-medium">
               Agilidade extrema para quem não tem tempo a perder. Do briefing ao lançamento em tempo recorde.
             </p>
           </div>
           
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Disponível Agora</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
