import { useReducer, useRef, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

function reducer2(state2, action2) {
  switch (action2.type) {
    case "add": {
      if (action2.payload.trim() != "") {
        return {
          tasks: [
            ...state2.tasks,
            { name: action2.payload, isCompleted: false },
          ],
          counterTasks: state2.counterTasks + 1,
        };
      }
      return state2;
    }
    case "toggle-task":
      return {
        ...state2,
        tasks: state2.tasks.map((item, index) => {
          return index === action2.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item;
        }),
      };
    default:
      return state2;
  }
}

export default function UseReducer() {
  //useState ou useReducer?
  // -> Use useState em coisas mais simples e menos complexas
  // -> Use useReducer em coisas mais complexas e com maiores mudanças/comportamentos
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const [state2, dispatch2] = useReducer(reducer2, {
    tasks: [],
    counterTasks: 0,
  });
  const refInput = useRef();
  const [inputValue, setInputValue] = useState("");
  function inputFocus() {
    refInput.current.focus();
  }
  return (
    <>
      <section>
        <h2>useReducer</h2>
        <section className="bloco">
          <section className="uso">
            <p>{state.counter}</p>
            <button
              onClick={() => {
                dispatch({ type: "increment" });
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch({ type: "decrement" });
              }}
            >
              -
            </button>
          </section>
          <section className="uso">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              ref={refInput}
            />
            <br />
            <button
              onClick={() => {
                dispatch2({ type: "add", payload: inputValue });
                setInputValue("");
                inputFocus();
              }}
            >
              Adicionar
            </button>
            {state2.tasks.map((task, index) => (
              <div key={index}>
                <p
                  onClick={() =>
                    dispatch2({ type: "toggle-task", payload: index })
                  }
                  style={{
                    textDecoration: task.isCompleted ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </p>
              </div>
            ))}
            <p>Total tasks: {state2.counterTasks}</p>
          </section>
        </section>
      </section>
    </>
  );
}
