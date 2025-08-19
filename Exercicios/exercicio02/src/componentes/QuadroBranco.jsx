import SquircleRow from "./SquircleRow";

function QuadroBranco({ idQuadro }) {
  return (
    <>
      <div id={idQuadro}>
        <SquircleRow idRow={"rowSquircle"}></SquircleRow>
        <SquircleRow idRow={"rowSquircle"}></SquircleRow>
        <SquircleRow idRow={"rowSquircle"}></SquircleRow>
        <SquircleRow idRow={"rowSquircle"}></SquircleRow>
      </div>
    </>
  );
}

export default QuadroBranco;
