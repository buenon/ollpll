import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Oll from "./components/pages/Oll/Oll";
import Pll from "./components/pages/Pll/Pll";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oll" element={<Oll />} />
        <Route path="/pll" element={<Pll />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
