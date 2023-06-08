import "./layout.css";
import { Navbar } from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

import { Footer } from "../components/footer/footer";

import phone from "../assets/images/phone-flat.png";

export const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
      <a href="tel:+998191111111" className="contact">
        <img src={phone} alt="icon" />
      </a>
    </div>
  );
};
