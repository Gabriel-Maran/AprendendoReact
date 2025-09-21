import { useEffect, useReducer, useState } from "react";
import "../css/Board.css";
import AddTaskModal from "./AddTaskModal";

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function Board() {
  const [modalOpen, setModalOpen] = useState(false);
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

  return (
    <>
      <section id="board-container">
        <section id="board">
          <div id="todo">
            <div className="bloco-Escrita">
              <h2>To Do</h2>
            </div>
            <div className="bloco-Itens"></div>
          </div>
          <div id="doing">
            <div className="bloco-Escrita">
              <h2>Doing</h2>
            </div>
            <div className="bloco-Itens">
              <p>A</p>
            </div>
          </div>
          <div id="done">
            <div className="bloco-Escrita">
              <h2>Done</h2>
            </div>
            <div className="bloco-Itens">
              <p>A</p>
            </div>
          </div>
        </section>
        <section id="botaoAddTask">
          <button onClick={() => setModalOpen(!modalOpen)}>
            {modalOpen ? "✖" : "✚"}
          </button>
        </section>
        <AddTaskModal
          botaoClicado={btnClicado || false}
          estaAberto={modalOpen}
        />
      </section>
    </>
  );
}
