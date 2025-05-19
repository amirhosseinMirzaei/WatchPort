import React from "react";
import "../css/Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> WatchPort</div>
      <ul className="navbar-links">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="#sources">sources</a>
        </li>
        <li>
          <a href="#about">about me</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
