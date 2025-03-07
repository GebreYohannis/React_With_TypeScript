import { Navigate, Outlet } from "react-router-dom";
import UsersList from "./UsersList";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="row">
      <div className="col">
        <UsersList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
