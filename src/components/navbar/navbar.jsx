import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav_container">
      <ul className="navbar">
        <Link to="/">ALGORITM TA'LIM</Link>
        <Link to="/kurslar">Kurslar</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </nav>
  );
};
