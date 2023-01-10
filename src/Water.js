import React from 'react';
import Breathing from './Breathing';

export function Water() {
    const type = 'water';
    const animationTime = 8;
    const text = "Practice water breathing to reduce stress and anxiety. Do it 10 times.";
    const url = "https://youtu.be/pWsXA8jlaWE?t=300";

    return <Breathing animationTime = {animationTime} text = { text } type = { type } url = { url }></Breathing>
}