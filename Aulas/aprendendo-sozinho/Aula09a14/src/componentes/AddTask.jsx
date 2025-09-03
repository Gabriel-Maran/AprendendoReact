export default function AddTask({
  idSection,
  buttonQndClicar,
  inputValue,
  inputQndMudar,
  conteudo,
}) {
  return (
    <>
      <section id={idSection}>
        <input id="addTaskInpt" value={inputValue} onChange={inputQndMudar} />
        <button
          id="addTaskButton"
          onClick={() => {
            buttonQndClicar();
          }}
        >
          {conteudo}
        </button>
      </section>
    </>
  );
}
