import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from 'react-redux';
import { store } from "./Utils/store";

window.React = React

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </Provider>
);
