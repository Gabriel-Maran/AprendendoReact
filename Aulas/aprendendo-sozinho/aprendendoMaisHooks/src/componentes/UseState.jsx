import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const incrementalCount = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <section>
        <h2>useState</h2>
        <section className="bloco">
          <button onClick={incrementalCount}>Clicks: {count}</button>
        </section>
      </section>
    </>
  );
}

export default UseState;
