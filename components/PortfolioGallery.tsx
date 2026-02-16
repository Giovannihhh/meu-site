
import React, { useEffect, useState, useRef } from 'react';
import { Project } from '../App';

declare const gsap: any;
declare const ScrollTrigger: any;

interface PortfolioGalleryProps {
  onProjectClick: (project: Project) => void;
  onBack: () => void;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onProjectClick, onBack }) => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const allProjects: Project[] = [
    { 
      title: "Lumina Studio", 
      category: "Arquitetura", 
      img: "https://images.unsplash.com/photo-1600607687940-4e7a53157a41?q=80&w=2070&auto=format&fit=crop",
      description: "Uma plataforma imersiva para um dos maiores escritórios de arquitetura de luxo do país."
    },
    { 
      title: "Apex Finanças", 
      category: "Fintech", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
      description: "Interface bancária de alta complexidade redesenhada para oferecer simplicidade e segurança."
    },
    { 
      title: "Natura Skin", 
      category: "Cosméticos", 
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop",
      description: "E-commerce premium com experiência de compra baseada em personalização."
    },
    { 
      title: "Vanguard Realty", 
      category: "Imobiliária", 
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      description: "Portal imobiliário de luxo focado em propriedades exclusivas e atendimento personalizado."
    },
    { 
      title: "Echo Audio", 
      category: "Tecnologia", 
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      description: "Landing page para lançamento de hardware de áudio premium com som surround 360."
    },
    { 
      title: "Savor Cuisine", 
      category: "Gastronomia", 
      img: "https://images.unsplash.com/photo-1550966841-3ee4ad00a0d6?q=80&w=2070&auto=format&fit=crop",
      description: "Experiência digital para restaurante estrelado Michelin, com reservas integradas."
    }
  ];

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

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="glass px-6 py-2 rounded-full flex items-center gap-3 text-sm font-bold hover:bg-white hover:text-black transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Voltar ao Início
          </button>
          <div className="flex items-center gap-3">
            <img 
              src="logo.png" 
              alt="43V3R Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-48 pb-24 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 gallery-reveal">Galeria de <span className="text-zinc-600">Projetos</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl gallery-reveal">
          Uma curadoria de nossas soluções digitais mais impactantes para empresas que buscam o extraordinário.
        </p>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((p, i) => (
          <div 
            key={i} 
            className="group cursor-pointer gallery-reveal"
            onClick={() => onProjectClick(p)}
          >
            <div className="aspect-square overflow-hidden rounded-[2.5rem] mb-6 relative border border-white/5 bg-[#0a0a0a]">
              
              {/* Parallax Wrapper */}
              <div className="gallery-parallax-wrapper absolute inset-0 w-full h-[130%] -top-[15%]">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  onLoad={() => handleImageLoad(i)}
                  className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${imagesLoaded[i] ? 'opacity-60 group-hover:opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Shimmer Placeholder */}
              {!imagesLoaded[i] && (
                <div className="absolute inset-0 z-10 shimmer rounded-[2.5rem]" />
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
              
              {/* Content */}
              <div className={`absolute bottom-8 left-8 right-8 transition-opacity duration-500 z-20 ${imagesLoaded[i] ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 mb-2 block">{p.category}</span>
                <h3 className="text-3xl font-display font-bold group-hover:translate-x-2 transition-transform mb-4">{p.title}</h3>
                
                {/* Saiba Mais Button */}
                <div className="flex items-center gap-2">
                   <span className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                     Saiba mais
                   </span>
                </div>
              </div>

              {/* Skeleton text for title when loading */}
              {!imagesLoaded[i] && (
                <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="w-1/3 h-2 shimmer rounded-full mb-3" />
                    <div className="w-2/3 h-6 shimmer rounded-lg" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
