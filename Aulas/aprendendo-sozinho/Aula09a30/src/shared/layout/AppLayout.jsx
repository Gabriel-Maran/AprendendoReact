import { NavLink } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

export default function AppLayout({ children }) {
  const { logOut } = useAuthContext();

  return (
    <>
      <div id="baseContent">
        <header id="barraNavegação">
          <div id="botoesEsquerda"></div>
          <div id="botoesMeio">
            <NavLink className="linksPrincipais" to="/">
              Home
            </NavLink>
            {/*Basicamente NavLink é um link de navegação e o to é pra onde ele vai*/}
            <NavLink className="linksPrincipais" to="/about">
              About
            </NavLink>
          </div>
          <div id="botoesDireita">
            <NavLink id="logOut" onClick={logOut}>
              Logout
            </NavLink>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
