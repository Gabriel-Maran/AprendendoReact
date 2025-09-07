import { BrowserRouter, Route, Routes } from "react-router";
import "./style/index.css";
import "./mocks/server.js";
import Home from "./pages/Home.jsx";
import AppLayout from "./shared/layout/AppLayout.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Detail from "./pages/Datail.jsx";
import Login from "./pages/Login.jsx";
import { useIsAuthenticated } from "./shared/contexts/AuthContext.js";

export const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <BrowserRouter>
      {isAuthenticated && (
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </AppLayout>
      )}

      {!isAuthenticated && (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
