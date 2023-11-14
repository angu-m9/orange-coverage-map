import { useState } from "react";
import Header from "../../templates/Header/Header";
import Modal from "../../templates/Modal/Modal";
import { services } from "../../../services";

const SendData = () => {
  const [change, setChange] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClose = () => {
    setChange(false);
  };

  const handleSignIn = () => {
    setInterval(()=>{
      setChange(true);
    },7000)
    

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
    send()
  };

  const images = [
    "src/assets/icons/wifi-icon.svg",
    "src/assets/icons/send-data-1.svg",
    "src/assets/icons/send-data-2.svg",
    "src/assets/icons/send-data-3.svg",
  ];

  const send =()=>{

    const index = Math.floor(Math.random() * 6)

    const data = [
      {
        "date": "10/11/23",
        "red": "2G",
        "Company": "Orange",
        "Location": "Madrid"
      },
      {
        "date": "10/11/23",
        "red": "3G",
        "Company": "Jazztel",
        "Location": "Barcelona"
      },
      {
        "date": "10/11/23",
        "red": "2G",
        "Company": "Simyo",
        "Location": "Sevilla"
      },
      {
        "date": "10/11/23",
        "red": "2G",
        "Company": "Simyo",
        "Location": "Murcia"
      },
      {
        "date": "10/11/23",
        "red": "2G",
        "Company": "Jazztel",
        "Location": "Zaragoza"
      },
    ]

    services.postData('http://localhost:3000/datos', data[index])
  }

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
          style={{ width: "70%", height: "80%" }} data-testid="image_send-data"
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
