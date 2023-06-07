import React from "react";
import "./notFaond.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not_found">
      <h1>404</h1>
      <p>Not found nothing...</p>
      <Link to="/">Come back Home</Link>
    </div>
  );
};
