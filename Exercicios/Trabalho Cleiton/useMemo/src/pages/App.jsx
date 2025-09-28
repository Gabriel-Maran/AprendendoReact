import "../css/App.css";

import React, { useState, useMemo } from "react";

function expensiveCalculation(num) {
  console.log("Realizando calculo caro...");
  let result = 0;
  for (let i = 0; i < 5_000_000; i++) {
    result = (num * i) / num - result;
  }
  return result + num;
}

export default function App() {
  const [number, setNumber] = useState(1);
  const [clicks, setClicks] = useState(0);

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
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        <p>Resultado {resultadoCaro}</p>
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
