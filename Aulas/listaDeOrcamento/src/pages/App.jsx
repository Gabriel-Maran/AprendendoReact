import { useEffect, useState } from "react";
import "../css/App.css";

function App() {
  const [oracamento, setOrcamento] = useState(() => {
    const raw = localStorage.getItem("ITENS-STORAGE");
    return raw ? JSON.parse(raw) : [];
  });
  const [descHandle, setDescHandle] = useState("");
  const [qntdHandle, setQntdHandle] = useState("");
  const [valorHandle, setValorHandle] = useState("");
  const [valorTotal, setValorTotal] = useState(0);

  function adicionarItem(desc, qntd, valor) {
    setOrcamento([
      ...oracamento,
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
    oracamento.filter((item) => (item.id == id ? "" : newOrcamento.push(item)));
    setOrcamento(newOrcamento);
  }
  useEffect(() => {
    const totalPrecos = oracamento.reduce((acum, itemAtual) => {
      return acum + itemAtual.valor * itemAtual.quantidade;
    }, 0);
    setValorTotal(totalPrecos);
  }, [oracamento]);

  useEffect(() => {
    localStorage.setItem("ITENS-STORAGE", JSON.stringify(oracamento));
  });

  return (
    <>
      <section className="orcamentoContainer">
        <h2>Orçamento</h2>
        <section className="blocoPrincipal">
          <section className="addOrcamento">
            <input
              onChange={(e) => setDescHandle(e.target.value)}
              className="inputsOrcamento"
              type="text"
              placeholder="Descrição"
            />
            <input
              onChange={(e) => setQntdHandle(e.target.value)}
              className="inputsOrcamento"
              type="text"
              placeholder="Quantidade"
            />
            <input
              onChange={(e) => setValorHandle(e.target.value)}
              className="inputsOrcamento"
              type="text"
              placeholder="Valor"
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
              <tr key={Date.now()}>
                <th className="linhas">Descrição</th>
                <th className="linhas">Qtd</th>
                <th className="linhas">Unitário</th>
                <th className="linhas">Total</th>
                <th className="linhas">Ações</th>
              </tr>
            </thead>
            <tbody>
              {oracamento.map((item) => {
                return (
                  <>
                    <tr key={Date.now()}>
                      <th className="linhas">{item.descricao}</th>
                      <th className="linhas">{item.quantidade}</th>
                      <th className="linhas">
                        {Number.isNaN(item.valor) ? "" : "R$"}{" "}
                        {Number.parseFloat(item.valor).toFixed(2)}
                      </th>
                      <th className="linhas">
                        {Number.isNaN(item.quantidade) ? "" : "R$"}{" "}
                        {Number.parseFloat(
                          item.valor * item.quantidade
                        ).toFixed(2)}
                      </th>
                      <th className="linhas">
                        <button
                          onClick={() => excluirItem(item.id)}
                          className="excluirItem"
                        >
                          X
                        </button>
                      </th>
                    </tr>
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

export default App;
