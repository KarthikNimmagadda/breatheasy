import React from 'react';
import Breathing from './Breathing';

export function Coffee() {
    const type = 'coffee';
    const animationTime = 20;
    const text = "Exhale sharply through your nose to increase energy. Use before exercise. Do it 3 times.";
    const url = "https://youtu.be/pWsXA8jlaWE?t=570";

    return <Breathing animationTime = {animationTime} text = { text } type = { type } url = { url }></Breathing>
}