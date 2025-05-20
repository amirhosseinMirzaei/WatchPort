import React, { useState, useEffect } from "react";
import { getSources } from "../services/api";
import { SourcesList } from "../components/SourcesList.jsx";
import "../App.css";

export const Home = ({ favorites, toggleFavorite }) => {
  const [sources, setSources] = useState([]);
  const [filteredSources, setFilteredSources] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSources = async () => {
      try {
        const responseSource = await getSources();
        setSources(responseSource);
        setFilteredSources(responseSource);
      } catch (e) {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadSources();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSources(sources);
    } else {
      const filtered = sources.filter((source) =>
        source.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSources(filtered);
    }
  }, [searchQuery, sources]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <SourcesList
        sources={filteredSources}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
};
