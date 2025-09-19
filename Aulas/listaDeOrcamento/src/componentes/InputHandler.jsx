export default function InputHandler() {
  return (
    <>
      <input
        onChange={() => {
          qndMudar();
        }}
        className="inputsOrcamento"
        type="text"
        placeholder="Descrição"
      />
    </>
  );
}
