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
      </div>
    </div>
  </div>
);

export default Home;