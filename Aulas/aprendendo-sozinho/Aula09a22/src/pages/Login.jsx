import { useState } from "react";
import { useAuthContext } from "../shared/contexts/AuthContext";

export default function Login() {
  function handleLogin() {
    login(email, password);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  return (
    <>
      <section id="alignLoginSection">
        <section className="sectionLogin">
          <div id="containerCampos">
            <h1 id="loginText">Login</h1>
            <b>Email</b>
            <input
              value={email}
              className="inputLogin"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <b>Senha</b>
            <input
              value={password}
              className="inputLogin"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div id="buttonAlign">
              <button id="buttonEntrar" onClick={() => handleLogin()}>
                Entrar
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
