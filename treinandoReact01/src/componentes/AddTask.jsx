import { useState } from "react";
import "../App.css";
import Tasks from "./Tasks";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTitle("");
    setDesc("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="addNewTask" className="camposTask">
        <input
          className="campoEntrada"
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onSubmit={(event) => setTitle(event.target.value)}
        />
        <input
          className="campoEntrada"
          type="text"
          placeholder="Descrição da tarefa"
          value={desc}
          onSubmit={(event) => setDesc(event.target.value)}
        />
        <button
          className="adicionarTask"
          onClick={() => {
            props.onTaskSubmited(title, desc);
          }}
        >
          Adicionar
        </button>
      </form>
    </>
  );
}

export default AddTask;
