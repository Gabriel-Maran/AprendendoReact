function Produto({ nome, preco }) {
  return (
    <>
      <p id="infoProduto">
        {nome} - R$ {preco}
      </p>
    </>
  );
}

export default Produto;
