export default function LinhaTabelaOrcamento({
  primCampo,
  segCampo,
  tercCampo,
  quartoCampo,
  quintoCampo,
}) {
  return (
    <>
      <tr key={Date.now()}>
        <th className="linhas">{primCampo}</th>
        <th className="linhas">{segCampo}</th>
        <th className="linhas">{tercCampo}</th>
        <th className="linhas">{quartoCampo}</th>
        <th className="linhas">{quintoCampo}</th>
      </tr>
    </>
  );
}
