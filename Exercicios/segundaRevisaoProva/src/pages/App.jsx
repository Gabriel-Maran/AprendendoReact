import { useEffect, useState } from "react";
import CadastroViagem from "../components/CadastroViagem";
import "../css/App.css";

function App() {
  const [viagens, setViagens] = useState(() => {
    const raw = localStorage.getItem("STORAGE-VIAGENS");
    return raw ? JSON.parse(raw) : [];
  });

  function addViagem(destino, data, valor, kms, reembolso) {
    if (!destino || !data || kms == 0 || valor < 0) return;
    console.log(destino, data, valor, kms, reembolso);
    setViagens([
      ...viagens,
      {
        destinoCampo: destino,
        dataCampo: data,
        valorCampo: valor,
        kmsCampo: kms,
        reembolsoCampo: reembolso,
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("STORAGE-VIAGENS", JSON.stringify(viagens));
  }, [viagens]);
  return (
    <>
      <section id="container-main">
        <CadastroViagem addNewViagem={addViagem} />
      </section>
    </>
  );
}

export default App;
