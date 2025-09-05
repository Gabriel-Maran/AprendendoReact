import { useState } from "react";

export default function ConversorTemperatura() {
  const [celcius, setCelcius] = useState(0);
  return (
    <>
      <section id="atividade">
        <p>
          {celcius == "" ? 0 : celcius}°C em Fahrenheit:{" "}
          {(celcius * 9) / 5 + 32}°F
        </p>
        <input
          type="text"
          placeholder="Celcius"
          defaultValue={0}
          onChange={(e) => setCelcius(e.target.value)}
        />
      </section>
    </>
  );
}
