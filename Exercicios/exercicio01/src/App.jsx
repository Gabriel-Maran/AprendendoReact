import "./App.css";
import Produto from "./componentes/Produto";
import CartaoPessoa from "./componentes/CartaoPessoa ";

function App() {
  return (
    <>
      <Produto nome={"Arroz"} preco={"10,00"}></Produto>
      <CartaoPessoa
        nome={"Gabriel"}
        idade={"18"}
        profissao={"programador"}
      ></CartaoPessoa>
    </>
  );
}

export default App;
