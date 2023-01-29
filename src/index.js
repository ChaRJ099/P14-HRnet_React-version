import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./Utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
