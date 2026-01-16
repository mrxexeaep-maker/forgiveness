
import React from 'react';

interface Props {
  imageId: string;
  text: string;
  onNext: () => void;
}

export const MemoryScreen: React.FC<Props> = ({ text, onNext }) => {
  return (
    <div className="text-center space-y-10 max-w-lg">
      <div className="w-40 h-40 mx-auto clay-card flex items-center justify-center text-6xl floating">
        ✨
      </div>
      <h3 className="text-3xl font-bold text-slate-700 leading-snug italic">"{text}"</h3>
      <div className="pt-4">
        <button 
          onClick={onNext} 
          className="clay-btn px-10 py-3 text-white font-bold"
        >
          Cherish & Continue
        </button>
      </div>
    </div>
  );
};
