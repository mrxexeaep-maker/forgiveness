
import React from 'react';

export const FuturePlan4: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">🛡️</div>
      <h2 className="text-4xl font-black text-pink-500">Your Protector</h2>
      <p className="text-xl text-slate-500 max-w-md">I will never let anyone treat you the way I did. I will stand up for you against the whole world.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">I appreciate that</button>
    </div>
  );
};
