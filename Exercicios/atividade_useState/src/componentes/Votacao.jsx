import { useState } from "react";

export default function Votacao() {
  const [opcaoA, setoOpcaoA] = useState(0);
  const [opcaoB, setoOpcaoB] = useState(0);
  const [opcaoC, setoOpcaoC] = useState(0);
  return (
    <>
      <section id="atividade">
        <p>Placar:</p>
        <p>A: {opcaoA}</p>
        <p>B: {opcaoB}</p>
        <p>C: {opcaoC}</p>
        <div>
          <button onClick={() => setoOpcaoA(opcaoA + 1)}>Votar A</button>
          <button onClick={() => setoOpcaoB(opcaoB + 1)}>Votar B</button>
          <button onClick={() => setoOpcaoC(opcaoC + 1)}>Votar C</button>
        </div>
      </section>
    </>
  );
}
