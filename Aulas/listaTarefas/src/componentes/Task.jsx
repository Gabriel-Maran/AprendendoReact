export default function Task({ idTexto, completar, deletar, tarefaNome }) {
  return (
    <>
      <li>
        <p id={idTexto}>{tarefaNome}</p>
        <div>
          <button onClick={() => completar()} className="complete-btn">
            ✔
          </button>
          <button onClick={() => deletar()} className="delete-btn">
            ❌
          </button>
        </div>
      </li>
    </>
  );
}
