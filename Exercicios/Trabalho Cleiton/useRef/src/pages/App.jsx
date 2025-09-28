import "../css/App.css";
import React, { useRef, useState } from "react";

export default function App() {
  const countRef = useRef(0);

  const [countState, setCountState] = useState(0);

  console.log("Renderizou!");
  function incrementRef() {
    console.log("Cliques + 1");
    countRef.current += 1;
  }

  return (
    <div className="container">
      <h2>useRef</h2>
      <div id="bloco-interno">
        <p>Valor atual: {countState}</p>
        <button onClick={incrementRef}>Clique</button>
        <button onClick={() => setCountState(countRef.current)}>
          Atualizar
        </button>
      </div>
      <p>Use ref não rerenderiza.</p>
    </div>
  );
}
