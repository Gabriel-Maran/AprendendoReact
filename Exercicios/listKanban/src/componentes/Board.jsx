import { useEffect, useReducer, useState } from "react";
import "../css/Board.css";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";

function reducer(state, action) {
  if (action.type === "onAdd") {
    const update = [...state.todoList, action.payload];
    return {
      todoList: update,
    };
  }

  return state;
}

export default function Board() {
  const [modalOpen, setModalOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    todoList: JSON.parse(localStorage.getItem("TODO-STORAGE") || "[]"),
    doingList: JSON.parse(localStorage.getItem("DOING-STORAGE") || "[]"),
    doneList: JSON.parse(localStorage.getItem("DONE-STORAGE") || "[]"),
  });

  function handleTask(newTask) {
    {
      dispatch({ type: "onAdd", payload: newTask });
    }
  }

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
            <div className="bloco-Itens">
              {state.todoList.map((item) => {
                return (
                  <div key={item.id} className="task-block">
                    <p>Tarefa: {item.titulo}</p>
                    <p>Previsão para fim: {item.fimPrevisto}</p>
                    <div>
                      <button>&lt;</button>
                      <button
                        onClick={() => {
                          {
                            /*
                            dispatch({
                              type: "openingTask",
                              payload: item.id,
                              nameStorage: "TODO-STORAGE",
                            });
                            */
                            //A criar dispatch para atualizar o state com o valor de open = true, para abrir o modal individual de cada task
                            //Posso fazer isso como uma pagina sobreescrita, com o id da task(ideia, caso esta de errado)
                          }
                        }}
                      >
                        ≡
                      </button>
                      <button>&gt;</button>
                    </div>
                    <TaskModal open={item.isOpen} task={item} />
                  </div>
                );
              })}
            </div>
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
        <AddTaskModal onAddTAsk={handleTask} estaAberto={modalOpen} />
      </section>
    </>
  );
}
