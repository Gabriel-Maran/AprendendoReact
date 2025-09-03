import { useState } from "react";
import "./App.css";
import AddTask from "./componentes/AddTask";
import TaskItem from "./componentes/TaskItem";
import Tasks from "./componentes/Tasks";
import { TodoAPI } from "./shared/services/api/TodoAPI";

TodoAPI.getAll().then((data) => console.log("APP", data));

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    { id: "1", tarefa: "Fazer Café", complete: false },
    { id: "4", tarefa: "Fazer Café", complete: false },
    { id: "2", tarefa: "Fazer Almoço", complete: false },
    { id: "3", tarefa: "Fazer Janta", complete: false },
  ]);
  function add() {
    setTasks([...tasks, { id: (tasks.length + 1).toString(), tarefa: value }]);
    setValue("");
  }
  function markCompleted(listItem) {
    setTasks(
      tasks.map((task) =>
        task.id === listItem.id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  return (
    <>
      <section id="listaTarefas">
        {/* 
      'e' é o evento disparado no onChange,
      'e.target' é o input que disparou o evento,
      'e.target.value' é o valor digitado pelo usuário. 
      */}
        <AddTask
          inputValue={value}
          inputQndMudar={(e) => setValue(e.target.value)}
          buttonQndClicar={() => add()}
          idSection={"addTask"}
          conteudo={"Adicionar"}
        />
        <Tasks idTasks={"idTasks"}>
          {tasks.map((listItem) => (
            <TaskItem
              idTask={
                listItem.complete ? "taskIndividualConcluida" : "taskIndividual"
              }
              task={listItem}
              key={listItem.id}
              onRemove={() =>
                setTasks([...tasks.filter((task) => task.id !== listItem.id)])
              }
              onCompleted={() => markCompleted(listItem)}
            />
          ))}
        </Tasks>
      </section>
    </>
  );
}

export default App;
