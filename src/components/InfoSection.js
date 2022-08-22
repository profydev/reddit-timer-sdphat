import React from 'react';

const InfoSection = () => (
  <div>
    <div className="info-section">
      <span id="how-it-works" className="info-heading">How it works</span>
      <ul className="info-description info-list">
        <li className="info-text">We find the 500 top posts from the past year for a subreddit.</li>
        <li className="info-text">The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
        <li className="info-text">See immediately when to submit your reddit post.</li>
      </ul>
    </div>
    <div className="info-section">
      <span id="about" className="info-heading">About</span>
      <div className="info-description">
        <span className="info-text">
          This app was created during a course on
          {' '}
          <a href="https://profy.dev">profy.dev</a>
          {' '}
          with the goal to implement a pixel-perfect
          real-world application with professional workflows and tools like Kanban, Asana,
          Zeplin, GitHub, pull requests and code reviews.
          {' '}
          <a href="https://profy.dev/employers">Click here for more information.</a>
        </span>
      </div>
    </div>
  </div>

);

export default InfoSection;
