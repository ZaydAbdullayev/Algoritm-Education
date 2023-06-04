import React from "react";
import "./home.css";
import { Corusel } from "../../components/corusel/corusel";

export const Home = () => {
  return (
    <div className="home_container">
      {/* =========== Slider ========== */}
      <div className="home_page">
        <Corusel />
      </div>
    </div>
  );
};
