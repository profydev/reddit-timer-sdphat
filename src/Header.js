import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';

const Header = () => (
  <header className="header">
    <Link to="/" className="app-logo">
      <img src={logo} alt="app logo" />
    </Link>
    <div className="header-links-wrapper">
      <Link className="header-link" to="/search">Search</Link>
      <Link className="header-link" to="/#how-it-works">How it works</Link>
      <Link className="header-link" to="/#about">About</Link>
    </div>
  </header>
);

export default Header;
