import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Fragment>
);
