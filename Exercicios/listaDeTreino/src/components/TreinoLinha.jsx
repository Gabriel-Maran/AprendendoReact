import "../css/TreinoLinha.css";

export default function TreinoLinha({ item, deletaTreino }) {
  return (
    <>
      <tr>
        <th>{item.treino}</th>
        <th>{item.repeticoes}</th>
        <th>{item.series}</th>
        <th>{item.data}</th>
        <th>{item.peso}</th>
        <th>
          <button className="btnExculir" onClick={() => deletaTreino(item.id)}>
            X
          </button>
        </th>
      </tr>
    </>
  );
}
