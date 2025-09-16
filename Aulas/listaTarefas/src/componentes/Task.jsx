export default function Task({
  idTexto,
  completar,
  deletar,
  tarefaNome,
  task,
}) {
  return (
    <>
      <li>
        <p id={idTexto}>{tarefaNome}</p>
        <div>
          <button
            onClick={() => {
              completar();
            }}
            className="complete-btn"
          >
            ✔
          </button>
          <button
            disabled={task.complete}
            onClick={() => deletar()}
            className="delete-btn"
          >
            ❌
          </button>
        </div>
      </li>
    </>
  );
}
