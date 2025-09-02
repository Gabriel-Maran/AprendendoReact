import BotaoTask from "./BotaoTask";

export default function TaskItem({ task, onRemove, onCompleted, idTask }) {
  return (
    <>
      <li id={idTask}>
        <p id="nomeTarefa">{task.tarefa}</p>
        <div id="botoesInteragiveis">
          <BotaoTask execucao={() => onRemove()}>remover</BotaoTask>
          <BotaoTask execucao={() => onCompleted()}>concluir</BotaoTask>
        </div>
      </li>
    </>
  );
}
