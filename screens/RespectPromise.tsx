
import React from 'react';

export const RespectPromise: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl floating">👑</div>
      <h2 className="text-4xl font-black text-pink-500">I Promise Respect</h2>
      <div className="clay-card p-8 bg-pink-50/50 border-pink-200 border-2">
        <p className="text-xl text-slate-700 font-medium leading-relaxed">
          I will always respect you, and I will always respect women. 
          I have learned that kindness and honor are the most important things. 
          I will never raise my voice or be abusive again. 
          You are a queen, and I will treat you with the dignity you deserve.
        </p>
      </div>
      <button onClick={onNext} className="clay-btn px-10 py-4 text-white font-black text-xl">
        I believe you can change
      </button>
    </div>
  );
};
