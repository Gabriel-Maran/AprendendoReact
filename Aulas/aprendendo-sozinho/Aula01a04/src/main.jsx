import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Serve para avisar e validar possiveis erros, para termos ciencia do que esta ocorrendo,
      ao inves de recebermos apenas uma página em branco*/}
    <App />
  </StrictMode>
);
