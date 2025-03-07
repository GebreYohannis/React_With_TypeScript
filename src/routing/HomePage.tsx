import { Link } from "react-router-dom";

function HomePage() {
  // throw new Error("Something failed");
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default HomePage;
