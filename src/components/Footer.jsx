import React from 'react';
import footerLogo1 from '../assets/images/WEALTH LOGO.png';
import footerLogo from '../assets/images/WEALTH LOGO2.png';

// Footer section containing brand info, contact details and links
const Footer = () => {
  return (
    <footer id="contact" className="footer text-center section-padding">
      <div className="container">
        
        <div className="footer-brand">
          <div className="brand-icon">
          <img src={footerLogo1} className="brand-icon" alt="logo" />
          </div>
          <span className='footerLogo'>
            <img src={footerLogo} className="brand-text" alt="logo" />
          </span>
          {/* <h3>WEALTH</h3> */}
        </div>
        
        <p className="footer-description">
          Defining the standards of luxury in residential and<br/> commercial decoration across the globe.
        </p>
        
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Along Alao Akala Estate, Opposite White House, <br />Akobo Ojurin, Ibadan Oyo State.
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +234 810 372 3956
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:ajibwealth@gmail.com">ajibwealth@gmail.com</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-social">
          <a href="#facebook" aria-label="Facebook" className="social-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#instagram" aria-label="Instagram" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#share" aria-label="Share" className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; 2026 Wealth Interiors & Exterior. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
