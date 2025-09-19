export default function InputHandler({ qndMudar, campoNome }) {
  return (
    <>
      <input
        onChange={qndMudar}
        className="inputsOrcamento"
        type="text"
        placeholder={campoNome}
      />
    </>
  );
}
