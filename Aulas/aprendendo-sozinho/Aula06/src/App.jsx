import Card from "./componentes/Card";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Card title={"Titulo 01"}>
          <Card title={"Filho do Titulo 01"} />{" "}
          {/*children faz isso ser possivel, o card receber outro componenete ou item*/}
        </Card>
        <Card title={"Titulo 02"}>
          <Card title={"Filho do Titulo 02"} />
        </Card>
        <Card title={"Titulo 03"}>
          <Card title={"Filho do Titulo 03"} />
        </Card>
      </main>
    </>
  );
}

export default App;
