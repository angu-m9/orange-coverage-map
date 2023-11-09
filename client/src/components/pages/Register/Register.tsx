import { useForm } from "react-hook-form";
import Header from "../../templates/Header/Header";
import { services } from "../../../Services";
import Modal from "../../templates/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const company = ["jazztel", "Orange", "Simio"];

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [change, setChange] = useState(false);

  const handleClose = () => {
    setChange(false);
  };

  const post = async (data: object) => {
    console.log(data);
      const create = await services.postData(
        "http://localhost:3000/admins",
        data)

      if (create) {
        setChange(true);
      }
  };

  return (
    <>
      <Header title="Register" />
      <div className="container py-4 px-3 mx-auto">
        <form className="row g-3 " onSubmit={handleSubmit(post)}>
          <div className="col-md-6">
            <label htmlFor="input_name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="input_name"
              {...register("user_name", {
                required: true,
              })}
            />
            {errors.user_name?.type === "required" && (
              <p className="text-danger fw-bold">name required</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="input_last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="input_last-name"
              {...register("user_last_name", {
                required: true,
              })}
            />
            {errors.user_last_name?.type === "required" && (
              <p className="text-danger fw-bold">last name required</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="input_dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              className="form-control"
              id="input_dni"
              {...register("user_dni", {
                required: true,
              })}
            />
            {errors.user_dni?.type === "required" && (
              <p className="text-danger fw-bold">DNI required</p>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="input_company" className="form-label">
              Company
            </label>
            <select
              id="input_company"
              className="form-select"
              {...register("user_company", { required: true })}
              defaultValue=""
            >
              <option value="" disabled></option>
              {company.map((a, index) => (
                <option key={index} value={a}>
                  {a}
                </option>
              ))}
            </select>
            {errors.user_company?.type === "required" && (
              <p className="text-danger fw-bold">company required</p>
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="input_postal-code" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              id="input_postal-code"
              {...register("user_postal_code", {
                required: true,
              })}
            />
            {errors.user_postal_code?.type === "required" && (
              <p className="text-danger fw-bold">postal code required</p>
            )}
          </div>
          <Link to={'/terms-conditions'} target="_blank">
            Please read the Terms and Conditions and privacy policy
          </Link>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="input_check"
                {...register("user_check", {
                  required: true,
                })}
              />
              <label className="form-check-label" htmlFor="input_check">
                I accept the terms and conditions
              </label>
              {errors.user_check?.type === "required" && (
                <p className="text-danger fw-bold">accept required</p>
              )}
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary mt-2">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Modal
        to={"/send-data"}
        button={"Accept"}
        display={change}
        onClose={handleClose}
        modalTitle={"Data Sent Correctly"}
        modalText={''}
      />
    </>
  );
};

export default Register;
