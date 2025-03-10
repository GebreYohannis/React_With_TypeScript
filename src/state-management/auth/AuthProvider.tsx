import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ state: user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
