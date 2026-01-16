
import React, { useState } from 'react';

export const FinalChoice: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [noPos, setNoPos] = useState({ top: 'auto', left: 'auto' });
  const [msg, setMsg] = useState("Forgive me for everything? 🥺");

  const teleportNo = () => {
    const t = Math.floor(Math.random() * 70) + 15;
    const l = Math.floor(Math.random() * 70) + 15;
    setNoPos({ top: `${t}%`, left: `${l}%` });
    setMsg("Error: 'No' is disconnected! Try 'Yes'! 😂");
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center space-y-16">
      <div className="text-center">
        <div className="text-9xl floating mb-8">💖</div>
        <h1 className="text-5xl font-black text-pink-600 mb-4">{msg}</h1>
      </div>

      <div className="flex gap-12 items-center justify-center w-full min-h-[150px] relative">
        <button 
          onClick={onNext}
          className="clay-btn px-24 py-10 bg-green-400 text-white text-5xl font-black"
        >
          YES!
        </button>

        <button 
          onMouseEnter={teleportNo}
          onClick={teleportNo}
          style={{ 
            position: noPos.top === 'auto' ? 'static' : 'absolute', 
            top: noPos.top, 
            left: noPos.left,
            transition: 'all 0.1s ease'
          }}
          className="px-10 py-4 bg-slate-300 text-white text-xl font-bold rounded-full opacity-50 cursor-not-allowed"
        >
          No
        </button>
      </div>
      
      {noPos.top !== 'auto' && (
        <p className="text-pink-400 font-black animate-pulse text-lg uppercase tracking-widest">
          Button locked: Must click Yes to proceed
        </p>
      )}
    </div>
  );
};
