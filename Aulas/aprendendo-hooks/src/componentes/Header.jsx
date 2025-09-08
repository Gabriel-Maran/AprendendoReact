import { NavLink } from "react-router-dom";

export default function Header({ titulo, pagina, siteNome }) {
  return (
    <>
      <header id="headerPrincipal">
        <div id="textoEsquerda"></div>
        <div id="textoMeio">
          <h1>{titulo}</h1>
        </div>
        <div id="textoDireita">
          <NavLink id="linkSiteEspecifico" to={pagina}>
            {siteNome}
          </NavLink>
        </div>
      </header>
    </>
  );
}
