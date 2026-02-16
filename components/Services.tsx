
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: "Landing Pages de Alta Conversão", desc: "Estruturas otimizadas para transformar tráfego em vendas de forma eficiente." },
    { title: "Plataformas E-commerce", desc: "Lojas virtuais robustas com foco na experiência do usuário e checkout simplificado." },
    { title: "Desenvolvimento Web Sob Medida", desc: "Aplicações escaláveis criadas para resolver problemas específicos do seu fluxo de trabalho." },
    { title: "Brand Identity Digital", desc: "Design visual coerente que transmite a autoridade e os valores da sua marca." }
  ];

  return (
    <section className="py-40 bg-[#080809] border-y border-white/5 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tight">Soluções que <br /> <span className="font-serif italic text-slate-500 font-light">impulsionam</span> marcas.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group glass p-12 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 cursor-default border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-slate-700 font-display text-lg font-bold">/0{i+1}</span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:translate-x-2 transition-transform duration-700 ease-out">{s.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
