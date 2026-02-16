
import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.3 }
    )
    .fromTo(subRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "expo.out" }, "-=0.8"
    )
    .fromTo(ctaRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" }, "-=0.6"
    );

    if (bgImageRef.current) {
      // Adjusted Parallax: Reduced translation range to move slower than content.
      // Image height is 120%, so we move it +/- 8% to keep it safely within view
      // without excessive cropping or visible edges.
      gsap.fromTo(bgImageRef.current, 
        { y: "-8%", scale: 1.12 },
        {
          y: "8%",
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0A0B]">
      {/* Cinematic Tech Background - Updated for "Reach/Alcance" theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          ref={bgImageRef}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Growth and Global Reach" 
          className="w-full h-[120%] object-cover opacity-[0.6] absolute -top-[10%] brightness-100"
        />
        {/* Softened gradient overlay to ensure background content is apparent and premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/20 via-[#0A0A0B]/40 to-[#0A0A0B]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10 border-white/20 shadow-2xl bg-black/40">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-200">
            Design de Elite para SMBs
          </span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-10 text-white drop-shadow-2xl">
          Sua presença digital <br /> <span className="font-serif italic text-indigo-300 font-light">redefinida</span> hoje.
        </h1>
        
        <p ref={subRef} className="text-slate-100 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-normal drop-shadow-lg">
          Entregamos autoridade através de sites luxuosos e tecnicamente superiores. Projetados para converter, construídos para durar e expandir seu alcance.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-base hover:bg-slate-200 transition-all active:scale-95 shadow-2xl shadow-white/10">
            Iniciar Projeto
          </button>
          
          <button className="glass text-white px-10 py-5 rounded-full font-semibold text-base hover:bg-white/10 transition-all border-white/30 bg-black/20">
            Portfólio 2026
          </button>
        </div>
      </div>
      
      {/* Visual Depth Accents */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-[25%] left-[8%] w-72 h-72 bg-indigo-500/10 blur-[130px] rounded-full animate-pulse pointer-events-none"></div>
    </section>
  );
};

export default Hero;
