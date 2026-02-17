
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

interface HeroProps {
  onNavigatePortfolio: () => void;
  onStartProject: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigatePortfolio, onStartProject }) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Estado para o efeito de digitação
  const [displayedText, setDisplayedText] = useState("");
  // Obtém o texto completo das traduções
  const fullText = t('hero_subtitle');

  // Reiniciar efeito de digitação quando o idioma mudar
  useEffect(() => {
    setDisplayedText(""); // Limpa o texto imediatamente
    let index = 0;
    
    // Pequeno delay para começar a digitar após a troca de idioma
    const startTyping = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30); // Velocidade da digitação (ms)

      return () => clearInterval(typeInterval);
    }, 100);

    return () => clearTimeout(startTyping);
  }, [fullText]);

  useEffect(() => {
    // Content Animations
    const tl = gsap.timeline();
    
    // Animate Main Heading with Fade In & Slide Up
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(subRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=1.0"
    )
    .fromTo(ctaRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8"
    );

    // Parallax Scroll Effect for Video
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 20, // Moves down relative to container, creating a slower visual scroll speed
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
            className={`absolute inset-0 w-full h-[120%] object-cover -top-[10%] transition-opacity duration-1500 ease-in-out will-change-transform ${isVideoLoaded ? 'opacity-40' : 'opacity-0'}`}
          >
            <source 
              src="https://github.com/Giovannihhh/sites/raw/refs/heads/main/130213-748134209.mp4" 
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
        
        <h1 
          ref={titleRef} 
          className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[1.05] mb-8 text-white drop-shadow-2xl"
        >
          {t('hero_title_1')} <br /> 
          <span className="font-serif italic text-indigo-200 font-light">{t('hero_title_2')}</span> em 2026.
        </h1>
        
        <p 
          ref={subRef} 
          className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-light drop-shadow-md min-h-[3.5rem]"
        >
          {displayedText}
          <span className="animate-pulse text-indigo-400 font-bold ml-0.5">|</span>
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStartProject}
            className="group relative overflow-hidden bg-white text-black px-12 py-5 rounded-full font-bold text-base hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-white/20"
          >
            <span className="relative z-10">{t('hero_cta_start')}</span>
            <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button 
            onClick={onNavigatePortfolio}
            className="glass text-white px-12 py-5 rounded-full font-semibold text-base hover:bg-white/10 transition-all border-white/20 bg-white/5 active:scale-95"
          >
            {t('hero_cta_portfolio')}
          </button>
        </div>
      </div>

      {/* Scroll Suggestion Indicator - Minimalist & Mobile Optimized */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none opacity-60">
        {/* Text Hidden on Mobile to reduce clutter */}
        <span className="hidden md:block text-[9px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
          {t('hero_scroll')}
        </span>
        {/* Sleek Vertical Line with Drop Animation */}
        <div className="w-[1px] h-10 md:h-16 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white animate-drop"></div>
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
        @keyframes drop {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-drop {
          animation: drop 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
