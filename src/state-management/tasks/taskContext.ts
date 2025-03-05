import { createContext, Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";

// React context :
// Allows sharing data without passing it down through many components in the middle
// steps to use context properly:
// 1. Lift the state to the nearest parent component
// 2. Create the context like what I do in this file
// 2. use the useContext hook to share the necessary data

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
