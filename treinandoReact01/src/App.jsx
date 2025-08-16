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
  return (
    <>
      <h2>Gerenciador de Tarefas</h2>
      <AddTask />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
