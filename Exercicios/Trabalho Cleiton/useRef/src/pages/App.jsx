import "../css/App.css";
import React, { useRef, useState } from "react";

export default function App() {
  // Cria uma ref mutável com valor inicial 0.
  // Alterar countRef.current NÃO faz o componente re-renderizar.
  const countRef = useRef(0);

  // Cria um estado com valor inicial 0.
  // Alterar esse estado força re-render para atualizar a tela.
  const [countState, setCountState] = useState(0);

  // Mostra no console sempre que o componente re-renderizar.
  console.log("Renderizou!");

  // Função que incrementa apenas a ref (sem re-render imediato).
  function incrementRef() {
    console.log("Cliques + 1");
    countRef.current += 1;
  }

  return (
    <div className="container">
      <h2>useRef</h2>
      <div id="bloco-interno">
        {/* Exibe o valor do estado (não da ref diretamente) */}
        <p>Valor atual: {countState}</p>

        {/* Incrementa somente a ref (não atualiza tela ainda) */}
        <button onClick={incrementRef}>Clique</button>

        {/* Copia o valor da ref para o estado, forçando a tela a atualizar */}
        <button onClick={() => setCountState(countRef.current)}>
          Atualizar
        </button>
      </div>
      <p>Use ref não rerenderiza.</p>
    </div>
  );
}
