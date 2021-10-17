import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/Store";
import { Provider } from "react-redux";
import "./i18next";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
    <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
