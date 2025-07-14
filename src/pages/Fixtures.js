// pages/Fixtures.js
import React from "react";
import { fixtures } from "../data/fixtures";

const Fixtures = () => (
  <div className="fixtures-page-wrapper">
    <div className="fixtures-page-container">
      <div className="fixtures-header-section">
        <h2 className="fixtures-title">Upcoming Fixtures</h2>
        <p className="fixtures-intro">
          Witness the pride of North London in action. Here are Arsenal's next fixtures—get ready for world-class football, electrifying atmosphere, and unforgettable moments!
        </p>
      </div>
      <div className="fixtures-list-wrapper">
        {fixtures.map((fixture, idx) => (
          <div
            className={`fixture-card fixture-card-animate-${(idx % 4) + 1}`}
            key={fixture.id}
            style={{ animationDelay: `${0.18 + idx * 0.13}s` }}
          >
            <div className="fixture-date-badge">
              {new Date(fixture.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="fixture-main">
              <div className="fixture-opponent">
                <span className="fixture-vs">vs</span>
                <span className="fixture-opponent-name">{fixture.opponent}</span>
              </div>
              <div className="fixture-venue">
                <span className="fixture-venue-icon" role="img" aria-label="stadium">🏟️</span>
                <span className="fixture-venue-name">{fixture.venue}</span>
              </div>
            </div>
            <div className="fixture-cta">
              <button className="fixture-tickets-btn" tabIndex={0}>
                Get Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Fixtures;