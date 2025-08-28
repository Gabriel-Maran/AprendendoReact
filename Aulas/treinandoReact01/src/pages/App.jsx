import Tasks from "../componentes/Tasks";
import AddTask from "../componentes/AddTask";
import "../App.css";
import { useEffect, useState } from "react";

function App() {
  // State ( Estado )
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    let resultado = confirm("Confirma que deseja excluir ?");
    if (resultado) {
      setTask(tasks.filter((task) => task.id != taskId));
    }
  }

  return (
    <>
      <h2>Gerenciador de Tarefas</h2>
      <AddTask tasks={tasks} onTaskSubmited={onTaskSubmited} />
      <Tasks
        tasks={tasks}
        onDeleteClick={onDeleteClick}
        onTaskClick={onTaskClick}
      />
    </>
  );
}

export default App;
