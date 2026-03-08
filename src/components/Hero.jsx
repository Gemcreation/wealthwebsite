import React from 'react';

// Hero section displaying main headline and CTA buttons over a high-quality background
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="hero-tag">PREMIUM CRAFTSMANSHIP</span>
        <h1 className="hero-title">
          Transforming<br />
          Spaces, Defining<br />
          Luxury.
        </h1>
        <p className="hero-subtitle">
          Expert interior and exterior finishing tailored<br/>
          for the most discerning homeowners.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get a Free Quote</button>
          <button className="btn btn-secondary">Our Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
