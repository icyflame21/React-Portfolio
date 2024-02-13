import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "helpers/initFA";

const rootElement = document.getElementById("main");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
