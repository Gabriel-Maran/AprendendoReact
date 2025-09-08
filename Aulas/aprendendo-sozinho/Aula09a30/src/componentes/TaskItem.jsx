import { Link } from "react-router";
import BotaoTask from "./BotaoTask";

export default function TaskItem({ task, onRemove, onCompleted, idTask }) {
  return (
    <>
      <li id={idTask}>
        <Link to={`/detail/${task.id}`} id="linkTask">
          <p>{task.tarefa}</p>
        </Link>
        <div id="botoesInteragiveis">
          <BotaoTask idButton={"btnConcluir"} execucao={() => onCompleted()}>
            Concluir
          </BotaoTask>
          <BotaoTask idButton={"btnExcluir"} execucao={() => onRemove()}>
            Remover
          </BotaoTask>
        </div>
      </li>
    </>
  );
}
