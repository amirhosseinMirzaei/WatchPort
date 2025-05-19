import React from "react";
import "../css/SourceCard.css";
export const SourceCard = ({ source, isFavorite, toggleFavorite }) => {
  const handleClick = () => {
    toggleFavorite(source);
  };

  return (
    <div className="source-card">
      <div className="card-header">
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavorite(source)}
        >
          ♥
        </button>
      </div>

      <img src={source.logo_100px} alt={source.name} className="source-logo" />

      <div className="card-content">
        <h3>{source.name}</h3>
        <p>Type: {source.type}</p>
        <p className="regions">Regions: {source.regions.join(", ")}</p>

        <div className="links">
          {source.ios_appstore_url && (
            <a
              href={source.ios_appstore_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS App
            </a>
          )}
          {source.android_playstore_url && (
            <a
              href={source.android_playstore_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Android App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default SourceCard;
