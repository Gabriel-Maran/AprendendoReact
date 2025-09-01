export default function BotaoTask({ children, execucao }) {
  return (
    <>
      <button
        onClick={() => {
          execucao();
        }}
      >
        {children}
      </button>
    </>
  );
}
