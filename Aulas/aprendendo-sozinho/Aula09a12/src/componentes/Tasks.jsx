export default function Tasks({ children, idTasks }) {
  return (
    <>
      <ol id={idTasks}>{children}</ol>
    </>
  );
}
