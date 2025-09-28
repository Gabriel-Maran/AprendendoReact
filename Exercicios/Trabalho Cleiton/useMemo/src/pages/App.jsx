import "../css/App.css";

import React, { useState, useMemo } from "react";

// Função simulando um cálculo muito pesado.
// A cada chamada, escreve no console e roda um loop grande.
function expensiveCalculation(num) {
  console.log("Realizando calculo caro...");
  let result = 0;
  for (let i = 0; i < 5_000_000; i++) {
    result = (num * i) / num - result;
  }
  return result + num;
}

export default function App() {
  // Estado para o número digitado no input
  const [number, setNumber] = useState(1);

  // Estado para contar cliques no botão (só para demonstrar re-render)
  const [clicks, setClicks] = useState(0);

  // Memoriza o resultado do cálculo caro.
  // Só executa expensiveCalculation novamente quando "number" mudar.
  const resultadoCaro = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="container">
      <h2>useMemo</h2>
      <div id="bloco-interno">
        <h4>Calculo super mega caro</h4>

        <div>
          <label>Digite o número: </label>
          {/* Input controlado: altera o número do estado */}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>

        {/* Mostra o resultado do cálculo memorizado */}
        <p>Resultado {resultadoCaro}</p>

        {/* Botão que só aumenta contador de cliques, sem recalcular o valor caro */}
        <button onClick={() => setClicks((clicks) => clicks + 1)}>
          Clicks: {clicks}
        </button>
      </div>
      <p>
        useMemo memoriza o resultado de um cálculo caro e só recalcula quando as
        dependências mudam.
      </p>
    </div>
  );
}
