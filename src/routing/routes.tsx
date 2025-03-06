import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetails from "./UserDetails";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "", or,
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        children: [
          {
            path: ":id",
            element: <UserDetails />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
