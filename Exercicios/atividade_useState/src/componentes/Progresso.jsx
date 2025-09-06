import { useState } from "react";

function barraProgresso(max) {
  let barra = "";
  for (let index = 0; index < max; index++) {
    barra = barra + "|";
  }
  return barra;
}

export default function Progresso() {
  const [progresso, setProgesso] = useState(0);
  const [barra, setBarra] = useState("");
  return (
    <>
      <section id="atividade">
        <p>Progresso: {progresso}%</p>
        <div>
          <p id={progresso != 0 ? "barraProgresso" : "barraProgressoWithout"}>
            {barra}
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              progresso == 100
                ? barra
                : setBarra(barraProgresso(progresso + 10));
              setProgesso(progresso == 100 ? progresso : progresso + 10);
            }}
          >
            +10%
          </button>
          <button
            onClick={() => {
              progresso == 0 ? barra : setBarra(barraProgresso(progresso - 10));
              setProgesso(progresso == 0 ? progresso : progresso - 10);
            }}
          >
            -10%
          </button>
        </div>
      </section>
    </>
  );
}
