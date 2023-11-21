import React from "react";
import './modalSucces.style.css'

const ModalSucces = ({display}:{display:boolean}): React.JSX.Element => {
  return (
    <>
      <div
        className={`${display? 'd-flex':'d-none'} justify-content-center container-modalSuccess`}
      >
        <div
          className="container-alert alert alert-info"
          role="alert"
        >
          <span className="alert-icon">
            <span className="visually-hidden">Info</span>
          </span>
          <p>Envío con éxito</p>
        </div>
      </div>
    </>
  );
};

export default ModalSucces;
