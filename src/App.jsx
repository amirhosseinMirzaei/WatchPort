import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { Title } from "./pages/Title";
import DetailsPage from "./pages/DetailsPage";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (source) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === source.id)
        ? prev.filter((fav) => fav.id !== source.id)
        : [...prev, source]
    );
    console.log("favorites", favorites);
  };
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home favorites={favorites} toggleFavorite={toggleFavorite} />
            }
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/title" element={<Title />} />
          <Route path="/details/:tmdbId" element={<DetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
