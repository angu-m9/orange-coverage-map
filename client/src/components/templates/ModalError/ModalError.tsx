import React from "react";
import './modalError.style.css'


const ModalError = ({display}: {display:boolean}): React.JSX.Element => {
  return (
    <>
    <div
      className={`${display? 'd-flex':'d-none'} justify-content-center container-modalError`}
    >
      <div
        className="container-alert alert alert-danger"
        role="alert"
      >
        <span className="alert-icon">
          <span className="visually-hidden">Error</span>
        </span>
        <p>Ocurrió un error</p>
      </div>
    </div>
  </>
  );
};

export default ModalError;
