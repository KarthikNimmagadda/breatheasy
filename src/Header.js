import { Button } from 'react-bootstrap';
import React from 'react';
import './App.css';

export default function Header({ onBreathingSelected }) {
    return (
      <div>
          <Button variant="outline-primary" size="lg" className="mr-2 mb-2" onClick={() => onBreathingSelected('water')}>Water Breathing</Button>
          <Button variant="outline-primary" size="lg" className="mr-2 mb-2" onClick={() => onBreathingSelected('whiskey')}>Whiskey Breathing</Button>
          <Button variant="outline-primary" size="lg" className="mr-2 mb-2" onClick={() => onBreathingSelected('coffee')}>Coffee Breathing</Button>
      </div>
    );
  }
  