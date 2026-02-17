
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesProps {
  onLearnMore?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  const { t } = useLanguage();

  const services = [
    { 
      title: t('s_landing_title'), 
      desc: t('s_landing_desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      )
    },
    { 
      title: t('s_ecom_title'), 
      desc: t('s_ecom_desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      )
    },
    { 
      title: t('s_dev_title'), 
      desc: t('s_dev_desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      )
    },
    { 
      title: t('s_brand_title'), 
      desc: t('s_brand_desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-[#050505] reveal relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">{t('home_serv_eyebrow')}</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white">
              {t('home_serv_title')} <br />
              <span className="text-zinc-600">{t('home_serv_title_span')}</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-lg font-light max-w-md mt-6 md:mt-0 leading-relaxed md:text-right">
            {t('home_serv_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              onClick={onLearnMore}
              className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-500 cursor-pointer"
            >
               <div className="relative bg-[#0A0A0B] h-full rounded-[2rem] p-10 flex flex-col items-start overflow-hidden">
                  
                  {/* Hover Glow Effect inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full translate-x-full -translate-y-full group-hover:translate-x-1/2 group-hover:-translate-y-1/2 transition-transform duration-700 ease-in-out pointer-events-none"></div>

                  <div className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-center text-zinc-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300 shadow-lg relative z-10">
                    {s.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-indigo-100 transition-colors relative z-10">{s.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light mb-8 group-hover:text-zinc-400 transition-colors relative z-10">{s.desc}</p>
                  
                  <div className="mt-auto flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-indigo-400 transition-colors relative z-10">
                    <span>{t('home_serv_btn')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
