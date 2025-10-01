import "../css/ItemLista.css";

export default function ItemLista({
  item,
  aumentarItem,
  diminuirItem,
  excluirItem,
}) {
  return (
    <>
      <tr>
        <th>{item.descricao}</th>
        <th>{item.quantidade}</th>
        <th>R${item.valorUnit.toFixed(2)}</th>
        <th>
          <button className="btnAumentar" onClick={aumentarItem}>
            +
          </button>
          <button className="btnDiminuir" onClick={diminuirItem}>
            -
          </button>
          <button className="btnExcluir" onClick={excluirItem}>
            X
          </button>
        </th>
      </tr>
    </>
  );
}
