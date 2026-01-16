
import React, { useEffect, useState } from 'react';

export const SorryWall: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount(prev => Math.min(prev + 50, 10000));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-h-[500px] overflow-y-auto p-4 bg-pink-50 rounded-xl relative group">
      <div className="sticky top-0 bg-pink-50/90 py-4 z-10 text-center">
        <h2 className="text-2xl font-bold text-pink-600">I am so, so, so sorry... ({visibleCount}/10000)</h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-center opacity-40">
        {[...Array(visibleCount)].map((_, i) => (
          <span key={i} className="text-xs text-pink-300">SORRY</span>
        ))}
      </div>
      {visibleCount >= 10000 && (
        <div className="sticky bottom-4 left-0 right-0 flex justify-center py-8">
            <button 
              onClick={onNext}
              className="px-12 py-4 bg-pink-600 text-white rounded-full shadow-2xl animate-bounce font-bold text-xl"
            >
              I read them all. Forgive me?
            </button>
        </div>
      )}
    </div>
  );
};
