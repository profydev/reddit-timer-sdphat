import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer_logo.svg';

const Footer = () => (
  <footer className="footer">
    <div style={{ flex: 1, textAlign: 'left' }}>
      <a href="https://profy.dev/employers" className="footer-link">profy.dev</a>
    </div>
    <Link to="/" className="footer-logo">
      <img src={footerLogo} style={{ display: 'block' }} alt="Footer logo" />
    </Link>
    <div style={{ flex: 1, textAlign: 'right' }}>
      <Link to="/terms" className="footer-link">Terms & Privacy</Link>
    </div>
  </footer>
);

export default Footer;
