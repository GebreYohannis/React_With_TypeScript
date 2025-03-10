import { createContext, Dispatch } from "react";
import { AuthAction } from "./authReducer";

interface AuthContextType {
  state: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
