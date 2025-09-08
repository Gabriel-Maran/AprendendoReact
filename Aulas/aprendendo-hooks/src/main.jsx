import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styleCss/index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppEffect from "./pages/AppEffect.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/appEffect" element={<AppEffect />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
