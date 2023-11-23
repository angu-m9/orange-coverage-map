import { useForm } from "react-hook-form";
import { services } from "../../../Services";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import { useNavigate } from "react-router-dom"; 
import { services } from "../../../services/services";

const LoginAdmin = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();


  const post = async (data: FieldValues) => {
    try {

      
      const response = services.postLoginAdmin(data)

      //error en el ok por falta de el backend
      if (response.ok) {
        const result = await response.json();
        console.log(result); // Aquí puedes ver la respuesta del servidor

        localStorage.setItem('token', result.token);
        navigate('/map-coverage'); // Si es exitoso, navega al mapa
      } else {
        // Manejo de errores si la respuesta no es ok
        console.log('Error en el post:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <>
      <HeaderLoginAdmin/>
      <div className="container py-4 px-3 mx-auto">
        <h4>Identify</h4>
        <form onSubmit={handleSubmit(post)}>
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
    </>
  );
};

export default LoginAdmin;
