
import React from 'react';

export const FuturePlan7: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">💌</div>
      <h2 className="text-4xl font-black text-pink-500">Random Appreciation</h2>
      <p className="text-xl text-slate-500 max-w-md">I'll send you random "I appreciate you" texts because you deserve to be reminded of your worth every single day.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">I'd like that</button>
    </div>
  );
};
