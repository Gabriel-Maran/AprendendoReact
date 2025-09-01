import { useState } from "react";
import "../style/App.css";

export default function App() {
  let nome = "Gabriel";
  const [name, setName] = useState("Nome");
  const [lastName, setLastName] = useState("Sobrenome");
  return (
    <>
      <p>Informe seu nome</p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <p>Informe seu sobrenome:</p>
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <p>{nome}</p>
      <div>
        <p>Nome: {name}</p>
        <p>Sobrenome: {lastName}</p>
      </div>
    </>
  );
}
