import "./App.css";
import Unipar from "./componentes/Unipar";
import Button from "./componentes/Button";
import ButtonProps from "./componentes/ButtonProps";

function App() {
  return (
    <>
      {" "}
      {/*fragment é o <> </>*/}
      <Unipar />
      <p>Ele tem 190 anos e ainda está na flor da idade</p>
      <Button>Se é louko 1</Button>
      <Button>Se é louko 2</Button>
      <Button>Se é louko 3</Button>
      <ButtonProps
        idButton="botao1"
        valorButton="teste1"
        funcaoClick={() => alert("BOTAO 1")}
        classeBotao="classeTop"
      ></ButtonProps>
      <ButtonProps
        idButton="botao2"
        valorButton="teste2"
        funcaoClick={() => alert("BOTAO 2")}
        classeBotao="classeSuperTop"
      ></ButtonProps>
      <ButtonProps
        idButton="botao3"
        valorButton="teste3"
        funcaoClick={() => alert("BOTAO 3")}
        classeBotao="classeIssoAi"
      ></ButtonProps>
    </>
  );
}

export default App;
