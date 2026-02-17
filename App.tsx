
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import PortfolioGallery from './components/PortfolioGallery';
import CustomizationWizard from './components/CustomizationWizard';
import ServicesPage from './components/ServicesPage';
import { LanguageProvider } from './contexts/LanguageContext';

// Register GSAP plugins
declare const gsap: any;
declare const ScrollTrigger: any;

export interface Project {
  title: string;
  category: string;
  img: string;
  description: string;
  previewUrl?: string; // URL para o site ao vivo (iframe)
  repoUrl?: string;    // URL para o repositório de código
}

const AppContent: React.FC = () => {
  const [view, setView] = useState<'home' | 'gallery' | 'project' | 'customization' | 'services'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (view === 'home') {
      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    } else {
       // Reset scroll position for new views
       window.scrollTo(0, 0);
    }
  }, [view]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleGoToGallery = () => {
    setView('gallery');
    setSelectedProject(null);
  };

  const handleGoToServices = () => {
    setView('services');
    setSelectedProject(null);
  };

  const handleStartProject = () => {
    setView('customization');
    setSelectedProject(null);
  }

  const handleBackToHome = () => {
    setView('home');
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-[#050505] text-white">
      {view === 'home' && (
        <>
          <Header onNavigatePortfolio={handleGoToGallery} onNavigateServices={handleGoToServices} />
          <main>
            <Hero onNavigatePortfolio={handleGoToGallery} onStartProject={handleStartProject} />
            <Marquee />
            <section id="diferenciais">
               <BentoGrid />
            </section>
            <section id="servicos">
              <Services onLearnMore={handleGoToServices} />
            </section>
            <section id="portfolio">
              <Portfolio onProjectClick={handleProjectClick} onSeeAll={handleGoToGallery} />
            </section>
          </main>
          <Footer />
        </>
      )}
      
      {view === 'gallery' && (
        <PortfolioGallery onProjectClick={handleProjectClick} onBack={handleBackToHome} />
      )}

      {view === 'project' && (
        <ProjectPage 
          project={selectedProject!} 
          onBack={() => setView('gallery')} 
          onStartProject={handleStartProject}
        />
      )}

      {view === 'customization' && (
        <CustomizationWizard onBack={handleBackToHome} />
      )}

      {view === 'services' && (
        <ServicesPage onBack={handleBackToHome} onStartProject={handleStartProject} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
