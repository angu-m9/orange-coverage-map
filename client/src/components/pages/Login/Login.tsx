import { useForm } from "react-hook-form";
import { services } from "../../../services";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  Email: string;
  Contraseña: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const postData = (data: FormData) => {
    console.log(data);

    const response: any = services.postData("http", data);

    if (response.token) {
      localStorage.setItem("token", response.token);
      console.log("Successful Authentication");
      navigate("/Home");
      console.log(null);
    } else {
      console.log("invelid credencial");
    }
  };


  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '70vh' }}>

      <div className="d-flex align-items-center justify-content-center h-100">
      <img src="src/assets/icons/register-icon.svg" alt="register-icon" className="m-3" style={{ width: '70%', height: '80%' }}/>
      </div>

      <Link type="button" className="btn btn-primary" to={'/register'} >Register</Link>

      </div>
    </>
  );
};

export default Login;
