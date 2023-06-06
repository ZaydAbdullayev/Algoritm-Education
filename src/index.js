import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <SnackbarProvider
      maxSnack={2}
      style={{
        fontSize: "18px",
        background: "#222",
        padding: "3%",
        color: "yellow",
      }}
      iconVariant={{ default: "👨🏻‍🎓" }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SnackbarProvider>
  </Fragment>
);
