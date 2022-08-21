import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer_logo.svg';

const Footer = () => (
  <footer className="footer">
    <Link to="https://profy.dev/employers" className="footer-link">profy.dev</Link>
    <Link to="/" className="footer-logo">
      <img src={footerLogo} style={{ display: 'block' }} alt="Footer logo" />
    </Link>
    <Link to="/terms" className="footer-link">Terms & Privacy</Link>
  </footer>
);

export default Footer;
