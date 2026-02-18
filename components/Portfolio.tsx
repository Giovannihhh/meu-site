
import React, { useEffect, useRef } from 'react';
import { Project } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;

interface PortfolioProps {
  onProjectClick: (project: Project) => void;
  onSeeAll: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick, onSeeAll }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const categories = document.querySelectorAll('.category-parallax');
    categories.forEach((cat, i) => {
      gsap.to(cat, {
        y: -40,
        x: (i % 2 === 0 ? 15 : -15),
        ease: "none",
        scrollTrigger: {
          trigger: cat,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    });

    const projectImages = document.querySelectorAll('.project-img-parallax');
    projectImages.forEach((img) => {
      gsap.to(img, {
        y: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, []);

  const projects: Project[] = [
    { 
      title: "Ateliê dos Sabores", 
      category: "Gastronomia", 
      img: "https://raw.githubusercontent.com/Giovannihhh/sites/main/Screenshot%202026-02-17%20150141.png",
      description: t('proj_atelie_desc'),
      previewUrl: "https://ateliedossabores.vercel.app/"
    },
    { 
      title: "Pet Verse", 
      category: "Veterinária", 
      img: "https://raw.githubusercontent.com/Giovannihhh/sites/main/Screenshot%202026-02-17%20203556.png",
      description: t('proj_pet_desc'),
      previewUrl: "https://petverse-umber.vercel.app/"
    },
    { 
      title: "Pizzaria da Vila", 
      category: "Gastronomia", 
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      description: t('proj_pizzaria_desc'),
      previewUrl: "https://pizzaria-da-vila-mb7kn006v-leogiovannilgr-5152s-projects.vercel.app/"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 reveal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold">{t('home_port_title')} <span className="text-slate-400 italic font-serif">{t('home_port_span')}</span></h2>
          <button 
            onClick={onSeeAll}
            className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-white transition-all"
          >
            {t('home_port_btn')} <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group cursor-pointer"
              onClick={() => onProjectClick(p)}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 relative border border-white/10 bg-zinc-900/50 shadow-2xl">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="project-img-parallax w-full h-[120%] object-cover group-hover:scale-110 transition-all duration-1000 ease-out absolute -top-[10%] brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl flex items-center gap-2">
                    {t('gallery_details')} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
              <div className="relative">
                <p className="category-parallax text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3 inline-block">
                  {p.category}
                </p>
                <h3 className="text-3xl font-display font-bold group-hover:text-white transition-colors">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
