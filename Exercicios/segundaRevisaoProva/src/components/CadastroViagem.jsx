import { useRef } from "react";
import "../css/CadastroViagem.css";

export default function CadastroViagem({ addNewViagem }) {
  const dadosViagem = useRef({
    destino: "",
    data: "",
    valor: 0.0,
    kms: 0,
    reembolso: 0,
  });
  return (
    <>
      <div className="camposParaInserir">
        <div>
          <label htmlFor="destino">Destino</label>
          <input
            onChange={(e) => (dadosViagem.current.destino = e.target.value)}
            id="destino"
            type="text"
            placeholder="Ex: Curitiba"
          />
        </div>
        <div>
          <label htmlFor="data">Data</label>
          <input
            onChange={(e) => (dadosViagem.current.data = e.target.value)}
            id="data"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="valor">Valor Gasto (R$)</label>
          <input
            onChange={(e) => (dadosViagem.current.valor = e.target.value)}
            id="valor"
            type="number"
            placeholder="0.00"
          />
        </div>
        <div>
          <label htmlFor="kms">KM rodados</label>
          <input
            onChange={(e) => (dadosViagem.current.kms = e.target.value)}
            id="kms"
            type="number"
            placeholder="0"
          />
        </div>
        <div>
          <label htmlFor="reembolso">Reembolso (R$)</label>
          <input
            onChange={(e) => (dadosViagem.current.reembolso = e.target.value)}
            id="reembolso"
            type="number"
            placeholder="0.00"
          />
        </div>
        <div className="btnAddViagem">
          <button
            onClick={() =>
              addNewViagem(
                dadosViagem.current.destino,
                dadosViagem.current.data,
                dadosViagem.current.valor,
                dadosViagem.current.kms,
                dadosViagem.current.reembolso
              )
            }
            className="buttonEnviar"
          >
            + Adicionar Viagem
          </button>
        </div>
      </div>
    </>
  );
}
