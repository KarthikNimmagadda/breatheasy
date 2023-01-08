import React, { useRef, useEffect , useState } from 'react';
import { Button } from 'react-bootstrap';
import './WhiskeyBreathing.css';

export default function WhiskeyBreathing() {
  const [animationState, setAnimationState] = useState('paused');
  const [showSpinner, setShowSpinner] = useState(false);

  const spinnerSVG = (
    <svg viewBox="0 0 24 22">
      <path
        id="spinner"
        stroke="#c25"
        strokeLinecap="round"
        strokeWidth="13"
        d="M6.6 6.6q1 3 5 6 4-3 5-6"
        className="spinner-animation"
        style={{
          animation: `spinner-animation 12s infinite ${animationState === 'paused' ? 'paused' : 'running'}`,
        }}
      />
    </svg>
  );

  return (
    <div>
        <div>
            <p>Inhale and Exhale along with the animation, Breathe in and breathe out through your nose. Refer this <a href="https://www.youtube.com/watch?v=pWsXA8jlaWE">video</a></p>
            <p>Note: This breathing technique will help you with sleep.</p>
            <Button variant="outline-secondary" size="sm" className={animationState === 'running' ? 'btn-youtube-pause' : 'btn-youtube-play'} onClick={() => 
                    {
                        setAnimationState(animationState === 'running' ? 'paused' : 'running');
                        setShowSpinner(true);
                    }
                }
            >
                {animationState === 'running' ? 'Pause' : 'Start'}
            </Button>
        </div>
        <div className="spinner" style={{ display: showSpinner ? 'block' : 'none' }}>{spinnerSVG}</div>
    </div>
  );
}
