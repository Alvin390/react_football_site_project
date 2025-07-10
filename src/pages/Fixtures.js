// pages/Fixtures.js
import React from "react";
import { fixtures } from "../data/fixtures";
import MatchCard from "../components/MatchCard";

const Fixtures = () => (
  <div className="fixtures-page-wrapper">
    <div className="fixtures-page">
      <h2 className="fixtures-title">Upcoming Fixtures</h2>
      <div className="fixtures-list">
        {fixtures.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  </div>
);

export default Fixtures;