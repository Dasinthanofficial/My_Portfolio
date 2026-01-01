import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import ContainerPanel from './components/ContainerPanel';
import CustomCursor from './components/CustomCursor';
import BackgroundAura from './components/BackgroundAura';
import GalaxyBackground from './components/GalaxyBackground';
import CertificationsSection from './components/CertificationsSection';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <BackgroundAura />
      <GalaxyBackground />
      <Navbar />

      <ContainerPanel>
        <div className="main-content">
          <HeroSection />
          <div className="reveal"><AboutSection /></div>
          <div className="reveal"><SkillsSection /></div>
          <div className="reveal"><CertificationsSection /></div>
          <div className="reveal"><ServicesSection /></div>
          <div className="reveal"><ProjectsSection /></div>
          <div className="reveal"><ContactSection /></div>
        </div>
      </ContainerPanel>
    </>
  );
}

export default App;