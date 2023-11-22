import { useForm } from "react-hook-form";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import { useNavigate } from "react-router-dom"; 

const LoginAdmin = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  interface FormData {
    admin_name: string;
    admin_password: string;
  }

  const post = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:5000/admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Aquí puedes ver la respuesta del servidor

        // Aquí asumiré que el servidor responde con un objeto que incluye una propiedad de 'success'
        if (result.success) {
          navigate('/map-coverage'); // Si es exitoso, navega al mapa
        } else {
          console.log('Incorrect username or password');
        }
      } else {
        // Manejo de errores si la respuesta no es ok
        console.log('Error en el post:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }

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
              placeholder="User" {...register('admin_name', {
                required: 'Name is required'
              })}
            />
            {errors.admin_name && (
              <p className="text-danger fw-bold">{errors.admin_name.message}</p>
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
