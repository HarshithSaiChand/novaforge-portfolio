import React from 'react';
import './InsightsSection.css';

const InsightsSection = () => {
  const posts = [
    {
      title: "The AI Revolution in Software Delivery",
      excerpt: "How we leverage LLMs to build scalable web applications 3x faster than traditional agencies.",
      date: "May 15, 2024",
      category: "Methodology"
    },
    {
      title: "Why Native Android Still Wins in 2024",
      excerpt: "Exploring the performance benefits of Java/Kotlin for complex enterprise mobile solutions.",
      date: "May 10, 2024",
      category: "Tech"
    },
    {
      title: "Mastering Clean Code with AI Pair Programming",
      excerpt: "The secret to maintaining high code quality while accelerating development timelines.",
      date: "May 05, 2024",
      category: "Guide"
    }
  ];

  return (
    <section className="insights-section container" id="insights">
      <div className="section-header">
        <h2>Latest <span className="gradient-text">Insights</span></h2>
        <p>Thoughts on the future of development, AI integration, and digital transformation.</p>
      </div>

      <div className="insights-grid">
        {posts.map((post, index) => (
          <article key={index} className="insight-card glass-card">
            <div className="insight-content">
              <div className="insight-meta">
                <span className="insight-category">{post.category}</span>
                <span className="insight-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#contact" className="read-more">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
