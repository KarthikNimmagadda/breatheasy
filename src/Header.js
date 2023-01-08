import { Button } from 'react-bootstrap';
import React from 'react';
import './App.css';

export default function Header({ onBreathingSelected }) {
    return (
      <div>
          <div><p>Choose a breathing exercise, click 'Start' and synchronize your breathing with the animation.</p></div>
          <Button variant="primary" size="md" onClick={() => onBreathingSelected('water')}>Water</Button>
          <Button variant="primary" size="md" onClick={() => onBreathingSelected('whiskey')}>Whiskey</Button>
          <Button variant="primary" size="md" onClick={() => onBreathingSelected('coffee')}>Coffee</Button>
      </div>
    );
  }
  