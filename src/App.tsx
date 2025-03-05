import { useReducer } from "react";
import TaskContext from "./state-management/contexts/taskContext";
import HomePage from "./state-management/HomePage";
import LoginApp from "./state-management/LoginApp";
import Navbar from "./state-management/Navbar";
import taskReducer from "./state-management/reducers/taskReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ state: user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <Navbar />
        <HomePage />
      </TaskContext.Provider>
      <LoginApp />
    </AuthContext.Provider>
  );
}

export default App;
