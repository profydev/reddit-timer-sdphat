import React from 'react';
import { Link } from 'react-router-dom';
import heroTable from '../assets/hero_table.png';

const HeroSection = () => (
  <div className="hero-section">
    <h1 className="hero-section-title">No reactions to your reddit posts?</h1>
    <span className="hero-section-subtitle">Great timing, great results! Find the best time to post on your subreddit.</span>
    <Link className="hero-section-button" to="/search">
      <button type="button">SHOW ME THE BEST TIME</button>
    </Link>
    <Link className="reddit-javascript-link" to="/search/javascript">r/javascript</Link>
    <Link to="/search">
      <img className="hero-section-heatmap" alt="heatmap" src={heroTable} />
    </Link>
  </div>
);

export default HeroSection;
