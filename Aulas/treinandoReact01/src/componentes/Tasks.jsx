import { useNavigate } from "react-router-dom";
import "../App.css";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDatailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <>
      <ul className="camposTask">
        {props.tasks.map((task) => (
          <li className="blocosTarefas">
            <button
              className={`escritaTask ${task.isCompleted ? "lineThrough" : ""}`}
              onClick={() => props.onTaskClick(task.id)}
            >
              {task.title}
            </button>
            <button className="seta" onClick={() => onSeeDatailsClick(task)}>
              &gt;
            </button>
            <button
              className="delete"
              onClick={() => props.onDeleteClick(task.id)}
            >
              <img src=".\src\assets\trash-alt.svg" alt="" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
