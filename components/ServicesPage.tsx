
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

interface ServicesPageProps {
  onBack: () => void;
  onStartProject: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onStartProject }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    tl.fromTo('.service-reveal', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    const cards = document.querySelectorAll('.service-card-detail');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const detailedServices = [
    {
      id: "landing-page",
      title: t('s_landing_title'),
      subtitle: t('s_landing_sub'),
      description: t('s_landing_desc'),
      features: ["Carregamento em < 1.5s", "Copywriting Persuasivo", "Integração com Pixel/Analytics", "Design Mobile-First"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      )
    },
    {
      id: "ecommerce",
      title: t('s_ecom_title'),
      subtitle: t('s_ecom_sub'),
      description: t('s_ecom_desc'),
      features: ["Painel Administrativo Intuitivo", "Checkout Transparente", "Gestão de Estoque", "SEO para Produtos"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      )
    },
    {
      id: "custom-dev",
      title: t('s_dev_title'),
      subtitle: t('s_dev_sub'),
      description: t('s_dev_desc'),
      features: ["Arquitetura Escalável", "Banco de Dados Otimizado", "Segurança Bancária", "APIs Restful/GraphQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      )
    },
    {
      id: "branding",
      title: t('s_brand_title'),
      subtitle: t('s_brand_sub'),
      description: t('s_brand_desc'),
      features: ["Logotipos Responsivos", "Paleta de Cores e Tipografia", "Design System Completo", "Assets para Redes Sociais"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pb-24 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="glass px-6 py-2 rounded-full flex items-center gap-3 text-sm font-bold hover:bg-white hover:text-black transition-all group bg-black/40 border-white/20 backdrop-blur-md"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> {t('back_home')}
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 service-reveal">
          {t('about_title')} <span className="text-zinc-500">{t('about_highlight')}</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg service-reveal">
          {t('about_desc')}
        </p>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {detailedServices.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-card-detail flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Visual Side */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-black border border-white/10 p-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                
                {/* Abstract Visual Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-indigo-500/20 blur-[50px] group-hover:bg-indigo-500/30 transition-all duration-700"></div>
                </div>

                <div className="relative z-10 h-full w-full bg-[#0A0A0B] rounded-[2.3rem] flex items-center justify-center border border-white/5">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <div className="text-indigo-400">
                            {React.cloneElement(service.icon as React.ReactElement<any>, { width: 64, height: 64 })}
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <span className="text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">{service.subtitle}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onStartProject}
                className="text-white border-b border-white/30 pb-1 hover:border-white hover:text-indigo-300 transition-all text-sm font-bold uppercase tracking-widest"
              >
                {t('service_cta')} &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="mt-32 py-20 bg-zinc-900/30 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-8">{t('footer_title')}</h2>
          <p className="text-zinc-400 mb-8">
            {t('footer_desc')}
          </p>
          <button 
            onClick={onStartProject}
            className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            {t('cta_talk')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
