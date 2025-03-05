import { useReducer } from "react";
// import {  useState } from "react";
import taskReducer from "./reducers/taskReducer";

// interface Task {
//   id: number;
//   title: string;
// }

const TaskList = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);

  //   const handleClick = () => {
  //     setTasks([{ id: Date.now(), title: "Task " + Date.now() }, ...tasks]);
  //   };

  //   const handleDelete = (id: number) => {
  //     const newTask = tasks.filter((task) => task.id !== id);
  //     setTasks([...newTask]);
  //   };

  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
      >
        Add Task
      </button>
      {tasks &&
        tasks.map((task) => (
          <div
            className="border border-secondary rounded p-1 mt-2 d-flex flex-row justify-content-between"
            key={task.id}
          >
            <p className="text-muted">{task.title} </p>
            <button
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default TaskList;
