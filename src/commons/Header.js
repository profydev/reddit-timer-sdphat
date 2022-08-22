import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="header">
    <Link to="/" className="app-logo">
      <img src={logo} alt="app logo" />
    </Link>
    <div className="header-links-wrapper">
      <Link className="header-link" to="/search/javascript">Search</Link>
      <a className="header-link" href="/#how-it-works">How it works</a>
      <a className="header-link" href="/#about">About</a>
    </div>
  </header>
);

export default Header;
