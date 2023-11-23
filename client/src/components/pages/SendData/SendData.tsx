import Header from "../../templates/Header/Header.tsx";
import { useNetwork } from "../../../hooks/useNetwork.ts";
import { services } from "../../../services/services.ts";
import ModalSucces from "../../templates/ModalSucces/ModalSucces.tsx";
import { useEffect, useState } from "react";
import ModalError from "../../templates/ModalError/ModalError.tsx";
import './sendData.style.css'
import { useNavigate } from "react-router-dom";


const SendData = (): React.JSX.Element => {
  const networkInfo = useNetwork({});
  const [ModalErr, setModalError] = useState(false)
  const [ModalSuccess, setModalSuccess] = useState(false)
  


  const navigate = useNavigate()

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      () => {
        console.log('compartiendo ubicacion');
      },
      () => {
        navigate('/permission');
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [navigate]);

  


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
      <Header title="Enviar Datos" />
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
            Enviar
          </button>
        </div>

        <ModalSucces display={ModalSuccess}/>
        <ModalError display={ModalErr} />

      </div>
    </>
  );
};

export default SendData;