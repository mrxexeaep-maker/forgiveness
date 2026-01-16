
import React from 'react';

export const StartingOverScreen: React.FC = () => {
  return (
    <div className="text-center space-y-12 animate-in fade-in duration-1000">
      <div className="text-9xl floating">🌱</div>
      <h1 className="text-5xl font-black text-pink-600 uppercase tracking-tighter">A New Beginning</h1>
      <p className="text-2xl text-slate-500 max-w-lg mx-auto font-medium">
        Thank you for your forgiveness. It's the greatest gift I could ask for. 
        I don't expect things to be perfect overnight, but I promise to prove my respect 
        and kindness every single day from now on.
      </p>
      <div className="clay-card p-4 inline-block px-10 border-2 border-green-200">
        <p className="text-green-500 font-black tracking-widest uppercase">One day at a time. With Respect.</p>
      </div>
    </div>
  );
};
