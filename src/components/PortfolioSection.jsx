import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Mitros Message App",
      category: "Android Application (Java)",
      description: "A secure, native Android messaging application featuring real-time chat, media sharing, and intuitive UI components for a seamless user experience.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sri Samskruthi",
      category: "Web Application / E-commerce",
      description: "A modern, high-performance e-commerce platform built for a premium jewelry brand. Featuring dynamic product galleries, fast loading speeds, and responsive design.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="portfolio-section container" id="portfolio">
      <div className="section-header">
        <h2>Featured <span className="gradient-text">Work</span></h2>
        <p>A selection of recent projects built with cutting-edge technologies.</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card glass-card">
            <div className="portfolio-image-container">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <span className="view-project-btn">View Details</span>
              </div>
            </div>
            <div className="portfolio-content">
              <span className="portfolio-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
