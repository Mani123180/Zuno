import React, { useState } from 'react';

export default function WhyZunoSection() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: 'target',
      title: 'Intent-Based Matching',
      desc: 'Match based on clear relationship trajectories. Whether you want deep romance, creative alignment, or intellectual companionship, no one wastes time guessing intentions.',
      badge: 'Intent',
      color: 'pink'
    },
    {
      id: 2,
      icon: 'vital_signs',
      title: 'Mood-Based Resonance',
      desc: 'Update your daily energetic frequency. From introspective deep thoughts to spontaneous weekend wanderlust, find peers in your exact psychological headspace.',
      badge: 'Frequency',
      color: 'cyan'
    },
    {
      id: 3,
      icon: 'mic_double',
      title: 'Voice-First Profiles',
      desc: 'Vibe check before the text check. Experience authentic speech patterns, unvarnished laughter, and natural cadence that still photography can never convey.',
      badge: 'Audio',
      color: 'pink'
    },
    {
      id: 4,
      icon: 'verified_user',
      title: 'Safe & Verified Community',
      desc: 'Proprietary 3D biometric liveness verification guarantees real humans. Completely shielded from bots, syndicates, and deceptive catfishing profiles.',
      badge: 'Security',
      color: 'cyan'
    }
  ];

  return (
    <div className="mt-space-xl pt-12 max-w-7xl mx-auto px-4 sm:px-8" id="why-zuno">
      <div className="flex flex-col items-start text-left">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_6px_rgba(236,72,153,0.6)]"></span>
          <span className="font-label-sm text-label-sm text-cyan-600 tracking-widest uppercase font-bold">
            The Differentiation
          </span>
        </div>

        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight font-extrabold">
          Why Zuno?
        </h2>
        <p className="font-body-md text-slate-600 mt-1 text-base max-w-xl">
          Engineered for real intimacy, not endless superficial swiping loops.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat) => {
          const isSelected = activeFeature === feat.id;
          const isPink = feat.color === 'pink';

          return (
            <div
              key={feat.id}
              onClick={() => setActiveFeature(isSelected ? null : feat.id)}
              className={`p-6 rounded-2xl bg-white border shadow-sm relative overflow-hidden flex flex-col justify-between transition-all cursor-pointer ${
                isSelected
                  ? isPink
                    ? 'border-pink-400 ring-2 ring-pink-100 shadow-md -translate-y-1'
                    : 'border-cyan-400 ring-2 ring-cyan-100 shadow-md -translate-y-1'
                  : isPink
                  ? 'border-slate-200 hover:border-pink-300 hover:-translate-y-0.5'
                  : 'border-slate-200 hover:border-cyan-300 hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                    isPink 
                      ? 'bg-pink-50 border border-pink-200 text-pink-500' 
                      : 'bg-cyan-50 border border-cyan-200 text-cyan-600'
                  }`}>
                    <span className="material-symbols-outlined text-[26px]">{feat.icon}</span>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isPink 
                      ? 'bg-pink-50 text-pink-600 border border-pink-100' 
                      : 'bg-cyan-50 text-cyan-700 border border-cyan-100'
                  }`}>
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
