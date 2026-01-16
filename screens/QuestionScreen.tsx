
import React from 'react';

interface Props {
  question: string;
  onNext: () => void;
}

export const QuestionScreen: React.FC<Props> = ({ question, onNext }) => {
  return (
    <div className="text-center space-y-12 max-w-2xl">
      <div className="text-7xl floating">❓</div>
      <h2 className="text-4xl font-black text-slate-700 leading-tight">
        {question}
      </h2>
      <div className="flex gap-6 justify-center">
        <button 
          onClick={onNext} 
          className="clay-btn px-12 py-5 bg-green-400 text-white text-2xl font-black"
        >
          Yes
        </button>
        <button 
          onClick={onNext} 
          className="clay-btn px-12 py-5 bg-pink-400 text-white text-2xl font-black"
        >
          Always
        </button>
      </div>
      <p className="text-slate-400 font-medium italic">Your answer means the world to me...</p>
    </div>
  );
};
