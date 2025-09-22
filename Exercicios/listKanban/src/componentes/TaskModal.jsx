import Modal from "react-modal";
import "../css/TaskModal.css";

Modal.setAppElement("#root");
export default function TaskModal({ task, open, closeModal, deleteModal }) {
  return (
    <>
      <Modal className="taskModal" isOpen={open}>
        <div className="blocoTasks">
          <div className="blocoTitulo">
            <div className="itensAEsquerdaTitulo">
              <button onClick={closeModal}>✖</button>
            </div>
            <div className="itensACentroTitulo">
              <h2>{task.titulo}</h2>
            </div>
            <div className="itensADiretaTitulo">
              <button onClick={deleteModal}>🗑️</button>
            </div>
          </div>
          <div className="listagemItens">
            <ul>
              <li>
                <p>Descrição:</p>
              </li>
              <ul>
                <li>
                  <p>{task.descricao}</p>
                </li>
              </ul>
              <li>
                <p>Previsão para fim: {task.fimPrevisto}</p>
              </li>
            </ul>
          </div>
          <footer>
            <h4>{task.estaEm} item</h4>
          </footer>
        </div>
      </Modal>
    </>
  );
}
