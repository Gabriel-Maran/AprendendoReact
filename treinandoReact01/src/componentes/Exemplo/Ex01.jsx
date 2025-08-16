import { useState } from "react";

let qntddClicks = 0;

function Ex01() {
  const [message, setMessage] = useState("Hellow World!");
  return (
    <>
      <p>{message}</p>
      <button
        onClick={function () {
          qntddClicks++;
          if (qntddClicks == 1) {
            setMessage("Clicou " + qntddClicks + " vez");
          } else {
            setMessage("Clicou " + qntddClicks + " vezes");
          }
        }}
      >
        Clique
      </button>
    </>
  );
}

export default Ex01;
