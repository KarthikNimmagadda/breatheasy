import React from 'react';
import Breathing from './Breathing';

export function Whiskey() {
    const type = 'whiskey';
    const animationTime = 12;
    const text = "To help with sleep, it is recommended to perform the whiskey breathing technique 10 times at a time.";
    const url = "https://youtu.be/pWsXA8jlaWE?t=437";
    return <Breathing animationTime = {animationTime} text = { text } type = { type } url = { url }></Breathing>
}