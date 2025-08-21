import BarraVermelha from "./componentes/BarraVermelha";
import BarraVermelhoFraco from "./componentes/BarraVermelhoFraco";
import QuadradoVermelho from "./componentes/QuadradoVermelho";
import QuadradoVermelhoFraco from "./componentes/QuadradoVermelhoFraco";
import BarraVermelhoForte from "./componentes/BarraVermelhoForte";
import "./App.css";

function App() {
  return (
    <>
      <BarraVermelha idBarra={"barraVermelha"}></BarraVermelha>
      <BarraVermelhoFraco idBarra={"barraVermelhoFraco"}></BarraVermelhoFraco>
      <div id="main">
        <QuadradoVermelho idBloco={"quadradoVermelho"}></QuadradoVermelho>
        <div id="quatroBloco">
          <QuadradoVermelhoFraco
            classBloco={"quadradoVermelhoFraco"}
            conteudo={1}
          ></QuadradoVermelhoFraco>
          <QuadradoVermelhoFraco
            classBloco={"quadradoVermelhoFraco"}
            conteudo={2}
          ></QuadradoVermelhoFraco>
          <QuadradoVermelhoFraco
            classBloco={"quadradoVermelhoFraco"}
            conteudo={3}
          ></QuadradoVermelhoFraco>
          <QuadradoVermelhoFraco
            classBloco={"quadradoVermelhoFraco"}
            conteudo={4}
          ></QuadradoVermelhoFraco>
        </div>
      </div>
    <BarraVermelhoForte idBloco={"barraVermelhoForte"}></BarraVermelhoForte>
    </>
  );
}

export default App;
