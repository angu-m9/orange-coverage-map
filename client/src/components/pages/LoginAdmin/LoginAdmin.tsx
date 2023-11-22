import { FieldValues, useForm } from "react-hook-form";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import React from "react";
import { services } from "../../../services/services";
import ButtonOrange from "../../atoms/ButtonOrange";
import './logindAdmin.style.css'

const LoginAdmin = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const postLogin = (data: FieldValues) => {
    services.postLoginAdmin(data);
  };

  return (
    <>
      <HeaderLoginAdmin />
      <div className="black">
      <div className="container py-4 px-3 mx-auto ">
       
        <h4>Identificate</h4>

        <form className="" action="" onSubmit={handleSubmit(postLogin)}>
        <div>
          <div className="mb-3">
            <label htmlFor="input__name" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="input__name"
              placeholder="Usuario"
              {...register("admin_name", {
                required: true,
              })}
            />
            {errors.admin_name?.type === "required" && (
              <p className="text-danger fw-bold">name required</p>
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
              <p className="text-danger fw-bold">password required</p>
            )}
          </div>
          </div>
          <div className="text-center w-100">
          <ButtonOrange textButton="Entrar" direction="/map-coverage"/>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default LoginAdmin;
