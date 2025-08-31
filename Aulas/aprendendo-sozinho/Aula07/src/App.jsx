import { useState } from "react";
import "./App.css";

export default function App() {
  //A função é permitir atualizar a interface
  //useState permite controlar o fluxo de render da aplicação
  //É usado para guardar valores que vc quer modificar na sua aplicação
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Mudar este texto");
  const [guardaNovoNome, setguardaNovoNome] = useState("Nome");
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicks: {count}
      </button>
      <div id="mudarNome">
        <h3>{nome}</h3>
        <input
          type="text"
          placeholder="Novo nome"
          onChan={(event) => {
            setguardaNovoNome(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setNome(guardaNovoNome);
          }}
        >
          Mudar
        </button>
      </div>
    </>
  );
}
