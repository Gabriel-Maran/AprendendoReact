import { useEffect, useState } from "react";
import AddTreino from "../components/AddTreino";
import "../css/App.css";
import TreinoLinha from "../components/TreinoLinha";

function App() {
  const [listaTreinos, setListaTreino] = useState(() => {
    const raw = localStorage.getItem("LISTA-TREINO");
    if (!raw) return [];
    return JSON.parse(raw);
  });

  const [orderAsc, setOrderAsc] = useState(false);

  useEffect(() => {
    localStorage.setItem("LISTA-TREINO", JSON.stringify(listaTreinos));
  }, [listaTreinos]);

  function createNewTreino(treino, repeticoes, series, data, peso) {
    const treinoNew = treino.trim();
    const repeticoesNew = Number.parseInt(repeticoes);
    const seriesNew = Number.parseInt(series);
    const dataNew = new Date(data);
    const pesoNew = Number.parseFloat(peso);
    if (
      !treinoNew ||
      repeticoesNew < 0 ||
      isNaN(repeticoesNew) ||
      seriesNew < 0 ||
      isNaN(seriesNew) ||
      dataNew.toString() == "Invalid Date" ||
      pesoNew < 0 ||
      isNaN(pesoNew)
    )
      return;
    setListaTreino([
      ...listaTreinos,
      {
        id: crypto.randomUUID(),
        treino: treinoNew,
        repeticoes: repeticoesNew,
        series: seriesNew,
        data:
          dataNew.getUTCDate() +
          "/" +
          dataNew.getUTCMonth() +
          "/" +
          dataNew.getUTCFullYear(),
        peso: pesoNew,
      },
    ]);
  }

  function ordenar() {
    let list;
    if (orderAsc) {
      list = [...listaTreinos].sort(
        (a, b) => new Date(a.data) - new Date(b.data)
      );
    } else {
      list = [...listaTreinos].sort(
        (a, b) => new Date(b.data) - new Date(a.data)
      );
    }
    setListaTreino(list);
  }

  function deletaTreino(id) {
    const newList = listaTreinos.filter((item) => {
      return item.id == id ? "" : item;
    });
    setListaTreino(newList);
  }

  return (
    <>
      <section id="main-container">
        <AddTreino createNewTreino={createNewTreino} />
        <table>
          <thead>
            <tr>
              <th>Treino</th>
              <th>Repetições</th>
              <th>Séries</th>
              <th>
                <div className="classOrderDate">
                  Data
                  <img
                    id="sortIcon"
                    className={orderAsc ? "" : "rotated"}
                    onClick={() => {
                      setOrderAsc(!orderAsc);
                      ordenar();
                    }}
                    src="src\assets\arrowDown.svg"
                    alt=""
                  />
                </div>
              </th>
              <th>Peso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaTreinos.map((item) => {
              return (
                <TreinoLinha
                  key={item.id}
                  deletaTreino={deletaTreino}
                  item={item}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
