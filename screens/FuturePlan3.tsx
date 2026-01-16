
import React from 'react';

export const FuturePlan3: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">🍿</div>
      <h2 className="text-4xl font-black text-pink-500">Unlimited Movie Nights</h2>
      <p className="text-xl text-slate-500 max-w-md">I'll watch all those movies you love that I used to complain about. Even the boring ones!</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">Deal!</button>
    </div>
  );
};
