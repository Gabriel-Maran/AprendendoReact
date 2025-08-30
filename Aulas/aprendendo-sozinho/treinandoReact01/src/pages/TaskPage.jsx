import { useLayoutEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
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
      <header id="taskPageHeader">
        <button onClick={() => navigate(-1)}> &lt;</button>
        <h2>Detalhes da tarefa</h2>
      </header>
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
