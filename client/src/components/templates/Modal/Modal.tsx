import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ to, display, onClose, button, modalTitle, modalText }: { to: string; display: boolean; onClose: () => void ; button:string, modalTitle: string, modalText:string}) => {

  const block = {
    height: "100%",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modal = {
    top: "30%",
  };

  const modalClose = useRef(null);

  useEffect(() => {
    modalClose.current.style.display = display ? "block" : "none";
  }, [display]);

  const closeModal = () => {
    onClose(); 
  };

  return (
    <>
      <div className="" style={block} ref={modalClose}>
        <div className={`modal ${display ? "d-block" : "d-none"}`} style={modal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Close"
                  onClick={closeModal}
                >
                  <span className="visually-hidden">Close</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{modalText}</p>
              </div>
              <div className="modal-footer">
                {to? <Link to={to} type="button" className="btn btn-primary">
                  {button}
                </Link>: <button onClick={closeModal} type="button" className="btn btn-primary">
                  {button}
                </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
