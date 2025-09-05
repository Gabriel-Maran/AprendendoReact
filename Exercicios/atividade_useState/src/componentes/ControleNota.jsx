import { useState } from "react";

export default function ControleNota() {
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState(0);
  return (
    <>
      <section id="atividade">
        <input
          type="text"
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          onChange={(e) => setNota(e.target.value)}
          placeholder="Nota"
        />
        <p>
          {nome == "" ? "*Nome*" : nome} você está {nota >= 7 && "Aprovado"}{" "}
          {nota < 7 && "Reprovado"}
        </p>
      </section>
    </>
  );
}
