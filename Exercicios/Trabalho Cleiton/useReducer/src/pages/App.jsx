import "../css/App.css";

import React, { useReducer } from "react";

function reducer(state, action) {
  console.log("reducer:", action.type);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="container">
      <h2>useReducer</h2>
      <div id="bloco-interno">
        <p>Contador: {state.count}</p>
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
