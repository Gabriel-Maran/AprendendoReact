import { useLayoutEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      const ref = textRef.current;
      ref.style.height = "auto";
      ref.style.height = ref.scrollHeight * 0.98 + "px";
    }
  }, [description]);
  return (
    <>
      <h2>Detalhes da tarefa</h2>
      <section className="camposTask">
        <p>{title}</p>
        <textarea readOnly className="textoDescricao" ref={textRef}>
          {description}
        </textarea>
      </section>
    </>
  );
}

export default TaskPage;
