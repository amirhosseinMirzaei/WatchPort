import SourceCard from "../components/SourceCard";
import "../css/Favorite.css";

export const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites-page">
      <h2>❤️ Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((source) => (
            <SourceCard
              key={source.id}
              source={source}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Favorites;
