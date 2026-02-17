
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  pt: {
    // Header
    nav_about: "Sobre nós",
    nav_portfolio: "Portfólio",
    cta_talk: "Falar com Consultor",
    
    // Hero
    hero_title_1: "Sua presença digital",
    hero_title_2: "redefinida",
    hero_subtitle: "Entregamos autoridade ao seu negócio através de sites intuitivos e responsivos tecnicamente superiores. Projetados para expandir seu alcance digital.",
    hero_cta_start: "Iniciar Projeto",
    hero_cta_portfolio: "Portfólio",
    hero_scroll: "Scroll",

    // Marquee
    marquee_items: "ENTREGA EM 72 HORAS,DESIGN EXCLUSIVO,SUPORTE 24/7,ALTA PERFORMANCE,SITES PERSONALIZADOS,RESPONSIVIDADE,CONVERSÃO",

    // Bento Grid
    bento_title: "Engenharia digital",
    bento_title_span: "de precisão.",
    bento_desc: "Não usamos construtores de sites genéricos. Desenvolvemos soluções proprietárias focadas em performance, segurança e escalabilidade real.",
    bento_card1_title: "Código Limpo.",
    bento_card1_desc: "Arquitetura moderna que garante carregamento instantâneo e nota máxima no Google.",
    bento_card2_title: "Responsividade em primeiro lugar",
    bento_card2_desc: "Seu site funcional em qualquer tela.",
    bento_card3_title: "SEO Nativo",
    bento_card3_desc: "Otimização semântica para ranqueamento orgânico.",

    // Services (Home Section)
    home_serv_eyebrow: "Nossas Competências",
    home_serv_title: "Soluções digitais",
    home_serv_title_span: "para o futuro.",
    home_serv_desc: "Da concepção à execução, entregamos produtos digitais que definem categorias e elevam padrões de mercado.",
    home_serv_btn: "Detalhes",

    // Portfolio (Home Section)
    home_port_title: "Portfólio",
    home_port_span: "premium",
    home_port_btn: "Explorar Tudo",
    
    // Services Page (Sobre Nós)
    back_home: "Voltar",
    about_title: "Sobre",
    about_highlight: "Nós",
    about_desc: "Conheça nossa metodologia e como transformamos código e design em resultados tangíveis para o seu negócio.",
    service_cta: "Solicitar Orçamento",
    footer_title: "Não encontrou o que procura?",
    footer_desc: "Somos especialistas em resolver problemas complexos. Entre em contato e conte-nos sobre seu desafio.",
    
    // Services Items
    s_landing_title: "Landing Pages de Alta Conversão",
    s_landing_sub: "Performance e Vendas",
    s_landing_desc: "Não criamos apenas páginas bonitas. Desenvolvemos máquinas de venda. Cada elemento é posicionado estrategicamente usando princípios de Neuromarketing e UX Writing.",
    
    s_ecom_title: "E-commerce & Plataformas",
    s_ecom_sub: "Escalabilidade e Segurança",
    s_ecom_desc: "Lojas virtuais robustas projetadas para suportar alto tráfego sem perder performance. Focamos na jornada do cliente e checkout simplificado.",
    
    s_dev_title: "Desenvolvimento Sob Medida",
    s_dev_sub: "Sistemas Web & APIs",
    s_dev_desc: "Quando soluções prontas não resolvem seu problema, nós codificamos a solução. Dashboards, CRMs personalizados e integrações complexas.",
    
    s_brand_title: "Brand Identity Digital",
    s_brand_sub: "Design System & UI",
    s_brand_desc: "Traduzimos a essência da sua marca para o ambiente digital. Criamos sistemas de design consistentes que garantem autoridade.",

    // Portfolio Gallery & Items
    gallery_back: "Voltar ao Início",
    gallery_title: "Galeria de",
    gallery_title_highlight: "Projetos",
    gallery_desc: "Uma curadoria de nossas soluções digitais mais impactantes para empresas que buscam o extraordinário.",
    gallery_all: "Todas",
    gallery_details: "Saiba mais",
    gallery_empty: "Nenhum projeto encontrado nesta categoria.",
    gallery_view_all: "Ver todos os projetos",
    
    // Project Data Descriptions (Generic for translations)
    proj_lumina_desc: "Uma plataforma imersiva para um dos maiores escritórios de arquitetura de luxo do país.",
    proj_apex_desc: "Interface bancária de alta complexidade redesenhada para oferecer simplicidade e segurança.",
    proj_natura_desc: "E-commerce premium com experiência de compra baseada em personalização.",
    proj_vanguard_desc: "Portal imobiliário de luxo focado em propriedades exclusivas e atendimento personalizado.",
    proj_echo_desc: "Landing page para lançamento de hardware de áudio premium com som surround 360.",
    proj_savor_desc: "Experiência digital para restaurante estrelado Michelin, com reservas integradas.",
    proj_atelie_desc: "Website institucional e vitrine virtual para o Ateliê dos Sabores, destacando a confeitaria artesanal com design apetitoso.",

    // Project Page Detail
    pp_back: "Voltar para Início",
    pp_vision: "A Visão do Projeto",
    pp_vision_desc_1: "Nossa abordagem foi centrada em elevar o padrão visual da categoria. Utilizamos as tecnologias mais modernas de desenvolvimento para garantir que cada interação fosse fluida e memorável.",
    pp_services_label: "Serviços",
    pp_timeline_label: "Timeline",
    pp_timeline_val: "8 Dias Úteis",
    pp_cta_title: "Gostou deste resultado?",
    pp_cta_desc: "Podemos criar algo igualmente impactante para sua empresa em menos de uma semana.",
    pp_cta_btn: "Solicitar orçamento agora",
    pp_live_preview: "Testar Site Interativo",
    pp_view_code: "Ver Código Fonte",
    pp_close_preview: "Fechar Preview",
    pp_open_external: "Abrir em nova aba",

    // Footer
    footer_rights: "© Copyright 2026 43V3R. Todos os direitos reservados.",
    footer_privacy: "Privacidade",
    footer_terms: "Termos",

    // Wizard
    wiz_cancel: "Cancelar",
    wiz_step1_q: "Qual o objetivo do seu projeto?",
    wiz_opt_landing: "Landing Page",
    wiz_opt_landing_desc: "Foco em conversão e vendas rápidas.",
    wiz_opt_inst: "Institucional",
    wiz_opt_inst_desc: "Apresentar sua empresa e serviços.",
    wiz_opt_ecom: "E-commerce",
    wiz_opt_ecom_desc: "Venda de produtos online com checkout integrado com WhatsApp.",
    wiz_opt_sys: "Sistema Web",
    wiz_opt_sys_desc: "Funcionalidades complexas sob medida.",

    wiz_step2_q: "Qual estilo visual mais te agrada?",
    wiz_style_min: "Minimalista",
    wiz_style_min_desc: "Limpo, muito espaço em branco, tipografia forte.",
    wiz_style_lux: "Luxo / Premium",
    wiz_style_lux_desc: "Tons escuros, dourado, sofisticado.",
    wiz_style_mod: "Tech / Moderno",
    wiz_style_mod_desc: "Neons, grids, futurista.",
    wiz_style_corp: "Corporativo",
    wiz_style_corp_desc: "Sóbrio, azul marinho, confiável.",

    wiz_step3_q: "Qual sua estimativa de investimento?",
    wiz_budget_1: "Até R$ 800",
    wiz_budget_1_desc: "Projetos iniciais.",
    wiz_budget_2: "R$ 800 - R$ 2.500",
    wiz_budget_2_desc: "Sites personalizados e Landing Page.",
    wiz_budget_3: "R$ 2.000 - R$ 5.000",
    wiz_budget_3_desc: "E-commerces com checkout no WhatsApp.",
    wiz_budget_4: "Acima de R$ 5.000",
    wiz_budget_4_desc: "Sites mais robustos e personalizados.",

    wiz_step4_q: "Quase lá!",
    wiz_step4_desc: "Para finalizarmos, como prefere ser chamado?",
    wiz_name_label: "Seu Nome",
    wiz_name_place: "Digite seu nome",
    wiz_back: "Voltar",
    wiz_next: "Continuar",
    wiz_finish: "Finalizar via WhatsApp",
    wiz_msg_intro: "Olá, gostaria de iniciar um projeto com a 43V3R.",
  },
  en: {
    // Header
    nav_about: "About Us",
    nav_portfolio: "Portfolio",
    cta_talk: "Talk to Expert",

    // Hero
    hero_title_1: "Your digital presence",
    hero_title_2: "redefined",
    hero_subtitle: "We deliver authority to your business through technically superior, intuitive, and responsive websites. Designed to expand your digital reach.",
    hero_cta_start: "Start Project",
    hero_cta_portfolio: "Portfolio",
    hero_scroll: "Scroll",

    // Marquee
    marquee_items: "DELIVERY IN 72 HOURS,EXCLUSIVE DESIGN,24/7 SUPPORT,HIGH PERFORMANCE,CUSTOM WEBSITES,RESPONSIVENESS,CONVERSION",

    // Bento Grid
    bento_title: "Digital engineering",
    bento_title_span: "of precision.",
    bento_desc: "We don't use generic website builders. We develop proprietary solutions focused on performance, security, and real scalability.",
    bento_card1_title: "Clean Code.",
    bento_card1_desc: "Modern architecture ensuring instant loading and top Google scores.",
    bento_card2_title: "Responsiveness first",
    bento_card2_desc: "Your site functional on any screen.",
    bento_card3_title: "Native SEO",
    bento_card3_desc: "Semantic optimization for organic ranking.",

    // Services (Home Section)
    home_serv_eyebrow: "Our Expertise",
    home_serv_title: "Digital solutions",
    home_serv_title_span: "for the future.",
    home_serv_desc: "From conception to execution, we deliver digital products that define categories and raise market standards.",
    home_serv_btn: "Details",

    // Portfolio (Home Section)
    home_port_title: "Portfolio",
    home_port_span: "premium",
    home_port_btn: "Explore All",

    // Services Page (About Us)
    back_home: "Back",
    about_title: "About",
    about_highlight: "Us",
    about_desc: "Discover our methodology and how we transform code and design into tangible results for your business.",
    service_cta: "Request Quote",
    footer_title: "Didn't find what you're looking for?",
    footer_desc: "We are experts in solving complex problems. Get in touch and tell us about your challenge.",

    // Services Items
    s_landing_title: "High Conversion Landing Pages",
    s_landing_sub: "Performance & Sales",
    s_landing_desc: "We don't just create beautiful pages. We develop sales machines. Every element is strategically positioned using Neuromarketing and UX Writing principles.",
    
    s_ecom_title: "E-commerce & Platforms",
    s_ecom_sub: "Scalability & Security",
    s_ecom_desc: "Robust online stores designed to handle high traffic without losing performance. We focus on the customer journey and simplified checkout.",
    
    s_dev_title: "Custom Development",
    s_dev_sub: "Web Systems & APIs",
    s_dev_desc: "When off-the-shelf solutions don't solve your problem, we code the solution. Dashboards, custom CRMs, and complex integrations.",
    
    s_brand_title: "Digital Brand Identity",
    s_brand_sub: "Design System & UI",
    s_brand_desc: "We translate your brand's essence into the digital environment. We create consistent design systems that ensure authority.",

    // Portfolio Gallery & Items
    gallery_back: "Back to Home",
    gallery_title: "Project",
    gallery_title_highlight: "Gallery",
    gallery_desc: "A curation of our most impactful digital solutions for companies seeking the extraordinary.",
    gallery_all: "All",
    gallery_details: "Learn More",
    gallery_empty: "No projects found in this category.",
    gallery_view_all: "View all projects",

    // Project Data Descriptions
    proj_lumina_desc: "An immersive platform for one of the country's largest luxury architecture firms.",
    proj_apex_desc: "High-complexity banking interface redesigned for simplicity and security.",
    proj_natura_desc: "Premium e-commerce with a personalized shopping experience.",
    proj_vanguard_desc: "Luxury real estate portal focused on exclusive properties and personalized service.",
    proj_echo_desc: "Landing page for premium audio hardware launch with 360 surround sound.",
    proj_savor_desc: "Digital experience for Michelin-starred restaurant with integrated reservations.",
    proj_atelie_desc: "Institutional website and virtual showcase for Ateliê dos Sabores, highlighting artisanal confectionery with appetizing design.",

    // Project Page Detail
    pp_back: "Back to Home",
    pp_vision: "Project Vision",
    pp_vision_desc_1: "Our approach was centered on elevating the visual standard of the category. We used the most modern development technologies to ensure every interaction was fluid and memorable.",
    pp_services_label: "Services",
    pp_timeline_label: "Timeline",
    pp_timeline_val: "8 Business Days",
    pp_cta_title: "Like this result?",
    pp_cta_desc: "We can create something equally impactful for your company in less than a week.",
    pp_cta_btn: "Request quote now",
    pp_live_preview: "Try Live Preview",
    pp_view_code: "View Source Code",
    pp_close_preview: "Close Preview",
    pp_open_external: "Open New Tab",

    // Footer
    footer_rights: "© Copyright 2026 43V3R. All rights reserved.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",

    // Wizard
    wiz_cancel: "Cancel",
    wiz_step1_q: "What is your project goal?",
    wiz_opt_landing: "Landing Page",
    wiz_opt_landing_desc: "Focus on conversion and quick sales.",
    wiz_opt_inst: "Institutional",
    wiz_opt_inst_desc: "Present your company and services.",
    wiz_opt_ecom: "E-commerce",
    wiz_opt_ecom_desc: "Online product sales with checkout.",
    wiz_opt_sys: "Web System",
    wiz_opt_sys_desc: "Complex custom functionalities.",

    wiz_step2_q: "Which visual style do you prefer?",
    wiz_style_min: "Minimalist",
    wiz_style_min_desc: "Clean, lots of whitespace, strong typography.",
    wiz_style_lux: "Luxury / Premium",
    wiz_style_lux_desc: "Dark tones, gold, sophisticated.",
    wiz_style_mod: "Tech / Modern",
    wiz_style_mod_desc: "Neons, grids, futuristic.",
    wiz_style_corp: "Corporate",
    wiz_style_corp_desc: "Sober, navy blue, reliable.",

    wiz_step3_q: "What is your estimated budget?",
    wiz_budget_1: "Up to $500",
    wiz_budget_1_desc: "Initial projects and landing pages.",
    wiz_budget_2: "$500 - $1,500",
    wiz_budget_2_desc: "Complete and customized websites.",
    wiz_budget_3: "$1,500 - $3,000",
    wiz_budget_3_desc: "E-commerce and high complexity.",
    wiz_budget_4: "Above $3,000",
    wiz_budget_4_desc: "Robust digital ecosystems.",

    wiz_step4_q: "Almost there!",
    wiz_step4_desc: "To finish, how should we call you?",
    wiz_name_label: "Your Name",
    wiz_name_place: "Enter your name",
    wiz_back: "Back",
    wiz_next: "Continue",
    wiz_finish: "Finish via WhatsApp",
    wiz_msg_intro: "Hello, I would like to start a project with 43V3R.",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
