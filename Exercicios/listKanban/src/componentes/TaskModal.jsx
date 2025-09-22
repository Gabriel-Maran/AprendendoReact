import Modal from "react-modal";

export default function TaskModal({ task, open }) {
  return (
    <>
      <Modal isOpen={open}>
        <p>Tarefa: {task.titulo}</p>
        <p>Descrição: {task.descricao}</p>
        <p>Previsão para fim: {task.fimPrevisto}</p>
        <p>{task.estaEm} item</p>
      </Modal>
    </>
  );
}
