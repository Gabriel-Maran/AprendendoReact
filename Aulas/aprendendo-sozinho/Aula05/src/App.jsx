import { useState } from "react";
import "./App.css";

export default function App() {
  return <></>;
}

//função JS
const teste = () => {
  return 1 + 1;
};

//função JS
const useTeste = () => {
  return 1 + 1;
};

//react hook
const useTest = () => {
  const [value] = useState(1 + 1);
  return 1 + 1;
};

//componente react
const test = () => {
  return (
    <>
      <div>Componente Test</div>
    </>
  );
};
