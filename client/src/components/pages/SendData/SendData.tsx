import { useEffect, useState } from "react";
import Header from "../../templates/Header/Header";
import { useNetwork } from "../../../hooks/useNetwork";
import { services } from "../../../services/services";
import ModalSucces from "../../templates/ModalSucces/ModalSucces";
import ModalError from "../../templates/ModalError/ModalError";
import "./sendData.style.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../templates/Modal/Modal";


const SendData = (): React.JSX.Element => {
  const [ModalErr, setModalError] = useState(false);
  const [ModalSuccess, setModalSuccess] = useState(false);
  const [Modall, setModall] = useState(false)
  const networkInfo = useNetwork(null);
  const userUuid = localStorage.getItem("userUuid"); // Recuperamos el UUID del localStorage

  const navigate = useNavigate();


  const closeModal =()=>{
    setModall(false)
  }

  useEffect(()=>{
    if (typeof window.InstallTrigger !== "undefined") {
      navigate("/blocking");
    } else if (typeof window.safari !== "undefined") {
      navigate("/blocking");
    }


      const findCookie = document.cookie;
      console.log(findCookie);
  
      if (!findCookie) {
        navigate("/login");
      }

  },[navigate])


  

  const sendLocation = (): void => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const geoLocationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          const combinedData = {
            ...geoLocationData,
            ...networkInfo,
            network: networkInfo.effectiveType,
            userUuid, // Enviamos el UUID junto con los datos de la red
          };

          console.log(combinedData);

          const postSuccess = await services.postDataList(combinedData);

          console.log(postSuccess)

          if (postSuccess) {

            setModalSuccess(true);

            setTimeout(()=>{
              setModall(true)
            },4000)

            setTimeout(() => {
              setModalSuccess(false);
            }, 3000);

          } 
        } catch (error) {
          console.error("Error al enviar los datos de red:", error);
          if (error) {
            setModalError(true);
              setTimeout(() => {
                setModalError(false);
              }, 3000);
          }
        }
      },
      (error) => {

        navigator.geolocation.watchPosition(
          () => {
            console.log("compartiendo ubicacion");
          },
          () => {
            navigate("/permission");
          }
        );

        console.error("Error al obtener la geolocalización:", error);
      }
    );
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
        <Modal  display={Modall} buttonText="Aceptar"
       modalTitle="Obtuviste 1 crédito" onClose={closeModal}/>
      </div>
    </>
  );
};

export default SendData;
