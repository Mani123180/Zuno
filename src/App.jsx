import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HeroSection from './components/HeroSection';
import WhyZunoSection from './components/WhyZunoSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import AiExperienceSection from './components/AiExperienceSection';
import SafetySection from './components/SafetySection';
import VelvetMembershipSection from './components/VelvetMembershipSection';
import WaitlistModal from './components/WaitlistModal';
import SparksTab from './components/SparksTab';
import AiMatchTab from './components/AiMatchTab';
import MembershipTab from './components/MembershipTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing-page');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Sync hash routing if user clicks external links or back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['landing-page', 'features', 'encounters', 'membership'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#F8FAFC] font-body-md text-slate-800 antialiased selection:bg-pink-500 selection:text-white min-h-screen">
      {/* Fixed Top Header */}
      <Header 
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main View Area */}
      <main className="flex flex-col relative w-full pt-16 pb-24 md:pb-12 bg-[#F8FAFC] min-h-screen">
        <div className="flex flex-col w-full overflow-hidden">
          
          {/* Ambient Background Blur Elements */}
          <div className="relative w-full pb-space-xl">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/25 blur-[120px] pointer-events-none rounded-full"></div>
            <div className="absolute top-80 -right-24 w-96 h-96 bg-cyan-300/25 blur-[110px] pointer-events-none rounded-full"></div>
            <div className="absolute top-[680px] -left-20 w-96 h-96 bg-blue-200/35 blur-[110px] pointer-events-none rounded-full"></div>

            {/* TAB CONTENT: DISCOVER / LANDING PAGE */}
            {activeTab === 'landing-page' && (
              <>
                <HeroSection 
                  onOpenWaitlist={() => setIsWaitlistOpen(true)}
                  onExplore={() => {
                    const el = document.getElementById('features');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                <WhyZunoSection />

                <FeaturesSection />

                <HowItWorksSection />

                <AiExperienceSection />

                <SafetySection />

                <VelvetMembershipSection 
                  onOpenWaitlist={() => setIsWaitlistOpen(true)} 
                />

                {/* FINAL HIGH-IMPACT CTA */}
                <div className="mt-space-xl pt-12 max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center" id="join-waitlist">
                  <div className="w-full rounded-2xl bg-white border border-cyan-200 p-8 sm:p-12 shadow-[0_12px_40px_rgba(6,182,212,0.12)] relative overflow-hidden flex flex-col items-center">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-40 bg-pink-100/60 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="w-16 h-16 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-500 mb-4 shadow-sm relative z-10">
                      <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        favorite
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight max-w-xl relative z-10">
                      Your next genuine connection is closer than you think.
                    </h2>
                    
                    <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-lg relative z-10">
                      Join thousands of mindful singles saying goodbye to ghosting, game-playing, and superficial fatigue.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
                      <button
                        onClick={() => setIsWaitlistOpen(true)}
                        className="h-12 px-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white text-base font-semibold shadow-[0_6px_24px_rgba(244,63,94,0.35)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.45)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Join Early Access</span>
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                      </button>
                    </div>

                    {/* App Store Badges Mockup */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-slate-700 text-xs sm:text-sm relative z-10">
                      <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-slate-200 font-medium">
                        <span className="material-symbols-outlined text-[18px] text-slate-800">phone_iphone</span>
                        <span>iOS App Store</span>
                      </div>
                      <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-slate-200 font-medium">
                        <span className="material-symbols-outlined text-[18px] text-slate-800">android</span>
                        <span>Google Play</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Footer */}
                <div className="mt-space-xl pb-space-sm flex flex-col items-center text-center gap-4 max-w-7xl mx-auto px-4 sm:px-8">
                  <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined text-[20px] text-cyan-600">lock</span>
                    <span>Zero ads. Zero sale of behavioral data. Guaranteed.</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <a className="hover:text-cyan-600 transition-colors" href="#">Privacy Charter</a>
                    <a className="hover:text-cyan-600 transition-colors" href="#">Terms of Service</a>
                    <a className="hover:text-cyan-600 transition-colors" href="#">Safety Pledge</a>
                    <a className="hover:text-cyan-600 transition-colors" href="#">Community Ethos</a>
                  </div>
                  <span className="text-xs text-slate-800 font-bold mt-1">
                    © 2026 Zen4Tech Solution. All rights reserved.
                  </span>
                </div>
              </>
            )}

            {/* TAB CONTENT: AI MATCH */}
            {activeTab === 'features' && (
              <AiMatchTab onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            )}

            {/* TAB CONTENT: SPARKS */}
            {activeTab === 'encounters' && (
              <SparksTab onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            )}

            {/* TAB CONTENT: MEMBERSHIP */}
            {activeTab === 'membership' && (
              <MembershipTab onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            )}

          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation Bar (Mobile only) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Join Waitlist / VIP Access Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
