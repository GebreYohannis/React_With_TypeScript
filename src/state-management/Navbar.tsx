import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/taskContext";
import useCounterStore from "./counter/useCounterStore";

function Navbar() {
  const { tasks } = useContext(TaskContext);
  // const { counter } = useCounterStore();

  // after using selectors

  const counter = useCounterStore((selector) => selector.counter);
  console.log("Render Navbar");
  return (
    <nav className="navbar d-flex flex-row justify-content-between">
      <span className="badge text-bg-secondary rounded">{tasks.length}</span>
      <span className="badge text-bg-secondary rounded">{counter}</span>
      <LoginStatus />
    </nav>
  );
}

export default Navbar;
