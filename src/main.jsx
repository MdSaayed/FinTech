import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css"; // Global styles
import "./styles/global.css"; // Global styles
import { LoadingProvider } from "./context/LoadingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);
