import Header from "../../templates/Header/Header";
import React from "react";
import './login.style.css'
import ButtonOrange from "../../atoms/ButtonOrange";

const Login = (): React.JSX.Element => {
  return (
    <>
      <Header title="Login User" />

      <div className="container py-4 px-3 mx-auto b-1 text-center div" >


          <div className="d-flex align-items-center justify-content-center h-100 flex-column">
            <img
              src="src/assets/images/login.svg"
              alt="login-image"
              className="m-3"
            />
            <p>
              Ayúdanos a mejorar la calidad de red. Compartiendo tu información
              podremos detectar en qué zonas debemos invertir y mejorar nuestra
              señal de red.
            </p>
          </div>
          <ButtonOrange textButton="Continuar" direction="/register" />
        </div>

    </>
  );
};

export default Login;
