import { useEffect, useState } from "react";
import Task from "../componentes/Task";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("LISTA_TAREFAS");
    return raw ? JSON.parse(raw) : [];
  });
  const [taskType, setTaskType] = useState("");

  useEffect(() => {
    localStorage.setItem("LISTA_TAREFAS", JSON.stringify(tasks));
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
          onClick={() => {
            if (!taskType.trim()) return;
            const newTask = {
              id: Date.now(),
              tarefa: taskType,
              complete: false,
            };
            const tarefas = [...tasks, newTask];
            setTasks(tarefas);
          }}
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
