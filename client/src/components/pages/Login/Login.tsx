import { Link } from "react-router-dom";
import Header from "../../templates/Header/Header";
import React from "react";

const Login = (): React.JSX.Element => {
  return (
    <>
      <Header title="Login User" />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <img
            src="src/assets/icons/register-icon.svg"
            alt="register-icon"
            className="m-3"
            style={{ width: "70%", height: "80%" }}
          />
        </div>
        <Link type="button" className="btn btn-primary" to={"/register"}>
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;