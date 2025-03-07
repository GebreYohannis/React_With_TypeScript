import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import UserDetails from "./UserDetails";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "", or,
        index: true,
        element: <HomePage />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
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
    ],
  },
]);

export default router;
