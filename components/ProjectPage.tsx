
import React, { useEffect, useState } from 'react';
import { Project } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
  onStartProject: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack, onStartProject }) => {
  const { t } = useLanguage();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline();
    tl.fromTo('.project-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 p-6 transition-transform duration-500 ${isPreviewOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="glass px-6 py-2 rounded-full flex items-center gap-3 text-sm font-bold hover:bg-white hover:text-black transition-all group bg-black/40 border-white/20"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> {t('pp_back')}
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

      {/* Live Preview Overlay */}
      {isPreviewOpen && project.previewUrl && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-in fade-in duration-300">
           {/* Preview Toolbar */}
           <div className="h-16 border-b border-white/10 bg-[#0A0A0B] flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                 <button 
                   onClick={() => setIsPreviewOpen(false)}
                   className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                 >
                   &larr; {t('pp_close_preview')}
                 </button>
                 <div className="w-px h-6 bg-white/10 mx-2 hidden md:block"></div>
                 <h3 className="text-white font-bold hidden md:block">{project.title}</h3>
              </div>
              
              <div className="flex items-center gap-4">
                 {/* Botão para ver código dentro do preview também, se existir */}
                 {project.repoUrl && (
                   <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest hidden sm:block"
                   >
                     {t('pp_view_code')}
                   </a>
                 )}
                 
                 <a 
                   href={project.previewUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold transition-all"
                 >
                   {t('pp_open_external')} &nearr;
                 </a>
              </div>
           </div>
           
           {/* Iframe Container */}
           <div className="flex-1 w-full h-full relative bg-zinc-900">
              <iframe 
                src={project.previewUrl} 
                className="w-full h-full border-none"
                title={`Preview of ${project.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
           </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden">
        <img 
          src={project.img} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 project-reveal brightness-110"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-block glass px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white bg-indigo-600/20 border-indigo-500/30 project-reveal">
              Case Study / {project.category}
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white drop-shadow-2xl project-reveal">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-4">
              {/* Live Preview Button (If URL exists) */}
              {project.previewUrl && (
                <button 
                  onClick={() => setIsPreviewOpen(true)}
                  className="project-reveal group flex items-center gap-4 bg-white text-black pl-6 pr-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                  {t('pp_live_preview')}
                </button>
              )}

              {/* View Code Button (If Repo exists) */}
              {project.repoUrl && (
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-reveal group flex items-center gap-4 glass text-white pl-6 pr-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </span>
                  {t('pp_view_code')}
                </a>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-8">
              <h2 className="text-3xl font-display font-bold mb-8 text-white project-reveal">{t('pp_vision')}</h2>
              <p className="text-slate-200 text-xl leading-relaxed font-light mb-12 project-reveal">
                {project.description}
              </p>
              <p className="text-slate-400 leading-relaxed project-reveal">
                {t('pp_vision_desc_1')}
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="glass p-8 rounded-3xl project-reveal bg-white/5 border-white/10 shadow-xl">
                <h4 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-4">{t('pp_services_label')}</h4>
                <ul className="text-sm space-y-2 font-medium text-slate-300">
                  <li>UX/UI Design</li>
                  <li>Full-Stack Development</li>
                  <li>GSAP Animations</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-3xl project-reveal bg-white/5 border-white/10 shadow-xl">
                <h4 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-4">{t('pp_timeline_label')}</h4>
                <p className="font-bold text-white">{t('pp_timeline_val')}</p>
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
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-white">{t('pp_cta_title')}</h2>
          <p className="text-slate-400 mb-12 text-lg">{t('pp_cta_desc')}</p>
          <button 
            onClick={onStartProject}
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-white/10"
          >
            {t('pp_cta_btn')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
