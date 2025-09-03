export default function BotaoTask({ children, execucao, idButton }) {
  return (
    <>
      <button
        id={idButton}
        onClick={() => {
          execucao();
        }}
      >
        {children}
      </button>
    </>
  );
}
