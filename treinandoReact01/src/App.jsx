import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import "./App.css";
import { useState } from "react";

function App() {
  // State ( Estado )
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar e estudar",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Comer",
      description: "Comer e comer",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Dormir",
      description: "Dormir e dormir",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    setTask(
      tasks.map((task) => {
        if (task.id == taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }

  function onTaskSubmited(title, description) {
    setTask([
      ...tasks,
      {
        id: tasks.length + 1,
        title,
        description,
        isCompleted: false,
      },
    ]);
  }

  function onDeleteClick(taskId) {
    setTask(tasks.filter((task) => task.id != taskId));
  }

  return (
    <>
      <h2>Gerenciador de Tarefas</h2>
      <AddTask tasks={tasks} onTaskSubmited={onTaskSubmited} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteClick={onDeleteClick}
      />
    </>
  );
}

export default App;
