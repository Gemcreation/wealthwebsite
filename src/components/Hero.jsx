import React from 'react';

// wealth Hero section displaying main headline and CTA buttons over a high-quality background
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        {/* this is use for a dark/black-saturated background overlay */}
      </div>
      <div className="container hero-content">
        <span className="hero-tag">PREMIUM CRAFTSMANSHIP</span>
        <h1 className="hero-title">
          Interior &<br />
          Exterior Decoration<br />
          Defining Luxury
          {/* Transforming<br />
          Spaces, Defining<br />
          Luxury. */}
        </h1>
        <p className="hero-subtitle">
          Expert interior and exterior finishing tailored<br/>for the most discerning homeowners.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => window.location.href = '#projects'} >
            View Project
          </button>
          <button className="btn btn-secondary" onClick={() => window.location.href = '#whyUs'} >
            Why Wealth
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
