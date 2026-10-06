import React, { useState } from 'react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      title: 'Craft Your Living Canvas',
      desc: 'Answer dynamic emotional prompts and upload your voice answers. Showcase the real eccentricities that make you unique.',
      gradient: 'from-pink-500 to-rose-600',
      shadow: 'shadow-[0_2px_8px_rgba(236,72,153,0.4)]',
      detail: 'Example prompt: "The unwritten rule of my life is..."'
    },
    {
      num: 2,
      title: 'Select Clear Intentions',
      desc: 'Toggle your goal: Slow Romance, Casual Banter, Soul Connection, or Activity Co-creator. No ambiguity or awkward misalignments.',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-[0_2px_8px_rgba(6,182,212,0.4)]',
      detail: 'Zero games. Both sides express exact trajectory upfront.'
    },
    {
      num: 3,
      title: 'Meet Curated Resonances',
      desc: 'Our neural matching engine analyzes conversational pacing and shared principles to present 3 to 5 deeply compatible introductions daily.',
      gradient: 'from-rose-500 to-pink-600',
      shadow: 'shadow-[0_2px_8px_rgba(244,63,94,0.4)]',
      detail: 'Quality over quantity. No infinite scroll burnout.'
    },
    {
      num: 4,
      title: 'Spark Effortless Dialogue',
      desc: 'Never start with a dull “hey”. Tap contextual AI conversation nudges sparked by their exact quirks, answers, and audio clips.',
      gradient: 'from-sky-400 to-cyan-500',
      shadow: 'shadow-[0_2px_8px_rgba(56,189,248,0.4)]',
      detail: 'Natural, flow-state conversations from second one.'
    }
  ];

  return (
    <div className="mt-space-xl pt-12 max-w-7xl mx-auto px-4 sm:px-8 text-left" id="how-it-works">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.6)]"></span>
          <span className="font-label-sm text-label-sm text-pink-600 tracking-widest uppercase font-bold">
            The Process
          </span>
        </div>

        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight font-extrabold">
          How Zuno Works
        </h2>
        <p className="font-body-md text-slate-600 mt-1 text-base max-w-xl">
          4 thoughtful steps leading directly to genuine organic chemistry.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const isActive = activeStep === step.num;

          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              className={`p-6 rounded-2xl bg-white border shadow-sm flex flex-col justify-between cursor-pointer transition-all ${
                isActive 
                  ? 'border-pink-300 ring-2 ring-pink-50 shadow-md -translate-y-1' 
                  : 'border-slate-200 hover:border-slate-300 hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} text-white font-bold flex items-center justify-center text-lg ${step.shadow}`}>
                    {step.num}
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Step {step.num}</span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-pink-600 font-medium">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                <span>{step.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
