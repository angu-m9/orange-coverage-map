import { FieldValues, useForm } from "react-hook-form";
import Header from "../../templates/Header/Header";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { services } from "../../../services/services";
import Modal from "../../templates/Modal/Modal";
import "./register.style.css";
import { CompaniesInterface } from "../../../services/service.module";
import { createCookie } from "./register.module";


const Register = () => {
  const [change, setChange] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FieldValues>({});
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch
  } = useForm();

  const navigate = useNavigate();





  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    console.log(isSafari);
    console.log(isiOS);

    console.log(navigator.userAgent)


    // if (isiOS && isSafari) {
    //   navigate('/blocking');
    // }
    
  }, [navigate]);

  const { response } = useLoaderData() as { response: CompaniesInterface[] };

  // Observar los cambios en los campos del formulario
  const formValues = watch();

  // Efecto para almacenar los valores del formulario en localStorage cada vez que cambien
  useEffect(() => {
    for (const [key, value] of Object.entries(formValues)) {
      localStorage.setItem(key, value);
    }
  }, [formValues]);

  // Efecto para rellenar el formulario con valores de localStorage cuando el componente se monta
  useEffect(() => {
    const formFields = ["user_name", "user_lastname", "company_id", "postal_code", "user_check"];
    formFields.forEach(field => {
      const savedValue = localStorage.getItem(field);
      if (savedValue !== null) {
        setValue(field, savedValue);
      }
    });
  }, [setValue]);

  const handleClose = () => {
    setChange(false);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  useEffect(()=>{
    const galleta = document.cookie
    console.log(galleta)

    if (galleta) {
      navigate('/send-data')
    }
  },[navigate])


  const postRegister = async (data: FieldValues) => {
    
    try {
      const response: FieldValues | undefined = await services.postRegisterUser(
        data
      );



      const userUuid = response?.user_id; // Asumiendo que el servidor devuelve el UUID como user_id
      console.log("UUID received from server:", userUuid);

      console.log("UUID received from server:", userUuid);
      if (userUuid) {
        createCookie('userId', userUuid, 365); 
        navigate('/send-data'); 
      } else {
        console.error("No UUID present in the response");
      }

      // Almacenar el UUID en el almacenamiento local
      // localStorage.setItem('userUuid', userUuid);

    } catch (error) {
      // Aquí manejamos el error de registro
      let message =
        "There was an unexpected error during registration. Please try again later.";

      if (error instanceof Error) {
        if (error.response?.status === 409) {
          message =
            "An account with the provided details already exists. Please log in or use different details.";
        } else if (error.message) {
          message += ` Error: ${error.message}`;
        }
      }
      setErrorMessage(message);
      setShowErrorModal(true);
    }
  };

  // Efecto para cargar datos del formulario al montar el componente
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  // Efecto para guardar datos del formulario en localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <Header title="Registro" />
      <div className="container py-4 px-3 d-flex flex-column mt-4 container-form">
        <form className="row g-3" onSubmit={handleSubmit(postRegister)}>
          <div className="col-md-6">
            <label htmlFor="input_name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="input_name"
              data-testid="input_name"
              {...register("user_name", {
                required: true,
                pattern:
                  /^([A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?$/,
              })}
            />
            {errors.user_name?.type === "required" && (
              <p className="text-danger fw-bold">nombre requerido</p>
            )}
            {errors.user_name?.type === "pattern" && (
              <p className="text-danger fw-bold">nombre invalido</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="input_last-name" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="input_last-name"
              data-testid="input_last-name"
              {...register("user_lastname", {
                required: true,
                pattern:
                  /^([A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?$/,
              })}
            />
            {errors.user_lastname?.type === "required" && (
              <p className="text-danger fw-bold">apellidos requerido</p>
            )}
            {errors.user_lastname?.type === "pattern" && (
              <p className="text-danger fw-bold">apellidos invalido</p>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="company_select" className="form-label">
              Compañia
            </label>
            <select
              id="company_select"
              className="form-select"
              {...register("company_id", { required: true })}
            >
              <option value="" disabled>
                elige una compañia
              </option>
              {response.map((company) => (
                <option key={company.company_id} value={company.company_id}>
                  {company.company_name}
                </option>
              ))}
            </select>

            {errors.company_id?.type === "required" && (
              <p className="text-danger fw-bold">compañia requerida</p>
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="input_postal-code" className="form-label">
              Codigo Postal
            </label>
            <input
              type="text"
              className="form-control"
              data-testid="input_postal-code"
              id="input_postal-code"
              {...register("postal_code", {
                required: true,
                pattern: /^\d{5}$/,
              })}
            />
            {errors.postal_code?.type === "required" && (
              <p className="text-danger fw-bold">codigo postal requerido</p>
            )}
            {errors.postal_code?.type === "pattern" && (
              <p className="text-danger fw-bold">codigo postal invalido</p>
            )}
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="input_check"
                data-testid="input_check"
                {...register("user_check", {
                  required: true,
                })}
              />
              <label className="form-check-label" htmlFor="input_check">
                Estoy de acuerdo con la{" "}
                <Link
                  to={"/terms-conditions"}
                >
                  política de privacidad
                </Link>
              </label>
              {errors.user_check?.type === "required" && (
                <p className="text-danger fw-bold">
                  debe aceptar los terminos y condiciones
                </p>
              )}
            </div>
          </div>

          <div className="button-register d-flex justify-content-center w-100">
            <button
              type="submit"
              className="btn btn-primary mt-2 button-submit"
            >
              Me Registro
            </button>
          </div>
        </form>
      </div>

      <Modal
        to={"/send-data"}
        button={"Continuar"}
        display={change}
        onClose={handleClose}
        modalTitle={"¡Registro con éxito!"}
      />

      {/* Error Modal */}
      <Modal
        button={"Close"}
        display={showErrorModal}
        onClose={handleCloseErrorModal}
        modalTitle={errorMessage}
        to=""
      />
    </>
  );
};

export default Register;
