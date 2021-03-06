import React from "react";
import ReactDOM from "react-dom/client";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./ui/components";
import { AppRouter } from "./router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
