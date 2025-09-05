import ControleNota from "../componentes/ControleNota";
import Likes from "../componentes/Likes";
import Votacao from "../componentes/Votacao";
import Carrinho from "../componentes/Carrinho";
import "../style/App.css";
import ConversorTemperatura from "../componentes/ConversorTemperatura";
import Progresso from "../componentes/Progresso";
import { useState } from "react";

function App() {
  const [escolha, setEscolha] = useState(0);
  return (
    <>
      <main>
        <section id="topo">
          <p>Escolha</p>
          <input
            type="Text"
            placeholder="Escolha a atividade (1 a 6)"
            onChange={(e) => setEscolha(e.target.value)}
          />
        </section>
        {escolha == 1 ? <Likes /> : ""}
        {escolha == 2 ? <ControleNota /> : ""}
        {escolha == 3 ? <Votacao /> : ""}
        {escolha == 4 ? <Carrinho /> : ""}
        {escolha == 5 ? <ConversorTemperatura /> : ""}
        {escolha == 6 ? <Progresso /> : ""}
        {}
        {escolha < 1 || escolha > 6 ? <p id="atividade">Opção invalida</p> : ""}
      </main>
    </>
  );
}

export default App;
