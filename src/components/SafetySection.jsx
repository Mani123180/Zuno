import React from 'react';

export default function SafetySection() {
  return (
    <div className="mt-space-xl pt-12 max-w-7xl mx-auto px-4 sm:px-8 text-left" id="safety">
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-cyan-200/80 shadow-[0_8px_30px_rgba(6,182,212,0.08)] relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-pink-500 text-[22px]">shield</span>
          <span className="font-label-sm text-label-sm text-pink-600 tracking-widest uppercase font-bold">
            Safe & Sovereign
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight font-extrabold">
          Safety Without Compromise
        </h2>
        <p className="mt-1 text-slate-600 text-sm sm:text-base max-w-2xl">
          We treat personal peace of mind as the prerequisite for genuine vulnerability.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="flex flex-col items-start gap-3 p-5 rounded-xl bg-slate-50/80 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px] text-pink-500">
                face_retouching_natural
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-slate-900 font-bold mb-1">
                100% Liveness Checked
              </span>
              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Encrypted biometric verification seals your profile with the authentic Zuno Violet Ring.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 p-5 rounded-xl bg-slate-50/80 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px] text-cyan-600">
                sentiment_satisfied
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-slate-900 font-bold mb-1">
                Respect & Boundary Guard
              </span>
              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our privacy-preserving NLP intercepts uninvited hostility or invasive behavior instantly.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 p-5 rounded-xl bg-slate-50/80 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px] text-sky-600">
                visibility_off
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-slate-900 font-bold mb-1">
                Incognito Stealth Controls
              </span>
              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Browse anonymously, block entire phone contact books, and hide your status on demand.
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
