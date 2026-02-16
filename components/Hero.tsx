
import React, { useEffect, useRef, useState } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Content Animations
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

    // Parallax Scroll Effect for Video
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      
      // Auto-play reliability
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            const interactToPlay = () => {
              videoRef.current?.play();
              window.removeEventListener('click', interactToPlay);
              window.removeEventListener('touchstart', interactToPlay);
            };
            window.addEventListener('click', interactToPlay);
            window.addEventListener('touchstart', interactToPlay);
          });
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full overflow-hidden">
          {/* Black fallback/loading state */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-[#0A0A0B] z-[1]" />
          )}
          
          <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  onLoadedData={() => setIsVideoLoaded(true)}
  className={`absolute inset-0 w-full h-[130%] object-cover -top-[15%] scale-105 transition-opacity duration-1000 will-change-transform ${
    isVideoLoaded ? 'opacity-50' : 'opacity-0'
  }`}
>
  <source 
    src="https://github.com/Giovannihhh/sites/raw/refs/heads/main/52823-471089056_small.mp4" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video>

          {/* Premium Overlays */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]"></div>
          <div className="absolute inset-0 z-[2] bg-black/30"></div>
          {/* Vignette */}
          <div className="absolute inset-0 z-[2] shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10 border-white/10 shadow-2xl bg-white/5 animate-float">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-300">
            Design de Elite para SMBs
          </span>
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[1.05] mb-8 text-white drop-shadow-2xl"
        >
          Sua presença digital <br /> 
          <span className="font-serif italic text-indigo-200 font-light">redefinida</span> em 2026.
        </h1>
        
        <p 
          ref={subRef} 
          className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-light drop-shadow-md"
        >
          Entregamos autoridade através de sites luxuosos e tecnicamente superiores. Projetados para converter e expandir seu alcance global.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative overflow-hidden bg-white text-black px-12 py-5 rounded-full font-bold text-base hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-white/20">
            <span className="relative z-10">Iniciar Projeto</span>
            <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button className="glass text-white px-12 py-5 rounded-full font-semibold text-base hover:bg-white/10 transition-all border-white/20 bg-white/5 active:scale-95">
            Portfólio 2026
          </button>
        </div>
      </div>

      {/* Scroll Suggestion Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none group">
        <span className="text-[9px] font-bold tracking-[0.4em] text-zinc-500 uppercase transition-colors group-hover:text-white">Scroll</span>
        <div className="w-[1px] h-14 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-500 animate-scroll-line"></div>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
