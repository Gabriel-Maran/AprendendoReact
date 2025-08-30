import { useRef, useState } from "react";
import "../App.css";
import Tasks from "./Tasks";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const descRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setTitle("");
    setDesc("");
  }

  const ajustarAltura = () => {
    descRef.current.style.height = "auto";
    descRef.current.style.height = descRef.current.scrollHeight + "px";
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="addNewTask" className="camposTask">
        <input
          required
          maxLength={18}
          className="campoEntrada"
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          required
          ref={descRef}
          className="campoEntrada"
          type="text"
          placeholder="Descrição da tarefa"
          value={desc}
          onChange={(event) => {
            setDesc(event.target.value);
            ajustarAltura();
          }}
        />
        <button
          className="adicionarTask"
          onClick={() => {
            if (title != "" && desc != "") props.onTaskSubmited(title, desc);
          }}
        >
          Adicionar
        </button>
      </form>
    </>
  );
}

export default AddTask;
