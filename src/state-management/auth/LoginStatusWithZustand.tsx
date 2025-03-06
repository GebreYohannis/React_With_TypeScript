import useAuthStore from "./useUserStore";

const LoginStatusWithZustand = () => {
  const { username, login, logout } = useAuthStore();

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );

  if (!username)
    return (
      <>
        <div>
          <a onClick={() => login("@demisgech")} href="#">
            Login
          </a>
        </div>
      </>
    );
};

export default LoginStatusWithZustand;
