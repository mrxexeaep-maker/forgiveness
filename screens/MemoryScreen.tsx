
import React from 'react';

interface Props {
  imageId: string;
  text: string;
  onNext: () => void;
}

export const MemoryScreen: React.FC<Props> = ({ text, onNext }) => {
  return (
    <div className="text-center space-y-10 max-w-lg">
      <div className="w-48 h-48 mx-auto clay-card flex items-center justify-center text-8xl floating shadow-inner">
        📸
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-slate-700 leading-snug italic">"{text}"</h3>
        <p className="text-slate-400 font-medium">Those moments are etched in my heart forever.</p>
      </div>
      <div className="pt-4">
        <button 
          onClick={onNext} 
          className="clay-btn px-12 py-4 text-white font-black text-xl"
        >
          Cherish & Continue
        </button>
      </div>
    </div>
  );
};
