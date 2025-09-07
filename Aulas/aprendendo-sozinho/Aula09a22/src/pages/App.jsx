import { useState, useEffect } from "react";
import AddTask from "../componentes/AddTask";
import TaskItem from "../componentes/TaskItem";
import Tasks from "../componentes/Tasks";
import { TodoAPI } from "../shared/services/api/TodoAPI";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    TodoAPI.getAll().then((data) => setTasks(data));
    // UseEffect: Executa toda vez que algo dentro dos '[]' mudar, ou seja,
    // se eu colocar vazio, executa uma vez(qnd carrega a page), se eu nn colocar nada, toda render nova ele executa
    // se eu coloca '[task]', vai executar sempre que o task for atualizado. Ele realiza algo, quando algo muda
    // Ou seja, sempre roda na montagem inicial + quando qualquer dependência listada mudar.
  }, []);
  function add() {
    TodoAPI.create({ tarefa: value, complete: false }).then((data) => {
      setTasks([...tasks, data]);
      setValue("");
    });
  }

  function markCompleted(listItem) {
    setTasks(
      tasks.map((task) =>
        task.id === listItem.id ? { ...task, complete: !task.complete } : task
      )
    );
    TodoAPI.updateById(listItem.id, {
      ...listItem,
      complete: !listItem.complete,
    });
  }

  function onRemove(id) {
    setTasks([...tasks.filter((task) => task.id !== id)]);
    TodoAPI.deleteById(id);
  }

  return (
    <>
      <section className="sectionMain">
        <h1>TODO List</h1>
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
          conteudo={"Add"}
        />
        <Tasks idTasks={"idTasks"}>
          {tasks.length == 0 && (
            <section id="noTaskText">
              <h3>There's no task avaliabe</h3>
            </section>
          )}
          {tasks.map((listItem) => (
            <TaskItem
              idTask={
                listItem.complete ? "taskIndividualConcluida" : "taskIndividual"
              }
              task={listItem}
              key={listItem.id}
              onRemove={() => onRemove(listItem.id)}
              onCompleted={() => markCompleted(listItem)}
            />
          ))}
        </Tasks>
      </section>
    </>
  );
}

export default App;
