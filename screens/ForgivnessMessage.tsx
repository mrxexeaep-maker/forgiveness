
import React from 'react';

export const ForgivenessMessage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const generateLongApology = () => {
    const base = "My dearest friend, I am writing this from the deepest part of my heart. I know I messed up. I know I was abusive and hurtful, and there is no excuse for my behavior. You deserved kindness, patience, and respect, and I failed to give you those things. Looking back, I feel sick thinking about how I treated the one person who was always there for me. I miss our friendship more than anything in this world. I have spent every day thinking about how to make it up to you. I've been working on myself, trying to understand why I acted that way so I never, ever do it again. You are irreplaceable. Your laugh, your wisdom, your simple presence - I lost a treasure because of my own ego. Please, give me one chance to show you I can be the friend you deserve. I will spend the rest of my life making it up to you. I love you so much, and I am endlessly sorry. ";
    return base.repeat(15).substring(0, 10000);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold text-pink-600 underline">A Letter For You</h2>
      <div className="w-full h-80 overflow-y-scroll bg-white p-6 rounded-xl border border-pink-100 shadow-inner text-gray-700 leading-relaxed text-lg italic">
        {generateLongApology()}
      </div>
      <button onClick={onNext} className="bg-pink-500 text-white px-12 py-4 rounded-full hover:bg-pink-600 transition-colors shadow-lg font-bold">
        I've read your heart
      </button>
    </div>
  );
};
