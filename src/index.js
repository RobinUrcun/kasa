import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import "./css/index.css";

import RoutesApp from "./Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);
