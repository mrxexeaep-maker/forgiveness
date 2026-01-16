
import React from 'react';

export const FuturePlan1: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">🍦</div>
      <h2 className="text-4xl font-black text-pink-500">The First Scoop</h2>
      <p className="text-xl text-slate-500 max-w-md">The first thing we do: I'm buying you the biggest ice cream in the city. No questions asked.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">I'll hold you to that</button>
    </div>
  );
};
