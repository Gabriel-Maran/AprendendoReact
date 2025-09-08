import { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styleCss/AppEffect.css";

export default function AppEffect() {
  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);
  useEffect(() => {
    console.log("Evento disparado na primeira render apenas");
  }, []); //Quando a primeira render é feita

  useEffect(() => {
    console.log(
      "Evento disparado quando botão Primeiro incrementado ou primeira render"
    );
  }, [primeiro]); //Quando primeiro muda ou primeira render, ele executa

  useEffect(() => {
    console.log(
      "Evento disparado quando botão Segundo incrementado ou primera render"
    );
  }, [segundo]); //Quando segundo muda ou primeira render, ele executa

  useEffect(() => {
    console.log("Evento dispara em todas as renders");
  }); //Quando qualquer render é feita, ele executa

  return (
    <>
      <Header
        titulo={"Trabalhando com hook useEffect"}
        siteNome={"Home"}
        pagina={"/"}
      />
      <main id="principalAppEffect">
        <div className="clicks">
          <h2 className="textoClick">Primeiro Clicks: {primeiro}</h2>
          <button
            className="botaoIncrementador"
            onClick={() => {
              setPrimeiro(primeiro + 1);
            }}
          >
            Primeiro
          </button>
        </div>
        <div className="clicks">
          <h2 className="textoClick">Segundo Clicks: {segundo}</h2>
          <button
            className="botaoIncrementador"
            onClick={() => {
              setSegundo(segundo + 1);
            }}
          >
            Segundo
          </button>
        </div>
      </main>
      <Footer titulo={"Meu footer"} />
    </>
  );
}
