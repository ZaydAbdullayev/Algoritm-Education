import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav_container">
      <ul className="navbar">
        <Link to="/">
          <img src={Logo} alt="foto" />
        </Link>
        <Link to="/kurslar">Kurslar</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </nav>
  );
};
