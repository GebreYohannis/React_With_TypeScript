import InputForm from "./InputForm";
import { AxiosError } from "../../services/api-client";
import userService, { User } from "../../services/userService";
import useUsers from "../../hooks/useUsers";

function FetchDataWithAxios() {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((error) => {
      setError((error as AxiosError).message);
      setUsers(originalUsers);
    });
  };

  const addUser = (name: string) => {
    const originalUsers = [...users];
    // const newUser = { id: 0, name: "Demis" };
    const newUser = { id: users.length + 1, name: name };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((error) => {
        setError((error as AxiosError).message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(user).catch((err) => {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <InputForm onAdd={addUser} />
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchDataWithAxios;
