import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import "./mocks/server.js";
import App from "./pages/App.jsx";
import AppLayout from "./shared/layout/AppLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </StrictMode>
);
