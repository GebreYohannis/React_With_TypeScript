interface LogoutAction {
  type: "LOGOUT";
}

interface LoginAction {
  type: "LOGIN";
  username: string;
}

export type AuthAction = LogoutAction | LoginAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default authReducer;
