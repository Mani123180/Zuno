import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function WaitlistModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [step, setStep] = useState(1); // 1: Form, 2: Success VIP Ticket

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    intent: 'Slow Romance',
    city: 'New York'
  });

  const [vipCode, setVipCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) return;

    // Generate VIP access pass code
    const randomCode = 'ZUNO-VIP-' + Math.floor(1000 + Math.random() * 9000);
    setVipCode(randomCode);
    setStep(2);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti err', err);
    }
  };

  const copyReferral = () => {
    navigator.clipboard.writeText(`https://zuno.ai/invite/${vipCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-pink-100 p-6 overflow-hidden max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Ambient Glows */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-pink-200/50 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-cyan-200/50 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {step === 1 ? (
          <div>
            {/* Header & Mode Switcher */}
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-pink-500 text-[24px]">auto_awesome</span>
              <span className="font-headline-sm text-slate-900 font-bold text-xl">
                {mode === 'signin' ? 'Sign In to Zuno' : 'Join Zuno Community'}
              </span>
            </div>
            
            <p className="font-body-sm text-slate-600 text-xs mb-4">
              {mode === 'signin' 
                ? 'Welcome back! Enter your credentials to access your Zuno profile.' 
                : 'Create your account to unlock voice matching and neural chemistry.'}
            </p>

            {/* Mode Tab Pills */}
            <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 mb-5">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 py-1.5 text-xs rounded-full font-bold transition-all cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-white text-pink-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-1.5 text-xs rounded-full font-bold transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-xs sm:text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-xs sm:text-sm"
                />
              </div>

              {mode === 'signup' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary Intent</label>
                    <select
                      value={formData.intent}
                      onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-xs sm:text-sm bg-white"
                    >
                      <option value="Slow Romance">Slow Romance (Deep connection)</option>
                      <option value="Deep Talks">Deep Talks & Intellectual Sparks</option>
                      <option value="Casual Banter">Casual Banter & Vibe Check</option>
                      <option value="Activity Co-creator">Activity & Wanderlust Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. New York, NY"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-xs sm:text-sm"
                    />
                  </div>
                </>
              )}

              {mode === 'signin' && (
                <div className="flex items-center justify-between text-xs text-slate-600 my-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-pink-500 rounded" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="text-pink-600 hover:underline font-medium">Forgot password?</button>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 w-full h-11 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-[0_6px_22px_rgba(244,63,94,0.35)] hover:shadow-[0_8px_28px_rgba(6,182,212,0.45)] transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>{mode === 'signin' ? 'Sign In to Zuno' : 'Create Account & Join'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

            </form>

            {/* Bottom Toggle Link */}
            <div className="mt-4 pt-3 border-t border-slate-100 text-center text-xs text-slate-600">
              {mode === 'signin' ? (
                <p>
                  Don't have an account yet?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="font-bold text-pink-600 hover:underline cursor-pointer"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="font-bold text-pink-600 hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-2 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-pink-50 border border-pink-200 text-pink-500 flex items-center justify-center mb-4 shadow-sm animate-bounce">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>

            <h3 className="font-headline-sm text-slate-900 font-bold text-xl">
              Welcome to Zuno, {formData.name || 'Member'}!
            </h3>
            <p className="font-body-sm text-slate-600 mt-1 mb-6 text-sm max-w-xs">
              {mode === 'signin' 
                ? 'Your session has been authenticated successfully.' 
                : `Your account is active. You are #${Math.floor(100 + Math.random() * 800)} in line for ${formData.city}.`}
            </p>

            {/* VIP Pass Badge Card */}
            <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 rounded-xl shadow-xl text-left border border-slate-700 relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-pink-400">Zuno Member Access Pass</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 rounded-full font-mono">AUTHENTICATED</span>
              </div>

              <div className="font-mono text-xl font-bold tracking-wider text-pink-300 mb-2">
                {vipCode}
              </div>

              <div className="flex justify-between items-end text-xs text-slate-300 border-t border-slate-700/80 pt-2">
                <div>
                  <div className="text-[10px] text-slate-400">MEMBER</div>
                  <div className="font-semibold">{formData.name || formData.email || 'Zuno User'}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">STATUS</div>
                  <div className="font-semibold text-emerald-400">Active</div>
                </div>
              </div>
            </div>

            {/* Share Referral */}
            <div className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between text-xs mb-4">
              <span className="font-mono text-slate-600 truncate mr-2">zuno.ai/invite/{vipCode}</span>
              <button
                onClick={copyReferral}
                className="px-3 py-1.5 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors shrink-0 cursor-pointer"
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              Continue to Zuno
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
