import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollTO = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer_container">
      <div className="footer_box" onClick={scrollTO}>
        <Link to="/">ALGORITM TA'LIM MARKAZI</Link>
      </div>
    </footer>
  );
};
