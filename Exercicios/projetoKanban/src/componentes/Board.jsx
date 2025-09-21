import { useEffect, useReducer, useRef, useState } from "react";
import "../css/Board.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
function reducer(state, action) {
  console.log(state.payload?.titulo);
  switch (action.type) {
    case "addNewTask": {
      const { titulo, descricao, dataPrevFim } = action.payload || {};
      if (!titulo) return state;
      const newTask = {
        id: crypto.randomUUID(),
        titulo: titulo,
        descricao: descricao,
        colunaAtual: "ToDo",
        dataInicio: Date.now(),
        dataPrevFim: dataPrevFim,
      };
      return {
        todoList: [...(state.todoList || []), newTask],
      };
    }
    default:
      return state;
  }
}

export default function Board() {
  const [state, dispatch] = useReducer(reducer, {
    todoList: JSON.parse(localStorage.getItem("TODO-STORAGE") || "[]"),
    doingList: JSON.parse(localStorage.getItem("DOING-STORAGE") || "[]"),
    doneList: JSON.parse(localStorage.getItem("DONE-STORAGE") || "[]"),
  });

  useEffect(() => {
    localStorage.setItem("TODO-STORAGE", JSON.stringify(state.todoList) || []);
  }, [state.todoList]);
  useEffect(() => {
    localStorage.setItem(
      "DOING-STORAGE",
      JSON.stringify(state.doingList) || []
    );
  }, [state.doingList]);
  useEffect(() => {
    localStorage.setItem("DONE-STORAGE", JSON.stringify(state.doneList) || []);
  }, [state.doneList]);

  const titulo = useRef(null);
  const desc = useRef(null);
  const dataPrevFim = useRef(null);
  console.log(state.todoList);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <section id="board-container">
        <section id="board">
          <div className="itemBoardHead">
            <h3>To do</h3>
            {state.todoList.map((item) => {
              return (
                <div key={item.id} className="itemBoard">
                  <p>Titúlo: {item.titulo}</p>
                  <p>Descrição: {item.descricao}</p>
                  <p>Data prev. de Fim: {item.dataPrevFim}</p>
                </div>
              );
            })}
          </div>
          <div className="itemBoardHead">
            <h3>Doing</h3>
          </div>
          <div className="itemBoardHead">
            <h3>Done</h3>
          </div>
        </section>
        <button
          id="buttonAddNewTask"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          +
        </button>
      </section>
      <Modal id="modalAddTask" isOpen={modalIsOpen}>
        <section id="newTask">
          <header id="cabecalhoNewTask">
            <div id="headerLeftNewTask">
              <button
                id="botaoVoltarNewTask"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              >
                &lt; Voltar
              </button>
            </div>
            <div id="headerCentertNewTask">
              <h2>Add Task</h2>
            </div>
            <div id="headerRightNewTask"></div>
          </header>
          <label htmlFor="titulo">Titúlo:</label>
          <input
            ref={titulo}
            id={"titulo"}
            type="text"
            maxLength={15}
            placeholder="Titúlo"
          />
          <label htmlFor="desc">Descrição:</label>
          <input ref={desc} id={"desc"} type="text" placeholder="Descrição" />
          <label htmlFor="previConclusao">Previsão termino:</label>
          <input
            ref={dataPrevFim}
            id={"previConclusao"}
            type="date"
            placeholder="Data de conclusão"
          />
          <button
            onClick={() => {
              dispatch({
                type: "addNewTask",
                payload: {
                  titulo: titulo.current.value,
                  descricao: desc.current.value,
                  dataPrevFim: dataPrevFim.current.value,
                },
              });
            }}
            id="botaoAddTask"
          >
            Add Task
          </button>
        </section>
      </Modal>
    </>
  );
}
