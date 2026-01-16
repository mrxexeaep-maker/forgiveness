
import React, { useEffect } from 'react';

export const CelebrationScreen: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-8 animate-in zoom-in duration-1000">
      <div className="flex justify-center gap-4 text-6xl">
        <span className="floating" style={{ animationDelay: '0s' }}>🎈</span>
        <span className="floating" style={{ animationDelay: '0.2s' }}>🎉</span>
        <span className="floating" style={{ animationDelay: '0.4s' }}>🎊</span>
        <span className="floating" style={{ animationDelay: '0.6s' }}>🎈</span>
      </div>
      <h1 className="text-6xl font-black text-pink-500">THANK YOU!!</h1>
      <p className="text-2xl text-slate-600 font-bold">You just made me the happiest person alive!</p>
      <div className="clay-card p-6 bg-green-50 text-green-600 font-bold">
        Friendship Status: RESTORED & BETTER THAN EVER
      </div>
      <button onClick={onNext} className="clay-btn px-12 py-4 text-white font-black text-xl">
        Let's See Our Future
      </button>
    </div>
  );
};
