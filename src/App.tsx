import AuthProvider from "./state-management/auth/AuthProvider";
import LoginStatusWithZustand from "./state-management/auth/LoginStatusWithZustand";
import CounterWithZustand from "./state-management/counter/CounterWithZustand";
import HomePage from "./state-management/HomePage";
import LoginApp from "./state-management/LoginApp";
import Navbar from "./state-management/Navbar";
import { TaskProvider } from "./state-management/tasks/";

function App() {
  return (
    <AuthProvider>
      <CounterWithZustand />
      <LoginStatusWithZustand />
      <TaskProvider>
        <Navbar />
        <HomePage />
      </TaskProvider>
      <LoginApp />
    </AuthProvider>
  );
}

export default App;
