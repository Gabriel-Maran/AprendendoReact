import { useEffect, useReducer, useState } from "react";
import "../css/Board.css";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import Task from "./Task";

function reducer(state, action) {
  if (action.type === "onAdd") {
    const update = [...state.todoList, action.payload];
    return {
      ...state,
      todoList: update,
    };
  } else if (action.type === "openingTask") {
    const storage = action.payload.nameStorage;
    const itens = JSON.parse(localStorage.getItem(storage)) || [];
    const newItens = itens.map((item) =>
      item.id === action.payload.id ? { ...item, isOpen: !item.isOpen } : item
    );
    if (storage === "TODO-STORAGE") {
      return { ...state, todoList: newItens };
    } else if (storage === "DOING-STORAGE") {
      return { ...state, doingList: newItens };
    } else if (storage === "DONE-STORAGE") {
      return { ...state, doneList: newItens };
    }
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

  function openAndCloseTaskModal(itemId, storage) {
    dispatch({
      type: "openingTask",
      payload: {
        id: itemId,
        nameStorage: storage,
      },
    });
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
                  <Task
                    key={item.id}
                    abreFecha={openAndCloseTaskModal}
                    item={item}
                    storage={"TODO-STORAGE"}
                  />
                );
              })}
            </div>
          </div>
          <div id="doing">
            <div className="bloco-Escrita">
              <h2>Doing</h2>
            </div>
            <div className="bloco-Itens">
              {state.doingList.map((item) => {
                return (
                  <Task
                    key={item.id}
                    abreFecha={openAndCloseTaskModal}
                    item={item}
                    storage={"DOING-STORAGE"}
                  />
                );
              })}
            </div>
          </div>
          <div id="done">
            <div className="bloco-Escrita">
              <h2>Done</h2>
            </div>
            <div className="bloco-Itens">
              {state.doneList.map((item) => {
                return (
                  <Task
                    key={item.id}
                    abreFecha={openAndCloseTaskModal}
                    item={item}
                    storage={"DONE-STORAGE"}
                  />
                );
              })}
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
