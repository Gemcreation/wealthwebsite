import React from 'react';

// CTA section displaying a large gold card encouraging users to get a quote
const CTA = () => {
  return (
    <section className="cta container section-padding">
      <div className="cta-card">
        <div className="cta-content">
          <h2>Ready to elevate your home?</h2>
          <p>Consult with our design experts today and get a personalized estimate.</p>
          <button className="btn btn-black">
            Book a Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
