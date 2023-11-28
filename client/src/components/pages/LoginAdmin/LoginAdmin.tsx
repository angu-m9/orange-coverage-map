import { FieldValues, useForm } from "react-hook-form";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import { useNavigate } from "react-router-dom";
import { services } from "../../../services/services";
import "./logindAdmin.style.css";
import React, { useState } from "react";
import Modal from "../../templates/Modal/Modal";

const LoginAdmin = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [modal, setModal]= useState(false)

  const navigate = useNavigate();

  const closeModal =()=>{
    setModal(false)
  }

  const postAdmin = async (data: FieldValues): Promise<void> => {
    try {
      const response: FieldValues| boolean | undefined = await services.postLoginAdmin(data);

      console.log(response);
      if (response === true) {
        setModal(true)
        console.log("error en el login");
      } else {
        console.log("token recibido");
        navigate("/map-coverage");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Error al enviar los datos: " + error.message);
      }
    }
  };

  return (
    <>
      <HeaderLoginAdmin />
      <div className="black">
        <div className="container py-4 px-3 mx-auto">
          <h4>Identifícate</h4>
          <form onSubmit={handleSubmit(postAdmin)}>
            <div className="mb-3">
              <label htmlFor="input__name" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="input__name"
                placeholder="Usuario"
                {...register("admin_username", {
                  required: true,
                  pattern: /^[a-zA-Z]{3,16}$/
                })}
              />
              {errors.admin_username?.type === "required" && (
                <p className="text-danger fw-bold">Nombre es requerido</p>
              )}
              {errors.admin_username?.type === "pattern" && (
                <p className="text-danger fw-bold">Nombre inválido</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="input__password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="input__password"
                placeholder="Contraseña"
                {...register("admin_password", {
                  required: true,
                })}
              />
              {errors.admin_password?.type === "required" && (
                <p className="text-danger fw-bold">Contraseña es requerida</p>
              )}
            </div>
            <div className="w-100 text-center">
              <button type="submit" className="btn btn-primary button__login">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal display={modal} buttonText="Aceptar" modalTitle="Usuario no registrado" onClose={closeModal}/>
    </>
  );
};

export default LoginAdmin;
