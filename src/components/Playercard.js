import React from "react";

const PlayerCard = ({ player }) => (
    <div className="player-card">
        <img src={player.image} alt={player.name} />
        <h3>{player.name}</h3>
        <p>{player.position} - {player.nationality}</p>
    </div>
);

export default PlayerCard;