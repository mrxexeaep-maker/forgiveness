
import React from 'react';

export const FuturePlan8: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">💎</div>
      <h2 className="text-4xl font-black text-pink-500">Unbreakable</h2>
      <p className="text-xl text-slate-500 max-w-md">I've learned my lesson. I will never risk losing you again. You are my most precious person.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">One last step...</button>
    </div>
  );
};
