import { useContext } from "react";
import AuthContext from "./contexts/authContext";

const LoginNavbar = () => {
  const { state: user } = useContext(AuthContext);
  return (
    <div className="navbar d-flex flex-row justify-content-between">
      <span className="badge text-bg-secondary rounded-fill">{user}</span>
      <span className="badge text-bg-secondary rounded-fill">
        {user ? "Logged In" : "Logged out"}
      </span>
    </div>
  );
};

export default LoginNavbar;
