import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Shofiqul Islam. All rights reserved.</p>
      {/* Optional: Add links to GitHub, LinkedIn, etc. */}
      {/* <div className="social-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div> */}
    </footer>
  );
}

export default Footer; 