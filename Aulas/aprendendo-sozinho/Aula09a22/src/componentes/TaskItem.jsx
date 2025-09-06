import BotaoTask from "./BotaoTask";

export default function TaskItem({ task, onRemove, onCompleted, idTask }) {
  return (
    <>
      <li id={idTask}>
        <p id="nomeTarefa">{task.tarefa}</p>
        <div id="botoesInteragiveis">
          {!task.complete ? (
            <BotaoTask idButton={"btnConcluir"} execucao={() => onCompleted()}>
              Concluir
            </BotaoTask>
          ) : (
            ""
          )}

          <BotaoTask idButton={"btnExcluir"} execucao={() => onRemove()}>
            Remover
          </BotaoTask>
        </div>
      </li>
    </>
  );
}
