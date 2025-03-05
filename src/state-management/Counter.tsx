import { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";

function Counter() {
  // dispatch => send
  const [value, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      Counter: <span className="btn btn-danger"> {value}</span>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary ms-1"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="btn btn-primary mx-2"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary"
      >
        0
      </button>
    </div>
  );
}

export default Counter;
