
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex items-center">
            <img 
              src="logo.png" 
              alt="43V3R Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium border-t border-white/5 pt-12">
          <p>© Copyright 2026 43V3R. Todos os direitos reservados.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
