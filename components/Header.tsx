
import React from 'react';

interface HeaderProps {
  onNavigatePortfolio: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigatePortfolio }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-2">
        <div 
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => window.location.reload()}
        >
          {/* Logo Imagem - Utilizando a arte enviada pelo usuário */}
          <img 
            src="logo.png" 
            alt="43V3R Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback caso a imagem não seja encontrada localmente
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Textual caso a imagem falhe */}
          <span className="hidden text-xl font-brand font-bold tracking-tighter pt-0.5">43V3R</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <button onClick={onNavigatePortfolio} className="hover:text-white transition-colors">Portfólio</button>
        </div>

        <a 
          href="https://wa.me/5512982025191" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Falar com Consultor
        </a>
      </nav>
    </header>
  );
};

export default Header;
