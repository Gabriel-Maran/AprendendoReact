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
        <input value={inputValue} onChange={inputQndMudar} />
        <button
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
