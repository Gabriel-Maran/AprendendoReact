import { useEffect, useState } from "react";
import "../css/App.css";
import InputHandler from "../componentes/InputHandler";
import LinhaTabelaOrcamento from "../componentes/linhaTabelaOrcamento";

export default function App() {
  const [orcamento, setOrcamento] = useState(() => {
    const raw = localStorage.getItem("ITENS-STORAGE");
    return raw ? JSON.parse(raw) : [];
  });
  const [descHandle, setDescHandle] = useState("");
  const [qntdHandle, setQntdHandle] = useState("");
  const [valorHandle, setValorHandle] = useState("");
  const [valorTotal, setValorTotal] = useState(0);

  function adicionarItem(desc, qntd, valor) {
    setOrcamento([
      ...orcamento,
      {
        id: crypto.randomUUID(),
        descricao: desc,
        quantidade: Number.parseFloat(qntd),
        valor: Number.parseFloat(valor),
      },
    ]);
  }

  function excluirItem(id) {
    const newOrcamento = [];
    orcamento.filter((item) => (item.id == id ? "" : newOrcamento.push(item)));
    setOrcamento(newOrcamento);
  }
  useEffect(() => {
    const totalPrecos = orcamento.reduce((acum, itemAtual) => {
      return acum + itemAtual.valor * itemAtual.quantidade;
    }, 0);
    setValorTotal(totalPrecos);
  }, [orcamento]);

  useEffect(() => {
    localStorage.setItem("ITENS-STORAGE", JSON.stringify(orcamento));
  });

  return (
    <>
      <section className="orcamentoContainer">
        <h2>Orçamento</h2>
        <section className="blocoPrincipal">
          <section className="addOrcamento">
            <InputHandler
              qndMudar={(e) => setDescHandle(e.target.value)}
              campoNome={"Descrição"}
            />
            <InputHandler
              qndMudar={(e) => setQntdHandle(e.target.value)}
              campoNome={"Quantidade"}
            />
            <InputHandler
              qndMudar={(e) => setValorHandle(e.target.value)}
              campoNome={"Valor"}
            />
            <button
              onClick={() => adicionarItem(descHandle, qntdHandle, valorHandle)}
              id="addOrcamento"
            >
              +
            </button>
          </section>
          <table className="tableDesc">
            <thead>
              <LinhaTabelaOrcamento
                primCampo={"Descrição"}
                segCampo={"Qtd"}
                tercCampo={"Unitário"}
                quartoCampo={"Total"}
                quintoCampo={"Ações"}
              ></LinhaTabelaOrcamento>
            </thead>
            <tbody>
              {orcamento.map((item) => {
                return (
                  <>
                    <LinhaTabelaOrcamento
                      primCampo={item.descricao}
                      segCampo={item.quantidade}
                      tercCampo={
                        Number.isNaN(item.valor)
                          ? ""
                          : `R$ ${Number.parseFloat(item.valor).toFixed(2)}`
                      }
                      quartoCampo={
                        Number.isNaN(item.valor)
                          ? ""
                          : `R$ ${Number.parseFloat(item.valor).toFixed(2)}`
                      }
                      quintoCampo={
                        <button
                          onClick={() => excluirItem(item.id)}
                          className="excluirItem"
                        >
                          X
                        </button>
                      }
                    />
                  </>
                );
              })}
            </tbody>
          </table>
          <div className="textTotal">
            <h4>Total Geral: R$ {Number.parseFloat(valorTotal).toFixed(2)}</h4>
          </div>
        </section>
      </section>
    </>
  );
}
