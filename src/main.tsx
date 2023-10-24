import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { init } from "./instance/library";

const container = document.getElementById("root");
const root = createRoot(container!);
init().then(() =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
