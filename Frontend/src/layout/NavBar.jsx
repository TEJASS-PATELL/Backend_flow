import React from "react";
import { Link } from "react-router-dom";
import "../style/Layout.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyApp</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}
