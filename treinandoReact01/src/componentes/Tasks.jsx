import "../App.css";

function Tasks(props) {
  return (
    <>
      <section>
        <div className="blocosTarefas">
          <h4>{props.tasks[0].title}</h4>
        </div>
        <div className="blocosTarefas">
          <h4>{props.tasks[1].title}</h4>
        </div>
        <div className="blocosTarefas">
          <h4>{props.tasks[2].title}</h4>
        </div>
      </section>
    </>
  );
}

export default Tasks;
