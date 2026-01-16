
import React from 'react';

export const WelcomeScreen: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center space-y-10">
      <div className="text-8xl floating drop-shadow-lg">💝</div>
      <h1 className="text-5xl font-black text-[#ff6b81] tracking-tight">For My Bestie</h1>
      <p className="text-xl text-gray-500 max-w-md font-medium leading-relaxed">
        I've built 20 levels of fun and memories just to say I'm sorry. 
        Will you play through them with me?
      </p>
      <button 
        onClick={onNext}
        className="clay-btn px-12 py-5 text-white text-2xl font-black"
      >
        START JOURNEY
      </button>
    </div>
  );
};
