import React from "react";
import Header from "../../templates/Header/Header";
import ButtonOrange from "../../atoms/ButtonOrange";
import './blocking.style.css'

const Blocking = (): React.JSX.Element => {
  return (
    <>
      <Header title={""} />
      <div className=" container py-4 px-3 b-1 text-center d-flex flex-column gap-5 justify-content-between align-items-center container__blocking">

        <div className="d-flex flex-column gap-1 align-items-center">
          <img
            src="src/assets/images/blocking.svg"
            alt="blocking-image" className="image__blocking"
          />
          <p>
            Debes permitir compartir tu ubicación en los ajustes del navegador
            para esta aplicación.
          </p>
          <br />
          <p>Para ello, sigue los siguientes pasos:</p>
          <br />
          <ol className="d-flex flex-column gap-3">
            <li>Abre la aplicación <strong>Ajustes</strong> del móvil.</li>
            <li>Toca <strong>Acceso a la ubicación</strong></li>
            <li>
              Activa o desactiva <strong>Permitir el acceso a tu ubicación para esta
              aplicación.</strong>
            </li>
          </ol>
        </div>
        <div className="w-100">
            <ButtonOrange textButton="Hecho" direction="" />
        </div>
      </div>
    </>
  );
};

export default Blocking;
