
import React from 'react';

export const FuturePlan6: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl">📸</div>
      <h2 className="text-4xl font-black text-pink-500">1000 New Memories</h2>
      <p className="text-xl text-slate-500 max-w-md">We are going to take so many pictures that we run out of storage. Every happy moment captured.</p>
      <button onClick={onNext} className="clay-btn px-8 py-4 text-white font-bold">Smile!</button>
    </div>
  );
};
