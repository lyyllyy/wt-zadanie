import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <h2>Download our mobile app ⚡</h2>
          <p>Get exclusive access to car rentals with our mobile app. Download now and experience convenience on the go.</p>
          <div className="app-buttons">
            <a href="#" className="app-store">
              <img src="icons/appstore.png" alt="Download on the App Store" />
            </a>
            <a href="#" className="google-play">
              <img src="icons/google.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <a href="#"><img src="icons/Heading.png" alt="LUXEDRIVE Logo" /></a>
          </div>
          <div className="social-icons">
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-dribbble-line"></i></a>
            <a href="#"><i className="ri-twitter-line"></i></a>
            <a href="#"><i className="ri-youtube-line"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
