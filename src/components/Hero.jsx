import React from 'react';
import './Hero.css';
import BlurText from "../templates/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Hero = () => {
  return (
    <section className="hero container mx-auto" id="home" data-aos="fade-up">
      <h1 className="text-5xl md:text-4xl sm:text-3xl">ROG ZEPHYRUS G14</h1>
      <BlurText 
        text='PERFORMANCE MEET PRECISION' 
        delay={400} 
        animateBy='words' 
        direction='top' 
        onAnimationComplete={handleAnimationComplete} 
        className='textanimated1'
      />
    </section>
  );
};

export default Hero;