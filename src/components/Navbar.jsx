import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import About from "../pages/About";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">WatchPort</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Favorites
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/aboutMe"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/title"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Title
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
