import { useEffect, useState } from "react";
import Header from "../../templates/Header/Header";
import { useNetwork } from "../../../hooks/useNetwork";
import { useNavigate } from "react-router-dom";
import { services } from "../../../services/services";
import ModalSucces from "../../templates/ModalSucces/ModalSucces";
import ModalError from "../../templates/ModalError/ModalError";

const SendData = (): React.JSX.Element => {
  const [ModalErr, setModalError] = useState(false)
  const [ModalSuccess, setModalSuccess] = useState(false)
  const [change, setChange] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [index, setIndex] = useState(0);
  const networkInfo = useNetwork();
  const userUuid = localStorage.getItem('userUuid'); // Recuperamos el UUID del localStorage
  


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



  const handleClose = () => {
    setChange(false);
    setErrorMessage('');
  };


  const sendLocation =async()=>{
    navigator.geolocation.getCurrentPosition(async (position) => {

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

      try {
        const postSuccess = await services.postDataList(combinedData);

        setChange(true);

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
      } catch (error) {
        console.error('Error al enviar los datos de red:', error);
        setErrorMessage('Error al enviar los datos. Por favor, intente de nuevo.');
      }
    }, (error) => {
      setErrorMessage('Error al obtener la geolocalización. Por favor, intente de nuevo.');
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
            onClick={sendLocation}
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
