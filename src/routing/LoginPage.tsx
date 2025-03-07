const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center">
      <form
        className="border border-primary rounded p-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="emial"
            id="email"
            name="email"
            className="form-control"
            placeholder="example@domain.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
