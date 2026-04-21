import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section container" id="contact">
      <div className="glass-card contact-card">
        <div className="contact-content">
          <h2>Ready to <span className="gradient-text">Start?</span></h2>
          <p>Let's build something extraordinary together. Reach out for a free consultation and project quote.</p>
          <a href="mailto:harshithsamudrala@gmail.com" className="btn-primary">Email Us</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
