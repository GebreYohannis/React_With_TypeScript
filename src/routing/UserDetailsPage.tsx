import { useLocation, useParams, useSearchParams } from "react-router-dom";

function UserDetailsPage() {
  const params = useParams();
  console.log(params);

  // The following hook has side effert so be carefull when using it
  // You should only call it inside:
  // 1. Event handler
  // 2. useEffect hook
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.toString());
  const name = searchParams.get("name");
  console.log("name: " + name);
  setSearchParams();
  const location = useLocation();
  console.log(location);
  return <div>User</div>;
}

export default UserDetailsPage;
