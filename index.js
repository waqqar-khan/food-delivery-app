import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const heading = React.createElement(
  "h1",
  {},
  <App />
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
