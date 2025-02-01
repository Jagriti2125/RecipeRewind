import React from 'react';
import '../styles/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get in touch</h3>
          <p>📌 22it3018@rgtpt.ac.in</p>
          <p>🖩 Delhi, DL IN</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 9:00am – 10:00pm</p>
          <p>Saturday: 9:00am – 6:00pm</p>
          <p>Sunday: 9:00am – 12:00pm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 RecipeRewind. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;