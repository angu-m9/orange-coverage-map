import React from "react";
import Header from "../../templates/Header/Header";
import ButtonOrange from "../../atoms/ButtonOrange";
import "./blocking.style.css";

const Blocking = (): React.JSX.Element => {
  return (
    <>
      <Header title={""} />
      <div className="container py-4 px-3 b-1 text-center d-flex flex-column gap-5 justify-content-between align-items-center container-permission">
        <div className="d-flex flex-column gap-5 mt-5 align-items-center">
          <img
            src="src/assets/images/blocking.svg"
            alt="blocking-image"
            className="image-permission"
            
          />
          <p data-testid="blocking-text">
            ¡Upps! Parece que tu navegador no es compatible. Prueba a utilizar
            esta aplicación en un navegador como Chrome o  Edge.
          </p>
        </div>
        <div className="w-100">
          <ButtonOrange textButton="Hecho" direction="/login" />
        </div>
      </div>
    </>
  );
};

export default Blocking;
