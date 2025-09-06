import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./style/index.css";
import "./mocks/server.js";
import App from "./pages/App.jsx";
import AppLayout from "./shared/layout/AppLayout.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Detail from "./pages/Datail.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
    </StrictMode>
  </BrowserRouter>
);
