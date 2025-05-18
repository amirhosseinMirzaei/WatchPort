import React from "react";
import "../css/SourceCard.css";
export const SourceCard = ({ source }) => {
  return (
    <div className="source-card">
      <img src={source.logo_100px} alt={source.name} className="source-logo" />
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
  );
};
export default SourceCard;
