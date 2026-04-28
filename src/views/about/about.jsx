import React from 'react';
import { Target, Lightbulb, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="badge-pill">
             <span className="badge-icon">👋</span> Welcome to Aptimaster
          </div>
          <h1>Empowering the Next Generation of <span>Professionals</span></h1>
          <p>We are building the ultimate platform to help you master the skills required to crack your dream job placements.</p>
        </div>
      </div>
      
      <div className="about-container">
        
        {/* Mission Section */}
        <section className="about-section split-section">
          <div className="section-text">
            <h2 className="section-title">Our Mission <Target className="title-icon" color="#6b46ff"/></h2>
            <p className="lead-text">
              At Aptimaster, our mission is to empower students and job seekers with the right tools, knowledge, and practice to crack their dream placements.
            </p>
            <p>
              We believe that with the right preparation strategy, anyone can achieve their career goals. We are dedicated to providing high-quality, accessible education to bridge the gap between academia and industry.
            </p>
            <ul className="mission-list">
              <li><CheckCircle size={20} color="#10b981"/> Industry-relevant curriculum</li>
              <li><CheckCircle size={20} color="#10b981"/> Expertly crafted mock tests</li>
              <li><CheckCircle size={20} color="#10b981"/> Personalized performance analytics</li>
            </ul>
          </div>
          <div className="section-image image-right">
            <div className="image-decoration"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning together" />
          </div>
        </section>

        {/* Features / Offerings Section */}
        <section className="about-section offerings-section">
          <div className="section-header-center">
            <h2 className="section-title">What We Offer <Lightbulb className="title-icon" color="#f59e0b"/></h2>
            <p>Everything you need to prepare for your placements under one roof.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="f-card-icon f-purple">
                <Target size={28} />
              </div>
              <h3>Comprehensive Practice</h3>
              <p>Extensive question banks covering Aptitude, Reasoning, Verbal Ability, and Coding.</p>
            </div>
            <div className="feature-card">
              <div className="f-card-icon f-blue">
                <Users size={28} />
              </div>
              <h3>Smart Analytics</h3>
              <p>Track your progress, identify your weak areas, and get personalized recommendations.</p>
            </div>
            <div className="feature-card">
              <div className="f-card-icon f-green">
                <CheckCircle size={28} />
              </div>
              <h3>Real-time Testing</h3>
              <p>Experience real placement test environments with timed mock tests.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Ready to start your journey?</h2>
            <p>Join thousands of students who have already secured their dream jobs using Aptimaster.</p>
            <Link to="/signup" className="btn btn-primary cta-btn">
              Get Started for Free <ArrowRight size={20} className="ml-2"/>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
