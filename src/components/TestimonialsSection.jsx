import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Digital Brand Manager",
      company: "E-Commerce Startup",
      content: "NovaForge transformed our online presence with a level of speed and technical depth we haven't seen elsewhere. The AI-assisted workflow really shows in the delivery timelines."
    },
    {
      name: "Product Owner",
      company: "SaaS Platform",
      content: "The Android application developed by Harshith and his team was flawless. Native performance with a modern UI that our users absolutely love. Highly recommended."
    },
    {
      name: "Technical Founder",
      company: "Web Portal",
      content: "Collaborating with NovaForge was a breeze. They understood our complex requirements and delivered a scalable React solution that exceeded our performance expectations."
    }
  ];

  return (
    <section className="testimonials-section container" id="testimonials">
      <div className="section-header">
        <h2>Client <span className="gradient-text">Voices</span></h2>
        <p>What partners say about our collaborative and technical approach.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card glass-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">{item.content}</p>
            <div className="testimonial-author">
              <strong>{item.name}</strong>
              <span>{item.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
