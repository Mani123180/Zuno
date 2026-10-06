import React from 'react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    {
      id: 'landing-page',
      label: 'Discover',
      icon: 'auto_awesome',
      activeColor: 'text-pink-500',
      activeShadow: 'drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)]'
    },
    {
      id: 'features',
      label: 'AI Match',
      icon: 'psychology',
      activeColor: 'text-cyan-600',
      activeShadow: 'drop-shadow-[0_2px_8px_rgba(6,182,212,0.3)]'
    },
    {
      id: 'encounters',
      label: 'Sparks',
      icon: 'local_fire_department',
      activeColor: 'text-rose-500',
      activeShadow: 'drop-shadow-[0_2px_8px_rgba(244,63,94,0.3)]'
    },
    {
      id: 'membership',
      label: 'Membership',
      icon: 'verified',
      activeColor: 'text-pink-600',
      activeShadow: 'drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)]'
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-white/90 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-2px_16px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-20 px-space-sm max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-space-xs min-w-[56px] h-14 transition-all ${
                isActive
                  ? `${item.activeColor} font-bold scale-105`
                  : 'text-slate-500 hover:text-cyan-600 font-medium'
              }`}
            >
              <span className={`material-symbols-outlined text-[24px] ${isActive ? item.activeShadow : ''}`}>
                {item.icon}
              </span>
              <span className="font-label-sm text-label-sm">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
