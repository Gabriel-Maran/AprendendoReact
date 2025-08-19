function CartaoPessoa({ nome, idade, profissao }) {
  return (
    <>
      <div id="infoPessoa">
        <h2>{nome}</h2>
        <p>{idade}</p>
        <p>{profissao}</p>
      </div>
    </>
  );
}

export default CartaoPessoa;
