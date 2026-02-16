
import React, { useEffect } from 'react';
import { Project } from '../App';

declare const gsap: any;

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
  onStartProject: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack, onStartProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline();
    tl.fromTo('.project-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="glass px-6 py-2 rounded-full flex items-center gap-3 text-sm font-bold hover:bg-white hover:text-black transition-all group bg-black/40 border-white/20"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Voltar para Início
          </button>
          <div className="flex items-center">
            <img 
              src="logo.png" 
              alt="43V3R Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden">
        <img 
          src={project.img} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 project-reveal brightness-110"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white bg-indigo-600/20 border-indigo-500/30 project-reveal">
            Case Study / {project.category}
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-4 text-white drop-shadow-2xl project-reveal">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-8">
              <h2 className="text-3xl font-display font-bold mb-8 text-white project-reveal">A Visão do Projeto</h2>
              <p className="text-slate-200 text-xl leading-relaxed font-light mb-12 project-reveal">
                {project.description}
              </p>
              <p className="text-slate-400 leading-relaxed project-reveal">
                Nossa abordagem para {project.title} foi centrada em elevar o padrão visual da categoria. 
                Utilizamos as tecnologias mais modernas de desenvolvimento para garantir que cada interação fosse 
                fluida e memorável. O resultado é um site que não apenas apresenta informações, mas conta uma história.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="glass p-8 rounded-3xl project-reveal bg-white/5 border-white/10 shadow-xl">
                <h4 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-4">Serviços</h4>
                <ul className="text-sm space-y-2 font-medium text-slate-300">
                  <li>UX/UI Design</li>
                  <li>Desenvolvimento Full-Stack</li>
                  <li>Animações Customizadas</li>
                  <li>Otimização de Performance</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-3xl project-reveal bg-white/5 border-white/10 shadow-xl">
                <h4 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-4">Timeline</h4>
                <p className="font-bold text-white">8 Dias Úteis</p>
              </div>
            </div>
          </div>

          {/* Project Gallery - Bento Grid Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 project-reveal">
             <div className="aspect-video glass rounded-[3rem] overflow-hidden group border-white/10 bg-zinc-900/50 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 brightness-105" 
                alt="Workspace"
               />
             </div>
             <div className="aspect-video glass rounded-[3rem] overflow-hidden group border-white/10 bg-zinc-900/50 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 brightness-105" 
                alt="Detail"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-white">Gostou deste resultado?</h2>
          <p className="text-slate-400 mb-12 text-lg">Podemos criar algo igualmente impactante para sua empresa em menos de uma semana.</p>
          <button 
            onClick={onStartProject}
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-white/10"
          >
            Solicitar orçamento agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
