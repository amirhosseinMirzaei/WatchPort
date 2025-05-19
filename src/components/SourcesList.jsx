import React from "react";
import { SourceCard } from "./SourceCard";
import "../css/SourcesList.css";
export const SourcesList = ({ sources, favorites, toggleFavorite }) => {
  return (
    <div className="sources-grid">
      {sources.map((source) => {
        return (
          <SourceCard
            key={source.id}
            source={source}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === source.id)}
          ></SourceCard>
        );
      })}
    </div>
  );
};
export default SourcesList;
