
import React from 'react';

export const FuturePlan2: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">👂</div>
      <h2 className="text-4xl font-black text-pink-500">I Will Listen Better</h2>
      <p className="text-xl text-slate-500 max-w-md">From now on, I am your #1 listener. Your vent sessions, your dreams, your bad days—I'm all ears.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">Pinky Promise?</button>
    </div>
  );
};
