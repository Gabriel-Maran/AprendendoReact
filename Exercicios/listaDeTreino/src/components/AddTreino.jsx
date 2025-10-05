import { useRef } from "react";
import "../css/AddTreino.css";

export default function AddTreino({ createNewTreino }) {
  const pegaRefs = useRef({
    descricao: "",
    repeticoes: 0,
    series: 0,
    data: "",
    peso: 0,
  });
  return (
    <>
      <section className="addTask-container">
        <h2>Adicione seu Treino</h2>
        <div className="inputsAndButton-container">
          <input
            id="exercicio"
            type="text"
            placeholder="Exercicio"
            onChange={(e) => (pegaRefs.current.descricao = e.target.value)}
          />
          <input
            id="repeticoes"
            type="number"
            placeholder="Repetições"
            onChange={(e) => (pegaRefs.current.repeticoes = e.target.value)}
          />
          <input
            id="series"
            type="number"
            placeholder="Séries"
            onChange={(e) => (pegaRefs.current.series = e.target.value)}
          />
          <input
            id="data"
            type="date"
            placeholder="Data"
            onChange={(e) => (pegaRefs.current.data = e.target.value)}
          />

          <input
            id="peso"
            type="number"
            placeholder="Peso"
            onChange={(e) => (pegaRefs.current.peso = e.target.value)}
          />
          <button
            className="btnCreate"
            onClick={() => {
              const descricao = pegaRefs.current.descricao;
              const repeticoes = pegaRefs.current.repeticoes;
              const series = pegaRefs.current.series;
              const data = pegaRefs.current.data;
              const peso = pegaRefs.current.peso;
              createNewTreino(descricao, repeticoes, series, data, peso);
            }}
          >
            Adicionar Treino +
          </button>
        </div>
      </section>
    </>
  );
}
