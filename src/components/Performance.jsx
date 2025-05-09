import React from 'react';
import './Performance.css';

const Performance = () => {
  return (
    <section className="performance" id="performance" data-aos="zoom-in">
      <div className="logo-container">
        <img src="/assets/nvidia.png" alt="NVIDIA-Logo" data-aos="fade-up" />
        <img src="/assets/AMD_Ryzen_logo.svg.png" alt="AMD-Logo" data-aos="fade-up" data-aos-delay="200" />
        <img src="/assets/PC_Game_Pass_logo (1).svg" alt="PC-Game-Pass-Logo" data-aos="fade-up" data-aos-delay="400" />
      </div>
      <div className="performance-content">
        <p className="subheading" data-aos="fade-up">Up to</p>
        <h2 data-aos="fade-up">NVIDIA® GeForce RTX™ 5080 Laptop GPU in a 1.59cm chassis</h2>
        <p className="highlight" data-aos="fade-up">Laptop GPU</p>
    
        <p className="subheading" data-aos="fade-up" data-aos-delay="200">Up to</p>
        <h2 data-aos="fade-up" data-aos-delay="200">AMD Ryzen™ AI 9 HX 370</h2>
        <p className="highlight" data-aos="fade-up" data-aos-delay="200">processor</p>
      </div>
    </section>
  );
};
 
export default Performance;