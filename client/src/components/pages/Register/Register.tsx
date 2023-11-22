import { FieldValues, useForm } from "react-hook-form";
import Header from "../../templates/Header/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../../services/services";
import { company } from "./register.module";
import Modal from "../../templates/Modal/Modal";
import "./register.style.css";

const Register = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [change, setChange] = useState<boolean>(false);

  const handleClose = () => {
    setChange(false);
  };

  const postRegister = async (data: FieldValues): Promise<void> => {
    try {
      const response = await services.postRegisterUser(data);

      // Aquí, verifica si response es null en lugar de response.ok
      if (response) {
        const userId = response.id;
        console.log("ID received from server:", userId);
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        document.cookie = `userId=${userId}; path=/; expires=${expires.toUTCString()}; Samesite=Lax`;
        console.log("Cookie created:", document.cookie);
        setChange(true);
      } else {
        console.error("Registration error: no response from server");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <Header title="Registro" />
      <div className="container py-4 px-3 d-flex flex-column mt-4 container-form">
        
        <form className="row g-3" onSubmit={handleSubmit(postRegister)}>
          <div className="col-md-6">
            <label htmlFor="input_name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="input_name"
              data-testid="input_name"
              {...register("user_name", {
                required: true,
                pattern:
                  /^([A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?$/,
              })}
            />
            {errors.user_name?.type === "required" && (
              <p className="text-danger fw-bold">name required</p>
            )}
            {errors.user_name?.type === "pattern" && (
              <p className="text-danger fw-bold">name invalide</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="input_last-name" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="input_last-name"
              data-testid="input_last-name"
              {...register("user_lastname", {
                required: true,
                pattern:
                  /^([A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?$/,
              })}
            />
            {errors.user_lastname?.type === "required" && (
              <p className="text-danger fw-bold">last name required</p>
            )}
            {errors.user_lastname?.type === "pattern" && (
              <p className="text-danger fw-bold">last name invalid</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="input_company" className="form-label">
              Compañia
            </label>
            <select
              id="input_company"
              className="form-select"
              data-testid="input_company"
              {...register("cellular_carrier", { required: true })}
              defaultValue=""
            >
              <option value="" disabled></option>
              {company.map((a, index) => (
                <option key={index} value={a}>
                  {a}
                </option>
              ))}
            </select>
            {errors.cellular_carrier?.type === "required" && (
              <p className="text-danger fw-bold">company required</p>
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="input_postal-code" className="form-label">
              Codigo Postal
            </label>
            <input
              type="text"
              className="form-control"
              data-testid="input_postal-code"
              id="input_postal-code"
              {...register("postal_code", {
                required: true,
                pattern: /^\d{5}$/,
              })}
            />
            {errors.postal_code?.type === "required" && (
              <p className="text-danger fw-bold">postal code required</p>
            )}
            {errors.postal_code?.type === "pattern" && (
              <p className="text-danger fw-bold">postal code invalid</p>
            )}
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="input_check"
                data-testid="input_check"
                {...register("user_check", {
                  required: true,
                })}
              />
              <label className="form-check-label" htmlFor="input_check">
                Estoy de acuerdo con la{" "}
                <Link to={"/terms-conditions"}>política de privacidad</Link>
              </label>
              {errors.user_check?.type === "required" && (
                <p className="text-danger fw-bold">accept required</p>
              )}
            </div>
          </div>


          <div className="button-register d-flex justify-content-center w-100">
            <button
              type="submit"
              className="btn btn-primary mt-2 button-submit"
            >
              Me Registro
            </button>
          </div>
        </form>
      </div>




      <Modal
        to={"/send-data"}
        button={"Continuar"}
        display={change}
        onClose={handleClose}
        modalTitle={"¡Registro con éxito!"}
      />
    </>
  );
};

export default Register;
