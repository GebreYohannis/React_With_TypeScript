import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import LoginApp from "./state-management/LoginApp";
import Navbar from "./state-management/Navbar";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Navbar />
        <HomePage />
      </TaskProvider>
      <LoginApp />
    </AuthProvider>
  );
}

export default App;
