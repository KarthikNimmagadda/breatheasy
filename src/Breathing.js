import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Breathing.css';

const Breathing = (props) => {
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
        style={{
          animation: `${getSpinnerAnimation(props.breathingType)} ${props.animationTime}s infinite ${animationState === 'paused' ? 'paused' : 'running'}`,
        }}
      />
    </svg>
  );

  return (
    <div>
        <div>
            <p style={{ color: 'rgb(183, 190, 173)' }}>{props.text}(<a href={props.url} style={{ color: 'rgb(153, 170, 153)' }}>video reference</a>)</p>
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
};

const getSpinnerAnimation = (breathingType) => {
    if (breathingType === 'coffee') {
      return "spinner-animation-coffee";
    } else if (breathingType === 'whiskey') {
      return "spinner-animation-whiskey";
    }
    return "spinner-animation-water";
  };
  

Breathing.propTypes = {
  animationTime: PropTypes.number,
  text: PropTypes.string,
  breathingType: PropTypes.string,
  url: PropTypes.string,
};

export default Breathing;
