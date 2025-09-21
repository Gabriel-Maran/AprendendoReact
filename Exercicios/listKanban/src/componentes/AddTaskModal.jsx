import Modal from "react-modal";
import "../css/AddTaskModal.css";
import { useRef } from "react";
Modal.setAppElement("#root");
export default function AddTaskModal({ estaAberto }) {
  const titulo = useRef("");
  const desc = useRef("");
  const fimPrev = useRef();
  function addTask(titulo, desc, fimPrev) {
    let content = JSON.parse(localStorage.getItem("TODO-STORAGE")) || [];
    content.push({
      id: crypto.randomUUID(),
      titulo: titulo,
      descricao: desc,
      estaEm: "ToDo",
      fimPrevisto: fimPrev,
    });
    localStorage.setItem("TODO-STORAGE", JSON.stringify(content));
  }
  return (
    <>
      <Modal id="modalMain" isOpen={estaAberto}>
        <h2>Adicione a Task:</h2>
        <div className="pergunta">
          <label htmlFor="titulo">Titúlo:</label>
          <input ref={titulo} id="titulo" type="text" />
        </div>
        <div className="pergunta">
          <label htmlFor="desc">Descrição:</label>
          <input ref={desc} id="desc" type="text" />
        </div>
        <div className="pergunta">
          <label htmlFor="dataFimPrev">Fim previsto:</label>
          <input ref={fimPrev} id="dataFimPrev" type="date" />
        </div>
        <div>
          <button
            onClick={() => {
              if (!titulo) return;
              addTask(
                titulo.current.value,
                desc.current.value,
                fimPrev.current.value
              );
            }}
            id="addNewTask"
          >
            Add task
          </button>
        </div>
      </Modal>
    </>
  );
}
