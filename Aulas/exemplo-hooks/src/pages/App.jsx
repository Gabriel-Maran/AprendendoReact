import { useEffect, useState } from "react";
import "../style/App.css";

export default function App() {
  let nome = "Gabriel";
  const [name, setName] = useState("Nome");
  const [lastName, setLastName] = useState("Sobrenome");
  useEffect(() => {
    console.log("Inicio");
  }, []);
  useEffect(() => {
    console.log("Global");
  });
  useEffect(() => {
    console.log("Quando nome Muda");
  }, [name]);
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
