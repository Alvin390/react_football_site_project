import React from "react";
import { players } from "../data/players";
import PlayerCard from "../components/Playercard";

const Team = () => (
  <div className="team-page-wrapper">
    <div className="team-page-container">
      <div className="team-header-section">
        <h2 className="team-title">Meet the Arsenal Squad</h2>
        <p className="team-intro">
          The pride of North London. Explore the stats and stories of our
          world-class players.
        </p>
      </div>
      <div className="team-list-wrapper">
        {players.map((player, idx) => (
          <PlayerCard player={player} key={player.id} idx={idx} />
        ))}
      </div>
    </div>
  </div>
);

export default Team;