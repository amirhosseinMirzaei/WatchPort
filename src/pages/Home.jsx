import React from "react";
import { useState, useEffect } from "react";
import { getSources } from "../services/api";
import { SourcesList } from "../components/SourcesList.jsx";
import "../App.css";
export const Home = ({ favorites, toggleFavorite }) => {
  const [sources, setSources] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSources = async () => {
      try {
        const responseSource = await getSources();
        console.log("Fetched sources:", responseSource);
        setSources(responseSource);
      } catch (e) {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadSources();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <SourcesList
      sources={sources}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  );
};
