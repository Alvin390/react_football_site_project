// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logoArs from "../assets/logo_ars.png";

const Navbar = () => (
  <nav className="navbar-main">
    <div className="navbar-container">
      <div className="navbar-logo-area">
<img src={logoArs} alt="Arsenal Logo" className="navbar-logo-img" />
      </div>
      <ul className="navbar-links">
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/about">About</Link></li>
        <li><Link className="navbar-link" to="/team">Team</Link></li>
        <li><Link className="navbar-link" to="/fixtures">Fixtures</Link></li>
        <li><Link className="navbar-link" to="/news">News</Link></li>
        <li><Link className="navbar-link" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;