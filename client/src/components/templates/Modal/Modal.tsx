import React, { useRef, useEffect } from "react";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalInterface } from "./modal.module";
import "./modal.style.css";

const Modal = ({
  to,
  display,
  buttonText,
  modalTitle,
  buttonLink,
  onClose,
}: ModalInterface): React.JSX.Element => {
  const modalClose = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = modalClose.current;
    if (currentRef) {
      currentRef.style.display = display ? "block" : "none";
    }
    const currentRef = modalClose.current;
    if (currentRef) {
      currentRef.style.display = display ? "block" : "none";
    }
  }, [display]);

  return (
    <>
      <div
        className={`modal ${
          display ? "d-block" : "d-none"
        } d-flex  align-items-center h-100 container-modal`}
      >
        <div className="modal-dialog w-100 ">
          <div className="container-content modal-content d-flex justify-content-center align-items-center gap-4 ">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title fs-5">{modalTitle}</h5>
            </div>
            <div className="modal-footer">
              {buttonLink && (
                <Link
                  to={to}
                  type="button"
                  className="btn btn-primary button-modal"
                >
                  {buttonLink}
                </Link>
              )}
              
              {buttonText && (
                <button
                  type="button"
                  className="btn btn-primary button-modal"
                  onClick={onClose}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
