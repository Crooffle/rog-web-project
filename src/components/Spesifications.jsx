// Specifications.jsx - Updated with responsive classes
import React from 'react';
import './Spesifications.css';
import TrueFocus from '../templates/TrueFocus/TrueFocus';
import Aurora from '../templates/Aurora/Aurora';

const Specifications = () => {
  return (
    <section className="specifications container mx-auto" id="build">
      <Aurora amplitude={1} className="aurora-bg" />
      <div className="section-top row" data-aos="fade-right">
        <div className="col-12 col-md-4">
          <img src="/assets/laptopfront.png" alt="Design Laptop" className="laptop-image img-fluid" />
        </div>
        <div className="col-12 col-md-8 content">
          <TrueFocus 
            sentence='NEW DESIGN' 
            manualMode={true} 
            blurAmount={5} 
            borderColor='red' 
            animationDuration={0.5} 
            pauseBetweenAnimations={1}
          />
          <p className="text-base md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi neque harum amet expedita fuga, ullam blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto repudiandae, ab similique ipsum, incidunt maxime hic dolorem ea iure corrupti numquam odit velit accusamus quis impedit doloremque ratione laudantium?</p>
        </div>
      </div>
    
      <div className="section-bottom row" data-aos="fade-left">
        <div className="col-12 col-md-8 content">
          <TrueFocus 
            sentence='LED Light' 
            manualMode={true} 
            blurAmount={5} 
            borderColor='blue' 
            animationDuration={0.5} 
            pauseBetweenAnimations={1}
          />
          <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia deleniti autem alias necessitatibus vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus veritatis, tempora ut sapiente blanditiis sequi officia, molestiae vel nihil a iste quidem non quas earum ea. Cupiditate, quos quasi.</p>
        </div>
        <div className="col-12 col-md-4">
          <img src="/assets/laptopback.png" alt="LED Laptop" className="laptop-image img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Specifications;