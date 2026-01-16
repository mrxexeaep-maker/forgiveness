
import React, { useState } from 'react';

export const FinalChoice: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [noPos, setNoPos] = useState<{ top: string | number; left: string | number; position: 'static' | 'absolute' }>({ top: 'auto', left: 'auto', position: 'static' });
  const [msg, setMsg] = useState("Forgive me for everything? 🥺");

  const teleportNo = () => {
    const t = Math.floor(Math.random() * 60) + 20;
    const l = Math.floor(Math.random() * 60) + 20;
    setNoPos({ top: `${t}%`, left: `${l}%`, position: 'absolute' });
    setMsg("Error: 'No' is not an option! Try 'Yes'! 😂");
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center space-y-16 min-h-[500px]">
      <div className="text-center z-10">
        <div className="text-9xl floating mb-8 drop-shadow-2xl">💖</div>
        <h1 className="text-5xl font-black text-pink-600 mb-4 transition-all duration-300">{msg}</h1>
      </div>

      <div className="flex gap-12 items-center justify-center w-full min-h-[150px]">
        <button 
          onClick={onNext}
          className="clay-btn px-24 py-10 bg-green-400 text-white text-5xl font-black z-20"
        >
          YES!
        </button>

        <button 
          onMouseEnter={teleportNo}
          onClick={teleportNo}
          style={{ 
            position: noPos.position, 
            top: noPos.top, 
            left: noPos.left,
            transition: 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          className="px-10 py-4 bg-slate-200 text-slate-500 text-xl font-bold rounded-full opacity-60 cursor-not-allowed whitespace-nowrap"
        >
          No
        </button>
      </div>
      
      {noPos.position === 'absolute' && (
        <p className="text-pink-400 font-black animate-pulse text-lg uppercase tracking-widest absolute bottom-4">
          Friendship rule: You must click Yes!
        </p>
      )}
    </div>
  );
};
