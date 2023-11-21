import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalInterface } from "./modal.module";
import './modal.style.css'

const Modal = ({
  to,
  display,
  button,
  modalTitle,
}: ModalInterface): React.JSX.Element => {

  const modalClose = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = modalClose.current;
    if (currentRef) {
      currentRef.style.display = display ? "block" : "none";
    }
  }, [display]);


  return (
    <>
        <div
          className={`modal ${display ? "d-block" : "d-none"} d-flex  align-items-center h-100 container-modal`}
        >

          <div className="modal-dialog w-100 " >
            <div className="container-content modal-content d-flex justify-content-center align-items-center gap-4 ">

              <div className="modal-header d-flex justify-content-center">
                <h5 className="modal-title fs-5">{modalTitle}</h5>
              </div>
              <div className="modal-footer">
                  <Link to={to} type="button" className="btn btn-primary button-modal">
                    {button}
                  </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Modal;
