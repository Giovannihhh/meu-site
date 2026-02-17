
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

declare const gsap: any;

interface CustomizationWizardProps {
  onBack: () => void;
}

const CustomizationWizard: React.FC<CustomizationWizardProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    style: '',
    budget: '',
    name: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Animação de entrada dos cards
    gsap.fromTo(".wizard-card", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [step]);

  const handleSelection = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const finishWizard = () => {
    // Formata a mensagem para o WhatsApp
    const message = `${t('wiz_msg_intro')}%0A%0A*Briefing:*%0A- *Type:* ${formData.type}%0A- *Style:* ${formData.style}%0A- *Budget:* ${formData.budget}%0A- *Name:* ${formData.name}`;
    window.open(`https://wa.me/5512982025191?text=${message}`, '_blank');
  };

  const steps = [
    {
      id: 1,
      question: t('wiz_step1_q'),
      field: "type",
      options: [
        { label: t('wiz_opt_landing'), desc: t('wiz_opt_landing_desc') },
        { label: t('wiz_opt_inst'), desc: t('wiz_opt_inst_desc') },
        { label: t('wiz_opt_ecom'), desc: t('wiz_opt_ecom_desc') },
        { label: t('wiz_opt_sys'), desc: t('wiz_opt_sys_desc') }
      ]
    },
    {
      id: 2,
      question: t('wiz_step2_q'),
      field: "style",
      options: [
        { label: t('wiz_style_min'), desc: t('wiz_style_min_desc') },
        { label: t('wiz_style_lux'), desc: t('wiz_style_lux_desc') },
        { label: t('wiz_style_mod'), desc: t('wiz_style_mod_desc') },
        { label: t('wiz_style_corp'), desc: t('wiz_style_corp_desc') }
      ]
    },
    {
      id: 3,
      question: t('wiz_step3_q'),
      field: "budget",
      options: [
        { label: t('wiz_budget_1'), desc: t('wiz_budget_1_desc') },
        { label: t('wiz_budget_2'), desc: t('wiz_budget_2_desc') },
        { label: t('wiz_budget_3'), desc: t('wiz_budget_3_desc') },
        { label: t('wiz_budget_4'), desc: t('wiz_budget_4_desc') }
      ]
    }
  ];

  const currentStepData = steps.find(s => s.id === step);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <button onClick={onBack} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
          &larr; {t('wiz_cancel')}
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-8 bg-indigo-500' : 'w-2 bg-zinc-800'}`}></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-10">
        <div className="max-w-4xl w-full">
          
          {step < 4 ? (
            <>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 wizard-card">
                {currentStepData?.question}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentStepData?.options.map((opt, idx) => (
                  <button
                    key={idx}
                    // @ts-ignore
                    onClick={() => handleSelection(currentStepData.field, opt.label)}
                    className={`wizard-card text-left p-8 rounded-3xl border transition-all duration-300 group relative overflow-hidden ${
                      // @ts-ignore
                      formData[currentStepData.field] === opt.label 
                        ? 'bg-indigo-600/20 border-indigo-500/50' 
                        : 'bg-zinc-900/40 border-white/5 hover:border-white/20 hover:bg-zinc-800/40'
                    }`}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold mb-2 ${
                        // @ts-ignore
                        formData[currentStepData.field] === opt.label ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}>{opt.label}</h3>
                      <p className="text-sm text-zinc-500 font-medium">{opt.desc}</p>
                    </div>
                    {/* Selection Indicator */}
                    <div className={`absolute top-6 right-6 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center ${
                      // @ts-ignore
                      formData[currentStepData.field] === opt.label ? 'bg-indigo-500 border-indigo-500' : ''
                    }`}>
                      {
                        // @ts-ignore
                        formData[currentStepData.field] === opt.label && <div className="w-2 h-2 bg-white rounded-full" />
                      }
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            // Final Step - Contact Info
            <div className="max-w-xl mx-auto w-full">
               <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-6 wizard-card">
                {t('wiz_step4_q')}
              </h2>
              <p className="text-zinc-400 text-center mb-12 wizard-card">{t('wiz_step4_desc')}</p>
              
              <div className="wizard-card space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">{t('wiz_name_label')}</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t('wiz_name_place')}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 max-w-4xl mx-auto w-full">
             <button 
               onClick={handlePrev}
               disabled={step === 1}
               className={`text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-colors ${
                 step === 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10'
               }`}
             >
               {t('wiz_back')}
             </button>

             <button 
               onClick={step === 4 ? finishWizard : handleNext}
               disabled={step < 4 && !formData[currentStepData!.field as keyof typeof formData]}
               className={`bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-white/10 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed`}
             >
               {step === 4 ? t('wiz_finish') : t('wiz_next')}
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomizationWizard;
