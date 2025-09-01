import BotaoTask from "./BotaoTask";

export default function TaskItem({ task, onRemove, onCompleted, idTask }) {
  return (
    <>
      <li id={idTask}>
        <p>{task.tarefa}</p>
        <BotaoTask execucao={() => onRemove()}>remover</BotaoTask>
        <BotaoTask execucao={() => onCompleted()}>concluir</BotaoTask>
      </li>
    </>
  );
}
