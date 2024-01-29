import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="card w-96 bg-secondary-content shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center gap-2">
            <img src="./logo.svg" alt="Logo de la calculadora" />
            <h2 className="text-2xl text-center font-extrabold">¡Vaya!</h2>
            <p className="mt-6 text-base leading-7 text-center">
              Lo sentimos, al parecer a ocurrido un error.
            </p>
            <p className="text-base leading-7 text-center">
              {error.statusText || error.message}
            </p>
          </div>
          <div className="card-actions justify-center items-center mt-10">
            <Link to="/" className="btn btn-secondary btn-sm">
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
