import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test from "./pages/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lore from "./pages/Lore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
      <Route path="/lore" element={<Lore />} />
    </Routes>
  </BrowserRouter>
);
