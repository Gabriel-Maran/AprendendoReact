import { useRef } from "react";

export default function AddTask({
  idSection,
  buttonQndClicar,
  inputValue,
  inputQndMudar,
  conteudo,
}) {
  const inputRef = useRef(null);
  //Ele não dispara um novo fluxo de render ao modificar seu valor
  //Pode ser usado como um count, por exemplo
  //Você pode usar um generic com ele, para definir no que vai usar, tipo '<HTMLInputElement>'
  return (
    <>
      <section id={idSection}>
        <input
          required
          id="addTaskInpt"
          value={inputValue}
          onChange={inputQndMudar}
          placeholder="Type your task here"
          ref={inputRef}
        />
        <button
          id="addTaskButton"
          onClick={() => {
            inputRef.current.value != "" ? buttonQndClicar() : "";
            inputRef.current?.focus();
          }}
        >
          {conteudo}
        </button>
      </section>
    </>
  );
}
