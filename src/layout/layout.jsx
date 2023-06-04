import "./layout.css";
import { Navbar } from "../components/navbar/navbar";
import { Home } from "../pages/home/home";

export const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <section>
        <Home />
      </section>
    </div>
  );
};
