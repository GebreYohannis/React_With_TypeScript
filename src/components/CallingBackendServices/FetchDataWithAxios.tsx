import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import InputForm from "./InputForm";

interface User {
  id: number;
  name: string;
}

function FetchDataWithAxios() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError((error as AxiosError).message);
        setUsers(originalUsers);
      });
  };

  const addUser = (name: string) => {
    const originalUsers = [...users];
    // const newUser = { id: 0, name: "Demis" };
    const newUser = { id: users.length + 1, name: name };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((error) => {
        setError((error as AxiosError).message);
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
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchDataWithAxios;
