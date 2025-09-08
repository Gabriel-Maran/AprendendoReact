import "./style/index.css";
import "./mocks/server.js";
import AuthProvider from "./shared/contexts/AuthContext.js";
import { AppRoutes } from "./Routes.jsx";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}
