import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTO = () => {
    window.scrollTo(0, 0, { passive: true });
  };
  return (
    <footer className="footer_container" onClick={scrollTO}>
      <div className="footer_box">
        <Link to="/">© 2021 ~ {year} ALGORITM TA'LIM MARKAZI</Link>
      </div>
    </footer>
  );
};
