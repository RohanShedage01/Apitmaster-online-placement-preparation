import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Aptimaster</h1>
        <p>Your premier destination for online placement preparation.</p>
      </div>
      
      <div className="about-content">
        <section className="about-section split-section">
          <div className="section-text">
            <h2>Our Mission</h2>
            <p>
              At Aptimaster, our mission is to empower students and job seekers with the right tools, knowledge, and practice to crack their dream placements. We believe that with the right preparation strategy, anyone can achieve their career goals.
            </p>
          </div>
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning together" />
          </div>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Comprehensive Practice</h3>
              <p>Extensive question banks covering Aptitude, Reasoning, Verbal Ability, and Coding.</p>
            </div>
            <div className="feature-card">
              <h3>Smart Analytics</h3>
              <p>Track your progress, identify your weak areas, and get personalized recommendations.</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Testing</h3>
              <p>Experience real placement test environments with timed mock tests.</p>
            </div>
          </div>
        </section>

        <section className="about-section split-section reverse">
          <div className="section-text">
            <h2>Why Choose Us?</h2>
            <p>
              We bridge the gap between academic learning and industry expectations. Our carefully curated content is designed by industry experts to match the latest placement patterns of top companies.
            </p>
          </div>
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Preparation and focus" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
