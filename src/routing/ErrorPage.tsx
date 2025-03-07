import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isTrue = isRouteErrorResponse(error);
  return (
    <>
      <h1>Oops...</h1>
      <p>Sorry, {isTrue ? "Invalid page!" : "Unexpected error!"}</p>
    </>
  );
};

export default ErrorPage;
