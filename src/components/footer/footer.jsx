import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollTO = () => {
    window.scrollTo(0, 0, { passive: true });
  };
  return (
    <footer className="footer_container" onClick={scrollTO}>
      <div className="footer_box">
        <Link to="/">ALGORITM TA'LIM MARKAZI</Link>
      </div>
    </footer>
  );
};
