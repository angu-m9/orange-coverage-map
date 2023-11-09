import { useState } from "react";
import Header from "../../templates/Header/Header";
import Modal from "../../templates/Modal/Modal";
const SendData = () => {
  const [change, setChange] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClose = () => {
    setChange(false);
  };

  const handleSignIn = () => {
    setChange(true);

    const nextIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const audio = new Audio("src/assets/sounds/send-data.mp3");

    const repeat = setInterval(() => {
      audio.play();
      nextIndex();
    }, 1000);

    setTimeout(() => {
      clearInterval(repeat);
    }, 7000);
  };

  const images = [
    "src/assets/icons/wifi-icon.svg",
    "src/assets/icons/send-data-1.svg",
    "src/assets/icons/send-data-2.svg",
    "src/assets/icons/send-data-3.svg",
  ];

  return (
    <>
      <Header title="Send Data" />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <img
          src={images[index]}
          alt="register-icon"
          className="m-3"
          style={{ width: "70%", height: "80%" }}
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignIn}
        >
          Send Data
        </button>
      </div>
      <Modal
        to={""}
        button={"Accept"}
        display={change}
        onClose={handleClose}
        modalTitle={"Data Sent Correctly"}
        modalText={""}
      />
    </>
  );
};

export default SendData;
