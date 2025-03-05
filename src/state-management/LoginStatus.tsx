import { useContext } from "react";
// import { useReducer } from "react";
// import {  useState } from "react";

// import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  //   const [user, setUser] = useState("");
  // const [user, dispatch] = useReducer(authReducer, "");

  const { state: user, dispatch } = useContext(AuthContext);

  const handleLogin = (): void => {
    // setUser("gech.demis");
    dispatch({ type: "LOGIN", username: "gech.demis" });
  };

  const handleLogout = (): void => {
    // setUser("");
    dispatch({ type: "LOGOUT" });
  };

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => handleLogout()} href="#">
            Logout
          </a>
        </div>
      </>
    );

  if (!user)
    return (
      <>
        <div>
          <a onClick={() => handleLogin()} href="#">
            Login
          </a>
        </div>
      </>
    );
};

export default LoginStatus;
