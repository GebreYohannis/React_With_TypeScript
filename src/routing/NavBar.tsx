import { NavLink } from "react-router-dom";

const NavBar = () => {
  const active = (isActive: boolean) =>
    isActive ? "nav-link  text-light" : "nav-link";
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        marginBottom: "1rem",
        background: "#5d4de3",
      }}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light">
          Navbar
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => active(isActive)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users"
                className={({ isActive }) => active(isActive)}
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => active(isActive)}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => active(isActive)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) => active(isActive)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
