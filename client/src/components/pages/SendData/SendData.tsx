import Header from "../../templates/Header/Header";
import { useNetwork } from "../../../hooks/useNetwork.ts";
import { services } from "../../../services/services.ts";
import ModalSucces from "../../templates/ModalSucces/ModalSucces.tsx";
import { useState } from "react";
import ModalError from "../../templates/ModalError/ModalError.tsx";
import './sendData.style.css'


const SendData = (): React.JSX.Element => {
  const [change, setChange] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const networkInfo = useNetwork({});

  const [ModalErr, setModalError] = useState(false)
  const [ModalSuccess, setModalSuccess] = useState(false)


  const images = [
    "src/assets/icons/wifi-icon.svg",
    "src/assets/icons/send-data-1.svg",
    "src/assets/icons/send-data-2.svg",
    "src/assets/icons/send-data-3.svg",
  ];

  const send = () => {
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
      console.log(combinedData);
      const postSuccess = await services.postDataList(combinedData);


      if (postSuccess) {
        setModalSuccess(true)
        setTimeout(()=>{
          setModalSuccess(false)
        },3000)
      } else {
        setModalError(true)
        setTimeout(()=>{
          setModalError(false)
        },3000)
      }
    });
  };

  return (
    <>
      <Header title="Send Data" />
      <div className="container py-4 px-3 mx-auto b-1 text-center mt-3">
        <div
          className="d-flex flex-column align-items-center justify-content-center container-sendData"
        >
          <img src="src/assets/images/send-data.svg" alt="send-data" />

          <p className="w-80">
            Comparte tu calidad de red junto a tu ubicación.
          </p>

          <button
            type="button"
            className="btn btn-primary button__send-data"
            onClick={sendData}
          >
            Send Data
          </button>
        </div>
        <ModalSucces display={ModalSuccess}/>
        <ModalError display={ModalErr} />

      </div>
    </>
  );
};

export default SendData;