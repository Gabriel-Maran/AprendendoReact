import { useState } from "react";
import "./App.css";

function App() {
  //useState(0); usando um estado que começa em 0
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
    </>
  );
}

export default App;
