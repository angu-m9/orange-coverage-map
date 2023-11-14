import { useForm } from "react-hook-form";
import HeaderLoginAdmin from "../../templates/HeaderLoginAdmin/HeaderLoginAdmin";
import { useLoaderData, useNavigate } from "react-router";
import { ListAdmins } from "../../../interfaces/services.interface";

const LoginAdmin = () => {

  const  {register,formState: {errors} ,handleSubmit} = useForm();

  const navigate = useNavigate();

  const { dataAdmins } = useLoaderData() as { dataAdmins: ListAdmins[] };

  interface FormData {
    admin_name: string;
    admin_password: string;
  }

  console.log(dataAdmins);

  const post = (data:FormData)=>{
    
    const find = dataAdmins.some((a:FormData) => a.admin_name === data.admin_name && a.admin_password === data.admin_password);

    if (find) {
     navigate('/map-coverage') 
    }else{
      console.log('incorrect')
    }
  }

  return (
    <>
    <HeaderLoginAdmin/>
      <div className="container py-4 px-3 mx-auto">
        <h4>Identify</h4>

        <form action="" onSubmit={handleSubmit(post)}>

        <div className="mb-3">
          <label htmlFor="input__name" className="form-label">
            User
          </label>
          <input
            type="text"
            className="form-control"
            id="input__name"
            placeholder="User" {...register('admin_name',{
              required: true
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
            placeholder="Password" {...register('admin_password',{
              required: true
            })}
          />
          {errors.admin_password?.type === "required" && (
              <p className="text-danger fw-bold">password required</p>
            )}
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginAdmin;
