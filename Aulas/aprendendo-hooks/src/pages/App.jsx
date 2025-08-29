import "../styleCss/App.css";
import Header from "../componentes/Header";
import Card from "../componentes/Card";
import Footer from "../componentes/Footer";

function App() {
  return (
    <>
      <div id="home">
        <Header titulo={"Meu site"} />
        <Card />
        <Footer titulo={"Meu footer"} />
      </div>
    </>
  );
}

export default App;
