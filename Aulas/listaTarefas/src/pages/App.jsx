import { useEffect, useState } from "react";
import "../css/App.css";
import Task from "../componentes/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskType, setTaskType] = useState("");
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function onComplete(task) {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, complete: !t.complete } : t))
    );
  }

  function onDelete(task) {
    setTasks(tasks.filter((tarefa) => tarefa.id != task.id));
  }

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <div className="input-container">
        <input
          onChange={(e) => setTaskType(e.target.value)}
          type="text"
          placeholder="Digite uma tarefa"
        />
        <button
          onClick={() =>
            taskType != ""
              ? setTasks([
                  ...tasks,
                  { id: tasks.length + 1, tarefa: taskType, complete: false },
                ])
              : ""
          }
        >
          Adicionar
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            idTexto={task.complete ? "lineCompleted" : ""}
            tarefaNome={task.tarefa}
            task={task}
            completar={() => onComplete(task)}
            deletar={() => onDelete(task)}
          />
        ))}
      </ul>
    </div>
  );
}
