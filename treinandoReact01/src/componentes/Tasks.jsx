import "../App.css";

function Tasks(props) {
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
            <button className="seta">&gt;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
