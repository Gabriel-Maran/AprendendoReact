import { useState } from "react";

export default function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const [valor, setValor] = useState(50);
  return (
    <>
      <section id="atividade">
        <p>Quantidade: {quantidade}</p>
        <p>Valor Total: {quantidade * valor}</p>
        <div>
          <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
          <button
            onClick={() =>
              setQuantidade(quantidade == 1 ? quantidade : quantidade - 1)
            }
          >
            -
          </button>
        </div>
      </section>
    </>
  );
}
