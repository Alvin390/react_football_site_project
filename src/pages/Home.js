// pages/Home.js
import React from "react";
import logoArs from "../assets/logo_ars.png";
import { fixtures } from "../data/fixtures";

const nextFixture = fixtures[0];

const Home = () => (
  <div className="home-page-wrapper">
    <div className="home-hero-bg">
      <img src={logoArs} alt="Arsenal Crest" className="home-crest-glow" />
    </div>
    <div className="home-overlay">
      <div className="home-content-container">
        <h1 className="home-title">
          <span className="home-title-main">Arsenal FC</span>
          <span className="home-title-shadow">Gunners</span>
        </h1>
        <div className="home-motto-banner">
          <span className="home-motto">Victory Through Harmony</span>
        </div>
        <div className="home-next-match-card">
          <div className="home-next-match-label">Next Match</div>
          <div className="home-next-match-details">
            <span className="home-next-match-vs">vs</span>
            <span className="home-next-match-opponent">{nextFixture.opponent}</span>
            <span className="home-next-match-date">
              {new Date(nextFixture.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="home-next-match-venue">{nextFixture.venue}</span>
          </div>
          <a href="/fixtures" className="home-next-match-cta">See All Fixtures</a>
        </div>
        <div className="home-quick-stats-bar">
          <div className="home-stat">
            <span className="home-stat-value">14</span>
            <span className="home-stat-label">FA Cups</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-value">13</span>
            <span className="home-stat-label">League Titles</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-value">Invincibles</span>
            <span className="home-stat-label">2003/04</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-value">60,704</span>
            <span className="home-stat-label">Stadium Capacity</span>
          </div>
        </div>
        <div className="home-cta-row">
          <a href="/team" className="home-cta-btn">Meet the Squad</a>
          <a href="/news" className="home-cta-btn home-cta-btn-alt">Latest News</a>
          <a href="/contact" className="home-cta-btn home-cta-btn-outline">Contact</a>
        </div>
        {/* --- NEW CONTENT BELOW --- */}
        <section className="home-history-section">
          <h2 className="home-section-title">Club History</h2>
          <p className="home-section-text">
            Founded in 1886, Arsenal FC is one of England’s most decorated clubs, renowned for its attacking football, legendary managers, and a rich tradition of success. From the Invincibles season to the modern era, Arsenal continues to inspire millions worldwide.
          </p>
        </section>
        <section className="home-legends-section">
          <h2 className="home-section-title">Featured Legends</h2>
          <div className="home-legends-list">
            <div className="home-legend-card">
              <img src={logoArs} alt="Thierry Henry" className="home-legend-img" />
              <span className="home-legend-name">Thierry Henry</span>
            </div>
            <div className="home-legend-card">
              <img src={logoArs} alt="Dennis Bergkamp" className="home-legend-img" />
              <span className="home-legend-name">Dennis Bergkamp</span>
            </div>
            <div className="home-legend-card">
              <img src={logoArs} alt="Tony Adams" className="home-legend-img" />
              <span className="home-legend-name">Tony Adams</span>
            </div>
          </div>
        </section>
        <section className="home-stadium-section">
          <h2 className="home-section-title">Emirates Stadium</h2>
          <p className="home-section-text">
            Home to the Gunners since 2006, the Emirates Stadium boasts a capacity of 60,704 and is a fortress of modern football, hosting unforgettable matches and passionate fans.
          </p>
        </section>
        <section className="home-trophy-section">
          <h2 className="home-section-title">Trophy Cabinet</h2>
          <ul className="home-trophy-list">
            <li>13 League Titles</li>
            <li>14 FA Cups</li>
            <li>2 League Cups</li>
            <li>16 Community Shields</li>
            <li>UEFA Cup Winners' Cup</li>
          </ul>
        </section>
        <section className="home-social-section">
          <h2 className="home-section-title">Connect with Arsenal</h2>
          <div className="home-social-links">
            <a href="https://twitter.com/Arsenal" target="_blank" rel="noopener noreferrer" className="home-social-link">Twitter</a>
            <a href="https://instagram.com/arsenal" target="_blank" rel="noopener noreferrer" className="home-social-link">Instagram</a>
            <a href="https://facebook.com/Arsenal" target="_blank" rel="noopener noreferrer" className="home-social-link">Facebook</a>
            <a href="https://www.arsenal.com/" target="_blank" rel="noopener noreferrer" className="home-social-link">Official Site</a>
          </div>
        </section>
        {/* --- END NEW CONTENT --- */}
      </div>
    </div>
  </div>
);

export default Home;