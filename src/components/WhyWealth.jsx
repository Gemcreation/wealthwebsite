import React from 'react';

// Why Wealth section highlighting key benefits and guarantees
const WhyWealth = () => {
  return (
    <section id="whyUs" className="why-wealth container section-padding text-center">
      <h2 className="section-title">Why Wealth?</h2>
      <p className="section-subtitle">
        We combine traditional craftsmanship with modern luxury standards. <br />So you could enjoy premium experience.
      </p>

      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h3>Elite Quality</h3>
          <p>Only the finest best materials used.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Punctuality</h3>
          <p>Guaranteed timelines for every project.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <h3>Satisfaction</h3>
          <p>100% client satisfaction track record.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h3>Expertise</h3>
          <p>Over 10 years of luxury decor experience.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWealth;
