import React from 'react';
import './AboutSection.css';
import { RiFocus3Line } from 'react-icons/ri';
import resumePdf from '../assets/Yash_Desai_SoftwareEngineer_Resume.pdf';

const AboutSection = () => {
  return (
    <section id='about-section' className="about-section">
      <h2>About Me</h2>
      <p className="intro-text">
      Generative AI & LLM Engineer | Java • Python • Spring Boot | Exploring DevOps & SDET | Building Scalable AI Solutions
      </p>
      <p className="intro-text">
      With a strong foundation in Java backend engineering and a growing expertise in Generative AI, I specialize in building intelligent, production-ready applications that merge the robustness of enterprise systems with the innovation of Large Language Models (LLMs).
      </p>
      <p className="intro-text">
      I thrive on designing solutions that are scalable, impactful, and deployment-ready—bridging backend reliability with AI innovation to deliver real-world value for businesses and communities.
      </p>
      <div className="focus-areas">
        <h3><RiFocus3Line /> My focus areas</h3>
        <ul>
          <li>Generative AI Applications</li>
          <li>ML Deployment with Docker & CI/CD</li>
          <li>Cloud Infrastructure (AWS, GCP)</li>
          <li>Data Analysis & Deep Learning</li>
        </ul>
      </div>
      <div className="cta-buttons">
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="cta-button">View My Resume</a>
        <a href="#projects-section" className="cta-button">Explore Projects</a>
      </div>
    </section>
  );
};

export default AboutSection;
