
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigatePortfolio: () => void;
  onNavigateServices?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigatePortfolio, onNavigateServices }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3 min-h-[70px]">
        {/* Lado Esquerdo - Logo */}
        <div className="flex-1 flex justify-start z-20 pointer-events-none">
          <div className="flex items-center pointer-events-auto select-none">
            {/* Logo Imagem - Utilizando a arte enviada pelo usuário */}
            <img 
              src="logo.png" 
              alt="43V3R Logo" 
              className="h-8 md:h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback caso a imagem não seja encontrada localmente
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Textual caso a imagem falhe */}
            <span className="hidden text-xl font-brand font-bold tracking-tighter pt-0.5 text-white">43V3R</span>
          </div>
        </div>
        
        {/* Centro - Menu de Navegação (Absoluto para garantir centralização perfeita) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 text-sm font-medium tracking-wide text-zinc-400 z-10">
          <button onClick={onNavigateServices} className="hover:text-white transition-colors duration-300">{t('nav_about')}</button>
          <button onClick={onNavigatePortfolio} className="hover:text-white transition-colors duration-300">{t('nav_portfolio')}</button>
        </div>

        {/* Lado Direito - CTA e Idioma */}
        <div className="flex-1 flex justify-end z-20 pointer-events-none items-center gap-4">
          <div className="pointer-events-auto flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors w-8 text-center"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            
            <a 
              href="https://wa.me/5512982025191" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-zinc-200 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] whitespace-nowrap hidden sm:block"
            >
              {t('cta_talk')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
