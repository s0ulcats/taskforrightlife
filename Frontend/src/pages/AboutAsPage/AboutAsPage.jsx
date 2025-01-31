import React from 'react';
import './AboutAsPage.scss';

const AboutAsPage = React.memo(() => {
  return (
    <div className="about-us-page">
      <section className="text-center mb-16">
        <h1 className="page-title">🚀 About us</h1>
        <p className="page-description">We are not just a company - we are creating the future today! 💡</p>
      </section>

      <section className="features-section">
        <h2 className="features-title">🔥 Why are we the best?</h2>
        <ul className="features-list">
          <li className="feature-item">
            <span className="icon">🌟</span> Incredible quality and advanced technologies
          </li>
          <li className="feature-item">
            <span className="icon">🚀</span> Team of top experts
          </li>
          <li className="feature-item">
            <span className="icon">💡</span> Innovative solutions for your success
          </li>
          <li className="feature-item">
            <span className="icon">❤️</span> Customers are our main value
          </li>
          <li className="feature-item">
            <span className="icon">🔄</span> Flexible working conditions for your comfort
          </li>
        </ul>
      </section>
    </div>
  );
});

export default AboutAsPage;
