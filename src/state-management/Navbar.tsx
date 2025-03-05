import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TaskContext from "./contexts/taskContext";

function Navbar() {
  const { tasks } = useContext(TaskContext);

  return (
    <nav className="navbar d-flex flex-row justify-content-between">
      <span className="badge text-bg-secondary rounded">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
}

export default Navbar;
