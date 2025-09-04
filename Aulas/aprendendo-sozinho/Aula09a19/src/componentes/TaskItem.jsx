import BotaoTask from "./BotaoTask";

export default function TaskItem({ task, onRemove, onCompleted, idTask }) {
  return (
    <>
      <li id={idTask}>
        <p id="nomeTarefa">{task.tarefa}</p>
        <div id="botoesInteragiveis">
          <BotaoTask idButton={"estiloBotao"} execucao={() => onRemove()}>
            remover
          </BotaoTask>
          <BotaoTask idButton={"estiloBotao"} execucao={() => onCompleted()}>
            concluir
          </BotaoTask>
        </div>
      </li>
    </>
  );
}
