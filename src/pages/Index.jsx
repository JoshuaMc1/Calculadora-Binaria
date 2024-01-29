import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="card w-96 bg-secondary-content shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center gap-2">
            <img src="./logo.svg" alt="Logo de la calculadora" />
            <h2 className="text-2xl text-center font-extrabold">
              Convertor Binario
            </h2>
          </div>
          <div className="card-actions justify-center items-center mt-10">
            <Link to="/decimal" className="btn btn-secondary w-full">
              Binario a Decimal
            </Link>
            <Link to="/octal" className="btn btn-secondary w-full">
              Binario a Octal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
