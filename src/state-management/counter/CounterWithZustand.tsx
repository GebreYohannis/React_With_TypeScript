import useCounterStore from "./useCounterStore";

function CounterWithZustand() {
  const { counter, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      Counter:{" "}
      <span className="badge text-bg-secondary rounded-fill"> {counter}</span>
      <button onClick={() => increment()} className="btn btn-primary ms-1">
        +
      </button>
      <button onClick={() => decrement()} className="btn btn-primary mx-2">
        -
      </button>
      <button onClick={() => reset()} className="btn btn-primary">
        0
      </button>
    </div>
  );
}

export default CounterWithZustand;
