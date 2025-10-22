import { useEffect, useMemo, useState } from "react";
import CadastroViagem from "../components/CadastroViagem";
import "../css/App.css";
import ViagemItem from "../components/ViagemItem";

function App() {
  const [viagens, setViagens] = useState(() => {
    const raw = localStorage.getItem("STORAGE-VIAGENS");
    return raw ? JSON.parse(raw) : [];
  });

  function addViagem(destino, data, valor, kms, reembolso) {
    let dataExtraida = new Date(data);
    let newDestino = destino.trim();
    let newKms = Number.parseInt(kms);
    let newValor = Number.parseFloat(valor);
    let newReembolso = Number.parseFloat(reembolso);

    if (
      !newDestino ||
      !dataExtraida ||
      newKms == 0 ||
      newValor < 0 ||
      newReembolso < 0
    )
      return;
    let newData =
      dataExtraida.getUTCDate() +
      "/" +
      dataExtraida.getUTCMonth() +
      "/" +
      dataExtraida.getUTCFullYear();

    setViagens([
      ...viagens,
      {
        id: crypto.randomUUID(),
        destinoCampo: newDestino,
        dataCampo: newData,
        valorCampo: newValor,
        kmsCampo: newKms,
        reembolsoCampo: newReembolso,
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("STORAGE-VIAGENS", JSON.stringify(viagens));
  }, [viagens]);

  const totalKm = useMemo(() => {
    return viagens.reduce((acum, val) => {
      return (acum += val.kmsCampo);
    }, 0);
  }, [viagens]);

  const totalGasto = useMemo(() => {
    return viagens.reduce((acum, val) => {
      return (acum += val.valorCampo);
    }, 0);
  }, [viagens]);

  const totalReembolso = useMemo(() => {
    return viagens.reduce((acum, val) => {
      return (acum += val.reembolsoCampo);
    }, 0);
  }, [viagens]);

  function deleteViagem(id) {
    setViagens(viagens.filter((viagem) => viagem.id !== id));
  }
  return (
    <>
      <section id="container-main">
        <h1>Controle de Viagens</h1>
        <CadastroViagem addNewViagem={addViagem} />
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Destino</th>
              <th>Gasto (R$)</th>
              <th>KM</th>
              <th>Reembolso (R$)</th>
              <th>Saldo (R$)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {viagens.map((viagem) => {
              return (
                <ViagemItem
                  key={viagem.id}
                  viagem={viagem}
                  excluirRegistro={deleteViagem}
                />
              );
            })}
          </tbody>
        </table>
        <div className="observacoesAdicionais">
          <p className="itemObservacoes">
            <strong>Total Gasto: </strong>
            R$ {totalGasto.toFixed(2)}
          </p>
          <p className="itemObservacoes">
            <strong>Total KM: </strong>
            {totalKm} km
          </p>
          <p className="itemObservacoes">
            <strong>Total Reembolso: </strong>
            R$ {totalReembolso.toFixed(2)}
          </p>
          <p className="itemObservacoes">
            <strong>Saldo Final: </strong>
            <span
              className={
                totalReembolso >= totalGasto ? "saldoPositivo" : "saldoNegativo"
              }
            >
              {totalReembolso >= totalGasto ? "+" : ""}
              {(totalReembolso - totalGasto).toFixed(2)}
            </span>
          </p>
          <p className="itemObservacoes">
            <strong>Media de KM/Viagem: </strong>
            {totalKm / viagens.length} km
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
