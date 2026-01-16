
import React from 'react';

export const FuturePlan5: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">🚀</div>
      <h2 className="text-4xl font-black text-pink-500">To New Heights</h2>
      <p className="text-xl text-slate-500 max-w-md">Let's start a new hobby together. Something neither of us has ever tried before.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">Let's do it</button>
    </div>
  );
};
