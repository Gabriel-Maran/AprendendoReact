import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [idade, setIdade] = useState(0);
  const renders = useRef(1);
  const inputRef = useRef();
  const previousIdade = useRef();

  useEffect(() => {
    previousIdade.current = idade;
  }, [idade]);

  function focusInput() {
    inputRef.current.focus();
  }

  useEffect(() => {
    renders.current = renders.current + 1; //Persiste um valor sem rerenderizar, diferente do useState que rerenderiza toda hora
  });

  return (
    <>
      <section>
        <h2>useRef</h2>
        <section className="bloco">
          <section className="uso">
            <input
              type="text"
              value={name}
              maxLength={10}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Hello! My name is {name}</p> <p>Renders: {renders.current}</p>
          </section>
          <section className="uso">
            <input
              type="text"
              value={surName}
              ref={inputRef}
              maxLength={10}
              onChange={(e) => setSurName(e.target.value)}
            />
            <br />
            <button onClick={focusInput}>Send Surname</button>
            <p>Hello! My surname is {surName}</p>
          </section>
          <section className="uso">
            <input
              type="text"
              value={idade}
              maxLength={10}
              onChange={(e) => setIdade(e.target.value)}
            />
            <p>My age is: {idade}</p>
            <p>And my age was: {previousIdade.current}</p>
          </section>
        </section>
      </section>
    </>
  );
}
