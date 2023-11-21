import { useState } from "react";
import Header from "../../templates/Header/Header";
import Modal from "../../templates/Modal/Modal";
import { services } from "../../../Services";
import { useNetwork } from "../../../hooks/useNetwork";

const SendData = () => {
  const [change, setChange] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [index, setIndex] = useState(0);
  const networkInfo = useNetwork();
  const userUuid = localStorage.getItem('userUuid'); // Recuperamos el UUID del localStorage

  const images = [
    "src/assets/icons/wifi-icon.svg",
    "src/assets/icons/send-data-1.svg",
    "src/assets/icons/send-data-2.svg",
    "src/assets/icons/send-data-3.svg",
  ];

  const handleClose = () => {
    setChange(false);
    setErrorMessage('');
  };

  const handleSendDataClick = () => {
    const audio = new Audio("src/assets/sounds/send-data.mp3");
    audio.play();
    nextIndex();

    const repeat = setInterval(() => {
      nextIndex();
    }, 1000);

    navigator.geolocation.getCurrentPosition(async (position) => {
      clearInterval(repeat);
      audio.pause();

      

      const geoLocationData = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      const combinedData = {
        ...geoLocationData,
        ...networkInfo,
        network: networkInfo.effectiveType,
        userUuid // Enviamos el UUID junto con los datos de la red
      };

      try {
        await services.postData('http://localhost:5000/network-quality', combinedData);
        setChange(true);
      } catch (error) {
        console.error('Error al enviar los datos de red:', error);
        setErrorMessage('Error al enviar los datos. Por favor, intente de nuevo.');
      }
    }, (error) => {
      clearInterval(repeat);
      audio.pause();
      setErrorMessage('Error al obtener la geolocalización. Por favor, intente de nuevo.');
    });
  };

  

  const nextIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <Header title="Send Data" />
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "70vh" }}>
        <img src={images[index]} alt="Send Data Icon" className="m-3" style={{ width: "70%", height: "80%" }} />
        <button type="button" className="btn btn-primary" onClick={handleSendDataClick}>
          Send Data
        </button>
      </div>
      <Modal
        to={""}
        button={"Accept"}
        display={change || errorMessage}
        onClose={handleClose}
        modalTitle={change ? "Data Sent Correctly" : "Error"}
        modalText={change ? "" : errorMessage}
      />
    </>
  );
};

export default SendData;


