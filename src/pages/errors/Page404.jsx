import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div className="card w-96 bg-secondary-content shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center gap-2">
            <img src="./logo.svg" alt="Logo de la calculadora" />
            <h2 className="text-2xl text-center font-extrabold">¡Ups!</h2>
            <p className="mt-6 text-base leading-7 text-center">
              Lo sentimos, la página que buscas no se encuentra disponible.
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

export default Page404;
