import { useState } from "react";

export default function Progresso() {
  const [progresso, setProgesso] = useState(0);
  return (
    <>
      <section id="atividade">
        <p>Progresso: {progresso}%</p>
        <div>
          <button
            onClick={() =>
              setProgesso(progresso == 100 ? progresso : progresso + 10)
            }
          >
            +10%
          </button>
          <button
            onClick={() =>
              setProgesso(progresso == 0 ? progresso : progresso - 10)
            }
          >
            -10%
          </button>
        </div>
      </section>
    </>
  );
}
