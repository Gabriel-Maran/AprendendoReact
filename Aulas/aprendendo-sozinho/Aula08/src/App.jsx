import { useState } from "react";
import "./App.css";

function App() {
  const [hide, setHide] = useState(false);
  /*Hooks só podem ser usado antes de ifs e returns, pois devem ser prioridade em execução, ao carregar o DOM*/
  return (
    <>
      {hide && <h1 id="textoParaMudar">Teste1</h1>}
      {!hide && <h1 id="textoParaMudar">Teste2</h1>}

      {!hide ? (
        <h1 id="textoParaMudar">Teste2</h1>
      ) : (
        <h1 id="textoParaMudar">Teste1</h1>
      )}
      <button onClick={() => setHide(!hide)}>Inverter Hide</button>
    </>
  );
}

export default App;
