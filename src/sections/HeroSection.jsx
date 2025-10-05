import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <TypeAnimation
          sequence={[
            "Hi, I'm Yash Desai",
            5000, 
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity} 
          speed={50}
        />
        <p>Generative AI & LLM Engineer | Java • Python • Spring Boot | Exploring DevOps & SDET | Building Scalable AI Solutions</p>
        <a href="#contact" className="cta-button">Let's get started &gt;</a>
      </div>
      <div className="hero-photo">
        <img src="/YashBg.png" alt="Yash" />
      </div>
    </section>
  );
};

export default HeroSection;
