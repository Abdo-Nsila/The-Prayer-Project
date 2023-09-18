import React from "react";
import ReactDOM from "react-dom/client";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

import './main.css'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <Theme>
        <App />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
