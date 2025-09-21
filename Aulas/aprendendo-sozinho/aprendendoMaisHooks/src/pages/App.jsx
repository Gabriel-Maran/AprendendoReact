import "../css/App.css";
import UseState from "../componentes/UseState";
import UseEffects from "../componentes/UseEffects";
import UseRef from "../componentes/UseRef";
import UseReducer from "../componentes/useReducer";
import UseMemo from "../componentes/UseMemo";

function App() {
  return (
    <>
      <main id="continerMain">
        <UseState />
        <UseEffects />
        <UseRef />
        <UseReducer />
        <UseMemo />
      </main>
    </>
  );
}

export default App;
