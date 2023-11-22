import { useForm } from "react-hook-form";
import { services } from "../../../Services";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import React from "react";
import { services } from "../../../services/services";

const LoginAdmin = (): React.JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

    if (find) {
     navigate('/map-coverage') 
    }else{
      console.log('incorrect')
    }
  }

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
              User
            </label>
            <input
              type="text"
              className="form-control"
              id="input__name"
              placeholder="User"
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
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="input__password"
              placeholder="Password"
              {...register("admin_password", {
                required: true,
              })}
            />
            {errors.admin_password?.type === "required" && (
              <p className="text-danger fw-bold">password required</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default LoginAdmin;
