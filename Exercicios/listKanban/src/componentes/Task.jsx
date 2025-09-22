import TaskModal from "./TaskModal";

export default function Task({
  item,
  abreFecha,
  storage,
  onNextStorage,
  onPreviousStorage,
  deleteModal,
}) {
  return (
    <>
      <div className="task-block">
        <p>Tarefa: {item.titulo}</p>
        <p>Previsão para fim: {item.fimPrevisto}</p>
        <div>
          {storage != "TODO-STORAGE" && (
            <button className="buttonAdvanceReturn" onClick={onPreviousStorage}>
              &lt;
            </button>
          )}
          <button
            className="buttonAdvanceReturn"
            onClick={() => abreFecha(item.id, storage)}
          >
            ≡
          </button>
          {storage != "DONE-STORAGE" && (
            <button className="buttonAdvanceReturn" onClick={onNextStorage}>
              &gt;
            </button>
          )}
        </div>
        <TaskModal
          closeModal={() => abreFecha(item.id, storage)}
          deleteModal={deleteModal}
          open={item.isOpen}
          task={item}
        />
      </div>
    </>
  );
}
