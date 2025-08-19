import SquircleRow from "./SquircleRow";

function QuadroBranco({ idQuadro }) {
  return (
    <>
      <div id={idQuadro}>
        <SquircleRow></SquircleRow>
        <SquircleRow></SquircleRow>
        <SquircleRow></SquircleRow>
        <SquircleRow></SquircleRow>
      </div>
    </>
  );
}

export default QuadroBranco;
