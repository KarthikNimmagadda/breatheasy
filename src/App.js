import React, { useState } from 'react';
import './App.css';
import WaterBreathing from './WaterBreathing';
import WhiskeyBreathing from './WhiskeyBreathing';
import CoffeeBreathing from './CoffeeBreathing';
import Header from './Header';

function App() {
  const [selectedBreathing, setSelectedBreathing] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header onBreathingSelected={setSelectedBreathing} />
        </div>
      </header>
      <main className="App-content">
          {selectedBreathing === 'water' && <WaterBreathing />}
          {selectedBreathing === 'whiskey' && <WhiskeyBreathing />}
          {selectedBreathing === 'coffee' && <CoffeeBreathing />}
      </main>
    </div>
  );
}

export default App;
