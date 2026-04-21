import React from 'react';
import { Search, Cpu, Code, Rocket } from 'lucide-react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Strategic Discovery",
      description: "We dive deep into your business goals, target audience, and technical requirements to define the perfect roadmap."
    },
    {
      icon: <Cpu size={28} />,
      title: "AI-Enhanced Prototyping",
      description: "Leveraging state-of-the-art AI partners to rapidly move from concept to interactive wireframes in record time."
    },
    {
      icon: <Code size={28} />,
      title: "Core Development",
      description: "Writing high-perfomance, clean code for Web and Android using modular architectures that scale as you grow."
    },
    {
      icon: <Rocket size={28} />,
      title: "Refinement & Launch",
      description: "Rigorous testing and performance tuning followed by a seamless deployment to production environments."
    }
  ];

  return (
    <section className="process-section container" id="about">
      <div className="section-header">
        <h2>Our <span className="gradient-text">Methodology</span></h2>
        <p>Combining human ingenuity with AI power to deliver results 3x faster without compromising quality.</p>
      </div>

      <div className="process-timeline">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="process-number">0{index + 1}</div>
            <div className="process-content-card glass-card">
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="process-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
