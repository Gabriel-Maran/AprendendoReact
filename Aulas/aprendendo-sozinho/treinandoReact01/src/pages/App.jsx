import Tasks from "../componentes/Tasks";
import AddTask from "../componentes/AddTask";
import "../App.css";
import { useEffect, useState } from "react";

function App() {
  //Não se usa if, se usa assim {condição && oq executa}, {task.id == 1 && console.log(1)} ou {task.id == 1 ? console.log(1) : null}
  // State ( Estado )
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      //Chamar API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      //Pegar dados que a API retorna
      const data = await response.json();

      //Armazenar/persistir esses dados no state
      setTask(data.map(tasks));
    };
    //fetchTasks(); // Pode ser mudado para usar uma API que crie no banco de dados... Este modelo é apenas demonstrativo
  });

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
