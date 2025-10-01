import { useRef } from "react";
import "../css/AddItem.css";

export default function AddItem({ createNewItem }) {
  const descricao = useRef("");
  const qntdd = useRef(0);
  const valorUni = useRef("");
  return (
    <>
      <section className="newItem-container">
        <div className="textMain">
          <h2>Orçamento</h2>
        </div>
        <div className="camposParaInserir">
          <input
            onChange={(e) => (descricao.current = e.target.value)}
            type="text"
            className="inputCampos"
            placeholder="Descrição"
          />
          <input
            onChange={(e) => (qntdd.current = e.target.value)}
            type="text"
            className="inputCampos"
            placeholder="Quantidade"
          />
          <input
            onChange={(e) => (valorUni.current = e.target.value)}
            type=" "
            className="inputCampos"
            placeholder="Valor Uni"
          />
          <button
            className="buttonEnviar"
            onClick={() =>
              createNewItem(descricao.current, qntdd.current, valorUni.current)
            }
          >
            +
          </button>
        </div>
      </section>
    </>
  );
}
