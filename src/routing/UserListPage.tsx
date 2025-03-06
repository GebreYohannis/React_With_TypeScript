import { Link } from "react-router-dom";

function UserListPage() {
  const users = [
    {
      id: 1,
      name: "demis",
    },
    {
      id: 2,
      name: "Haile",
    },
    {
      id: 3,
      name: "Dereje",
    },
  ];
  return (
    <div className="p-2">
      <h1 className="mb-3">User List</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;
