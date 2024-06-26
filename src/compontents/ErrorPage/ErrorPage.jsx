import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Oops!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status===404 && 
        <div>
          <h2>Page Not Found</h2>
          <p>Go back where you from</p>
          <Link to='/'><button className="btn">Home</button></Link>
        </div>
      }
    </div>
  );
};

export default ErrorPage;
