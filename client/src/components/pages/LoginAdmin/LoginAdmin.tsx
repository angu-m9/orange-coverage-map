import { FieldValues, useForm } from "react-hook-form";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import React from "react";
import { services } from "../../../services/services";

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
      <div className="container py-4 px-3 mx-auto">
        <h4>Identify</h4>

        <form action="" onSubmit={handleSubmit(postLogin)}>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginAdmin;
