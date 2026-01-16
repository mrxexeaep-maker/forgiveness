
import React, { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { MemoryScreen } from './screens/MemoryScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ForgivenessMessage } from './screens/ForgivnessMessage';
import { FinalChoice } from './screens/FinalChoice';
import { SorryWall } from './screens/SorryWall';
import { CelebrationScreen } from './screens/CelebrationScreen';
import { FuturePlan1 } from './screens/FuturePlan1';
import { FuturePlan2 } from './screens/FuturePlan2';
import { RespectPromise } from './screens/RespectPromise';
import { FuturePlan3 } from './screens/FuturePlan3';
import { FuturePlan4 } from './screens/FuturePlan4';
import { FuturePlan5 } from './screens/FuturePlan5';
import { FuturePlan6 } from './screens/FuturePlan6';
import { FuturePlan7 } from './screens/FuturePlan7';
import { FuturePlan8 } from './screens/FuturePlan8';
import { StartingOverScreen } from './screens/StartingOverScreen';

const TOTAL_STAGES = 30;

const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const nextStage = () => {
    setCurrentStage(prev => Math.min(prev + 1, TOTAL_STAGES - 1));
  };

  const renderStage = () => {
    switch (currentStage) {
      case 0: return <WelcomeScreen onNext={nextStage} />;
      case 1: return <QuestionScreen question="Will you listen to what I have to say?" onNext={nextStage} />;
      case 2: return <MemoryScreen imageId="m1" text="Remembering our first big laugh together..." onNext={nextStage} />;
      case 3: return <QuestionScreen question="Do you believe people can truly change for the better?" onNext={nextStage} />;
      case 4: return <QuestionScreen question="Will you give me a chance to show my growth?" onNext={nextStage} />;
      case 5: return <MemoryScreen imageId="m2" text="That time we shared our deepest secrets." onNext={nextStage} />;
      case 6: return <QuestionScreen question="Is our bond worth one more try?" onNext={nextStage} />;
      case 7: return <QuestionScreen question="Will you let me prove my respect for you?" onNext={nextStage} />;
      case 8: return <MemoryScreen imageId="m3" text="You always believed in me when I didn't." onNext={nextStage} />;
      case 9: return <QuestionScreen question="Can we work towards a healthier connection?" onNext={nextStage} />;
      case 10: return <QuestionScreen question="Can you see the effort I'm making for us?" onNext={nextStage} />;
      case 11: return <MemoryScreen imageId="m4" text="I was wrong to take your kindness for granted." onNext={nextStage} />;
      case 12: return <QuestionScreen question="Will you allow me to make things right?" onNext={nextStage} />;
      case 13: return <QuestionScreen question="Do you remember the values we once shared?" onNext={nextStage} />;
      case 14: return <MemoryScreen imageId="m5" text="I promise to be the friend you always deserved." onNext={nextStage} />;
      case 15: return <QuestionScreen question="Is there still a small spark of hope for us?" onNext={nextStage} />;
      case 16: return <QuestionScreen question="Can we leave the pain in the past?" onNext={nextStage} />;
      case 17: return <SorryWall onNext={nextStage} />;
      case 18: return <ForgivenessMessage onNext={nextStage} />;
      case 19: return <FinalChoice onNext={nextStage} />;
      
      case 20: return <CelebrationScreen onNext={nextStage} />;
      case 21: return <FuturePlan1 onNext={nextStage} />;
      case 22: return <FuturePlan2 onNext={nextStage} />;
      case 23: return <RespectPromise onNext={nextStage} />;
      case 24: return <FuturePlan3 onNext={nextStage} />;
      case 25: return <FuturePlan4 onNext={nextStage} />;
      case 26: return <FuturePlan5 onNext={nextStage} />;
      case 27: return <FuturePlan6 onNext={nextStage} />;
      case 28: return <FuturePlan7 onNext={nextStage} />;
      case 29: return <FuturePlan8 onNext={nextStage} />;
      case 30: return <StartingOverScreen />;
      default: return <WelcomeScreen onNext={nextStage} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-[#ffe4e6]">
        <div key={currentStage} className="w-full max-w-4xl clay-card p-10 min-h-[650px] flex flex-col items-center justify-center relative overflow-hidden page-transition">
            <div className="absolute top-0 left-0 w-full h-3 bg-pink-100/50">
                <div 
                    className="h-full bg-[#ff8fa3] transition-all duration-700 ease-out shadow-[0_0_15px_#ff8fa3]" 
                    style={{ width: `${(currentStage / (TOTAL_STAGES)) * 100}%` }}
                />
            </div>
            {renderStage()}
        </div>
        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="text-pink-600 font-bold tracking-widest text-sm uppercase opacity-60">
            {currentStage < 20 ? `Healing Journey: Step ${currentStage + 1} / 20` : `Future Together: Promise ${currentStage - 19} / 11`}
          </p>
        </div>
    </div>
  );
};

export default App;
