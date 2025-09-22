import { useEffect, useReducer, useState } from "react";
import "../css/Board.css";
import AddTaskModal from "./AddTaskModal";
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
  } else if (action.type === "nextStorage") {
    let listWithoutItemToMove = [];
    let itemToMove = "";
    if (action.payload.nameStorage === "TODO-STORAGE") {
      state.todoList.map((item) => {
        item.id === action.payload.id
          ? (itemToMove = { ...item, estaEm: "Doing" })
          : listWithoutItemToMove.push(item);
      });
      let newListDoing =
        JSON.parse(localStorage.getItem("DOING-STORAGE")) || [];
      console.log(newListDoing);
      newListDoing.push(itemToMove);
      return {
        ...state,
        todoList: listWithoutItemToMove || [],
        doingList: newListDoing || [],
      };
    } else {
      state.doingList.map((item) => {
        item.id === action.payload.id
          ? (itemToMove = { ...item, estaEm: "Done" })
          : listWithoutItemToMove.push(item);
      });
      let newListDoing = JSON.parse(localStorage.getItem("DONE-STORAGE")) || [];
      newListDoing.push(itemToMove);
      return {
        ...state,
        doingList: listWithoutItemToMove || [],
        doneList: newListDoing || [],
      };
    }
  } else if (action.type === "previousStorage") {
    let listWithoutItemToMove = [];
    let itemToMove = "";
    if (action.payload.nameStorage === "DOING-STORAGE") {
      state.doingList.map((item) => {
        item.id === action.payload.id
          ? (itemToMove = { ...item, estaEm: "ToDo" })
          : listWithoutItemToMove.push(item);
      });
      let newListToDo = JSON.parse(localStorage.getItem("TODO-STORAGE")) || [];
      console.log(newListToDo);
      newListToDo.push(itemToMove);
      return {
        ...state,
        todoList: newListToDo || [],
        doingList: listWithoutItemToMove || [],
      };
    } else if (action.payload.nameStorage === "DONE-STORAGE") {
      state.doneList.map((item) => {
        item.id === action.payload.id
          ? (itemToMove = { ...item, estaEm: "Doing" })
          : listWithoutItemToMove.push(item);
      });
      let newListDoing =
        JSON.parse(localStorage.getItem("DOING-STORAGE")) || [];
      console.log(newListDoing);
      newListDoing.push(itemToMove);
      return {
        ...state,
        doingList: newListDoing || [],
        doneList: listWithoutItemToMove || [],
      };
    }
  } else if (action.type === "deleteModal") {
    const storage = action.payload.nameStorage;
    const itens = JSON.parse(localStorage.getItem(storage)) || [];
    const newItens = [];
    itens.map((item) =>
      item.id === action.payload.id ? "" : newItens.push(item)
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

  function onDeleteModal(itemId, storage) {
    dispatch({
      type: "deleteModal",
      payload: {
        id: itemId,
        nameStorage: storage,
      },
    });
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

  function nextStorage(id, storage) {
    dispatch({
      type: "nextStorage",
      payload: {
        id: id,
        nameStorage: storage,
      },
    });
  }

  function previousStorage(id, storage) {
    dispatch({
      type: "previousStorage",
      payload: {
        id: id,
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
                    deleteModal={() => onDeleteModal(item.id, "TODO-STORAGE")}
                    item={item}
                    storage={"TODO-STORAGE"}
                    onNextStorage={() => {
                      nextStorage(item.id, "TODO-STORAGE");
                    }}
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
                    deleteModal={() => onDeleteModal(item.id, "DOING-STORAGE")}
                    storage={"DOING-STORAGE"}
                    onNextStorage={() => {
                      nextStorage(item.id, "DOING-STORAGE");
                    }}
                    onPreviousStorage={() => {
                      previousStorage(item.id, "DOING-STORAGE");
                    }}
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
                    deleteModal={() => onDeleteModal(item.id, "DONE-STORAGE")}
                    item={item}
                    storage={"DONE-STORAGE"}
                    onPreviousStorage={() => {
                      previousStorage(item.id, "DONE-STORAGE");
                    }}
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
