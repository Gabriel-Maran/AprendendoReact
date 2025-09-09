import { useEffect, useState } from "react";

export default function UseEffects() {
  const [resource, setResource] = useState("Todos");
  useEffect(() => {
    console.log("useEffetc: Toda render (sem '[]')");
  });
  useEffect(() => {
    //useEffect não pode ser async, mas as funções dentro dele podem ser async com await
    console.log(`useEffect: Resource Type changed to ${resource}`);
  }, [resource]);
  useEffect(() => {
    console.log("useEffect: Toda primeira render");
  }, []);

  const resourceType = (resource) => {
    setResource(resource);
  };
  return (
    <>
      <section>
        <h2>useEffects</h2>
        <section className="bloco">
          <p>{resource}</p>
          <div>
            <button onClick={() => resourceType("Posts")}>Posts</button>
            <button onClick={() => resourceType("Comments")}>Comments</button>
            <button onClick={() => resourceType("Todos")}>Todos</button>
          </div>
        </section>
      </section>
    </>
  );
}
