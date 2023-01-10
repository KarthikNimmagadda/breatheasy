import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Coffee } from './Coffee';
import Header from './Header';
import { Water } from './Water';
import { Whiskey } from './Whiskey';

function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Header/>
          </div>
        </header>
        <main className="App-content">
          <Routes>
            <Route path="/coffee" element={<Coffee/>}>Coffee</Route>
            <Route path="/whiskey" element={<Whiskey/>}>Whiskey</Route>
            <Route path="/water" element={<Water/>}>Water</Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
