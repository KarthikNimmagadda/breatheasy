import React, { useState } from 'react';
import './App.css';
import Breathing from './Breathing';
import Header from './Header';

const breathingData = [
  {
    type: 'water',
    animationTime: 8,
    text: "Practice water breathing to reduce stress and anxiety. Do it 10 times.",
    url: "https://youtu.be/pWsXA8jlaWE?t=300",
  },
  {
    type: 'whiskey',
    animationTime: 12,
    text: "To help with sleep, it is recommended to perform the whiskey breathing technique 10 times at a time.",
    url: "https://youtu.be/pWsXA8jlaWE?t=437",
  },
  {
    type: 'coffee',
    animationTime: 20,
    text: "Exhale sharply through your nose to increase energy. Use before exercise. Do it 3 times.",
    url: "https://youtu.be/pWsXA8jlaWE?t=570",
  },
];

function App() {
  const [selectedBreathing, setSelectedBreathing] = useState('');

  const selectedBreathingData = breathingData.find(breathing => breathing.type === selectedBreathing);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header onBreathingSelected={setSelectedBreathing} />
        </div>
      </header>
      <main className="App-content">
          {selectedBreathingData && <Breathing 
            animationTime={selectedBreathingData.animationTime}
            text={selectedBreathingData.text}
            breathingType={selectedBreathingData.type}
            url={selectedBreathingData.url}
          />}
      </main>
    </div>
  );
}

export default App;
