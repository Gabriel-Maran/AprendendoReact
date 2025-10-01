import { useEffect, useState } from "react";
import AddItem from "../componentes/AddItem";
import "../css/App.css";
import ItemLista from "../componentes/ItemLista";

function App() {
  const [orcamentoList, setOrcamentoList] = useState(() => {
    const raw = localStorage.getItem("lista-orcamento");
    return raw ? JSON.parse(raw) : [];
  });
  const [valorTotal, setValorTotal] = useState(0);

  function createNewItem(desc, qntdd, valorUnit) {
    const descricao = desc.trim();
    const quantidade = Number.parseFloat(qntdd);
    const valorUnitario = Number.parseFloat(valorUnit);

    console.log("Valor", valorUnitario);
    console.log("Quantidade", quantidade);
    if (
      descricao == "" ||
      !Number.isInteger(quantidade) ||
      !Number.isInteger(valorUnitario)
    )
      return;
    setOrcamentoList([
      ...orcamentoList,
      {
        id: crypto.randomUUID(),
        descricao: descricao,
        quantidade: quantidade,
        valorUnit: valorUnitario,
      },
    ]);
  }

  function auemntar(id) {
    setOrcamentoList(
      orcamentoList.map((item) => {
        return item.id == id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item;
      })
    );
  }

  function diminuir(id) {
    setOrcamentoList(
      orcamentoList.map((item) => {
        return item.id == id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item;
      })
    );
  }

  function excluir(id) {
    setOrcamentoList(
      orcamentoList.filter((item) => {
        return item.id == id ? "" : item;
      })
    );
  }

  useEffect(() => {
    const totalPrecos = orcamentoList.reduce((acum, itemAtual) => {
      return acum + itemAtual.valorUnit * itemAtual.quantidade;
    }, 0);
    setValorTotal(totalPrecos);
    localStorage.setItem("lista-orcamento", JSON.stringify(orcamentoList));

    console.log(totalPrecos);
  }, [orcamentoList]);

  return (
    <>
      <main id="container-main">
        <AddItem createNewItem={createNewItem} />
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Qtd</th>
              <th>Unitário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orcamentoList.map((item) => {
              return (
                <ItemLista
                  key={item.id}
                  item={item}
                  aumentarItem={() => auemntar(item.id)}
                  diminuirItem={() => {
                    if (item.quantidade > 0) {
                      diminuir(item.id);
                    }
                  }}
                  excluirItem={() => excluir(item.id)}
                />
              );
            })}
          </tbody>
        </table>
        <p className="lblPrecoTotal">Valor Total: R${valorTotal.toFixed(2)}</p>
      </main>
    </>
  );
}

export default App;
