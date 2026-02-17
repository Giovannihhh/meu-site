
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-40 reveal">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            {t('bento_title')} <br /> 
            <span className="text-zinc-500">{t('bento_title_span')}</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            {t('bento_desc')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[320px]">
        
        {/* Card 1: Stack Tecnológico */}
        <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-500">
          <div className="relative z-20 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Next.js & React</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">{t('bento_card1_title')}</h3>
              <p className="text-zinc-500 text-sm max-w-xs">{t('bento_card1_desc')}</p>
            </div>
          </div>

          {/* Abstract Code Visual */}
          <div className="absolute top-8 right-8 w-[280px] bg-[#0F0F11] rounded-xl border border-white/5 p-4 shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 opacity-80 md:opacity-100">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-indigo-500/20 rounded"></div>
              <div className="h-2 w-1/2 bg-zinc-700/20 rounded pl-4"></div>
              <div className="h-2 w-2/3 bg-purple-500/20 rounded pl-4"></div>
              <div className="h-2 w-full bg-zinc-700/20 rounded"></div>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none"></div>
        </div>

        {/* Card 2: Mobile First */}
        <div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-500 flex flex-col justify-between">
          <div className="relative z-20">
            <h3 className="text-xl font-display font-bold text-white mb-2">{t('bento_card2_title')}</h3>
            <p className="text-zinc-500 text-xs">{t('bento_card2_desc')}</p>
          </div>
          
          {/* Phone Mockup */}
          <div className="absolute bottom-[-20px] right-[-20px] w-32 h-48 bg-[#0F0F11] border-[4px] border-zinc-800 rounded-[1.5rem] transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-500 shadow-2xl">
            <div className="w-full h-full bg-zinc-900 rounded-[1.2rem] overflow-hidden p-2">
              <div className="w-full h-1/2 bg-zinc-800/50 rounded-lg mb-2"></div>
              <div className="flex gap-2">
                <div className="w-1/2 h-16 bg-zinc-800/30 rounded-lg"></div>
                <div className="w-1/2 h-16 bg-zinc-800/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: SEO & Analytics */}
        <div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-gradient-to-b from-zinc-800/40 to-black border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
          
          <div className="mt-auto h-full flex flex-col justify-end relative z-10">
            <div className="mb-4 flex items-end gap-1 h-12">
              <div className="w-2 bg-zinc-700 h-4 rounded-t-sm group-hover:h-6 transition-all duration-300"></div>
              <div className="w-2 bg-zinc-700 h-6 rounded-t-sm group-hover:h-10 transition-all duration-500 delay-75"></div>
              <div className="w-2 bg-zinc-600 h-8 rounded-t-sm group-hover:h-8 transition-all duration-300 delay-100"></div>
              <div className="w-2 bg-white h-10 rounded-t-sm group-hover:h-12 transition-all duration-500 delay-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">{t('bento_card3_title')}</h3>
            <p className="text-zinc-500 text-xs">{t('bento_card3_desc')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BentoGrid;
