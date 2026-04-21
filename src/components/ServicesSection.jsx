import React from 'react';
import { Smartphone, Globe, ShoppingCart, Zap } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={32} className="service-icon" />,
      title: "Web Applications",
      description: "Custom React and Node.js solutions built for performance and scalability."
    },
    {
      icon: <Smartphone size={32} className="service-icon" />,
      title: "Android Native Apps",
      description: "Java-based native Android applications with flawless user experiences."
    },
    {
      icon: <ShoppingCart size={32} className="service-icon" />,
      title: "E-Commerce",
      description: "Complete e-commerce platforms designed for high conversion rates."
    },
    {
      icon: <Zap size={32} className="service-icon" />,
      title: "UI/UX & Optimization",
      description: "Premium design facelifts and performance tuning for existing apps."
    }
  ];

  return (
    <section className="services-section container" id="services">
      <div className="section-header">
        <h2>Our <span className="gradient-text">Services</span></h2>
        <p>Comprehensive technical solutions designed to give your business an unfair advantage.</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="glass-card service-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
