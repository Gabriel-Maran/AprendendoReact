import { NavLink } from "react-router";

export default function AppLayout({ children }) {
  return (
    <>
      <div id="baseContent">
        <header id="barraNavegação">
          <NavLink to="/">Home</NavLink>
          {/*Basicamente NavLink é um link de navegação e o to é pra onde ele vai*/}
          <NavLink to="/about">About</NavLink>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
