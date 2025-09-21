import { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");
  const doubleNumber = useMemo(() => {
    //Usado para memorizar um valor e executar algo apenas quando ele muda, usado para perfomance
    //Parecido com useCallback, useCallback armazena a função e verifica mudanças nela, o useMemo armazena o return e comparo ele
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <section>
        <h2>useRef</h2>
        <section className="bloco">
          <section className="uso">
            <p>{number}</p>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <p>Text: {text}</p>
            <p>Number: {number}</p>
            <p>Number Doubled: {doubleNumber}</p>
          </section>
        </section>
      </section>
    </>
  );
}

const slowFunction = (num) => {
  console.log("Slown function is beign called!");
  for (let index = 0; index < 1000; index++) {
    index = index - 1 + 1;
  }
  return num * 2;
};
