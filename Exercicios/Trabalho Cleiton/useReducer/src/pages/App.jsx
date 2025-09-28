import "../css/App.css";

import React, { useReducer } from "react";

// Função reducer: recebe o estado atual e uma ação, retorna um novo estado.
// Deve ser pura (sem efeitos colaterais).
function reducer(state, action) {
  console.log("reducer:", action.type); // Log apenas para acompanhar chamadas
  switch (action.type) {
    case "increment":
      // Retorna novo objeto
      return { count: state.count + 1 };
    case "decrement":
      // Retorna novo objeto
      return { count: state.count - 1 };
    case "reset":
      // Retorna novo objeto
      return { count: 0 };
    default:
      // Retorna o estado atual se a ação for desconhecida
      return state;
  }
}

export default function App() {
  // useReducer inicializa o estado {count: 0}
  // state guarda o estado atual, dispatch dispara ações para o reducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="container">
      <h2>useReducer</h2>
      <div id="bloco-interno">
        {/* Exibe o valor atual do contador */}
        <p>Contador: {state.count}</p>

        {/* Botões que disparam ações diferentes para o reducer */}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <p>
        Quando o estado vira complexo (várias propriedades ou lógica de
        atualização), useReducer deixa as atualizações mais previsíveis e fáceis
        de testar.
      </p>
    </div>
  );
}
