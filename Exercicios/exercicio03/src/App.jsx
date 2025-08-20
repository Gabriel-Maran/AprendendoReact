import BarraVermelha from "./componentes/BarraVermelha";
import BarraVermelhoFraco from "./componentes/BarraVermelhoFraco";
import QuadradoVermelho from "./componentes/QuadradoVermelho";
import "./App.css";

function App() {
  return (
    <>
      <BarraVermelha idBarra={"barraVermelha"}></BarraVermelha>
      <BarraVermelhoFraco idBarra={"barraVermelhoFraco"}></BarraVermelhoFraco>
      <div id="main">
        <QuadradoVermelho idBloco={"quadradoVermelho"}></QuadradoVermelho>
        <div id="quatroBlocos">

        </div>
      </div>
    </>
  );
}

export default App;
