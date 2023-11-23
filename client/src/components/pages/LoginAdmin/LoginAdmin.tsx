import { FieldValues, useForm } from "react-hook-form";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import { useNavigate } from "react-router-dom";
import { services } from "../../../services/services";

const LoginAdmin = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const post = async (data: FieldValues) => {
    try {

      console.log(data)
      const response = await services.postLoginAdmin(data);

      console.log(response)

      // error en el ok por falta de el backend
      if (response) {
        console.log('token recibido')
 
        navigate('/map-coverage'); // Si es exitoso, navega al mapa
      } else {
        console.log('error')
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <>
      <HeaderLoginAdmin />
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
              placeholder="User" {...register('admin_username', {
                required: 'Name is required'
              })}
            />
            {errors.admin_username && (
              <p className="text-danger fw-bold">{errors.admin_username.message}</p>
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
              placeholder="Password" {...register('admin_password', {
                required: 'Password is required'
              })}
            />
            {errors.admin_password && (
              <p className="text-danger fw-bold">{errors.admin_password.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginAdmin;
