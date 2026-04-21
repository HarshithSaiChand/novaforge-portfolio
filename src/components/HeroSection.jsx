import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content">
        <div className="badge">
          <Code size={16} /> NovaForge Digital Agency
        </div>
        <h1>We Build <span className="gradient-text">Premium Apps</span><br/> That Scale Businesses.</h1>
        <p>Expert Web and Android Application Development. Let's transform your ideas into powerful, aesthetic digital experiences that users love.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Start Your Project <ArrowRight size={20} className="icon-right"/></a>
          <a href="#services" className="btn-secondary">View Services</a>
        </div>
      </div>
      <div className="hero-glow"></div>
    </section>
  );
}

export default HeroSection;
