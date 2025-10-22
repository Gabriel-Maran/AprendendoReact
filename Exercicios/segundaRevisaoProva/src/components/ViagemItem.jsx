import { useMemo } from "react";
import "../css/ViagemItem.css";

export default function ViagemItem({ viagem, excluirRegistro }) {
  const saldoTotal = useMemo(() => {
    return (
      Number.parseFloat(viagem.reembolsoCampo) -
      Number.parseFloat(viagem.valorCampo)
    );
  }, [viagem]);
  return (
    <>
      <tr>
        <th className="itemNormalFont">{viagem.dataCampo}</th>
        <th className="itemNormalFont">{viagem.destinoCampo}</th>
        <th className="itemNormalFont">{viagem.valorCampo.toFixed(2)}</th>
        <th className="itemNormalFont">{viagem.kmsCampo}</th>
        <th className="itemNormalFont">{viagem.reembolsoCampo.toFixed(2)}</th>
        <th className={saldoTotal >= 0 ? "saldoPositivo" : "saldoNegativo"}>
          {saldoTotal >= 0 ? "+" : ""}
          {saldoTotal.toFixed(2)}
        </th>
        <th>
          <button
            className="botãoExcluir"
            onClick={() => excluirRegistro(viagem.id)}
          >
            X
          </button>
        </th>
      </tr>
    </>
  );
}
