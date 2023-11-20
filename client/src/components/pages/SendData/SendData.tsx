import React, { useState } from "react";
import Header from "../../templates/Header/Header";
import Modal from "../../templates/Modal/Modal";
import { useNetwork } from "../../../hooks/useNetwork.ts";
import { services } from "../../../services/services.ts";
import { imagesWifi } from "./sendData.module.ts";

const SendData = (): React.JSX.Element => {
  const [change, setChange] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const networkInfo = useNetwork({});

  const handleClose = (): void => {
    setChange(false);
  };

  const handleSignIn = (): void => {
    setInterval(() => {
      setChange(true);
    }, 7000);

    const nextIndex = (): void => {
      setIndex((prevIndex) => (prevIndex + 1) % imagesWifi.length);
    };

    const audio: HTMLAudioElement = new Audio(
      "src/assets/sounds/send-data.mp3"
    );

    const repeat: NodeJS.Timeout = setInterval((): void => {
      audio.play();
      nextIndex();
    }, 1000);

    setTimeout((): void => {
      clearInterval(repeat);
    }, 7000);
    sendData();
  };

  const sendData = (): void => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const geoLocationData = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      const combinedData = {
        ...geoLocationData,
        ...networkInfo,
        network: networkInfo.effectiveType, // si quito este valor, sale el error de not null violation
      };
      console.log(combinedData);
      await services.postDataList(combinedData);
    });
  };

  return (
    <>
      <Header title="Send Data" />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <img
          src={imagesWifi[index]}
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