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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <SnackbarProvider
      maxSnack={2}
      style={{
        fontSize: "18px",
        background: "yellow",
        padding: "3%",
        color: "#333",
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

// // AOS olay dinleyicilerini güncelle
// function updateAOSListeners() {
//   const aosElements = document.querySelectorAll("[data-aos]");
//   aosElements.forEach((element) => {
//     const options = {
//       passive: true,
//       // Diğer olay dinleyici seçenekleri
//     };
//     const eventTypes = ["scroll", "touchmove"];
//     eventTypes.forEach((eventType) => {
//       const listeners = element[eventType];
//       if (listeners) {
//         listeners.forEach((listener) => {
//           listener.passive = options.passive;
//         });
//       }
//     });
//   });
// }

// // Sayfa yüklendikten sonra AOS olay dinleyicilerini güncelle
// window.addEventListener("load", updateAOSListeners);
