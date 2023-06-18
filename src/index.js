import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import AOS from "aos";
import "aos/dist/aos.css";
import { Loading } from "./components/loading/loading";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <SnackbarProvider
      maxSnack={2}
      style={{
        fontSize: "18px",
        background: "#333",
        padding: "3%",
        color: "yellow",
      }}
      iconVariant={{ default: "👨🏻‍🎓" }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Router />
          <Loading />
        </BrowserRouter>
      </Provider>
    </SnackbarProvider>
  </Fragment>
);

AOS.init({ passive: true });
