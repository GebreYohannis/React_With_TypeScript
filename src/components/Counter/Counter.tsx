import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div className={styles.container}>
      <div className={styles.counter__container}>
        <span>{count}</span>
        <button
          className={[styles.btn, styles.btnPrimary].join(" ")}
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className={[styles.btn, styles.btnSecondary].join(" ")}
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
