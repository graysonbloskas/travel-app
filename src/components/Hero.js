import React from 'react';
import { Button } from './Button';
import '../App.css';
import './Hero.css'
import Video from '../assets/videos/milky-way-timelapse.mp4';

function Hero() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted playbackRate />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Watch a Video <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
