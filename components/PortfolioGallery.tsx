
import React, { useEffect, useState, useRef } from 'react';
import { Project } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

interface PortfolioGalleryProps {
  onProjectClick: (project: Project) => void;
  onBack: () => void;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onProjectClick, onBack }) => {
  const { t } = useLanguage();
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState(t('gallery_all'));
  const containerRef = useRef<HTMLDivElement>(null);

  const allProjects: Project[] = [
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

  // Extrair categorias únicas e adicionar "Todas" ou "All" dependendo do idioma
  const allLabel = t('gallery_all');
  const categories = [allLabel, ...Array.from(new Set(allProjects.map(p => p.category)))];

  // Se o idioma mudar e a categoria selecionada não for encontrada (ex: 'Todas' vs 'All'), reseta
  useEffect(() => {
    if (!categories.includes(selectedCategory) && selectedCategory !== allLabel) {
       setSelectedCategory(allLabel);
    } else if (selectedCategory === 'Todas' && allLabel === 'All') {
       setSelectedCategory('All');
    } else if (selectedCategory === 'All' && allLabel === 'Todas') {
       setSelectedCategory('Todas');
    }
  }, [allLabel]);


  const filteredProjects = selectedCategory === allLabel
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Ensure plugins are registered
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Entry Animation
      const tl = gsap.timeline();
      tl.fromTo('.gallery-reveal', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power4.out" });

      // Parallax Animation
      const parallaxWrappers = document.querySelectorAll('.gallery-parallax-wrapper');
      parallaxWrappers.forEach((wrapper) => {
        gsap.fromTo(wrapper, 
          { yPercent: -15 }, 
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleImageLoad = (id: string) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="glass px-8 py-3 rounded-full flex items-center gap-4 text-base font-bold hover:bg-white hover:text-black transition-all group border-white/20 bg-black/40 backdrop-blur-md"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> {t('gallery_back')}
          </button>
          {/* Logo removed */}
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-48 pb-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 gallery-reveal">{t('gallery_title')} <span className="text-zinc-600">{t('gallery_title_highlight')}</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl gallery-reveal mb-12">
          {t('gallery_desc')}
        </p>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 gallery-reveal max-w-4xl mx-auto">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                        selectedCategory === cat
                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] transform scale-105'
                            : 'bg-zinc-900/50 text-zinc-500 border-white/5 hover:border-white/20 hover:text-white hover:bg-zinc-800'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p, i) => (
            <div 
              key={p.title} 
              className="group cursor-pointer gallery-reveal"
              onClick={() => onProjectClick(p)}
            >
              <div className="aspect-square overflow-hidden rounded-[2.5rem] mb-6 relative border border-white/5 bg-[#0a0a0a]">
                
                {/* Parallax Wrapper */}
                <div className="gallery-parallax-wrapper absolute inset-0 w-full h-[130%] -top-[15%]">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    onLoad={() => handleImageLoad(p.title)}
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${imagesLoaded[p.title] ? 'opacity-60 group-hover:opacity-100' : 'opacity-0'}`}
                  />
                </div>

                {/* Shimmer Placeholder */}
                {!imagesLoaded[p.title] && (
                  <div className="absolute inset-0 z-10 shimmer rounded-[2.5rem]" />
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
                
                {/* Content */}
                <div className={`absolute bottom-8 left-8 right-8 transition-opacity duration-500 z-20 ${imagesLoaded[p.title] ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 mb-2 block">{p.category}</span>
                  <h3 className="text-3xl font-display font-bold group-hover:translate-x-2 transition-transform mb-4">{p.title}</h3>
                  
                  {/* Saiba Mais Button */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {t('gallery_details')}
                    </span>
                  </div>
                </div>

                {/* Skeleton text for title when loading */}
                {!imagesLoaded[p.title] && (
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="w-1/3 h-2 shimmer rounded-full mb-3" />
                      <div className="w-2/3 h-6 shimmer rounded-lg" />
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center gallery-reveal">
            <p className="text-zinc-500 text-lg">{t('gallery_empty')}</p>
            <button 
              onClick={() => setSelectedCategory(allLabel)}
              className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-bold uppercase tracking-widest"
            >
              {t('gallery_view_all')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery;
