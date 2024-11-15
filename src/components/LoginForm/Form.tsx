import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email", { required: true, minLength: 5 })}
          id="email"
          type="text"
          className="form-control form-control-sm"
          placeholder="example@gmail.com"
        />
        {errors.email?.type === "required" && (
          <p className="text-danger">The email field is required!</p>
        )}
        {errors.email?.type === "minLength" && (
          <p className="text-danger">
            The email field must contain at least 5 characters!
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^[A-Za-z][0-9]+$/i,
          })}
          id="password"
          type="password"
          className="form-control form-control-sm"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-danger">Password is required.</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-danger">
            The password must be at least 8 characters.
          </p>
        )}
        {errors.password?.type === "pattern" ? (
          <p className="text-success">Strong enough</p>
        ) : (
          <p className="text-danger">The password is too weak</p>
        )}
      </div>
      <div className="mb-3">
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox" className="form-label m-2">
          Remember me
        </label>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          Log in
        </button>
        <button type="reset" className="btn btn-secondary m-4">
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
