import React from "react";
import { players } from "../data/players";
import PlayerCard from "../components/Playercard";

const Team = () => (
  <div className="team-page-wrapper">
    <div className="team-page">
      <h2 className="team-title">Arsenal Squad 2025</h2>
      <div className="players-grid-wrapper">
        <div className="players-grid">
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Team;