import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import { User } from "./user";
import Card from "./Card";
import UserService from "../services/UserService";
const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = UserService.getAll<{ results: User[] }>();
    request
      .then((response) => {
        setUsers(response.data.results);
        console.log(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      });
    return () => cancel();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div className="card-container d-flex flex-wrap justify-content-center">
        {users.map((user, index) => (
          <Card key={index} {...user} />
        ))}
      </div>
    </>
  );
};

export default UsersPage;
