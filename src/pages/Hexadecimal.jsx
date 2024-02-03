import { Link } from "react-router-dom";
import { useState } from "react";
import { isBinary, binaryToHexadecimal } from "../helpers/helper";

const Hexadecimal = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isBinary(binaryInput)) {
      setResult("Error: Por favor, ingrese un número binario válido.");

      return;
    }

    const decimalValue = binaryToHexadecimal(binaryInput);

    setResult(`Resultado: ${decimalValue}`);
  };

  return (
    <>
      <div className="w-96 flex justify-end mb-4">
        <Link to="/" className="btn btn-primary btn-sm">
          Volver
        </Link>
      </div>
      <div className="card w-96 bg-secondary-content shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center gap-2">
            <img src="./logo.svg" alt="Logo de la calculadora" />
            <h2 className="text-2xl text-center font-extrabold">
              Convertor Binario a Hexadecimal
            </h2>
          </div>
          <form className="mt-10" onSubmit={handleSubmit} noValidate>
            <div className="form-control mb-8">
              <div className="flex textarea textarea-bordered text-center justify-center items-center text-lg font-semibold p-2">
                {result}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="binaryInput" className="text-sm">
                Ingrese un número binario:
              </label>
              <input
                type="text"
                id="binaryInput"
                name="binaryInput"
                value={binaryInput}
                onChange={(e) => setBinaryInput(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="card-actions justify-center items-center mt-4">
              <button type="submit" className="btn btn-secondary w-full">
                Convertir
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hexadecimal;
