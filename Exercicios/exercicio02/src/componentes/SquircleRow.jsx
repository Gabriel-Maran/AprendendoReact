import SquircleAzul from "./SquircleAzul";
function SquircleRow({ idRow }) {
  return (
    <>
      <div id={idRow}>
        <SquircleAzul idSquircle="squircleAzulRight"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulLeft"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulRight"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulLeft"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulRight"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulLeft"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulRight"></SquircleAzul>
        <SquircleAzul idSquircle="squircleAzulLeft"></SquircleAzul>
      </div>
    </>
  );
}

export default SquircleRow;
