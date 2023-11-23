import { useState } from "react";
import Header from "../../templates/Header/Header";
import { useNetwork } from "../../../hooks/useNetwork";
import { services } from "../../../services/services";
import ModalSucces from "../../templates/ModalSucces/ModalSucces";
import ModalError from "../../templates/ModalError/ModalError";

const SendData = (): React.JSX.Element => {
  const [ModalErr, setModalError] = useState(false);
  const [ModalSuccess, setModalSuccess] = useState(false);
  const networkInfo = useNetwork();
  const userUuid = localStorage.getItem('userUuid');

  const sendLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const geoLocationData = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      const combinedData = {
        ...geoLocationData,
        ...networkInfo,
        network: networkInfo.effectiveType,
        userUuid
      };

      try {
        const postSuccess = await services.postDataList(combinedData);

        if (postSuccess) {
          setModalSuccess(true);
          setTimeout(() => {
            setModalSuccess(false);
          }, 3000);
        } else {
          setModalError(true);
          setTimeout(() => {
            setModalError(false);
          }, 3000);
        }
      } catch (error) {
        console.error('Error al enviar los datos de red:', error);
        setModalError(true);
        setTimeout(() => {
          setModalError(false);
        }, 3000);
      }
    }, (error) => {
      console.error('Error al obtener la geolocalización:', error);
      setModalError(true);
      setTimeout(() => {
        setModalError(false);
      }, 3000);
    });
  };

  return (
    <>
      <Header title="Enviar Datos" />
      <div className="container py-4 px-3 mx-auto b-1 text-center mt-3">
        <div className="d-flex flex-column align-items-center justify-content-center container-sendData">
          <img src="src/assets/images/send-data.svg" alt="send-data" />
          <p className="w-80">
            Comparte tu calidad de red junto a tu ubicación.
          </p>
          <button
            type="button"
            className="btn btn-primary button__send-data"
            onClick={sendLocation}
          >
            Enviar
          </button>
        </div>
        <ModalSucces display={ModalSuccess}/>
        <ModalError display={ModalErr}/>
      </div>
    </>
  );
};

export default SendData;
