import { useForm } from "react-hook-form";
import StyledLogin from "./StyleLogin";
import { services } from "../../../services";
import { useNavigate } from "react-router-dom";

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
    <StyledLogin>
      <h1>Login User</h1>

      <form action="" onSubmit={handleSubmit(postData)}>
        <label htmlFor="">
          <input type="email" {...register("Email")} />
        </label>

        <label htmlFor="">
          <input type="password" {...register("Contraseña")} />
        </label>

        <input type="submit" className="button" />
      </form>
    </StyledLogin>
  );
};

export default Login;
