import React from 'react';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsTech from './sections/SkillsTech';
import ProjectSection from './sections/ProjectSection';
import FreelancingSection from './sections/FreelancingSection';
import ContactSection from './sections/ContactSection';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsTech />
      <ProjectSection />
      <FreelancingSection />
      <ContactSection />
    </div>
  );
}

export default App;
