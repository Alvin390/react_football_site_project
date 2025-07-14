import React from "react";

const PlayerCard = ({ player, idx }) => (
    <div
        className={`player-card player-card-animate`}
        style={{ animationDelay: `${0.18 + idx * 0.11}s` }}
    >
        <div className="player-card-blur-bg" />
        <div className="player-card-img-wrap">
            <img src={player.image} alt={player.name} className="player-card-img" />
            <span className="player-jersey-number">#{player.number}</span>
        </div>
        <h3 className="player-name">{player.name}</h3>
        <div className="player-meta">
            <span className="player-position">{player.position}</span>
            <span className="player-nationality">{player.nationality}</span>
        </div>
        <div className="player-stats">
            <div className="player-stat">
                <span className="stat-label">Appearances</span>
                <span className="stat-value">{player.stats.appearances}</span>
            </div>
            {player.position === "Goalkeeper" ? (
                <div className="player-stat">
                    <span className="stat-label">Clean Sheets</span>
                    <span className="stat-value">{player.stats.cleanSheets}</span>
                </div>
            ) : (
                <>
                    <div className="player-stat">
                        <span className="stat-label">Goals</span>
                        <span className="stat-value">{player.stats.goals}</span>
                    </div>
                    <div className="player-stat">
                        <span className="stat-label">Assists</span>
                        <span className="stat-value">{player.stats.assists}</span>
                    </div>
                </>
            )}
        </div>
    </div>
);

export default PlayerCard;