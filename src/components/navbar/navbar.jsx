import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Icon } from "../icon/icon";

import icon_piece1 from "../../assets/images/ALGORITM.svg";
import icon_piece3 from "../../assets/images/TALIM.svg";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);

    if (menu) {
      setTimeout(() => {
        setMenu(false);
      }, 7000);
    } else {
      clearTimeout();
    }
  };

  return (
    <nav className="nav_container">
      <ul className="navbar">
        <Link to="/">
          <img src={icon_piece1} alt="foto" />
          <Icon />
          <img src={icon_piece3} alt="foto" />
        </Link>
        <Link to="/kurslar">Kurslar</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>

        <button className="menu_btn" onClick={openMenu}>
          <span className={menu ? "menu_btn1" : ""}></span>
          <span className={menu ? "menu_btn2" : ""}></span>
        </button>

        <ul className="menu" style={menu ? { top: "0", left: "0" } : {}}>
          <p>Menu</p>
          <Link to="/kurslar">Kurslar</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
        </ul>
      </ul>
    </nav>
  );
};
