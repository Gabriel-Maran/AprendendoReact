import { useEffect, useState } from "react";
import AddItem from "../componentes/AddItem";
import "../css/App.css";

function App() {
  const [orcamentoList, setOrcamentoList] = useState(() => {
    const raw = localStorage.getItem("lista-orcamento");
    !raw ? localStorage.setItem("lista-orcamento", []) : JSON.parse(raw);
  });
  function createNewItem(desc, qntdd, valorUnit) {
    if (desc.trim() == "") return;
  }

  useEffect(() => {}, []);
  return (
    <>
      <main id="container-main">
        <AddItem createNewItem={createNewItem} />
        {orcamentoList}
      </main>
    </>
  );
}

export default App;
