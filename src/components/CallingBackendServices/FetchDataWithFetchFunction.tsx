import { useEffect, useState } from "react";

type User = { id: number; name: string };
function FetchDataWithFetchFucntion() {
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default FetchDataWithFetchFucntion;
