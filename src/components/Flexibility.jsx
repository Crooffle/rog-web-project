import React from 'react';
import './Flexibility.css';
import RotatingText from '../templates/RotatingText/RotatingText'


const Flexibility = () => {
  return (
    <section className="flexibility" id="support" data-aos="fade-up">
      <h2>
        <span className="available-text-wrapper">
          <span className="available-static">Available For</span>
          <RotatingText
            texts={['Gaming', 'Editing', 'Coding']}
            mainClassName="flex justify-center px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </span>
      </h2>


      <div className="use-cases">
        <div className="gaming" data-aos="zoom-in">
          <img src="/assets/fc25.png" alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div className="editing" data-aos="zoom-in" data-aos-delay="200">
          <div className="icons">
            <img src="/assets/Adobe_Premiere_Pro_CC_icon.svg.png" alt="Premiere Pro" data-aos="flip-left" />
            <img src="/assets/Adobe_After_Effects_CC_icon.svg.png" alt="After Effects" data-aos="flip-right" />
          </div>
          <p>Editing</p>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;