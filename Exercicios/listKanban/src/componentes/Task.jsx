import TaskModal from "./TaskModal";

export default function Task({ item, abreFecha, storage }) {
  return (
    <>
      <div className="task-block">
        <p>Tarefa: {item.titulo}</p>
        <p>Previsão para fim: {item.fimPrevisto}</p>
        <div>
          <button className="buttonAdvanceReturn">&lt;</button>
          <button
            className="buttonAdvanceReturn"
            onClick={() => abreFecha(item.id, storage)}
          >
            ≡
          </button>
          <button className="buttonAdvanceReturn">&gt;</button>
        </div>
        <TaskModal
          buttonClick={() => abreFecha(item.id, storage)}
          open={item.isOpen}
          task={item}
        />
      </div>
    </>
  );
}
